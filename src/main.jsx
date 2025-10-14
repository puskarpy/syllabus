import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Home, PastQuestions, Semester, DisplaySubjects, DisplaySyllabus, About } from './pages'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Layout'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route element={<Layout/>}>
        <Route path='/' element={<Home/>} />
        <Route path='semester' element={<Semester/>} />
        <Route path='semester/:id' element={<DisplaySubjects/>} />
        <Route path='semester/:id/past-questions/:subject' element={<PastQuestions/>} />
        <Route path='semester/:id/syllabus/:subject' element={<DisplaySyllabus/>} />
        <Route path='about' element={<About/>} />
      </Route>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
