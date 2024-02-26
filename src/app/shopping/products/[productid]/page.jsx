import React from 'react'
async function getDetails(id) {
  let response = await fetch(`https://ecommerce.routemisr.com/api/v1/products/${id}`).catch((err) => {

  })
  let responseData = await response.json()
  return responseData.data
}
export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  const id = params.productid

  // fetch data
  let product =await getDetails(id)

  return {
    title: product.title,

  }
}

export default async function ProductDetails({ params }) {

  let product = await getDetails(params.productid)
  console.log(product);
  return (
    <div>
      {product ? <div className='row'>
        <div className='col-md-3'>
          <img src={product.imageCover} className='w-100' alt={product.title} />
        </div>
        <div className='col-md-9'>
          <h2>{product.title}</h2>
        </div>
      </div> : <div className='alert alert-danger'>

        no data :{params.productid}
      </div>}


    </div>
  )
}
