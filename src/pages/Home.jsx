import {Link} from 'react-router-dom'
import { Laptop } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="p-8">
        <div className="flex flex-col items-center gap-24">
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
              className="mt-6 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 px-8 py-4 rounded-md text-base font-semibold shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-300 transform hover:-translate-y-1"
            >
              Browse Syllabus
            </Link>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="fixed top-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -z-10"></div>
        <div className="fixed bottom-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl -z-10"></div>
      </div>
    </div>
  )
}