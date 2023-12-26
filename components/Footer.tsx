import { TbBrandGithub } from "react-icons/tb"
import { SlSocialYoutube } from "react-icons/sl"
import Image from 'next/image'
import { SlSocialLinkedin, SlSocialFacebook, SlSocialInstagram } from "react-icons/sl"
import { heart } from "@/public/assets"

const Footer = () => {
    return (
        <>

            <div className="hidden mdl:inline-flex xl:hidden items-center justify-center w-full py-6 gap-4" >
                <a href="https://github.com/firstminster" target="_blank" rel="noopener noreferrer">
                    <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                        <TbBrandGithub />
                    </span>
                </a>
                {/* <a href="https://github.com/firstminster" target="_blank" rel="noopener noreferrer">
                <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                    <SlSocialYoutube />
                </span>
            </a> */}
                <a href="https://www.linkedin.com/in/chinecherem/" target="_blank" rel="noopener noreferrer">
                    <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                        <SlSocialLinkedin />
                    </span>
                </a>
                {/* <a href="https://github.com/firstminster" target="_blank" rel="noopener noreferrer">
                <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                    <SlSocialFacebook />
                </span>
            </a> */}
                <a href="https://www.instagram.com/firstminster_/" target="_blank" rel="noopener noreferrer">
                    <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                        <SlSocialInstagram />
                    </span>
                </a>
                {/* flex items-center justify-center */}
            </div>
            <div className='max-w-containerxs mx-auto text-center w-full py-6 gap-4 text-[11px] '>
                <span className="flex items-center justify-center text-textDark">
                    {/* Design Inspiration by <a className='text-textLight hover:text-textGreen duration-300 mx-1' href="/">Brittany Chiang</a> and */}

                    Coded with <Image className='w-3 h-3 mx-2' src={heart} alt='heart' /> by <a className='text-textLight hover:text-textGreen duration-300 ml-1' href="https://github.com/firstminster/portfoliov2" target='_blank'>Firstminster</a>
                    <span className="inline mx-1"> {' '}&copy; {new Date().getFullYear()} </span>
                </span>
                <span className="text-textDark">Built with <a className='text-textLight hover:text-textGreen duration-300' href="https://nextjs.org/" target='_blank'>Next.js</a> and <a className='text-textLight hover:text-textGreen  duration-300' href="https://tailwindcss.com/" target='_blank'>Tailwind CSS</a>, deployed with <a className='text-textLight hover:text-textGreen duration-300 ' href="https://vercel.com/dashboard" target='_blank'>Vercel</a>.</span>

            </div>
        </>
    )
}

export default Footer