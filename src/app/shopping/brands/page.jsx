import React from 'react'
import { Dancing_Script, Alegreya } from 'next/font/google'
const Dancing = Dancing_Script({
  subsets: ['latin'],
  weight: '700'
})
const alegreya = Alegreya({
  subsets: ['greek-ext']
})

export const metadata = {
  title: "brands",
  description: "brands Componet",
};

export default function BrandsPage() {
  return (
    <div>

      <p className={alegreya.className}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut culpa quasi quod, rem dignissimos recusandae aliquam, nulla esse incidunt a asperiores doloribus quam atque repellat, provident doloremque vero. Labore, consequuntur.</p>
      <h2 className={Dancing.className+ "  bg-dark text-white"}>BrandsPage</h2>
    </div>
  )
}
