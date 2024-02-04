import React from 'react'
import SectionTitle from './SectionTitle'
import Image from 'next/image'
import { EmailGen, EmailGen2, IcoDemo, Tier, Zapier, project, project2 } from '@/public/assets'
import { AiOutlineYoutube } from 'react-icons/ai'
import { TbBrandGithub } from 'react-icons/tb'
import { RxOpenInNewWindow } from 'react-icons/rx'
import { FaFigma } from "react-icons/fa";
import ProjectCard from './ProjectCard'

const Projects = () => {
    return (
        <section id='project' className='max-w-container mx-auto lgl:px-20 py-24'>
            <SectionTitle title='Some Things I have Built' titleNo='03' />
            <div className="w-full flex flex-col items-center justify-between gap-28 mt-10">
                {/* <ProjectCard image={project2} projectName={"K-12 Institution"} skills={["Nextjs", 'JavaScript', 'Typescript', 'Tailwind CSS', 'React hook form']} content={'I developed a dynamic landing page for a K-12 Institution, featuring streamlined admission processes, integrated payment options, news updates, event listings, campus galleries, and online registration forms. This user-friendly hub serves as a one-stop destination for prospective students and parents to explore institutional benefits and complete enrollment tasks effortlessly.'} /> */}
                {/* Project one */}
                <div className="w-full flex flex-col items-center justify-center gap-28 mt-10 ">
                    <div className="flex flex-col xl:flex-row gap-6 ">
                        <a className='w-full xl:w-1/2 h-auto relative group' href="https://dayspringacademy.co/" target='_blank'>
                            <div className="">
                                <Image className='w-full h-full object-contain' src={project2} alt='EmailGenImg' />
                            </div>
                        </a>
                        <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
                            <p className="font-titleFont text-textGreen text-sm tracking-wide">
                                Featured Project
                            </p>
                            <h3 className="text-2xl font-bold">
                                K-12 Institution
                            </h3>
                            <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
                                A dynamic landing page for a K-12 Institution, featuring streamlined admission processes, integrated payment options, news updates, event listings, campus galleries, and online registration forms. This user-friendly hub serves as a one-stop destination for prospective students and parents to explore institutional benefits and complete enrollment tasks effortlessly.
                            </p>

                            <ul className='text-sm md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark' >
                                <li>Nextjs</li>
                                <li>JavaScript</li>
                                <li>Typescript</li>
                                <li>Tailwind</li>
                                <li>Figma</li>
                            </ul>
                            <div className="text-2xl flex gap-4">
                                <a className='hover:text-textGreen duration-300' href="https://github.com/firstminster/portfoliov2" target='_blank'>
                                    <TbBrandGithub />
                                </a>
                                <a className='hover:text-textGreen duration-300' href="https://www.figma.com/file/pNRi6IWMv9sWtKEpGk5i7e/Dayspring-Academy?type=design&node-id=1%3A2&mode=design&t=DaHzoCTKbGz54IeZ-1" target='_blank'>
                                    <FaFigma />
                                </a>
                                <a className='hover:text-textGreen duration-300' href="https://dayspringacademy.co/" target='_blank'>
                                    <RxOpenInNewWindow />
                                </a>
                            </div>


                        </div>
                    </div>
                </div>
                {/* Project two */}
                <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
                    <div className="flex flex-col xl:flex-row-reverse gap-6">
                        <a className='w-full xl:w-1/2 h-auto relative group' href="https://www.amazon.com/" target='_blank'>
                            <div className="">
                                <Image className='w-full h-full object-contain' src={Tier} alt='EmailGenImg' />
                            </div>
                        </a>
                        <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right  z-10">
                            <p className="font-titleFont text-textGreen text-sm tracking-wide">
                                Featured Project
                            </p>
                            <h3 className="text-2xl font-bold">
                                Amazon clone 2.0
                            </h3>
                            <p className="bg-[#112240] text-sm md:text-base p-2 xl:-mr-16 md:p-6 rounded-md">
                                An Amazon clone website for visualizing personalized Amazon website. View your products, Add your account with{' '} <span className="text-textGreen">O-auth</span> and then make the purchase using <span className="text-textGreen">Stripe</span>
                            </p>
                            <ul className='text-sm md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark' >
                                <li>Nextjs</li>
                                <li>Typescript</li>
                                <li>Next-auth</li>
                                <li>Stripe</li>
                                <li>Vercel</li>
                            </ul>
                            <div className="text-2xl flex gap-4">
                                <a className='hover:text-textGreen duration-300' href="https://github.com/firstminster" target='_blank'>
                                    <TbBrandGithub />
                                </a>
                                {/* <a className='hover:text-textGreen duration-300' href="https://github.com/firstminster" target='_blank'>
                                    <AiOutlineYoutube />
                                </a> */}
                                <a className='hover:text-textGreen duration-300' href="https://github.com/firstminster" target='_blank'>
                                    <RxOpenInNewWindow />
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
                {/* Project three */}
                {/* <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
                    <div className="flex flex-col xl:flex-row gap-6">
                        <a className='w-full xl:w-1/2 h-auto relative group' href="https://www.amazon.com/" target='_blank'>
                            <div className="">
                                <Image className='w-full h-full object-contain' src={EmailGen2} alt='EmailGenImg' />
                            </div>
                        </a>
                        <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
                            <p className="font-titleFont text-textGreen text-sm tracking-wide">
                                Featured Project
                            </p>
                            <h3 className="text-2xl font-bold">
                                Amazon clone 2.0
                            </h3>
                            <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
                                An Amazon clone website for visualizing personalized Amazon website. View your products, Add your account with{' '} <span className="text-textGreen">O-auth</span> and then make the purchase using <span className="text-textGreen">Stripe</span>
                            </p>
                            <ul className='text-sm md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark' >
                                <li>Nextjs</li>
                                <li>Typescript</li>
                                <li>Next-auth</li>
                                <li>Stripe</li>
                                <li>Vercel</li>
                            </ul>
                            <div className="text-2xl flex gap-4">
                                <a className='hover:text-textGreen duration-300' href="https://github.com/firstminster" target='_blank'>
                                    <TbBrandGithub />
                                </a>
                                <a className='hover:text-textGreen duration-300' href="https://github.com/firstminster" target='_blank'>
                                    <AiOutlineYoutube />
                                </a>
                                <a className='hover:text-textGreen duration-300' href="https://github.com/firstminster" target='_blank'>
                                    <RxOpenInNewWindow />
                                </a>
                            </div>
                        </div>
                    </div>
                </div> */}

            </div>
        </section>
    )
}

export default Projects