import React from 'react'
import JobCard from './JobCard'
import JobDetails from './JobDetails'

const SearchJobs = ({ id }: { id: string | undefined }) => {
    // const
    return (
        <div className='flex gap-6 justify-center'>
            <div className='flex flex-col gap-10'>
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
            </div>
            <div className='flex-1'>
                {!!id && <JobDetails id={id} />}
            </div>
        </div>
    )
}

export default SearchJobs