import Link from 'next/link'
import Image from 'next/image'
import { itemToSell } from '@/types/interface'


export const ItemCard = ({slug, name, image, price, description}: itemToSell) => {
  return (
    <Link
      key={slug}
      href={`/products/${slug}`}
      className='h-120 w-72 rounded shadow-lg mx-auto border border-gray-200 hover:shadow-xl bg-white
      flex flex-col transition-transform duration-100 group hover:-translate-y-1'>
      <div className='h-48 flex items-center justify-center pt-5'>
        <Image
          src={image}
          alt={name}
          width={120}
          height={120}
          className='object-contain h-32'
        />
      </div>
      <div className='font-primary text-palette-primary text-2xl font-semibold px-4 pt-2'>{name}</div>
      <div className='text-lg text-gray-600 py-3 px-4 font-primary font-light flex-1'>{description}</div>
      <div className='text-palette-dark font-primary font-medium text-base px-0 pb-0 mb-4 flex justify-end'>
									<span
                    className='relative inline-block bg-purple-100 text-palette-primary font-bold px-6 py-2 rounded-tl-sm'
                    style={{ clipPath: "polygon(100% 0,100% 70%,87% 100%,0 100%,0 0)" }}>
										${price.toFixed(2)}
									</span>
      </div>
    </Link>
  )
}

export default ItemCard;