import Link from 'next/link'
import React from 'react'

export default function layout({children}) {
  return (
    <div>

        <div className='row'>
            <div className='col-md-2 vh-100 bg-info'>
                sidebar
                <br/>
                <Link href='/category/fashion'>Fashion</Link>
                <br/>
                <Link href='/category/web'>web</Link>
            </div>
            <div className='col-md-10'>
                {children}
            </div>
        </div>
    </div>
  )
}
