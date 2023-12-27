import { motion } from 'framer-motion'
import { TiArrowForward } from 'react-icons/ti'

const Mishtranzact = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="w-full">
            <h3 className="flex gap-1 font-medium text-xl font-titleFont" >Frontend Developer <a className='text-textLight hover:text-textGreen duration-300' href="https://mishtranzact.com/" target='_blank'><span className="text-textGreen tracking-wide" >@Mishtranzact</span></a> </h3>
            <p className="text-sm mt-1 font-medium text-textDark" >May 2022 - Present</p>
            <ul className="mt-6 flex flex-col gap-3" >
                <li className="text-base flex gap-2 text-textDark">
                    <span className="text-textGreen mt-1" ><TiArrowForward /></span>
                    Write modern, performant, maintainable code for a diverse array of client and internal projects.
                </li>
                <li className="text-base flex gap-2 text-textDark">
                    <span className="text-textGreen mt-1" ><TiArrowForward /></span>
                    Work with a variety of different languages, platform, frameworks, and content management systems such as Javascript, Typescript, Gatsby, React, Craft, WordPress, Prismic, and Netflify.
                </li>
                <li className="text-base flex gap-2 text-textDark">
                    <span className="text-textGreen mt-1" ><TiArrowForward /></span>
                    Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis.
                </li>
            </ul>
        </motion.div>
    )
}

export default Mishtranzact