"use client"
import React from 'react'
import Link from "next/link";
import { usePathname } from 'next/navigation';
export default function Navbar() {
  let pathname = usePathname()
  console.log(pathname);

  const pathNames = [
    { path: "/", Name: "Home" },
    { path: "/about", Name: "About" },
    { path: "/category", Name: "category" },
    { path: "/shopping/products", Name: "Products" },
    { path: "/shopping/brands", Name: "Brands" },
    { path: "/login", Name: "Login" },
    { path: "/register", Name: "register" },
  ]
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            {pathNames.map((el) => {
              return <li key={el.Name} className="nav-item">
                <Link className={pathname == el.path ? "nav-link bg-info text-white" : "nav-link"} href={el.path}>{el.Name}</Link>
              </li>
            })}
          </ul>

        </div>
      </div>
    </nav>
  )
}
