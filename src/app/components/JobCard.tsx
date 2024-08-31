import React from 'react'
import Tag from './Tag'
import Link from 'next/link'
import { Company } from '@/types'
import { timeAgo } from '@/lib/utils'

type Props = {}

const JobCard = ({ company }: { company: Company }) => {
    return (
        <Link href={`/?id=${company._id}`} className='bg-white'>
            <article className='group rounded-xl border border-[#E8E7E6] p-4 w-full md:max-w-[450px] bg-white space-y-2 h-fit'>
                <h1 className='text-lg font-semibold group-hover:underline'>{company.title}</h1>
                <p className='text-sm'>{company.name}</p>
                <p className='text-sm'>{company.location}</p>
                <Tag>{company.type}</Tag>
                <p className='  text-gray-600 font-light px-2 md:px-4 line-clamp-4'>
                    {company.description}
                </p>
                <p className='text-gray-500 text-sm'>Posted {timeAgo(company.postedOn)}</p>
            </article>
        </Link>
    )
}

export default JobCard