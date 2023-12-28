import Image from "next/image"
import SectionTitle from "./SectionTitle"
import { AiFillThunderbolt } from 'react-icons/ai'
import { profileImg, profileImg2 } from "@/public/assets"


const About = () => {
    return (
        <section id="about" className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8">
            <SectionTitle title='About Me' titleNo='01' />
            <div className="flex flex-col lgl:flex-row gap-16">
                <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
                    <p >
                        Greetings! I'm Chinecherem Harry, a passionate frontend developer with a keen eye for crafting visually stunning and user-friendly web experiences. With a solid foundation in HTML, CSS, and JavaScript, I bring a creative and detail-oriented approach to every project I undertake.
                    </p>
                    <p className="">
                        My expertise extends to mastering modern frontend frameworks, including React.js and Next.js, to build responsive and dynamic interfaces. <span className="text-textGreen"> I take pride in writing clean, efficient code </span> and staying updated on the latest industry trends and best practices.

                    </p>
                    <p>
                        Driven by a love for design, I seamlessly blend my coding skills with a <span className="text-textGreen"> deep appreciation for aesthetics.</span> Whether it's transforming wireframes into polished websites or collaborating with designers to bring visions to life, I'm dedicated to creating interfaces that not only meet but exceed user expectations.
                    </p>
                    <p>
                        As a problem solver at heart, I thrive on tackling challenges and finding elegant solutions. I find joy in collaborating with cross-functional teams, translating complex requirements into functional and intuitive user experiences.
                    </p>
                    <p>
                        The ever-evolving nature of web development excites me, and <span className="text-textGreen">I consider myself a lifelong learner.</span> I actively seek out opportunities to expand my skill set, experimenting with new technologies and frameworks to ensure I stay at the forefront of frontend innovation.
                    </p>
                    <p>Here are a few technologies I have been working with recently:</p>
                    <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6" >
                        <li className="flex items-center gap-2" >
                            <span>
                                <AiFillThunderbolt className='text-textGreen' />
                            </span>
                            Javascript (ES6+)
                        </li>
                        <li className="flex items-center gap-2" >
                            <span>
                                <AiFillThunderbolt className='text-textGreen' />
                            </span>
                            Next.js
                        </li>
                        <li className="flex items-center gap-2" >
                            <span>
                                <AiFillThunderbolt className='text-textGreen' />
                            </span>
                            Reactjs
                        </li>
                        {/* <li className="flex items-center gap-2" >
                            <span>
                                <AiFillThunderbolt className='text-textGreen' />
                            </span>
                            Node.js
                        </li> */}
                        <li className="flex items-center gap-2" >
                            <span>
                                <AiFillThunderbolt className='text-textGreen' />
                            </span>
                            Typescript
                        </li>
                        {/* <li className="flex items-center gap-2" >
                            <span>
                                <AiFillThunderbolt className='text-textGreen' />
                            </span>
                            Express.js
                        </li> */}
                        {/* <li className="flex items-center gap-2" >
                            <span>
                                <AiFillThunderbolt className='text-textGreen' />
                            </span>
                            MongoDB
                        </li> */}
                        <li className="flex items-center gap-2" >
                            <span>
                                <AiFillThunderbolt className='text-textGreen' />
                            </span>
                            Tailwindcss
                        </li>
                        <li className="flex items-center gap-2" >
                            <span>
                                <AiFillThunderbolt className='text-textGreen' />
                            </span>
                            Sass/Scss
                        </li>
                        <li className="flex items-center gap-2" >
                            <span>
                                <AiFillThunderbolt className='text-textGreen' />
                            </span>
                            Git
                        </li>
                        <li className="flex items-center gap-2" >
                            <span>
                                <AiFillThunderbolt className='text-textGreen' />
                            </span>
                            Figma
                        </li>
                        {/* <li className="flex items-center gap-2" >
                            <span>
                                <AiFillThunderbolt className='text-textGreen' />
                            </span>
                            SQL
                        </li> */}
                    </ul>
                </div>
                <div className="w-full lgl:w-1/3 h-80 relative group">
                    <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg ">
                        <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
                            <Image className="rounded-lg h-full object-cover" src={profileImg2} alt={"profile image"} />
                            <div className="hidden lgl:inline-block absolute w-full h-80 bg-textGreen/20 rounded-md top-0 left-0 group-hover:bg-[transparent] duration-300" />
                        </div>
                    </div>
                    <div className="hidden lgl:inline-flex w-full h-80 border-2 border-textGreen rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300" />
                </div>
            </div>
        </section >
    )
}

export default About