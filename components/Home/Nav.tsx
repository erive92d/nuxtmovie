"use client"
import React, { useState } from 'react'

type NavType = {
    onSearch: (query: string) => void;

}

export default function Nav({ onSearch }: NavType) {

    const [inputValue, setInputValue] = useState<string>("")

    const handleValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value
        onSearch(value)
        setInputValue(value)
    }

    return (
        <div className='px-8 py-8'>
            <input onChange={handleValue} value={inputValue} placeholder='search' className='input input-ghost border-gray-600' type='text' />
        </div>
    )
}
