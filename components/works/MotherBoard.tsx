import { motion } from 'framer-motion'

const MotherBoard = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="w-full">
            <h3 className="flex gap-1 font-medium text-xl font-titleFont" >Frontend Developer <span className="text-textGreen tracking-wide" >@Motherboard</span> </h3>
            <p className="text-sm mt-1 font-medium text-textDark" >October 2023 - Present</p>
        </motion.div>
    )
}

export default MotherBoard