import React from 'react'
import { useParams } from 'react-router-dom'
import { data } from '@/data/data.js'
import { FileSymlink, Chrome, Download, Smartphone } from 'lucide-react'

export default function DisplaySyllabus() {

    const {id, subject } = useParams()
    const semester = data.find((d) => d.semester == Number(id))
    const syllabus = semester?.subjects?.find((s) => s.linkName === subject)

  return (
    <div className='px-4 sm:px-10 py-10'>
            <div className='flex items-center sm:gap-4 gap-2 mb-12'>
                <FileSymlink className='w-6 h-6 sm:w-8 sm:h-8'/>
                <h2 className='font-bold text-xl sm:text-4xl tracking-tight'>{syllabus.name}</h2>
            </div>
        <div className=''>
            <iframe src={`https://mozilla.github.io/pdf.js/web/viewer.html?file=${syllabus.syllabus}`} className='w-full h-[800px] border-2 border-neutral-100 outline-0 rounded-md' />
        </div>
        <div className="w-full mt-12 h-[1px] bg-gradient-to-r from-neutral-800 via-neutral-100 to bg-neutral-800"></div>
        <div id='download' className='mt-16 border-t border-neutral-800 pt-12'>
          <div className='mb-8'>
            <div className='flex items-center gap-3 mb-3'>
              <Download className='w-6 h-6 text-emerald-400' />
              <h3 className='text-2xl font-bold'>Download Instructions</h3>
            </div>
            <p className='text-neutral-400'>Having trouble downloading? Follow these browser-specific guides:</p>
          </div>

          <div className='space-y-8'>
            <div className='group p-6 rounded-xl bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 border border-neutral-700 hover:border-emerald-500/50 transition-all duration-300'>
              <div className='flex items-center gap-4 mb-4'>
                <div className='p-2 rounded-lg bg-neutral-800 border border-neutral-700 group-hover:border-emerald-500/30 transition-colors'>
                  <Chrome className='w-6 h-6 text-emerald-400' />
                </div>
                <div className='flex-1'>
                  <h4 className='text-xl font-semibold mb-2 text-white group-hover:text-emerald-400 transition-colors'>
                    For Browsers
                  </h4>
                </div>
              </div>
              <div className='rounded-lg overflow-hidden border border-neutral-700'>
                <img 
                  src="/firefox.png" 
                  alt="How to download in browsers" 
                  className='w-full h-auto'
                />
              </div>
            </div>

            <div className='group p-6 rounded-xl bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 border border-neutral-700 hover:border-emerald-500/50 transition-all duration-300'>
              <div className='flex items-center gap-4 mb-4'>
                <div className='p-2 rounded-lg bg-neutral-800 border border-neutral-700 group-hover:border-emerald-500/30 transition-colors'>
                  <Smartphone className='w-6 h-6 text-emerald-400' />
                </div>
                <div className='flex-1'>
                  <h4 className='text-xl font-semibold mb-2 text-white group-hover:text-emerald-400 transition-colors'>
                    For Smartphones
                  </h4>
                </div>
              </div>
              <div className='flex flex-col sm:flex-row gap-6'>
                <div className='rounded-lg overflow-hidden border border-neutral-700'>
                    <img
                      src="/first.png"
                      alt="How to download in Phones"
                      className='w-full h-auto'
                    />
                </div>
                <div className='rounded-lg overflow-hidden border border-neutral-700'>
                    <img
                      src="/second.png"
                      alt="How to download in Phones"
                      className='w-full h-auto'
                    />
                </div>
              </div>
            </div>
          </div>
          </div>
    </div>
  )
}
