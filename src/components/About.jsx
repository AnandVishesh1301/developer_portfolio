import React from 'react'
import { Tilt } from 'react-tilt';
import { motion, MotionValue } from 'framer-motion';
import { styles } from '../style';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { faceDirection } from 'three/examples/jsm/nodes/Nodes.js';
import { SectionWrapper } from '../hoc';


const ServiceCard = ({ index, title, icon }) => {
  return (
    // <p> {title}</p>
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-white font-bold text-center text-[20px]'>{title}</h3>

        </div>
      </motion.div>

    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}
        > Introduction</p>
        <h2 className={styles.sectionHeadText}
        >Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm Vishesh, a fourth-year Computer Science major at the University of Cincinnati who loves turning ideas into real, usable tools. I build solutions from scratch—CLI tools for developer workflows, agentic bots, and data dashboards—and have shipped across bioinformatics research, deploying AI agents at Kinetic Vision, and leading product sprints from MVPs to production. Currently I’m building Soar AI Labs (invisible version control) and exploring reasoning + reinforcement learning as a Research Assistant at CincyNLP. I care about fast, reliable systems, making smaller LLMs more efficient, and the intersection of AI, automation, and UX; if you’re building in this space, I’d love to connect.
      </motion.p>
      <div
        className='mt-20 flex flex-wrap gap-10'
      >
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}

      </div>
    </>
  )
}

export default SectionWrapper(About, "about");