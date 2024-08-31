import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Success = () => {
    return (
        <div className='container flex items-center justify-center py-14'>
            <div className='w-full max-w-2xl border p-8 rounded-lg bg-white '>
                <div>
                    <Link href='/'>
                        <h1 className='text-blue-950 font-bold text-2xl text-center'>SearchJob.com</h1>
                    </Link>
                    <section className='flex items-center flex-col'>
                        <Image src={'/assets/gifs/success.gif'} height={300} width={280} alt='success' />

                        <h2 className='header mb-6 max-w-[600px] text-center '>
                            Your <span className='text-green-500'>Job request</span> has been made successfully submitted!
                        </h2>
                        <p>We will be in touch shortly to confirm.</p>
                    </section>
                    <section className=' flex items-center justify-center gap-4 mt-4'>
                        <p>Requested job details can be found here:</p>

                        <Button variant={'outline'} className='' asChild>
                            <Link href={'/'}>
                                View details
                            </Link>
                        </Button>
                    </section>
                    
                    <div className='flex items-center justify-center mt-4'> <Button variant={'outline'} className='' asChild>
                        <Link href={'/'}>
                            Search more jobs
                        </Link>
                    </Button></div>

                </div>
            </div>
        </div>
    )
}

export default Success