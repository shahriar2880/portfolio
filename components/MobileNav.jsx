"use client"
import { usePathname } from 'next/navigation'
import React from 'react'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { CiMenuFries } from 'react-icons/ci'
import Link from 'next/link'


const links = [
  {
      name: "Home",
      path: "/"
  },
  {
      name: "Services",
      path: "/services"
  },
  {
      name: "Resume",
      path: "/resume"
  },
  {
      name: "Work",
      path: "/work"
  },
  {
      name: "Contact",
      path: "/contact"
  }
]
const MobileNav = () => {
  const pathname = usePathname()

  return (
    <Sheet>
      <SheetTrigger className='flex justify-center items-center '>
        <CiMenuFries className='text-[32px] text-accent'/>
      </SheetTrigger>
      <SheetContent className="flex flex-col" aria-label="Mobile Navigation Menu">
        {/* logo */}
        <div className='mt-20 mb-20 text-center text-2xl'>
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            |Shahriar<span className="text-accent">..</span>
          </h1>
        </Link>
        </div>
        {/* nav */}
        <nav className='flex flex-col justify-center items-center gap-8'>
      {
        links.map((link, index) =>{
            return(
                <Link 
                href={link.path}
                key={index}
                className={`${link.path === pathname && "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent transition-all`}>{link.name}</Link>
            );
        })
      }
    </nav>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
