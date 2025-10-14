import {Link} from 'react-router-dom'
import { Laptop } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="p-8">
        <div className="flex flex-col items-center gap-24">
          {/* Hero Section */}
          <div className="flex flex-col items-center max-w-3xl">
            <div className="inline-block mb-6 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full">
              <span className="text-emerald-400 text-sm font-medium">Engineering Syllabuses</span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              Welcome
            </h1>
            <p className="mb-8 text-gray-400 text-base sm:text-xl text-center max-w-2xl leading-relaxed">
              Explore comprehensive syllabuses for Computer Engineering across all eight semesters. Your complete academic roadmap in one place.
            </p>
            <Link 
              to={'/semester'} 
              className="mt-6 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 px-8 py-4 rounded-lg text-base font-semibold shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-300 transform hover:-translate-y-1"
            >
              Browse Syllabus
            </Link>
          </div>

          {/* Divider */}
          <div className="w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
        </div>

        {/* Departments Section */}
        <div className="mt-16 flex flex-col items-center gap-12">
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Departments
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl w-full">
            {/* Computer Engineering Card */}
            <Link 
              to={'/semester'} 
              className="relative rounded-2xl overflow-hidden group border border-gray-800 hover:border-emerald-500/50 transition-all duration-300 shadow-xl hover:shadow-emerald-500/20"
            >
              <div className='transform transition-transform duration-500 group-hover:scale-110'>
                <img src="/computer.jpg" alt="Computer Engineering" className="w-full h-64 object-cover" />
              </div>
              <div className='absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30 flex justify-center items-center'>
                <div className="text-center px-4">
                  <div className="mb-3 flex justify-center">
                    <Laptop className="w-12 h-12 text-emerald-400" />
                  </div>
                  <p className='text-2xl sm:text-3xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300'>
                    Computer Engineering
                  </p>
                  <p className="text-gray-400 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View complete syllabus
                  </p>
                </div>
              </div>
            </Link>

            {/* Civil Engineering Card */}
            <div className="relative rounded-2xl overflow-hidden group border border-gray-800 hover:border-gray-600 transition-all duration-300 shadow-xl cursor-not-allowed opacity-75">
              <div className='transform transition-transform duration-500 group-hover:scale-110'>
                <img src="/computer.jpg" alt="Civil Engineering" className="w-full h-64 object-cover" />
              </div>
              <div className='absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30 flex justify-center items-center'>
                <div className="text-center px-4">
                  <div className="mb-3 flex justify-center">
                    <Laptop className="w-12 h-12 text-gray-500" />
                  </div>
                  <p className='text-2xl sm:text-3xl font-bold text-white'>
                    Civil Engineering
                  </p>
                  <p className="text-gray-500 text-sm mt-2">
                    Coming soon
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="fixed top-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -z-10"></div>
        <div className="fixed bottom-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl -z-10"></div>
      </div>
    </div>
  )
}