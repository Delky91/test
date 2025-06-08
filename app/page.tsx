import { itemsToSell } from "@/lib/items";
import  ItemCard  from '@/components/itemCard/itemCard'

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
           <ItemCard key={item.slug} {...item}/>
          ))}
        </div>
      </div>
    </main>
  );
}
