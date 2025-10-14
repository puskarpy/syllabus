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
    <Footer/>
    </>
  )
}
