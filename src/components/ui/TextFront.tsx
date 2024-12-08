import React from 'react'

function TextFront() {
  return (
   <main className='flex justify-center items-center flex-col '>
        <h2 className='text-3xl sm:min-h-28 '>Web developer</h2>
        <h1 className='text-5xl sm:min-h-60 flex items-center font-bold min-h-52 '
        style={{
          backgroundImage: "url('/outline.png')",
          backgroundSize: "200px 200px", // Makes sure the image scales correctly
          backgroundPosition: "center", // Keeps the image centered
          backgroundRepeat: "no-repeat",
        }}
        
        >Sukhdeep Singh</h1>
        <p className='text-xl  line-clamp-3 border-l-2'>Hi, This is Sukhdeep Singh <br/>Web Developer<br/> Working Remotely from India </p>
   </main>
  )
}

export default TextFront