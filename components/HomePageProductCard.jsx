import React from 'react';
import Image from 'next/image';

function HomePageProductCard({productImage, productAlt, productName}) {
  return (
    <div className="w-36 h-56 p-2.5 bg-white ml-3 rounded hover:scale-110 duration-300">
        <Image className="mb-2.5 h-[142px] w-auto object-cover" src={`${productImage}`}
          alt={`${productAlt}`}
          width="122"
           height="142"      
        />
        <p className="text-sm leading-4 w-32 line-clamp-3 font-semibold">
            {productName}
        </p>
    </div>
  )
}

export default HomePageProductCard;