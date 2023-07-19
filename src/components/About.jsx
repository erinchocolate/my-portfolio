import { motion } from 'framer-motion'
import { styles } from '../styles'
import { github } from '../assets'
import { SectionWrapper } from '../hoc'
import { fadeIn, textVariant } from '../utils/motion'

const About = () => {
  return (
    <>
    <motion.div variants={textVariant}>
      <p className={styles.sectionSubText}>Who I am </p>
      <h3 className={styles.sectionHeadText}>About.</h3>
    </motion.div>

    <div className="w-full flex flex-col">
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-3 flex text-secondary text-[16px] max-w-3xl leading-[30px]"
      >
        Each project is briefly described with a link to the source code and live demos in it. It reflects my ability to solve problems, learn new technologies and build stuff from scratch.
      </motion.p>
    </div>
  </>
  )
}

export default SectionWrapper(About, "about");