import { Button } from '@/components/ui/button'
import React from 'react'

const page = () => {
  return (
    <div className='text-center container my-4 mx-auto'>
      <h1 className='text-3xl mb-4 font-bold'>Home Page</h1>
      <div className="flex gap-2 justify-center">
        <Button>Signup</Button>
        <Button>Signin</Button>

      </div>
    </div>
  )
}

export default page