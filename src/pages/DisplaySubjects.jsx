import { useParams, Link } from "react-router-dom"
import { data } from "@/data/data.js"
import SemCard from "@/components/SemCard"

export default function DisplaySubjects() {

  const { id } = useParams()

  const semData = data.find((d) => d.semester == Number(id))

   
  return (
          <div className="min-h-screen px-4 py-10 sm:px-10 sm:py-4 flex flex-col">
            <div className="mx-auto font-bold text-4xl mb-10">Semester {semData.semester}</div>
            <div></div>
            <div className="mb-12">
              <p className="text-xl font-semibold mb-4">Curriculum</p>
              <div className="rounded-lg overflow-hidden "><img src={semData.curriculumImage} alt="" /></div>
            </div>
            <div className="w-full mx-auto max-w-4xl h-[1px] bg-gradient-to-r from-transparent mt-4 mb-4 via-gray-700 to-transparent"></div>

            <div className="mb-12 mt-12 mx-auto">
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
