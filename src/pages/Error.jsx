import React from 'react'

export default function Error() {
  return (
   <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="max-w-3xl mx-auto p-8 sm:p-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-8">Page not found.</h1>
        
        <div className="space-y-4 text-gray-300 text-base sm:text-lg leading-relaxed">
          <p>
            Either this page doesn't exist or is under developement.
          </p>
        </div>
      </div>
    </div>
  )
}
