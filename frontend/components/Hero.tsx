import { Check } from 'lucide-react'
import React from 'react'

const Hero = () => {
  return (
    <div className='space-y-2'>
       <p className="text-3xl font-bold w-40">Rent what you need.</p>
        <p className='text-red-950'>Monthly plans starting $299</p>
        <div className="flex bg-green-400/15 w-fit p-1 rounded-lg items-center gap-2 font-bold">
          <p className="text-xs">48HR DELIVERY</p>
          <Check size={15}/>
        </div>
    </div>
  )
}

export default Hero
