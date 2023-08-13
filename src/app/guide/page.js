import Image from 'next/image'
import React from 'react'
import img from '../../assets/guide.PNG'
import Link from 'next/link'

const page = () => {
  return (
    <div className='flex flex-col justify-center items-center'>

    <h1 className='text-2xl text-center'>How to do Test Payment</h1>
    <h2 className='text-2xl text-center'>use 4242 4242 4242 4242 for card number</h2>
    <h2 className='text-2xl text-center'>use any 3 digit number for cvc</h2>
    <h2 className='text-2xl text-center'>use any further date like 04/24 for expiry date </h2>
    <h1 className='text-2xl text-center'>Thank you for supporting you can also refer this image</h1>
    <Link  className='text-2xl text-center self-center text-blue-500 underline' href={'/cart'}>Cart</Link>
    <Image height={1000} width={700} alt="guide" src={img}  />
    </div>
  )
}

export default page