import { motion } from 'framer-motion'

const Innovatum = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="w-full">
            <h3 className="flex gap-1 font-medium text-xl font-titleFont" >Frontend Developer Intern<span className="text-textGreen tracking-wide" >@Innovatum AB</span> </h3>
            <p className="text-sm mt-1 font-medium text-textDark" >Jan 2022 - May 2022</p>
        </motion.div>
    )
}

export default Innovatum