import ProductDetailsCarousel from '@/components/ProductDetailsCarousel'
import RelatedProducts from '@/components/RelatedProduct';
import Wrapper from '@/components/Wrapper'
import { getDiscountedPricePercentage } from '@/utils/helper'
import React, { useState } from 'react'
import { IoMdHeartEmpty } from 'react-icons/io';
import ReactMarkdown from "react-markdown";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const sizes = [
    { id: '390sdn', size: "UK 6", enabled: true },
    { id: '302pppke', size: "UK 7", enabled: true },
    { id: '3009jde9k', size: "UK 8", enabled: true },
    { id: '310lalqn', size: "UK 9", enabled: true },
    { id: '302kksn', size: "UK 9.5", enabled: true },
    { id: '302020dn', size: "UK 10", enabled: true },
    { id: '3mcs93n', size: "UK 11", enabled: false },
    { id: '30299dn', size: "UK 11.5", enabled: false },
    { id: '3293sdn', size: "UK 12", enabled: true },
]

const ProductDetails = () => {

    const [selectedSize, setSelectedSize] = useState();
    const [showError, setShowError] = useState(false);

    const notify = () => {
        toast.success("Success. Added to your cart!", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    };
    return (
        <div className='w-full md:py-20'>
            <ToastContainer />
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
                                        className={`border rounded-md text-center py-3 font-medium ${item.enabled
                                            ? "hover:border-black cursor-pointer"
                                            : "cursor-not-allowed bg-black/[0.1] opacity-50"
                                            } ${selectedSize === item.size
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

                            {/* SHOW ERROR START */}
                            {showError && (
                                <div className="text-red-600 mt-1">
                                    Size selection is required
                                </div>
                            )}
                            {/* SHOW ERROR END */}
                        </div>

                        {/* ADD TO CART BUTTON START */}
                        <button
                            className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75"
                            onClick={() => {
                                if (!selectedSize) {
                                    setShowError(true);
                                    document
                                        .getElementById("sizesGrid")
                                        .scrollIntoView({
                                            block: "center",
                                            behavior: "smooth",
                                        });
                                } else {
                                    // dispatch(
                                    //     addToCart({
                                    //         ...product?.data?.[0],
                                    //         selectedSize,
                                    //         oneQuantityPrice: p.price,
                                    //     })
                                    // );
                                    notify();
                                }
                            }}
                        >
                            Add to Cart
                        </button>
                        {/* ADD TO CART BUTTON END */}

                        {/* WHISHLIST BUTTON START */}
                        <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
                            Whishlist
                            <IoMdHeartEmpty size={20} />
                        </button>
                        {/* WHISHLIST BUTTON END */}

                        <div>
                            <div className="text-lg font-bold mb-5">
                                Product Details
                            </div>
                            <div className="markdown text-md mb-5">
                                <ReactMarkdown>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in consequat justo. Aenean sed magna non velit convallis tincidunt non molestie ante. Quisque sodales odio tellus, sit amet interdum est venenatis eu. Praesent elementum bibendum pulvinar. Fusce eget mollis augue. Vivamus in lacus nisi. Praesent vehicula luctus eros eu aliquam. Fusce vel nisi rutrum, venenatis lorem dignissim, finibus urna.

                                    Donec interdum lobortis congue. Suspendisse condimentum nunc id posuere facilisis. Pellentesque consectetur risus ac justo pretium, quis pellentesque turpis cursus. Phasellus et sem aliquam, interdum mi eu, eleifend ex. Vestibulum id arcu vitae odio ornare posuere. Morbi tincidunt accumsan lectus vel elementum. Morbi egestas sapien nulla, quis volutpat massa porttitor non. Morbi ante dolor, placerat non feugiat sit amet, commodo quis tellus. Nulla urna enim, vehicula eu felis sit amet, eleifend iaculis lectus. Suspendisse placerat nulla sit amet massa tincidunt pharetra non quis est. Phasellus sed odio in justo porta pretium quis vel dui. Sed tristique nulla libero, eu rhoncus urna ultricies et. Mauris vestibulum ullamcorper eros eu mattis. Aenean sit amet mauris nec nibh rhoncus sagittis eu laoreet nisi. Proin bibendum mattis enim, nec finibus erat efficitur nec. Donec fringilla accumsan arcu, et tempor eros tempus vestibulum.</ReactMarkdown>
                            </div>
                        </div>
                    </div>
                    {/* right column end */}
                </div>
                {/* <RelatedProducts products={ } /> */}
            </Wrapper>
        </div>
    )
}

export default ProductDetails