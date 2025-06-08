import { itemsToSell } from '@/lib/items'
import Link from 'next/link'
import DisplayItem from '@/components/DisplayItem/DisplayItem'

export default async function ProductPage({params}: { params: Promise<{ slug: string }>}) {
  const { slug } = await params;
  const item =  itemsToSell.find(item => item.slug === slug);

  if (!item) {
    return (
      <div className='max-w-xl mx-auto text-center py-20'>
        <h1 className='text-4xl font-extrabold text-palette-primary mb-4'>Item Not Found</h1>
        <Link
          href='/'
          className='text-palette-primary underline'>
          Back to Home
        </Link>
      </div>
    )
  }

  return (
    <div className='max-w-3xl mx-auto py-16 px-4'>
      <DisplayItem {...item} />
    </div>
  );
}