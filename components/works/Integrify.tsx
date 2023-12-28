import { motion } from 'framer-motion'
import { TiArrowForward } from 'react-icons/ti'

const Integrify = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="w-full">
            <h3 className="flex gap-1 font-medium text-xl font-titleFont" >Software Engineer<span className="text-textGreen tracking-wide" >@Integrify</span> </h3>
            <p className="text-sm mt-1 font-medium text-textDark" >January 2021 - June 2021</p>
            <ul className="mt-6 flex flex-col gap-3" >
                <li className="text-base flex gap-2 text-textDark">
                    <span className="text-textGreen mt-1" ><TiArrowForward /></span>
                    Engineered the development of engaging and user-centric interfaces for projects that empower and train aspiring developers using React.js, JavaScript, CSS, Node.js, Express, MongoDB, and PostgreSQL.
                </li>
                <li className="text-base flex gap-2 text-textDark">
                    <span className="text-textGreen mt-1" ><TiArrowForward /></span>
                    Actively participated in the training and mentorship of developers, contributing to the social mission of Integrify by helping individuals kick-start their careers in top European companies.
                </li>
                {/* <li className="text-base flex gap-2 text-textDark">
                    <span className="text-textGreen mt-1" ><TiArrowForward /></span>
                    Worked with IoT specialists to integrate sensor technologies seamlessly into the front-end, providing property owners with real-time data and insights into their well management.
                </li> */}
            </ul>
        </motion.div>
    )
}

export default Integrify