import { motion } from 'framer-motion'
import { TiArrowForward } from 'react-icons/ti'

const Vattn = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="w-full">
            <h3 className="flex gap-1 font-medium text-xl font-titleFont" >Frontend Developer <span className="text-textGreen tracking-wide" >@Vattn</span> </h3>
            <p className="text-sm mt-1 font-medium text-textDark" >January 2022 - May 2022</p>
            <ul className="mt-6 flex flex-col gap-3" >
                <li className="text-base flex gap-2 text-textDark">
                    <span className="text-textGreen mt-1" ><TiArrowForward /></span>
                    Engineered and contributed to the development of intuitive interfaces for property owners to manage their private wells seamlessly using Javascript, ReactJs, and CSS.
                </li>
                <li className="text-base flex gap-2 text-textDark">
                    <span className="text-textGreen mt-1" ><TiArrowForward /></span>
                    Collaborated closely with backend developers, IoT specialists, and designers, ensuring a cohesive integration within the overall software ecosystem.
                </li>
                <li className="text-base flex gap-2 text-textDark">
                    <span className="text-textGreen mt-1" ><TiArrowForward /></span>
                    Worked with IoT specialists to integrate sensor technologies seamlessly into the front-end, providing property owners with real-time data and insights into their well management.
                </li>
            </ul>
        </motion.div>
    )
}

export default Vattn