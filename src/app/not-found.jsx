import React from 'react'
import errorimg from '../../public/error.svg'
import slide from '../../public/slider-image-1.jpeg'
import Image from 'next/image'

export default function NotFound() {
  return (
    <div>

        <h2>NotFound</h2>
        <Image src={errorimg}  width={200} height={200} alt="" />
        <Image src={ slide} width={220} height={250}/>
    </div>
  )
}
