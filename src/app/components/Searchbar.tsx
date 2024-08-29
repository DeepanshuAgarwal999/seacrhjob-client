"use client"
import { Button } from '@/components/ui/button'
import { MapPin, Search } from 'lucide-react'
import React from 'react'

const SearchBar = () => {
    return (
        <>
            <div className='border border-black shadow-2xl bg-white rounded-lg h-14 flex items-center justify-between w-full max-w-4xl'>
                <div className='px-4 flex items-center gap-2 w-full'>
                    <Search />
                    <input type="text" placeholder='Job title,keywords,or company' className='w-full outline-none' />
                </div>
                <div className='px-4 flex items-center w-full gap-2 before:content-[""] before:inline-block before:mr-2 before:bg-gray-300 before:w-0.5 before:h-7'>

                    <MapPin />
                    <input type="text" placeholder='City,state,zip code,or "remote"' className='w-full outline-none' />
                </div>
                <Button className='bg-blue-900 mr-2 text-white' variant={'ghost'}>Find Jobs</Button>
            </div>
            

        </>
    )
}

export default SearchBar