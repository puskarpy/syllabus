import React from 'react'
import { Book, Award } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function SemCard({s, id, link}) {
  return (
    <div className="group relative w-full rounded-md bg-gradient-to-br from-gray-800/50 via-gray-900/50 to-black/50
                  border border-gray-800 hover:border-emerald-500/50
                  shadow-xl hover:shadow-emerald-500/20
                  backdrop-blur-sm
                  hover:scale-105 transition-all duration-300  overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-teal-500/0 group-hover:from-emerald-500/10 group-hover:to-teal-500/10 transition-all duration-300"></div>
                
                <div className="relative p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-emerald-500/10 group-hover:bg-emerald-500/20 transition-colors duration-300">
                        <Book className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <span className="text-xl sm:text-2xl font-bold bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent group-hover:from-emerald-400 group-hover:to-teal-400 transition-all duration-300">
                      {s.name}
                      </span>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Award className="w-5 h-5 text-emerald-400" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm sm:text-lg text-neutral-500 group-hover:text-emerald-400 transition-colors duration-300">
                      Semester {id}
                    </h3>
                  </div>
                    <div className='flex gap-4 text-sm justify-between'>
                      <Link className="flex-1 flex justify-center border-[1px] border-neutral-500 items-center p-3 rounded-md">Past Questions</Link>
                      <Link to={link} className="flex-1 flex justify-center items-center bg-emerald-500 p-3 rounded-md">Syllabus</Link>
                    </div>

                </div>

                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-emerald-500/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  )
}
