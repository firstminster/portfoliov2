import Link from 'next/link'
import React from 'react'
import { TbBrandGithub } from 'react-icons/tb'

const RightSide = () => {
    return (
        <div className='w-full h-full flex flex-col items-center justify-end gap-4 text-textLight'>

            <a href="mailto:promiseharrycyber@gmail.com">
                <p className='w-auto h-60 text-sm rotate-90 tracking-wide text-textGreen inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>promiseharrycyber@gmail.com</p>
            </a>

            <span className="w-[2px] h-32 bg-textDark inline-flex"></span>

        </div>
    )
}

export default RightSide