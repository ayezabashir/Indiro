import React from 'react';

export default function PasswordForm() {
  return (
    <div className="flex relative items-center justify-center min-h-screen bg-[#0E1828]
      {/* Main Container Card */}] p-6">
      <div className="w-full max-w-xl bg-brand-navy p-10 md:p-16 shadow-2xl">
        
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-3">
            {/* Label with Red Asterisk */}
            <label className="block text-gray-400 font-sans text-lg">
              Password<span className="text-red-500 ml-1">*</span>
            </label>
            
            {/* Input Field */}
            <input
              type="password"
              className="w-full bg-[#0b1119]/50 border border-gray-700/50 px-4 py-4 text-white outline-none focus:border-brand-orange transition-colors"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-[#FE4C1C] text-white font-[Oswald] font-bold uppercase px-10 py-4 text-lg hover:bg-[#e6451a] transition-all active:scale-95 shadow-lg"
          >
            Submit
          </button>
        </form>
        
      </div>
    </div>
  );
}