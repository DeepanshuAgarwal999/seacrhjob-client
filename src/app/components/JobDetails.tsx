import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import Tag from './Tag'
import { Banknote, BriefcaseBusiness } from 'lucide-react'

const JobDetails = ({ id }: { id: string | undefined }) => {

    return (
        <div className='sticky top-10 hidden md:block bg-white rounded-lg border border-[#F4F4F3] w-full'>
            <Link href={'/'}> <Button variant={'ghost'} className='absolute right-2'>X</Button></Link>

            <div className='flex flex-col gap-2 p-6 border-b shadow-md'>
                <h1 className='text-2xl font-semibold'>Senior software Engineering Lead</h1>
                <p className='text-gray-500 font-medium'>₹41,40,000 - ₹62,10,000 a year</p>
                <Tag>Remote</Tag>
                <Link href={'/form/233213213/contact-form'}><Button variant={'ghost'} className='bg-[#2557A7] w-fit text-white font-semibold'>Apply now </Button></Link>
            </div>

            <div className='overflow-y-auto h-[400px] '>
                <div className='border-b p-6 flex flex-col gap-2'>
                    <h1 className='text-xl font-bold'>Job details</h1>
                    <p className='text-sm text-[#868484] font-light '>Here&apos;s how the job details align with your profile.</p>
                    <p className='flex items-center gap-2  font-semibold'><Banknote /> Pay</p>
                    <strong className='inline-flex'>₹41,40,000 - ₹62,10,000 a year</strong>
                    <p className='font-semibold inline-flex gap-2'><BriefcaseBusiness className='size-5' /> Job type</p>
                    <Tag>Full-time</Tag>
                </div>
                <div className='border-b p-6 flex flex-col gap-2'>
                    <h1 className='text-xl font-bold'>Benefits</h1>
                    <p className='text-sm text-[#868484] font-light '>Pulled from the full job description</p>
                    <ul className='list-disc px-4 *:text-gray-500'>
                        <li>Health insurance
                        </li>
                        <li>
                            Life insurance
                        </li>
                        <li>Paid time off</li>
                    </ul>
                </div>
                <div className='border-b p-6 flex flex-col gap-2'>
                    <h1 className='text-xl font-bold'>Responsibilities</h1>
                    <p className='text-sm text-[#868484] font-light '>Pulled from the full job description</p>
                    <ul className='list-disc px-4 *:text-gray-500'>
                        <li>Design, develop, ship, and motivate the creation of scalable software and systems to increase product reliability and organizational efficiency.
                        </li>
                        <li>
                            Guide reliability practices through the entire software development lifecycle through activities like architecture reviews, code reviews, creating platforms and frameworks, capacity planning, and chaos testing.
                        </li>
                        <li>Maintain service health through monitoring and follow-the-sun incident response.</li>
                        <li>Collaborate with Engineering teams to balance cloud cost optimization with delivering a high degree of system reliability.</li>
                    </ul>
                </div>
                <div className='border-b p-6 flex flex-col gap-2  text-gray-500'>
                    <h1 className='text-xl font-bold text-black'>Requirements</h1>
                    <h2 className=''>Education:
                    </h2>
                    <ul className='list-disc px-4 '>
                        <li>{"Bachelor's (Required)"}
                        </li>
                    </ul>
                    <h2>
                        Experience:

                    </h2>
                    <ul className='list-disc px-4 '>
                        <li>Troubleshooting and Debugging production systems: 2 years (Required)</li>
                        <li>Software development/Programming in Java, Go, Python etc.: 2 years (Required)</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default JobDetails