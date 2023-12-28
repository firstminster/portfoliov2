import { motion } from 'framer-motion'
import { TiArrowForward } from 'react-icons/ti'

const Innovatum = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="w-full">
            <h3 className="flex gap-1 font-medium text-xl font-titleFont" >Software Engineer Intern<a className='text-textLight hover:text-textGreen duration-300' href="https://innovatumsciencepark.se/" target='_blank'><span className="text-textGreen tracking-wide" >@Innovatum</span></a> </h3>
            <p className="text-sm mt-1 font-medium text-textDark" >November 2019 - March 2020</p>
            <ul className="mt-6 flex flex-col gap-3" >
                <li className="text-base flex gap-2 text-textDark">
                    <span className="text-textGreen mt-1" ><TiArrowForward /></span>
                    Spearheaded the development of a real-time board that tracks the various startups’ incubating stage using React.js and JavaScript and third-party API integrations.
                </li>
                <li className="text-base flex gap-2 text-textDark">
                    <span className="text-textGreen mt-1" ><TiArrowForward /></span>
                    Collaborated with experienced developers and cross-functional teams, actively participating in the development process, and code reviews.
                </li>
                {/* <li className="text-base flex gap-2 text-textDark">
                    <span className="text-textGreen mt-1" ><TiArrowForward /></span>
                    Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis.
                </li> */}
            </ul>
        </motion.div>
    )
}

export default Innovatum