import React from 'react'
import { GraduationCap, BookOpen } from 'lucide-react'

export default function PastQuestions() {
  return (
     <div className=' flex flex-col gap-12 p-10 '>
        <div className='mx-auto flex flex-col'>
            <div className='text-4xl font-bold mx-auto flex items-center gap-4'><span><GraduationCap strokeWidth={1} size={40}/></span>What Semester are you on ?</div>
            <div className='mx-auto text-neutral-400 mt-4'>Select your current semester.</div>
        </div>
        <div className='grid grid-cols-4 gap-8'>
            {Array.from({length : 8}).map((_, index) => (
                <Card key={index + 1} className="w-full max-w-sm transform transition-transform duration-200 hover:translate-y-[-5px] ">
            <CardContent>
                <p className='font-semibold text-lg mb-1'> <span><BookOpen strokeWidth={1} size={35}/></span> Semester {index + 1}</p>
                <p className='text-sm text-muted-foreground'>
                   Year {Math.floor((index / 2) + 1)} Part {(index % 2) + 1}
                </p>
            </CardContent>
            </Card>
            ))
            }
            
        </div>
    </div>
  )
}
