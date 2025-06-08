"use client"
import Image from 'next/image'
import Link from 'next/link'
import { itemToSell } from '@/types/interface'

export const DisplayItem = ({ name, image, description, price}: itemToSell) => {
  return (
    <div className='flex flex-col md:flex-row items-center gap-10'>
      <Image
        src={image}
        alt={name}
        width={300}
        height={300}
        className='rounded object-contain w-[260px] h-[260px] md:w-[300px] md:h-[300px] shadow-lg'
      />
      <div className='flex-1 w-full max-w-md'>
        <h1 className='font-extrabold text-3xl text-primary/80 mb-6'>{name}</h1>
        <p className='text-lg text-gray-700 mb-8'>{description}</p>
        <div className='flex items-center justify-between mb-4'>
          <span className='font-bold text-2xl text-primary'>${price.toFixed(2)}</span>
          <button
            type='button'
            className='bg-primary text-white px-5 py-3 font-semibold rounded shadow hover:bg-primary-dark focus:outline-none'
            onClick={() => console.log('add to cart')}>
            Add to Cart
          </button>
        </div>
        <Link
          href='/'
          className='text-primary underline'>
          Back to Home
        </Link>
      </div>
    </div>
  )
};
export default DisplayItem;