import React from 'react';
import Image from 'next/image';

function HomePageProductCard({productImage, productAlt, productName}) {
  return (
    <div className="w-36 h-60 p-2.5 pb-4 bg-white ml-3 rounded">
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