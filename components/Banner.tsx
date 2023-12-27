import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const Banner = () => {
    const [showMenu, setShowMenu] = useState(false)

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault()
        setShowMenu(false)
        const href = e.currentTarget.href
        const targetId = href.replace(/.*\#/, '')
        const elem = document.getElementById(targetId)
        elem?.scrollIntoView({
            behavior: 'smooth'
        })

    }
    return (
        <section id='home' className='max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4'>
            <motion.h3 initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.6 }} className="text-lg font-titleFont tracking-wide text-textGreen">
                Hi, my name is
            </motion.h3>
            <motion.h1 initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.7 }} className='text-4xl lgl:text-6xl font-bodyFont font-semibold flex flex-col'>Harry Chinecherem. <span className='text-textDark mt-2 lgl:mt-4' >I build things for the web.</span> </motion.h1>
            <motion.p initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.8 }} className="text-base md:max-w-[650px] text-textDark font-medium">
                I’m a frontend software engineer with a focus on creating exceptional digital experiences that are optimized, accessible, visually appealing, and responsive. {' '}
                <Link onClick={handleScroll} href="#about" >
                    {/* <a href="https://www.firstminster.dev/" target='_blank'> */}
                    <span className='text-textGreen inline-flex relative cursor-pointer h-7 overflow-x-hidden group'>Learn More
                        <span className="absolute w-full h-[1px] bg-textGreen left-0 bottom-1 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500" />
                    </span>
                    {/* </a> */}
                </Link>
            </motion.p>
            <Link onClick={handleScroll} href="#project" >
                <motion.button initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.9 }} className='w-52 h-14 text-sm font-titleFont border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300' >
                    Check out my Project!
                </motion.button>
            </Link>
        </section>
    )
}

export default Banner

// I'm a software engineer with 3+ years of experience in Javascript and React. I have a strong foundation in front-end & back-end development and am skilled in creating user-friendly and responsive web applications using React and its ecosystem.

// I am a web developer with 3+ years of experience in React. I have a strong foundation in front-end & back-end development and am skilled in creating user-friendly and responsive web applications using React and its ecosystem.