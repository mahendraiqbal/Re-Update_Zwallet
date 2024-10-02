'use client'

import React from 'react';
import Swal from 'sweetalert2'

type TopUpButtonProps = {
  onSuccess?: (amount: number) => void;
}

export default function TopUpButton({ onSuccess }: TopUpButtonProps) {
  const handleTopUp = async () => {
    const { value: amount } = await Swal.fire({
      title: 'Topup',
      text: 'Enter the amount of money and click submit',
      input: 'text',
      inputPlaceholder: 'Enter amount',
      showCancelButton: true,
      confirmButtonText: 'Submit',
      confirmButtonColor: '#6379F4',
      cancelButtonColor: '#D4D4D4',
      inputValidator: (value) => {
        if (!value) {
          return 'Please enter an amount!'
        }
        if (isNaN(Number(value))) {
          return 'Please enter a valid number!'
        }
        return null
      }
    })

    if (amount) {
      // Handle successful top up
      Swal.fire({
        icon: 'success',
        title: 'Top Up Successful',
        text: `You have successfully topped up Rp${amount}`,
        confirmButtonColor: '#6379F4'
      })
      
      // Call onSuccess callback if provided
      if (onSuccess) {
        onSuccess(Number(amount))
      }
    }
  }

  return (
    <button
      onClick={handleTopUp}
      className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-400 text-white flex items-center"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="h-4 w-4 mr-2" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M12 4v16m8-8H4" 
        />
      </svg>
      Top Up
    </button>
  )
}