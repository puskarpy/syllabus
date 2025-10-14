import { Outlet } from 'react-router-dom'
import { Header, Footer } from './components'

export default function Layout() {
  return (
    <>
    <Header/>
    <marquee className='w-full text-sm sm:text-md bg-emerald-600 p-2 text-white'>Past Questions havent been added yet and some of the subjects don't have syllabus.</marquee>
    <main className='mt-14'>
        <Outlet/>
    </main>
      <div className="w-full mx-auto max-w-4xl h-[1px] bg-gradient-to-r from-transparent mt-4 mb-4 via-gray-700 to-transparent"></div>
    <Footer/>
    </>
  )
}
