import { useRef, useState } from 'react'
import { firstminster, logo } from '@/public/assets'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { MdOutlineClose } from 'react-icons/md'
import { TbBrandGithub } from 'react-icons/tb'
import { SlSocialFacebook, SlSocialInstagram, SlSocialLinkedin, SlSocialYoutube } from 'react-icons/sl'

const Navbar = () => {
    const ref = useRef<string | any>('')
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
        // Update the class name of the clicked link
        const links = document.querySelectorAll('.nav-link')
        links.forEach((link) => {
            link.classList.remove('active')
        });
        e.currentTarget.classList.add('active')
    }

    function handleClick(e: any) {

        if (e.target.contains(ref.current)) {
            // do something with myRef.current
            setShowMenu(false)
        }
    }
    // shadow-navbarShadow



    return (
        <div className='w-full h-20 lg:h-[12vh] sticky top-0 z-50 bg-bodyColor px-4' >
            <div className="max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between">
                <Link onClick={handleScroll} href="#home">

                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                        <Image className='w-14' src={firstminster} alt='logo' />
                    </motion.div>
                </Link>
                <div className='hidden mdl:inline-flex items-center gap-7' >
                    <ul className='flex text-[13px] gap-7'>
                        {/* <Link onClick={handleScroll} href="#home" className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link ' >
                            <motion.li initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.1 }} >Home</motion.li>
                        </Link> */}
                        <Link onClick={handleScroll} href="#about" className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link ' >
                            <motion.li initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.1, delay: 0.1 }}>
                                <span className='text-textGreen' >01.</span> About
                            </motion.li>
                        </Link>
                        <Link onClick={handleScroll} href="#experience" className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link ' >
                            <motion.li initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.1, delay: 0.2 }}>
                                <span className='text-textGreen'>02.</span> Experience
                            </motion.li>
                        </Link>
                        <Link onClick={handleScroll} href="#project" className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link ' >
                            <motion.li initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.1, delay: 0.3 }}>
                                <span className='text-textGreen'>03.</span> Project
                            </motion.li>
                        </Link>
                        <Link onClick={handleScroll} href="#contact" className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link ' >
                            <motion.li initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.1, delay: 0.4 }}>
                                <span className='text-textGreen'>04.</span> Contact
                            </motion.li>
                        </Link>
                    </ul>
                    {/* /assets/resume.pdf */}
                    <a href="https://standardresume.co/r/firstminster" target='_blank'>
                        <motion.button
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className='px-4 py-2 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300'>
                            Resume
                        </motion.button>
                    </a>
                </div>
                {/* Small Icon section */}
                <div onClick={() => setShowMenu(true)} className="w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-textGreen cursor-pointer overflow-hidden group">
                    <span className='w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300'></span>
                    <span className='w-full h-[2px] bg-textGreen inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300'></span>
                    <span className='w-full h-[2px] bg-textGreen inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300'></span>
                </div>
                {
                    showMenu && <div ref={node => ref.current = node} onClick={handleClick} className="absolute lg:hidden top-0 right-0 w-full h-screen bg-[#000000] bg-opacity-50 flex flex-col items-end ">
                        <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.1 }} className="w-[80%] h-full overflow-y-scroll scrollbarHide bg-[#112240] flex flex-col items-center px-4 py-10 relative">
                            <MdOutlineClose onClick={() => setShowMenu(false)} className='tex-3xl text-textGreen cursor-pointer hover:text-red-500 absolute top-4 right-4' />
                            <div className="flex flex-col items-center gap-7">
                                <ul className='flex flex-col text-base gap-7'>
                                    {/* <Link onClick={handleScroll} href="#home" className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link ' >
                                        <motion.li initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.1 }} >Home</motion.li>
                                    </Link> */}
                                    <Link onClick={handleScroll} href="#about" className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link ' >
                                        <motion.li initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.1, delay: 0.1 }}>
                                            <span className='text-textGreen' >01.</span> About
                                        </motion.li>
                                    </Link>
                                    <Link onClick={handleScroll} href="#experience" className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link ' >
                                        <motion.li initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.1, delay: 0.2 }}>
                                            <span className='text-textGreen'>02.</span> Experience
                                        </motion.li>
                                    </Link>
                                    <Link onClick={handleScroll} href="#project" className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link ' >
                                        <motion.li initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.1, delay: 0.3 }}>
                                            <span className='text-textGreen'>03.</span> Project
                                        </motion.li>
                                    </Link>
                                    <Link onClick={handleScroll} href="#contact" className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link ' >
                                        <motion.li initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.1, delay: 0.4 }}>
                                            <span className='text-textGreen'>04.</span> Contact
                                        </motion.li>
                                    </Link>
                                </ul>
                                {/* /assets/resume.pdf */}
                                <a href="https://standardresume.co/r/firstminster" target='_blank'>
                                    <motion.button
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.6, ease: 'easeIn' }}
                                        className=' w-32 h-10 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300'>
                                        Resume
                                    </motion.button>
                                </a>
                                <div className="flex gap-4">
                                    <motion.a initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.8, ease: 'easeIn' }} href="https://github.com/firstminster" target="_blank" rel="noopener noreferrer">
                                        <span className="w-10 h-10 text-xl bg-hoverColor border-[1px] border-[#3f3f46] hover:border-textGreen text-[#e4e4e7] rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                                            <TbBrandGithub />
                                        </span>
                                    </motion.a>
                                    {/* <motion.a initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.85, ease: 'easeIn' }} href="https://github.com/firstminster" target="_blank" rel="noopener noreferrer">
                                        <span className="w-10 h-10 text-xl bg-hoverColor border-[1px] border-[#3f3f46] hover:border-textGreen text-[#e4e4e7] rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                                            <SlSocialYoutube />
                                        </span>
                                    </motion.a> */}
                                    <motion.a initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.85, ease: 'easeIn' }} href="https://github.com/firstminster" target="_blank" rel="noopener noreferrer">
                                        <span className="w-10 h-10 text-xl bg-hoverColor border-[1px] border-[#3f3f46] hover:border-textGreen text-[#e4e4e7] rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                                            <SlSocialLinkedin />
                                        </span>
                                    </motion.a>
                                    {/* <motion.a initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.95, ease: 'easeIn' }} href="https://github.com/firstminster" target="_blank" rel="noopener noreferrer">
                                        <span className="w-10 h-10 text-xl bg-hoverColor border-[1px] border-[#3f3f46] hover:border-textGreen text-[#e4e4e7] rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                                            <SlSocialFacebook />
                                        </span>
                                    </motion.a > */}
                                    <motion.a initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.9, ease: 'easeIn' }} href="https://www.instagram.com/firstminster_/" target="_blank" rel="noopener noreferrer">
                                        <span className="w-10 h-10 text-xl bg-hoverColor border-[1px] border-[#3f3f46] hover:border-textGreen text-[#e4e4e7] rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                                            <SlSocialInstagram />
                                        </span>
                                    </motion.a>
                                </div>
                                <motion.a initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, ease: 'easeIn' }} className='text-sm w-72 tracking-widest text-textGreen text-center mt-4' href="mailto:promiseharrycyber@gmail.com">
                                    <p>promiseharrycyber@gmail.com</p>
                                </motion.a>
                            </div>
                        </motion.div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Navbar

