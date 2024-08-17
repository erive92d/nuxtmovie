import Link from 'next/link'
import React from 'react'
import Search from './Search/Search'

export default function Navbar() {
    return (
        <div className='navbar py-8 px-10  bg-gradient-to-b from-40% from-black to-transparent font-thin'>
            <div className=' navbar-start'>
                <div className='text-center'>
                    <h1 className='btn btn-ghost text-2xl text-accent font-bold'>
                        NuxtMovie
                    </h1>
                </div>
                <ul className='px-8 flex gap-2 items-center text-white'>
                    <li>
                        <Link href="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/trending">
                            Tv Shows
                        </Link>
                    </li>
                    <li>
                        <Link href="/videos">
                            Movies
                        </Link>
                    </li>
                    <li>
                        <Link href="/following">
                            New & Popular
                        </Link>
                    </li>
                </ul>
            </div>
            <div className='navbar-end gap-2'>
                <Search />
                <Link href="/login">
                    Login
                </Link>
            </div>
        </div>
    )
}
