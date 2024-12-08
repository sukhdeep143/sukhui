import React from 'react';
import Image from 'next/image';
import Smedia from './Smedia';

function MyImage() {
  return (
    <main className='flex justify-center gap-10  '>
        <div className=' size-fit '  style={{
              backgroundImage: "url('/splash.png')",
              backgroundSize: "300px 300px", // Makes sure the image scales correctly
              backgroundPosition: "top", // Keeps the image centered
              backgroundRepeat: "no-repeat",
              
            }}>
            <Image 
            src={'/SukhdeepSingh.png'}
            width={400}
            height={400}
            alt='Sukhdeep singh image'
            />
        </div>
        <div className='flex items-center  '>
            <Smedia />
        </div>
    </main>
  )
}

export default MyImage