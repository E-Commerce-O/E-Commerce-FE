'use client'

import * as React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel'
import ProductCard from './product-card'
import {IProduct} from "@/lib/response/product";

export default function ProductSlider({
                                          title,
                                          products,
                                          hideDetails = false,
                                      }: {
    title?: string
    products: IProduct[]
    hideDetails?: boolean
}) {
    return (
        <div className='w-full bg-background'>
            <h2 className='h2-bold mb-5'>{title}</h2>
            <Carousel
                opts={{
                    align: 'start',
                }}
                className='w-full'
            >
                <CarouselContent className='blacken-disabled'>

                    {products.map((product) => (
                        <CarouselItem
                            key={`${product.id}`}
                            className={
                                hideDetails
                                    ? 'md:basis-1/4 lg:basis-1/6'
                                    : 'md:basis-1/3 lg:basis-1/5'
                            }
                        >
                            <ProductCard
                                hideDetails={hideDetails}
                                hideAddToCart
                                hideBorder
                                product={product}
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className='left-0' />
                <CarouselNext className='right-0' />
            </Carousel>
        </div>
    )
}