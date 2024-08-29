'use client'

import { Button } from '@/components/ui/button'
import { CustomUser } from '@/types'
import Link from 'next/link'
import React from 'react'
import { signOut } from 'next-auth/react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Image from 'next/image'

const Navbar = ({ user }: { user?: CustomUser | null }) => {
  const handleLogout = () => {
    signOut({
      callbackUrl: "/",
      redirect: true,
    });
  };

  console.log(user?.image)
  return (
    <nav className='border-b h-20 flex items-center justify-between w-full px-4'>
      <h1 className='text-blue-950 font-bold text-2xl'>SearchJob.com</h1>
      <div className='inline-flex gap-2 items-center'>
        {/* <p className='capitalize'>{user?.name}</p> */}
        <Avatar>
          <AvatarImage src={user?.image as string} />
          {user && <AvatarFallback>{user?.name && user.name[0]}</AvatarFallback>}
        </Avatar>

        {
          !user ? <div>
            <Button variant={'link'} className='text-base'><Link href={'/auth/login'}>Login</Link>
            </Button>
            /
            <Button variant={'link'} className='text-base'>
              <Link href={'/auth/register'} className='text-base'>Register</Link>
            </Button>
          </div>
            :
            <Button variant={'destructive'} className='text-base' onClick={handleLogout}>Logout</Button>
        }
      </div>
    </nav>
  )
}

export default Navbar