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
                    Spearheaded the front-end development of a comprehensive ERP solution tailored to meet the needs of K-12 institutions, resulting in a 30% reduction in administrative workload through streamlined processes.
                </li>
                <li className="text-base flex gap-2 text-textDark">
                    <span className="text-textGreen mt-1" ><TiArrowForward /></span>
                    Developed a visually appealing landing page for a k-12 institution, highlighting admission enrollment and showcasing institutional benefits.
                </li>
                <li className="text-base flex gap-2 text-textDark">
                    <span className="text-textGreen mt-1" ><TiArrowForward /></span>
                    Integrated online application forms and enrollment portals, resulting in a 25% increase in online admissions submissions.
                </li>
                <li className="text-base flex gap-2 text-textDark">
                    <span className="text-textGreen mt-1" ><TiArrowForward /></span>
                    Integrated third-party APIs for payment processing and student information systems, facilitating smooth admissions and enrollment procedures.
                </li>
                <li className="text-base flex gap-2 text-textDark">
                    <span className="text-textGreen mt-1" ><TiArrowForward /></span>
                    Collaborated with backend developers to ensure seamless integration of frontend components with backend systems, enhancing overall system functionality and reliability.
                </li>
            </ul>
        </motion.div>
    )
}

export default Mishtranzact