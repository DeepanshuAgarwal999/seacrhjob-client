import ResumeForm from '@/app/components/forms/ResumeForm'
import React from 'react'

const Resume = ({ params }: { params: { id: string } }) => {
  return (

    <div className='container flex items-center justify-center py-14'>
      <div className='w-full max-w-2xl border p-8 rounded-lg bg-white '>
        <h1 className='text-3xl font-bold mb-4'>Upload your Resume</h1>
        <ResumeForm id={params.id} />
      </div>
    </div>
  )
}

export default Resume