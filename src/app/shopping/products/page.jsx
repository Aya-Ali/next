import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
// ssr server side rendering
// csr client side rendering
// ssg static site generated
// isr incremital static regenerated
async function getAllproduct() {
  let response = await fetch(`https://ecommerce.routemisr.com/api/v1/products`, {
    // cache: 'reload',
    next:{
      revalidate:2
    }
  })
  let responseData = await response.json()
  return responseData.data
}

export const metadata = {
  title: "products",
  description: "products Componet",
};
export default async function Products() {
  let productsList = await getAllproduct()
  return (
    <div>

      <div className='row g-3'>
        {productsList.map((el) => {
          return <div key={el.id} className='col-md-2'>
            <Link href={ `/shopping/products/${el.id}` }>
              <div className='item'>
                <Image src={el.imageCover} width={100} height={250} alt={el.title} />
                <h6>{el.title}</h6>
              </div>
            </Link>
          </div>
        })}

      </div>
    </div>
  )
}
