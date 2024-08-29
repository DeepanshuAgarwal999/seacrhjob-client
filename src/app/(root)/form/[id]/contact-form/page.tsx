import ContactForm from '@/app/components/forms/ContactForm'
import React from 'react'

const ContactFormPage = ({ params }: { params: { id: string } }) => {
  console.log(params)
  return (
    <>
      <div className='container flex items-center justify-center py-14'>
        <div className='w-full max-w-2xl border p-8 rounded-lg bg-white '>
          <h1 className='text-3xl font-bold mb-4'>Add your contact information</h1>
          <ContactForm id={params.id} />
        </div>
      </div>
    </>
  )
}

export default ContactFormPage