import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../style';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({ index, name, description, tags, image,
  source_code_link, deployment_link }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring",
        index * 0.5,  // index*0.5 because the delay will increase with the projects as index increases
        0.75
      )}
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className='bg-tertiary p-5 rounded-2xl
       sm:w-[360px] w-full'
      >
        <div
          className='relative w-full
        h-[230px]'
        >
          <img
            src={image}
            alt={name}
            className='w-full h-full object-cover
          rounded-2xl'
          />
          <div
            className='absolute inset-0 flex 
          justify-end m-3 card-img_hover'
          >
            {source_code_link && (
              <div
                onClick={() =>
                  window.open(source_code_link, "_blank")
                }
                className='black-gradient w-10 h-10
                rounded-full flex justify-center items-center cursor-pointer mr-2'
              >
                <img
                  src={github}
                  alt="github"
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            )}
            {deployment_link && (
              <div
                onClick={() =>
                  window.open(deployment_link, "_blank")
                }
                className='black-gradient w-10 h-10
                rounded-full flex justify-center items-center cursor-pointer'
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-1/2 h-1/2 object-contain text-white">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </div>
            )}
          </div>
        </div>
        {/* Div Section for the name and desc of the projs */}
        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>
        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>

    </motion.div>
  )

}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Projects...</p>
        <h2 className={styles.sectionHeadText}> Projects.</h2>
      </motion.div>
      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px]
        max-w-3xl leading-[30px]'
        >
          Dive into a collection of my diverse projects, each showcasing unique tech stacks and
          solutions, depicting my critical thinking and problem solving skills.
          Click on the GitHub icon in the top right corner of each card to explore their source code and learn more.
        </motion.p>
      </div>
      <div className='mt-20 flex flex-wrap gap-7'>
        {projects && projects.length > 0 ? (
          projects.map((project, index) => (
            <ProjectCard
              key={project.name} // Using name as key instead of index
              index={index}
              {...project}
            />
          ))
        ) : (
          <p>No projects to display</p>
        )}
      </div>
    </>
  )
}

// Named export for better Fast Refresh support
const WrappedWorks = SectionWrapper(Works, "");
export default WrappedWorks;