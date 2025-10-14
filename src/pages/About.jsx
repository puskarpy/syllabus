import React from 'react'

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="max-w-3xl mx-auto p-8 sm:p-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-8">About</h1>
        
        <div className="space-y-4 text-gray-300 text-base sm:text-lg leading-relaxed">
          <p>
            This website provides easy access to Computer Engineering syllabuses for all eight semesters. 
            It was created to help students quickly find course information, credit hours, and syllabus 
            details without having to search through multiple documents.
          </p>
          
          <p>
            All syllabus information is organized by semester and year, making it simple to navigate 
            and reference throughout your academic journey.
          </p>
          <p>
            I will be adding more contents in the future.
          </p>
        </div>
      </div>
    </div>
  )
}