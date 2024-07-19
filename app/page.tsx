import Benifits from '@/components/Benifits'
import FAQS from '@/components/FAQS'
import Refer from '@/components/Refer'
import Support from '@/components/Support'
import React from 'react'

const Home = () => {
  return (
    <div>
      <Refer />
      <Benifits />
      <FAQS />
      <Support />
    </div>
  )
}

export default Home