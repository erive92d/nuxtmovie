import Link from 'next/link';
import React from 'react';
import Search from './Search/Search';

export default function Navbar() {
    return (
        <div className="navbar bg-gradient-to-b from-black/60 to-transparent text-white font-thin px-4 sm:px-6 md:px-10 py-4 sm:py-6 md:py-8">
            <div className="navbar-start">
                <Link href="/" className="btn btn-ghost normal-case text-xl sm:text-2xl font-bold text-accent">
                    NuxtMovie
                </Link>
            </div>

            <div className="navbar-center hidden md:flex">
                <ul className="menu menu-horizontal p-0 space-x-4">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/trending">Tv Shows</Link>
                    </li>
                    <li>
                        <Link href="/videos">Movies</Link>
                    </li>
                    <li>
                        <Link href="/following">New & Popular</Link>
                    </li>
                    <li>
                        <Link href="/login">Login</Link>
                    </li>
                </ul>
            </div>

            <div className="navbar-end flex items-center gap-4">
                <Search />
            </div>

            {/* Responsive Hamburger Menu */}
            <div className="dropdown dropdown-end md:hidden">
                <label tabIndex={0} className="btn btn-ghost">
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/trending">Tv Shows</Link>
                    </li>
                    <li>
                        <Link href="/videos">Movies</Link>
                    </li>
                    <li>
                        <Link href="/following">New & Popular</Link>
                    </li>
                    <li>
                        <Link href="/login">Login</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
