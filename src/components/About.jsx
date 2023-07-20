import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { contacts, about } from "../constants";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant}>
        <p className={styles.sectionSubText}>Who I am </p>
        <h3 className={styles.sectionHeadText}>About.</h3>
      </motion.div>

      <div className="w-full flex flex-col gap-5">
        {about.points.map((point) => (
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-3 flex text-secondary text-[16px] max-w-3xl leading-[30px]"
          >
            {point}
          </motion.p>
        ))}

        <div className="flex flex-row gap-5">
          {contacts.map((contact) => (
            <button
              key={contact.name}
              onClick={() => window.open(contact.link, "_blank")}
              className="w-50 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={contact.icon}
                alt={contact.name}
                className="w-1/2 h-1/2 m-2 object-contain"
              />
              <p className="m-3">
              {contact.name}
              </p>

            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
