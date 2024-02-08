import React, { ReactNode } from 'react'
import Image from 'next/image'
import { project2 } from '@/public/assets'
import { RxOpenInNewWindow } from 'react-icons/rx'
import { TbBrandGithub } from 'react-icons/tb'
import { FaFigma } from "react-icons/fa";

interface Props {
    image: string | any;
    projectName: string;
    content: string;
    skills: any;
    githubHref?: string
    figmaHref?: string
    webHref?: string
}

const ProjectCard = ({ image, projectName, skills, content, githubHref, figmaHref, webHref }: Props) => {

    return (
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10 ">
            <div className="flex flex-col xl:flex-row gap-6 ">
                <a className='w-full xl:w-1/2 h-auto relative group' href="#" target='_blank'>
                    <div className="">
                        <Image className='w-full h-full object-contain' src={image} alt='EmailGenImg' />
                    </div>
                </a>
                <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
                    <p className="font-titleFont text-textGreen text-sm tracking-wide">
                        Featured Project
                    </p>
                    <h3 className="text-2xl font-bold">
                        {projectName}
                        {/* K-12 Institution  */}
                    </h3>
                    <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
                        {content}
                        {/* I developed a dynamic landing page for a K-12 Institution, featuring streamlined admission processes, integrated payment options, news updates, event listings, campus galleries, and online registration forms. This user-friendly hub serves as a one-stop destination for prospective students and parents to explore institutional benefits and complete enrollment tasks effortlessly. */}
                    </p>
                    {/* <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
                                An Amazon clone website for visualizing personalized Amazon website. View your products, Add your account with{' '} <span className="text-textGreen">O-auth</span> and then make the purchase using <span className="text-textGreen">Stripe</span>
                            </p> */}
                    <ul className='text-sm md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark' >
                        {skills.map((item: any, idx: number) => {
                            // console.log(item);
                            const { id, skill } = item
                            return (
                                <li key={id}>{skill}</li>
                            )
                        })
                        }

                    </ul>
                    <div className="text-2xl flex gap-4">
                        <a className='hover:text-textGreen duration-300' href={githubHref} target='_blank'>
                            <TbBrandGithub />
                        </a>
                        <a className='hover:text-textGreen duration-300' href={figmaHref} target='_blank'>
                            <FaFigma />
                        </a>
                        <a className='hover:text-textGreen duration-300' href={webHref} target='_blank'>
                            <RxOpenInNewWindow />
                        </a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProjectCard