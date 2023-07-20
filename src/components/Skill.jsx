import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";
import {skills} from "../constants"

const Skill = () => {
  return (
    <>
      <motion.div variants={textVariant}>
        <p className={styles.sectionSubText}>What I have learned</p>
        <h3 className={styles.sectionHeadText}>Skills.</h3>
      </motion.div>

      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {skills.map((skill) => (
          <div className="w-28 h-28" key={skill.name}>
            <BallCanvas icon={skill.icon} />
            <p className="text-secondary text-[16px] text-center">{skill.name}</p>
          </div>
        ),)}
      </div>
    </>
    
  )
}

export default SectionWrapper(Skill, "skill")