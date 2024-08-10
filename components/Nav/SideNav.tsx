import Link from 'next/link'
import React from 'react'

export default function SideNav() {
    return (
        <div className='bg-gray-900 w-1/6 py-8 space-y-8 border-r border-gray-600'>
            <div className='text-center'>
                <h1 className='btn btn-ghost text-2xl text-green-600'>
                    NuxtMovie
                </h1>
            </div>
            <div className='flex flex-col items-center'>
                <ul className='space-y-4 text-white font-bold'>
                    <li>
                        <p className='font-thin'>
                            News feed
                        </p>
                    </li>
                    <li>
                        <Link href="/">
                            Browse
                        </Link>
                    </li>
                    <li>
                        <Link href="/trending">
                            Trending
                        </Link>
                    </li>
                    <li>
                        <Link href="/videos">
                            Your Videos
                        </Link>
                    </li>
                    <li>
                        <Link href="/following">
                            Following
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
