import ProductDetailsCarousel from '@/components/ProductDetailsCarousel'
import Wrapper from '@/components/Wrapper'
import { getDiscountedPricePercentage } from '@/utils/helper'
import React, { useState } from 'react'

const sizes = [
    {id:'390sdn', size: "UK 6",enabled : true},
    {id:'302pppke', size: "UK 7",enabled : true},
    {id:'3009jde9k', size: "UK 8",enabled:true},
    {id:'310lalqn', size: "UK 9",enabled:true},
    {id:'302kksn', size: "UK 9.5",enabled:true},
    {id:'302020dn', size: "UK 10",enabled:true},
    {id:'3mcs93n', size: "UK 11",enabled:false},
    {id:'30299dn', size: "UK 11.5",enabled:false},
    {id:'3293sdn', size: "UK 12",enabled:true},
]

const ProductDetails = () => {

    const [selectedSize, setSelectedSize] = useState();
    const [showError, setShowError] = useState(false);
    return (
        <div className='w-full md:py-20'>
            <Wrapper>
                <div className='flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]'>
                    {/* left column start */}
                    <div className='w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0'>
                        <ProductDetailsCarousel />
                    </div>
                    {/* left column end */}

                    {/* right column start */}
                    <div className='flex-[1] py-3'>

                        {/* PRODUCT TITLE */}
                        <div className="text-[34px] font-semibold mb-2 leading-tight">
                            Jordan Retro 6 G
                        </div>

                        {/* PRODUCT SUBTITLE */}
                        <div className="text-lg font-semibold mb-5">
                            MensSport Golf Shoes
                        </div>

                        {/* PRODUCT PRICE */}
                        <div className="flex items-center">
                            <p className="mr-2 text-lg font-semibold">
                                MRP : &#8377;6778
                            </p>
                            {9888 && (
                                <>
                                    <p className="text-base  font-medium line-through">
                                        &#8377;9888
                                    </p>
                                    <p className="ml-auto text-base font-medium text-green-500">
                                        {getDiscountedPricePercentage(
                                            9888,
                                            6778
                                        )}
                                        % off
                                    </p>
                                </>
                            )}
                        </div>

                        <div className="text-md font-medium text-black/[0.5]">
                            incl. of taxes
                        </div>
                        <div className="text-md font-medium text-black/[0.5] mb-20">
                            {`(Also includes all applicable duties)`}
                        </div>

                        <div className='mb-10'>
                            <div className="flex justify-between mb-2">
                                <div className="text-md font-semibold">
                                    Select Size
                                </div>
                                <div className="text-md font-medium text-black/[0.5] cursor-pointer">
                                    Select Guide
                                </div>
                            </div>

                            {/* SIZE START */}
                            <div
                                id="sizesGrid"
                                className="grid grid-cols-3 gap-2"
                            >
                                {sizes.map((item, i) => (
                                    <div
                                        key={item.id}
                                        className={`border rounded-md text-center py-3 font-medium ${
                                            item.enabled
                                                ? "hover:border-black cursor-pointer"
                                                : "cursor-not-allowed bg-black/[0.1] opacity-50"
                                        } ${
                                            selectedSize === item.size
                                                ? "border-black"
                                                : ""
                                        }`}
                                        onClick={() => {
                                            setSelectedSize(item.size);
                                            setShowError(false);
                                        }}
                                    >
                                        {item.size}
                                    </div>
                                ))}
                            </div>
                            {/* SIZE END */}
                        </div>

                    </div>
                    {/* right column end */}
                </div>
            </Wrapper>
        </div>
    )
}

export default ProductDetails