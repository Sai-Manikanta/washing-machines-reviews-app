import React from 'react';
import Image from 'next/image';

function HomePageProductCard({productImage, productAlt, productName}) {
  return (
    <div className="w-32 h-[197px] sm:w-36 sm:h-56 p-2.5 bg-white sm:mr-3 rounded md:hover:scale-110 duration-300">
        <div className="flex justify-center">
        <Image className="mb-2.5 h-[120px] sm:h-[142px] w-auto object-cover" src={`${productImage}`}
          alt={`${productAlt}`}
          width="122"
           height="142"      
        />
        </div>
      <p className="text-xs leading-4 w-28 sm:w-32 line-clamp-3 font-semibold">
            {productName}
        </p>
    </div>
  )
}

export default HomePageProductCard;