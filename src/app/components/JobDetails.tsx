import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';
import Tag from './Tag';
import { Banknote, BriefcaseBusiness } from 'lucide-react';
import { axiosInstance } from '@/lib/axios.instance';
import { Company } from '@/types';

const JobDetails = async ({ id }: { id: string | undefined }) => {
    let company: Company | undefined;

    try {
        const { data } = await axiosInstance.get(`/company/${id}`);
        if (data && data.company) {
            company = data.company;
        }
    } catch (error) {
        console.error('Error fetching company data:', error);
    }

    if (!company) {
        return <div>Company not found</div>;
    }

    return (
        <div className='sticky top-10 hidden md:block bg-white rounded-lg border border-[#F4F4F3] w-full'>
            <Link href={'/'}>
                <Button variant={'ghost'} className='absolute right-2'>X</Button>
            </Link>

            <div className='flex flex-col gap-2 p-6 border-b shadow-md'>
                <h1 className='text-2xl font-semibold'>{company.title}</h1>
                <p className='text-gray-500 font-medium'>{company.pay}</p>
                <Tag>{company.type}</Tag>
                <Link href={`/form/${id}/contact-form`}>
                    <Button variant={'ghost'} className='bg-[#2557A7] w-fit text-white font-semibold'>Apply now</Button>
                </Link>
            </div>

            <div className='overflow-y-auto h-[400px]'>
                <div className='border-b p-6 flex flex-col gap-2'>
                    <h1 className='text-xl font-bold'>Job details</h1>
                    <p className='text-sm text-[#868484] font-light'>Here&apos;s how the job details align with your profile.</p>
                    <p className='flex items-center gap-2 font-semibold'><Banknote /> Pay</p>
                    <strong className='inline-flex'>{company.pay}</strong>
                    <p className='font-semibold inline-flex gap-2'><BriefcaseBusiness className='size-5' /> Job type</p>
                    <Tag>{company.type}</Tag>
                </div>
                <div className='border-b p-6 flex flex-col gap-2 text-gray-500'>
                    <h1 className='text-xl font-bold text-black'>Description</h1>
                    <p>{company.description}</p>
                </div>
                <div className='border-b p-6 flex flex-col gap-2'>
                    <h1 className='text-xl font-bold'>Benefits</h1>
                    <p className='text-sm text-[#868484] font-light'>Pulled from the full job description</p>
                    <ul className='list-disc px-4 text-gray-500'>
                        {company.benefits.map((benefit, index) => (
                            <li key={index}>{benefit}</li>
                        ))}
                    </ul>
                </div>

                <div className='border-b p-6 flex flex-col gap-2'>
                    <h1 className='text-xl font-bold'>Responsibilities</h1>
                    <p className='text-sm text-[#868484] font-light'>Pulled from the full job description</p>
                    <ul className='list-disc px-4 text-gray-500'>
                        {company.responsibilities.map((responsibility, index) => (
                            <li key={index}>{responsibility}</li>
                        ))}
                    </ul>
                </div>


                <div className='border-b p-6 flex flex-col gap-2 text-gray-500'>
                    <h1 className='text-xl font-bold text-black'>Requirements</h1>
                    <h2>Education:</h2>
                    <ul className='list-disc px-4'>
                        {company.requirements.education.map((education, index) => (
                            <li key={index}>{education}</li>
                        ))}
                    </ul>
                    <h2>Experience:</h2>
                    <ul className='list-disc px-4'>
                        {company.requirements.experience.map((experience, index) => (
                            <li key={index}>{experience}</li>
                        ))}
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default JobDetails;
