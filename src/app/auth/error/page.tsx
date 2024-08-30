import { SearchParamProps } from '@/types'
import React from 'react'

const Error = ({ searchParams }: SearchParamProps) => {

  return (
    <div>{searchParams?.message}</div>
  )
}

export default Error