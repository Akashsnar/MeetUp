import React from 'react'
import Link from 'next/Link'
import Image from 'next/Image'
import MobilNav from './MobileNav'


const Navbar = () => {
  return (
    <nav className='flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10'>
      <Link href="/" className='flex items-center gap-1'>
        <Image
          src="/icons/logo.svg"
          width={32}
          height={32}
          alt="Zoom logo"
          className='max-sm:size-10'
        />
        <p className='text-[1.8rem] font-extrabold text-white max-sm:hidden' >Zoom</p>
      </Link>

<div className='flex-between gap-5'>
{/* need Clerk */}
<MobilNav/>

</div>

    </nav>
  )
}

export default Navbar