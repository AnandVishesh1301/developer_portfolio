import React from 'react'
import { Tilt } from 'react-tilt';
import { motion, MotionValue } from 'framer-motion';
import { styles } from '../style';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { faceDirection } from 'three/examples/jsm/nodes/Nodes.js';


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

        This is supposed to be my intro for the About Me Section. <br />
        Sunt irure do enim aute ipsum magna ut deserunt elit duis labore ea anim. Do sint dolor esse cupidatat.
        <br />Voluptate voluptate ut aliquip ex quis aliqua et consequat. Magna duis ut pariatur exercitation consequat aliquip consequat sit anim exercitation. Esse non velit magna proident quis. In laborum nulla adipisicing amet Lorem.
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

export default About