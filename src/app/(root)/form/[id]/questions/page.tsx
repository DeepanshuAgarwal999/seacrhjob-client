import QuestionsForm from '@/app/components/forms/QuestionsForm'
import React from 'react'

const Questions =  ({ params }: { params: { id: string } }) => {
    return (
        <div className='container flex items-center justify-center py-14'>
            <div className='w-full max-w-2xl border p-8 rounded-lg bg-white '>
                <h1 className='text-3xl font-bold mb-4'>Answer the following questions</h1>
                <QuestionsForm id={params.id} />
            </div>
        </div>
    )
}

export default Questions