import React from 'react'
import { Book, Calendar, Award } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Semester() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className='flex flex-col gap-16 p-6 sm:p-10'>
        {/* Header Section */}
        <div className='mx-auto flex flex-col justify-center max-w-3xl text-center pt-8'>
          <div className="inline-block mx-auto mb-6 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full">
            <span className="text-emerald-400 text-sm font-medium">Choose Your Semester</span>
          </div>
          <h1 className='text-4xl sm:text-5xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent mb-4'>
            What Semester are you on?
          </h1>
          <p className='text-base sm:text-lg text-gray-400 mt-2'>
            Select your current semester to view the complete syllabus and course details.
          </p>
        </div>

        {/* Semester Cards Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto w-full'>
          {Array.from({length: 8}).map((_, index) => {
            const semesterNum = index + 1
            const year = Math.floor(index / 2) + 1
            const part = (index % 2) + 1
            
            return (
              <Link to={`/semester/${index + 1}`}
                key={semesterNum}
                className="group relative w-full rounded-lg bg-gradient-to-br from-gray-800/50 via-gray-900/50 to-black/50
                  border border-gray-800 hover:border-emerald-500/50
                  shadow-xl hover:shadow-emerald-500/20
                  backdrop-blur-sm
                  hover:scale-105 transition-all duration-300 cursor-pointer
                  overflow-hidden"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-teal-500/0 group-hover:from-emerald-500/10 group-hover:to-teal-500/10 transition-all duration-300"></div>
                
                {/* Content */}
                <div className="relative p-6 space-y-4">
                  {/* Icon and Number */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-emerald-500/10 group-hover:bg-emerald-500/20 transition-colors duration-300">
                        <Book className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <span className="text-3xl font-bold bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent group-hover:from-emerald-400 group-hover:to-teal-400 transition-all duration-300">
                        {semesterNum}
                      </span>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Award className="w-5 h-5 text-emerald-400" />
                    </div>
                  </div>

                  {/* Semester Title */}
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300">
                      Semester {semesterNum}
                    </h3>
                    <div className="flex items-center gap-2 mt-2">
                      <Calendar className="w-3.5 h-3.5 text-gray-500" />
                      <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        Year {year}, Part {part}
                      </p>
                    </div>
                  </div>

                </div>

                {/* Corner decoration */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-emerald-500/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            )
          })}
        </div>

        {/* Info Section */}
        <div className="max-w-4xl mx-auto w-full mt-8">
          <div className="p-6 rounded-2xl bg-gradient-to-r from-gray-800/30 to-gray-900/30 border border-gray-800 backdrop-blur-sm">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="p-3 rounded-xl bg-emerald-500/10">
                <Book className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">Complete Syllabus Available</h3>
                <p className="text-sm text-gray-400">
                  Access detailed course information, credit hours, and learning outcomes for each semester.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="fixed top-20 left-10 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl -z-10"></div>
      <div className="fixed bottom-20 right-10 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl -z-10"></div>
    </div>
  )
}