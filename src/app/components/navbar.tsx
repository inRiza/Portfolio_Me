'use client'

import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className='bg-white mx-auto max-w-4xl rounded-[25px] shadow-[0_0_15px_rgba(0,0,0,0.1)]'>
            <div className='flex justify-center items-center gap-[82px] p-5 font-normal'>
                <div className='text-lg'>
                    <Link href='/'>
                        Home
                    </Link>
                </div>
                <div className='text-lg'>
                    <Link href='/#projects'>
                        Projects
                    </Link>
                </div>
                <div className='text-lg'>
                    <Link href='/#about'>
                        About
                    </Link>
                </div>
                <div className='text-lg'>
                    <Link href='/#contact'>
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar

