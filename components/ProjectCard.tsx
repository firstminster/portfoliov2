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
    cssStyle: string;
    cardDetailStyle?: string;
    cardContentStyle?: string
}

const ProjectCard = ({ image, projectName, skills, content, githubHref, figmaHref, webHref, cssStyle, cardDetailStyle, cardContentStyle }: Props) => {

    return (
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10 ">
            <div className={`flex flex-col gap-6 ${cssStyle}`}>
                <a className='w-full xl:w-1/2 h-auto relative group' href={webHref} target='_blank'>
                    <div className="">
                        <Image className='w-full h-full object-contain' src={image} alt='EmailGenImg' />
                    </div>
                </a>
                <div className={`w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right z-10 ${cardDetailStyle}`}>
                    <p className="font-titleFont text-textGreen text-sm tracking-wide">
                        Featured Project
                    </p>
                    <h3 className="text-2xl font-bold">
                        {projectName}
                        {/* K-12 Institution  */}
                    </h3>
                    <p className={`bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md ${cardContentStyle}`}>
                        {content}

                    </p>

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