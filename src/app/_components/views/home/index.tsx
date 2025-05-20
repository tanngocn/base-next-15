'use client'

import { ProductCard } from '@/app/_components/common/Card'
import { useTranslations } from 'next-intl'

const Section = ({ data }: any) => {
  const t = useTranslations('home')

  return (
    <div className='home-page'>
      <h1 className='text-lg'>{t('title')}</h1>
      <p>{t('description')}</p>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4'>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <ProductCard
            key={item}
            title={`Product ${item}`}
            price={99.99}
            discount={20}
            rating={4.5}
            imageId={item}
            onAddToCart={() => {
              // Handle add to cart logic
            }}
          />
        ))}
      </div>
    </div>
  )
}
export default Section
