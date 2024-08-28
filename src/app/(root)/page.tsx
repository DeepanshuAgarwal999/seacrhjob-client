import React from 'react'
import JobCard from '../components/JobCard'
import SearchBar from '../components/Searchbar'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AppliedJobs from '../components/AppliedJobs'
import { Separator } from '@/components/ui/separator'
import SearchJobs from '../components/SearchJobs'

type Props = {}

const Home = ({ searchParams }: SearchParamProps) => {
  return (
    <section>
      <div className='my-6 flex justify-center container'>
        <SearchBar />
      </div>
      <Tabs defaultValue="findJobs" className="mt-14">
        <TabsList className='flex justify-center w-fit mx-auto mb-6'>
          <TabsTrigger value="findJobs" >Search jobs</TabsTrigger>
          <TabsTrigger value="recentJobs">Applied jobs</TabsTrigger>
        </TabsList>
        <Separator />
        <div className='max-w-7xl mx-auto mt-6 px-4'>
          <TabsContent value="findJobs"> <SearchJobs id={searchParams.id as string} /></TabsContent>
          <TabsContent value="recentJobs"><AppliedJobs /></TabsContent>
        </div>
      </Tabs>


    </section>
  )
}

export default Home