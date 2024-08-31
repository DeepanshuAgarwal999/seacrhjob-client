import React from 'react'
import SearchBar from '../components/Searchbar'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AppliedJobs from '../components/AppliedJobs'
import { Separator } from '@/components/ui/separator'
import SearchJobs from '../components/SearchJobs'
import { CustomSession, SearchParamProps } from '@/types'
import Navbar from '../components/shared/Navbar'
import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/options'

const Home = async ({ searchParams }: SearchParamProps) => {
  const session: CustomSession | null = await getServerSession(authOptions)

  return (
    <section>
      <Navbar user={session?.user} />
      {/* <div className='py-6 flex justify-center container'>
        <SearchBar />
      </div> */}
      <Tabs defaultValue="findJobs" className="pt-14">
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