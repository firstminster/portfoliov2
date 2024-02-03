import React, { useState } from 'react'
import SectionTitle from './SectionTitle'
import ReactBD from './works/ReactBD'
import MotherBoard from './works/MotherBoard'
import Mishtranzact from './works/Mishtranzact'
import Vattn from './works/Vattn'
import Innovatum from './works/Innovatum'
import Integrify from './works/Integrify'


const Experience = () => {
    // const [workMotherBoard, setworkMotherBoard] = useState(true) 
    const [workMishtranzact, setworkMishtranzact] = useState(true)
    const [workVattn, setworkVattn] = useState(false)
    const [workInnovatum, setworkInnovatum] = useState(false)
    const [workIntegrify, setworkIntegrify] = useState(false)


    // const handleworkMotherBoard = () => {
    //     setworkMotherBoard(true)
    //     setworkMishtranzact(false)
    //     setworkVattn(false)
    //     setworkInnovatum(false)

    //     setworkIntegrify(false)
    // }

    const handleworkMishtranzact = () => {
        // setworkMotherBoard(false)
        setworkMishtranzact(true)
        setworkVattn(false)
        setworkInnovatum(false)
        setworkIntegrify(false)
    }

    const handleworksetworkVattn = () => {
        // setworkMotherBoard(false)
        setworkMishtranzact(false)
        setworkVattn(true)
        setworkInnovatum(false)
        setworkIntegrify(false)
    }

    const handleworksetworkInnovatum = () => {
        // setworkMotherBoard(false)
        setworkMishtranzact(false)
        setworkVattn(false)
        setworkInnovatum(true)
        setworkIntegrify(false)
    }

    const handleIntegrify = () => {
        // setworkMotherBoard(false)
        setworkMishtranzact(false)
        setworkVattn(false)
        setworkInnovatum(false)
        setworkIntegrify(true)
    }



    return (
        <section id='experience' className='max-w-containerxs mx-auto py-10 lgl:py-24 px-4'>
            <SectionTitle title='Where I have Worked' titleNo='02' />
            <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
                <ul className='md:w-32 flex flex-col' >
                    {/* <li onClick={handleworkMotherBoard} className={`${workMotherBoard ? 'border-l-textGreen text-textGreen' : 'border-l-hoverColor text-textDark'} border-l-2  bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8`} >MotherBoard</li> */}
                    <li onClick={handleworkMishtranzact} className={`${workMishtranzact ? 'border-l-textGreen text-textGreen' : 'border-l-hoverColor text-textDark'} border-l-2  bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8`} >Mishtranzact</li>
                    <li onClick={handleworksetworkVattn} className={`${workVattn ? 'border-l-textGreen text-textGreen' : 'border-l-hoverColor text-textDark'} border-l-2  bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8`} >Vattn</li>
                    <li onClick={handleIntegrify} className={`${workIntegrify ? 'border-l-textGreen text-textGreen' : 'border-l-hoverColor text-textDark'} border-l-2  bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8`} >Integrify</li>
                    <li onClick={handleworksetworkInnovatum} className={`${workInnovatum ? 'border-l-textGreen text-textGreen' : 'border-l-hoverColor text-textDark'} border-l-2  bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8`} >Innovatum</li>


                </ul>
                {/* {workMotherBoard && <MotherBoard />} */}
                {workMishtranzact && <Mishtranzact />}
                {workVattn && <Vattn />}
                {workIntegrify && <Integrify />}
                {workInnovatum && <Innovatum />}

            </div>
        </section>
    )
}

export default Experience
