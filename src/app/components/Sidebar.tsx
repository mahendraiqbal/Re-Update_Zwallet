import Link from 'next/link'
import Swal from 'sweetalert2'
import { 
  LayoutGrid, 
  ArrowUpRight, 
  PlusCircle, 
  User, 
  LogOut,
} from 'lucide-react'

type SidebarProps = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onTopUpSuccess?: (amount: number) => void;
}

export default function Sidebar({ activeTab, setActiveTab, onTopUpSuccess }: SidebarProps) {
  const handleTopUp = async () => {
    setActiveTab('topup')
    
    const { value: amount } = await Swal.fire({
      title: 'Topup',
      html: `
        <p style="color: #7A7886; font-size: 16px; margin-bottom: 24px;">
          Enter the amount of money, and click submit
        </p>
      `,
      input: 'text',
      inputPlaceholder: 'Enter the amount of money',
      showCancelButton: true,
      confirmButtonText: 'Submit',
      cancelButtonText: 'Cancel',
      confirmButtonColor: '#6379F4',
      cancelButtonColor: '#D3D3D3',
      customClass: {
        container: 'swal2-container',
        popup: 'swal2-popup',
        title: 'swal2-title',
        closeButton: 'swal2-close',
        icon: 'swal2-icon',
        image: 'swal2-image',
        htmlContainer: 'swal2-html-container',
        input: 'swal2-input',
        inputLabel: 'swal2-input-label',
        validationMessage: 'swal2-validation-message',
        actions: 'swal2-actions',
        confirmButton: 'swal2-confirm',
        cancelButton: 'swal2-cancel',
        footer: 'swal2-footer'
      },
      buttonsStyling: false,
      inputValidator: (value) => {
        if (!value) {
          return 'Please enter an amount!'
        }
        if (isNaN(Number(value))) {
          return 'Please enter a valid number!'
        }
        return null
      },
      backdrop: `
        rgba(99, 121, 244, 0.4)
      `,
      allowOutsideClick: false
    })

    if (amount) {
      await Swal.fire({
        icon: 'success',
        title: 'Top Up Success',
        text: `Top up for Rp${Number(amount).toLocaleString()} was successful`,
        confirmButtonColor: '#6379F4',
        customClass: {
          popup: 'swal2-popup',
          confirmButton: 'swal2-confirm'
        },
        buttonsStyling: false
      })
      
      if (onTopUpSuccess) {
        onTopUpSuccess(Number(amount))
      }
    }
  }

  return (
    <aside className="w-20 md:w-64 bg-white h-[calc(100vh-64px)] p-4">
      <nav className="space-y-4">
        <Link href="/dashboard/home" 
          className={`flex items-center space-x-2 p-2 rounded-lg ${
            activeTab === 'dashboard' ? 'text-blue-600 bg-blue-50' : 'text-gray-700'
          }`}
          onClick={() => setActiveTab('dashboard')}
        >
          <LayoutGrid />
          <span className="hidden md:inline">Dashboard</span>
        </Link>
        <Link href="/dashboard/transfer" 
          className={`flex items-center space-x-2 p-2 rounded-lg ${
            activeTab === 'transfer' ? 'text-blue-600 bg-blue-50' : 'text-gray-700'
          }`}
          onClick={() => setActiveTab('transfer')}
        >
          <ArrowUpRight />
          <span className="hidden md:inline">Transfer</span>
        </Link>
        <button
          className={`flex items-center space-x-2 p-2 rounded-lg w-full text-left ${
            activeTab === 'topup' ? 'text-blue-600 bg-blue-50' : 'text-gray-700'
          }`}
          onClick={handleTopUp}
        >
          <PlusCircle />
          <span className="hidden md:inline">Top Up</span>
        </button>
        <Link href="/dashboard/profile" 
          className={`flex items-center space-x-2 p-2 rounded-lg ${
            activeTab === 'profile' ? 'text-blue-600 bg-blue-50' : 'text-gray-700'
          }`}
          onClick={() => setActiveTab('profile')}
        >
          <User />
          <span className="hidden md:inline">Profile</span>
        </Link>
      </nav>
      <div className="absolute bottom-4 w-16 md:w-56">
        <Link href="/login" 
          className="flex items-center space-x-2 p-2 text-gray-700 hover:bg-gray-100 rounded-lg"
        >
          <LogOut />
          <span className="hidden md:inline">Logout</span>
        </Link>
      </div>
    </aside>
  )
}