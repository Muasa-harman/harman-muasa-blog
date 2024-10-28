import Card from '@/components/Card'
import React from 'react'
import Comment from '@/components/Comment'

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <Card/>
      <Comment/>
    </div>
  )
}

export default page