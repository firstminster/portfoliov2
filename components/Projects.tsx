import React from 'react'
import SectionTitle from './SectionTitle'
import Image from 'next/image'
import { EmailGen, EmailGen2, IcoDemo, Tier, Zapier, adminDashboad, adminDashboad2, project, project2 } from '@/public/assets'
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
                {/* Project one */}
                <ProjectCard image={project2} projectName={"K-12 Institution"} skills={[
                    { id: 1, skill: "NextJs" },
                    { id: 2, skill: "JavaScript" },
                    { id: 3, skill: "Typescript" },
                    { id: 4, skill: "Tailwind CSS" },
                    // { id: 5, skill: "React hook form" },
                ]} content={'I developed a dynamic landing page for a K-12 Institution, featuring streamlined admission processes, integrated payment options, news updates, event listings, campus galleries, and online registration forms. This user-friendly hub serves as a one-stop destination for prospective students and parents to explore institutional benefits and complete enrollment tasks effortlessly.'} githubHref='' figmaHref='https://www.figma.com/file/pNRi6IWMv9sWtKEpGk5i7e/Dayspring-Academy?type=design&node-id=1%3A2&mode=design&t=DaHzoCTKbGz54IeZ-1' webHref='https://dayspringacademy.co/' />

                {/* Project two */}
                <ProjectCard image={adminDashboad2} projectName={"ERP Solution for a K-12 Institution"} skills={[
                    { id: 1, skill: "NextJs" },
                    { id: 2, skill: "JavaScript" },
                    { id: 3, skill: "Typescript" },
                    { id: 4, skill: "Tailwind CSS" },
                    { id: 5, skill: "Redux" },
                ]} content={'The ERP solution I developed for a K-12 institution is a comprehensive software platform designed to streamline administrative processes and improve efficiency. It integrates student management, academics, finance, HR, and communication functionalities into a unified system. With intuitive interfaces and customizable features, it facilitates easy access to essential data and enables seamless coordination between departments. By automating routine tasks, providing real-time insights, and fostering better communication, this ERP solution empowers K-12 institutions to enhance productivity, transparency, and ultimately, the quality of education they deliver.'} githubHref='' figmaHref='' webHref='https://portal.dayspringacademy.co/' />

                {/* Project two */}
                {/* <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
                    <div className="flex flex-col xl:flex-row-reverse gap-6">
                        <a className='w-full xl:w-1/2 h-auto relative group' href="#" target='_blank'>
                            <div className="">
                                <Image className='w-full h-full object-contain' src={Tier} alt='EmailGenImg' />
                            </div>
                        </a>
                        <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right  z-10">
                            <p className="font-titleFont text-textGreen text-sm tracking-wide">
                                Featured Project
                            </p>
                            <h3 className="text-2xl font-bold">
                                ERP Solution for a K-12 Institution
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

                                <a className='hover:text-textGreen duration-300' href="#" target='_blank'>
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


// The ERP solution I developed for K-12 institutions is a comprehensive software platform designed to streamline administrative processes and improve efficiency. It integrates student management, academics, finance, HR, and communication functionalities into a unified system. With intuitive interfaces and customizable features, it facilitates easy access to essential data and enables seamless coordination between departments. By automating routine tasks, providing real-time insights, and fostering better communication, my ERP solution empowers K-12 institutions to enhance productivity, transparency, and ultimately, the quality of education they deliver.