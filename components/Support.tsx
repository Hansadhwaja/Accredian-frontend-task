import React from 'react'
import { Button } from './ui/button'
import { Headset } from 'lucide-react'

const Support = () => {
  return (
    <>
    <h1 className='max-container text-3xl sm:text-4xl font-semibold text-sky-500'>Support Assist</h1>
      <div className='max-container  p-6 sm:p-12 rounded-xl mx-auto shadow-xl flex flex-col sm:flex-row justify-between bg-orange-100'>
        <div className='flex gap-8 w-full'>
          <div className='rounded-xl flex-center bg-orange-200 w-28 h-20'>
            <Headset size={32} />
          </div>
          <div>
            <h1 className='text-lg sm:text-2xl font-semibold'>Want to Ask Something ?</h1>
            <p className='text-late-500 mt-2'>Use our 24*7 expert helpline to talk with our experts.</p>
          </div>
        </div>
        <div className='mt-5'>
          <Button className='bg-sky-500 font-semibold'>Get in Touch</Button>
        </div>
      </div>
    </>

  )
}

export default Support