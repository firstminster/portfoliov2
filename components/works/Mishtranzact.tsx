import { motion } from 'framer-motion'
import { TiArrowForward } from 'react-icons/ti'

const Mishtranzact = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="w-full">
            <h3 className="flex gap-1 font-medium text-xl font-titleFont" >Frontend Developer <a className='text-textLight hover:text-textGreen duration-300' href="https://mishtranzact.com/" target='_blank'><span className="text-textGreen tracking-wide" >@Mishtranzact</span></a> </h3>
            <p className="text-sm mt-1 font-medium text-textDark" >May 2022 - September 2023</p>
            <ul className="mt-6 flex flex-col gap-3" >
                <li className="text-base flex gap-2 text-textDark">
                    <span className="text-textGreen mt-1" ><TiArrowForward /></span>
                    Spearheaded the development of a dynamic and feature-rich eduTech portal using Javascript, Next.js, Typescript, and Tailwind CSS. This transformative project aimed to seamlessly connect students, teachers, and administrators, fostering an integrated and efficient academic ecosystem.
                </li>
                <li className="text-base flex gap-2 text-textDark">
                    <span className="text-textGreen mt-1" ><TiArrowForward /></span>
                    Achieved a remarkable 20% digitalization of the academic process for the institution through the successful deployment of the education portal. This digital transformation streamlined various academic functions, optimizing efficiency and accessibility.
                </li>
                <li className="text-base flex gap-2 text-textDark">
                    <span className="text-textGreen mt-1" ><TiArrowForward /></span>
                    Implemented features within the platform resulting in an impressive 30% improvement in the ease of records collection and transmission. This not only reduced manual efforts but also enhanced the accuracy and speed of academic record-keeping.
                </li>
            </ul>
        </motion.div>
    )
}

export default Mishtranzact