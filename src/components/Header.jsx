import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {

  return (
    <header className="flex justify-between items-center gap-12 px-6 py-4 ">
        <div className='font-bold text-3xl'>
            <Link to={'/'}>Syllabase</Link>
        </div>
        <div className='hidden sm:flex gap-4 text-sm tracking-wide'>
            <Link to={'/'}>Home</Link>
            <Link to={'/semester'} >Syllabus</Link>
            <Link to={'/error'}>Past Questions</Link>
            <Link to={'/about'}>About</Link>
        </div>
    </header>
  )
}
