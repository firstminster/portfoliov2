import { motion } from 'framer-motion'
import { TiArrowForward } from "react-icons/ti"

const MotherBoard = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="w-full">
            <h3 className="flex gap-1 font-medium text-xl font-titleFont" >Frontend Developer <a className='text-textLight hover:text-textGreen duration-300' href="https://www.usemotherboard.com/" target='_blank'><span className="text-textGreen tracking-wide" >@Motherboard</span></a> </h3>
            <p className="text-sm mt-1 font-medium text-textDark" >October 2023 - Present</p>
            <ul className="mt-6 flex flex-col gap-3" >
                <li className="text-base flex gap-2 text-textDark">
                    <span className="text-textGreen mt-1" ><TiArrowForward /></span>
                    Developed and engineered a cutting-edge Progressive Web App gas station locator, leveraging Javascript, Next.js, Typescript, and Tailwindcss.
                </li>
                <li className="text-base flex gap-2 text-textDark">
                    <span className="text-textGreen mt-1" ><TiArrowForward /></span>
                    Implemented a sophisticated geolocation feature within the gas station locator app, enhancing the precision of locating sources for our energy partners.
                </li>
                <li className="text-base flex gap-2 text-textDark">
                    <span className="text-textGreen mt-1" ><TiArrowForward /></span>
                    Actively collaborated with the development team, contributing to the enhancement of the Motherboard codebase. Worked closely with senior developers to implement new features, address bugs, and optimize existing functionalities.
                </li>
            </ul>
        </motion.div>
    )
}

export default MotherBoard