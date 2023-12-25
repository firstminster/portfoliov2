import Link from 'next/link'
import React from 'react'
import { TbBrandGithub } from 'react-icons/tb'

const RightSide = () => {
    return (
        <div className='w-full h-full flex flex-col items-center justify-end gap-4 text-textLight'>
            {/* <div className='flex flex-col gap-4'> */}
            <Link href="mailto:promiseharrycyber@gmail.com">
                <p className=' text-sm rotate-90 tracking-wide text-textGreen inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>reactbd.proton.me</p>
            </Link>
            {/* <span className="block">
                <a href="https://github.com/firstminster" target="_blank" rel="noopener noreferrer">
                    <span className="invisible w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                        <TbBrandGithub />
                    </span>
                </a>
            </span> */}
            <span className="w-[2px] h-32 bg-textDark inline-flex"></span>
            {/* </div> */}
        </div>
    )
}

export default RightSide