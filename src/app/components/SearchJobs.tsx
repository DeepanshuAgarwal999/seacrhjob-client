import React from 'react'
import JobCard from './JobCard'
import JobDetails from './JobDetails'
import { axiosInstance } from '@/lib/axios.instance'
import { Company } from '@/types'

const SearchJobs = async ({ id }: { id: string | undefined }) => {
    // const
    const { data } = await axiosInstance.get('/company/companies')
    const companies = data as Company[]
    return (
        <div className='flex gap-6 justify-center'>
            <div className='flex flex-col gap-10'>
                {companies && companies.length !== 0 && companies?.map((companyDetails) => <JobCard company={companyDetails} key={companyDetails._id}/>)}
            </div>
            <div className='flex-1'>
                {!!id && <JobDetails id={id} />}
            </div>
        </div>
    )
}

export default SearchJobs