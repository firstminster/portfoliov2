import React, { useState } from 'react'
import SectionTitle from './SectionTitle'
import ReactBD from './works/ReactBD'
import MotherBoard from './works/MotherBoard'
import Mishtranzact from './works/Mishtranzact'
import Vattn from './works/Vattn'
import Innovatum from './works/Innovatum'


const Experience = () => {
    const [workMotherBoard, setworkMotherBoard] = useState(true)
    const [workMishtranzact, setworkMishtranzact] = useState(false)
    const [workVattn, setworkVattn] = useState(false)
    const [workInnovatum, setworkInnovatum] = useState(false)

    const [workReactbd, setworkReactbd] = useState(false)


    const handleworkMotherBoard = () => {
        setworkMotherBoard(true)
        setworkMishtranzact(false)
        setworkVattn(false)
        setworkInnovatum(false)

        setworkReactbd(false)
    }

    const handleworkMishtranzact = () => {
        setworkMotherBoard(false)
        setworkMishtranzact(true)
        setworkVattn(false)
        setworkInnovatum(false)

        setworkReactbd(false)
    }

    const handleworksetworkVattn = () => {
        setworkMotherBoard(false)
        setworkMishtranzact(false)
        setworkVattn(true)
        setworkInnovatum(false)

        setworkReactbd(false)
    }

    const handleworksetworkInnovatum = () => {
        setworkMotherBoard(false)
        setworkMishtranzact(false)
        setworkVattn(false)
        setworkInnovatum(true)

        setworkReactbd(false)
    }

    const handleReactbd = () => {
        setworkMotherBoard(false)
        setworkMishtranzact(false)
        setworkVattn(false)
        setworkInnovatum(false)

        setworkReactbd(true)
    }



    return (
        <section id='experience' className='max-w-containerxs mx-auto py-10 lgl:py-24 px-4'>
            <SectionTitle title='Where I have Worked' titleNo='02' />
            <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
                <ul className='md:w-32 flex flex-col' >
                    <li onClick={handleworkMotherBoard} className={`${workMotherBoard ? 'border-l-textGreen text-textGreen' : 'border-l-hoverColor text-textDark'} border-l-2  bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8`} >MotherBoard</li>
                    <li onClick={handleworkMishtranzact} className={`${workMishtranzact ? 'border-l-textGreen text-textGreen' : 'border-l-hoverColor text-textDark'} border-l-2  bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8`} >Mishtranzact</li>
                    <li onClick={handleworksetworkVattn} className={`${workVattn ? 'border-l-textGreen text-textGreen' : 'border-l-hoverColor text-textDark'} border-l-2  bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8`} >Vattn</li>
                    <li onClick={handleworksetworkInnovatum} className={`${workInnovatum ? 'border-l-textGreen text-textGreen' : 'border-l-hoverColor text-textDark'} border-l-2  bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8`} >Innovatum</li>

                    {/* <li onClick={handleReactbd} className={`${workReactbd ? 'border-l-textGreen text-textGreen' : 'border-l-hoverColor text-textDark'} border-l-2  bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8`} >ReactBD</li> */}

                </ul>
                {workMotherBoard && <MotherBoard />}
                {workMishtranzact && <Mishtranzact />}
                {workVattn && <Vattn />}
                {workInnovatum && <Innovatum />}
                {/* {workReactbd && <ReactBD />} */}

            </div>
        </section>
    )
}

export default Experience


{/* {workGoogle && <Google />}
                {workApple && <Apple />}
                {workSplash && <Splash />}
                {workAmazon && <Amazon />} */}

{/* <li onClick={handleGoogle} className={`${workGoogle ? 'border-l-textGreen text-textGreen' : 'border-l-hoverColor text-textDark'} border-l-2  bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8`} >Google</li>
                    <li onClick={handleApple} className={`${workApple ? 'border-l-textGreen text-textGreen' : 'border-l-hoverColor text-textDark'} border-l-2  bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8`} >Apple</li>
                    <li onClick={handleSplash} className={`${workSplash ? 'border-l-textGreen text-textGreen' : 'border-l-hoverColor text-textDark'} border-l-2  bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8`} >Splash</li>
                    <li onClick={handleAmazon} className={`${workAmazon ? 'border-l-textGreen text-textGreen' : 'border-l-hoverColor text-textDark'} border-l-2  bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8`} >Amazon</li> */}

// const handleGoogle = () => {
//     setworkReactbd(false)
//     setworkGoogle(true)
//     setworkApple(false)
//     setworkSplash(false)
//     setworkAmazon(false)
// }

// const handleApple = () => {
//     setworkReactbd(false)
//     setworkGoogle(false)
//     setworkApple(true)
//     setworkSplash(false)
//     setworkAmazon(false)
// }

// const handleSplash = () => {
//     setworkReactbd(false)
//     setworkGoogle(false)
//     setworkApple(false)
//     setworkSplash(true)
//     setworkAmazon(false)
// }

// const handleAmazon = () => {
//     setworkReactbd(false)
//     setworkGoogle(false)
//     setworkApple(false)
//     setworkSplash(false)
//     setworkAmazon(true)
// }