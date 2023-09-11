import React from 'react';
import Image from 'next/image';

function HomePageProductCard({productImage, productAlt, productName}) {
  return (
    <div className="w-32 h-52 ml-2 sm:w-36 sm:h-56 p-2.5 bg-white sm:ml-3 rounded hover:scale-105 md:hover:scale-110 duration-300">
        <Image className="mb-2.5 h-[120px] sm:h-[142px] w-auto object-cover" src={`${productImage}`}
          alt={`${productAlt}`}
          width="122"
           height="142"      
        />
        <p className="text-xs text-sm leading-4 w-28 sm:w-32 line-clamp-3 font-semibold">
            {productName}
        </p>
    </div>
  )
}

export default HomePageProductCard;