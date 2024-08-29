import { CustomSession } from '@/types'
import { getServerSession } from 'next-auth'
import React from 'react'
import { authOptions } from '../api/auth/[...nextauth]/options'
import { redirect } from 'next/navigation'

const AuthLayout = async ({ children }: { children: React.ReactNode }) => {
    const session: CustomSession | null = await getServerSession(authOptions)
    if (session) {
        redirect('/')
    }
    return (
        <>
            {children}
        </>
    )
}

export default AuthLayout