"use client"

import Image from "next/image"

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <div className="w-[298px] h-[298px] xl:w-[398px] xl:h-[398px] mix-blend-lighten">
        <Image src="/images/profile.png" priority quality={100} fill alt="profile pic" className="object-contain"/>
      </div>
    </div>
  )
}

export default Photo
