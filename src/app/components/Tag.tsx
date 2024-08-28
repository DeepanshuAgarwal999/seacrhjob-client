import { Badge } from '@/components/ui/badge'
import React from 'react'

const Tag = ({ children }: {
    children: React.ReactNode
}) => {
    return (
        <Badge className='rounded-md px-2 py-1 w-fit' variant={'secondary'}>{children}</Badge>
    )
}

export default Tag