import React from 'react'
import Image from 'next/image'
import svgimag from '../public/Image/An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection..svg'

function page() {
  return (
    <div className="h-screen">
        <div className="bg-[#A29875] font-[Rye] text-[75px] leading-[93.75px] pl-9 py-[20px] h-[134px]">MANZZARI</div>
        <div className="text-black flex">
            <div className="w-1/2 pl-[176px]">
            <h1 className="font-[Rye] font-bold text-[40px] leading-[65.8px] pt-[316px]">IMPECCABLE CRAFTSMANSHIP AND FINESSE</h1>
            <p className="pt-2"><Image src={svgimag} alt="next.image"/></p>
            <button className="pt-10">
              <Image src={'/Image/Frame 11.svg'} 
              alt="next.image" 
              width={200} 
              height={200}/>
              </button>
            </div>
            <div className="w-1/2 pl-[204px] pt-[198px]">
            <Image src={"/Image/rs-layer-wrap ⏵ rs-layer.svg"} 
            alt="next.image"
            width={462}
            height={647}/>
            </div>
        </div>
    </div>
  )
}

export default page