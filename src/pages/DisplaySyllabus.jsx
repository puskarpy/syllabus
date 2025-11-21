import React from 'react'
import { useParams } from 'react-router-dom'
import { data } from '@/data/data.js'
import { FileSymlink, Chrome, Download, Smartphone } from 'lucide-react'
import Error from './Error.jsx'

export default function DisplaySyllabus() {

    const {id, subject } = useParams()
    const semester = data.find((d) => d.semester == Number(id))
    const syllabus = semester?.subjects?.find((s) => s.linkName === subject)

    if(!syllabus.syllabus){
      return <Error/>
    }else{
  return (
    <div className='px-4 sm:px-10 py-10'>
            <div className='flex items-center sm:gap-4 gap-2 mb-12'>
                <FileSymlink className='w-6 h-6 sm:w-8 sm:h-8'/>
                <h2 className='font-bold text-xl sm:text-4xl tracking-tight'>{syllabus.name}</h2>
            </div>
        <div className=''>
            <iframe src={syllabus.syllabus} className='w-full h-[800px] rounded-md' />
        </div>
        <div className="w-full mt-12 h-[1px] bg-gradient-to-r from-neutral-800 via-neutral-100 to bg-neutral-800"></div>
    </div>
  )
  }
}
