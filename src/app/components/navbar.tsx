'use client'

import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className='bg-transparent mx-auto max-w-2xl'>
            <div className='flex justify-center items-center gap-[70px] p-5 font-normal'>
                <div className='text-base duration-300 hover:bg-transparent hover:px-1 hover:py-2 hover:rounded-[5px]'>
                    <Link href='/#home'>
                        Home
                    </Link>
                </div>
                <div className='text-base duration-300 hover:bg-transparent hover:px-1 hover:py-2 hover:rounded-[5px]'>
                    <Link href='/#projects'>
                        Projects
                    </Link>
                </div>
                <div className='text-base duration-300 hover:bg-transparenthover:px-1 hover:py-2 hover:rounded-[5px]'>
                    <Link href='/#techstacks'>
                        Tech Stacks
                    </Link>
                </div>
                <div className='text-base duration-300 hover:bg-transparent hover:px-1 hover:py-2 hover:rounded-[5px]'>
                    <Link href='/#phase'>
                        Process
                    </Link>
                </div>
                <div className='text-base duration-300 hover:bg-transparent hover:px-1 hover:py-2 hover:rounded-[5px]'>
                    <Link href='/#contact'>
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar

