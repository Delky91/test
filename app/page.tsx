import Image from "next/image";
import Link from 'next/link'
import { itemsToSell } from "@/lib/items";

export default function Home() {
  return (
    <main className='flex-grow'>
      <div className='mx-auto max-w-6xl px-2'>
        <h1 className='leading-relaxed font-extrabold text-4xl text-center mt-4 py-2 sm:py-4 text-palette-primary font-primary'>
          Get Doggy Stickers!
        </h1>
        <p className='max-w-xl text-center px-2 mx-auto text-base text-gray-600 mb-8'>
          Times are tough. Liven up your home with some cute Doggy Stickers. 🐶
        </p>
        <div className='py-6 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8'>
          {itemsToSell.map((item) => (
            <Link
              key={item.slug}
              href={`/products/${item.slug}`}
              className='h-120 w-72 rounded shadow-lg mx-auto border border-gray-200 hover:shadow-xl bg-white flex flex-col transition-transform duration-100 group hover:-translate-y-1'>
              <div className='h-48 flex items-center justify-center pt-5'>
                <Image
                  src={item.image}
                  alt={item.name}
                  width={120}
                  height={120}
                  className='object-contain h-32'
                />
              </div>
              <div className='font-primary text-palette-primary text-2xl font-semibold px-4 pt-2'>{item.name}</div>
              <div className='text-lg text-gray-600 py-3 px-4 font-primary font-light flex-1'>{item.description}</div>
              <div className='text-palette-dark font-primary font-medium text-base px-0 pb-0 mb-4 flex justify-end'>
									<span
                    className='relative inline-block bg-purple-100 text-palette-primary font-bold px-6 py-2 rounded-tl-sm'
                    style={{ clipPath: "polygon(100% 0,100% 70%,87% 100%,0 100%,0 0)" }}>
										${item.price.toFixed(2)}
									</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
