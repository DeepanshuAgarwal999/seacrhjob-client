import React from 'react'
import Tag from './Tag'
import Link from 'next/link'

type Props = {}

const JobCard = (props: Props) => {
    return (
        <Link href={'/?id="dsadsadasd"'} className='bg-white'>
            <article className='group rounded-xl border border-[#E8E7E6] p-4 w-full md:max-w-[450px] bg-white space-y-2 h-fit'>
                <h1 className='text-lg font-semibold group-hover:underline'>Senior software Engineering Lead</h1>
                <p className='text-sm'>Optum</p>
                <p className='text-sm'>Grurgram,Haryana</p>
                <Tag>Full time</Tag>
                <p className='  text-gray-600 font-light px-2 md:px-4 line-clamp-4'>
                    Boston Consulting Group is an Equal Opportunity Employer. All qualified applicants will receive consideration for employment without regard to race, color, age, religion, sex, sexual orientation, gender identity / expression, national origin, disability, protected veteran status, or any other characteristic protected under national, provincial, or local law, where applicable, and those with criminal histories will be considered in a manner consistent with applicable state and local laws.
                </p>
                <p className='text-gray-500 text-sm'>Posted 2 day ago</p>
            </article>
        </Link>
    )
}

export default JobCard