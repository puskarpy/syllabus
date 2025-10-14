import { useParams, Link } from "react-router-dom"
import { data } from "@/data/data.js"
import SemCard from "@/components/SemCard"

export default function DisplaySubjects() {

  const { id } = useParams()

  const semData = data.find((d) => d.semester == Number(id))

   
  return (
          <div className="min-h-screen px-4 py-10 sm:p-10 flex flex-col">
            <div className="mb-12 mx-auto">
              <p className="sm:text-5xl text-3xl font-semibold text-neutral-200">Choose a Subject</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {
                semData.subjects.map((s, index) => (
                <SemCard key={index + 1} link={`/semester/${id}/syllabus/${s.linkName}`} s={s} id={id}/>
                ))
              }
                </div>
          </div>
  )
}
