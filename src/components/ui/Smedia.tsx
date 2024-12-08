import React from 'react'
import Image from 'next/image'

function Smedia() {
  return (
    <div className=''>
         <div className="grid  gap-16 cursor-pointer items-center">
          {[
            {
              src: "https://img.icons8.com/?size=100&id=44019&format=png&color=000000",
              alt: "Facebook icon",
            },
            {
              src: "https://img.icons8.com/?size=100&id=43677&format=png&color=000000",
              alt: "Twitter icon",
            },
            {
              src: "https://img.icons8.com/?size=100&id=bYzsf9Bmocst&format=png&color=000000",
              alt: "Instagram icon",
            },
            {
              src: "https://img.icons8.com/?size=100&id=118501&format=png&color=000000",
              alt: "LinkedIn icon",
            },
            {
              src: "https://img.icons8.com/?size=100&id=43625&format=png&color=000000",
              alt: "YouTube icon",
            },
            {
              src: "https://img.icons8.com/?size=100&id=114954&format=png&color=000000",
              alt: "Snapchat icon",
            },
          ].map((icon, index) => (
            <div
              key={index}
              className="hover:scale-150 transition-transform duration-200"
            >
              <Image src={icon.src} width={35} height={35} alt={icon.alt} />
            </div>
          ))}
        </div>
    </div>
  )
}

export default Smedia