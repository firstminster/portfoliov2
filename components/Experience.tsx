import React, { useState } from 'react'
import SectionTitle from './SectionTitle'
import ReactBD from './works/ReactBD'
import Google from './works/Google'
import Apple from './works/Apple'
import Splash from './works/Splash'
import Amazon from './works/Amazon'

const Experience = () => {
    const [workReactbd, setworkReactbd] = useState(true)
    const [workGoogle, setworkGoogle] = useState(false)
    const [workApple, setworkApple] = useState(false)
    const [workSplash, setworkSplash] = useState(false)
    const [workAmazon, setworkAmazon] = useState(false)

    const handleReactbd = () => {
        setworkReactbd(true)
        setworkGoogle(false)
        setworkApple(false)
        setworkSplash(false)
        setworkAmazon(false)
    }

    const handleGoogle = () => {
        setworkReactbd(false)
        setworkGoogle(true)
        setworkApple(false)
        setworkSplash(false)
        setworkAmazon(false)
    }

    const handleApple = () => {
        setworkReactbd(false)
        setworkGoogle(false)
        setworkApple(true)
        setworkSplash(false)
        setworkAmazon(false)
    }

    const handleSplash = () => {
        setworkReactbd(false)
        setworkGoogle(false)
        setworkApple(false)
        setworkSplash(true)
        setworkAmazon(false)
    }

    const handleAmazon = () => {
        setworkReactbd(false)
        setworkGoogle(false)
        setworkApple(false)
        setworkSplash(false)
        setworkAmazon(true)
    }

    return (
        <section id='experience' className='max-w-containerxs mx-auto py-10 lgl:py-24 px-4'>
            <SectionTitle title='Where I have Worked' titleNo='02' />
            <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
                <ul className='md:w-32 flex flex-col' >
                    <li onClick={handleReactbd} className={`${workReactbd ? 'border-l-textGreen text-textGreen' : 'border-l-hoverColor text-textDark'} border-l-2  bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8`} >ReactBD</li>
                    <li onClick={handleGoogle} className={`${workGoogle ? 'border-l-textGreen text-textGreen' : 'border-l-hoverColor text-textDark'} border-l-2  bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8`} >Google</li>
                    <li onClick={handleApple} className={`${workApple ? 'border-l-textGreen text-textGreen' : 'border-l-hoverColor text-textDark'} border-l-2  bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8`} >Apple</li>
                    <li onClick={handleSplash} className={`${workSplash ? 'border-l-textGreen text-textGreen' : 'border-l-hoverColor text-textDark'} border-l-2  bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8`} >Splash</li>
                    <li onClick={handleAmazon} className={`${workAmazon ? 'border-l-textGreen text-textGreen' : 'border-l-hoverColor text-textDark'} border-l-2  bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8`} >Amazon</li>
                </ul>
                {workReactbd && <ReactBD />}
                {workGoogle && <Google />}
                {workApple && <Apple />}
                {workSplash && <Splash />}
                {workAmazon && <Amazon />}
            </div>
        </section>
    )
}

export default Experience