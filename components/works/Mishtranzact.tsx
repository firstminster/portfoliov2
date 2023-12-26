import { motion } from 'framer-motion'

const Mishtranzact = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="w-full">
            <h3 className="flex gap-1 font-medium text-xl font-titleFont" >Frontend Developer <span className="text-textGreen tracking-wide" >@Mishtranzact</span> </h3>
            <p className="text-sm mt-1 font-medium text-textDark" >May 2022 - Present</p>
        </motion.div>
    )
}

export default Mishtranzact