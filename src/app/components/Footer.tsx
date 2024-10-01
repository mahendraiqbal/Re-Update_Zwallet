import React from "react";

export default function Footer() {
  return (
    <footer className="bg-blue-500 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col tablet:flex-row justify-between items-start tablet:items-center">
          <div className="mb-4 tablet:mb-0">
            <h2 className="text-2xl font-bold mb-2">Zwallet</h2>
            <p className="text-sm opacity-75 max-w-md">
              Simplify financial needs and save much time in banking needs with
              one single app.
            </p>
          </div>
          <div className="text-sm opacity-75 mt-4 tablet:mt-0">
            <p>2020 Zwallet. All right reserved.</p>
          </div>
        </div>
        <div className="mt-4 text-sm opacity-75 text-center tablet:text-right">
          <p>+62 5637 8882 9901</p>
          <p>contact@zwallet.com</p>
        </div>
      </div>
    </footer>
  );
}
