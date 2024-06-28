import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  docker,
  python,
  git,
  html,
  javascript,
  c_plus_plus,
  nodejs,
  reactjs,
  graphql,
  tailwind,
  typescript,
  threejs,
  ceas,
  kv,
  rec,
  uc,
  icdcu,
  carrent,
  jobit,
  tripguide,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  export const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  export const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    //Redux To Be Replaced with GraphQL
    {
      name: "GraphQL",
      icon: graphql,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    //Mongo DB TO be Replaced with C++
    {
      name: "C++",
      icon: c_plus_plus,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    //Figma To Be Replaced with Python
    {
      name: "figma",
      icon: python,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  export const experiences = [
    {
      title: "Student Orientation Leader",
      company_name: "University of Cincinnati",
      icon: rec,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Collaborated with a team of 26 SOLs to organize orientations for over 8,000 incoming students from diverse majors, ensuring a smooth transition from high school to college.",
        "Underwent rigorous training sessions to familiarize new students with university resources, fostering an inclusive and welcoming environment.",
        "Coordinated daily plans and activities to ensure seamless execution of orientation events, enhancing the overall experience for new students and parents.",
      ],
    },
    {
      title: "Member Services Lead",
      company_name: "UC Campus Rec",
      icon: uc,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Improved the overall experience for UC Campus Rec members by addressing their needs and ensuring a welcoming environment.",
        " Effectively responded to emergency situations, ensuring the safety and well-being of students and staff.",
        "Conducted interviews, trained staff, and managed team operations, fostering growth and leadership among team members.",
        "Managed membership sales, parking, and compliance with access policies, maintaining order during peak times and high traffic.",
      ],
    },
    {
      title: "SWE Intern",
      company_name: "Kinetic Vision",
      icon: kv,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developed a volunteer registration portal for a non-profit assisting Alzheimer's patients, using React, TypeScript, GraphQL, and Keystone.",
        "Automated the conversion of Miro diagrams to Mermaid, significantly improving efficiency and accuracy in data processing which saved 50% of the project time",
        "Worked closely with a team of co-ops, FTE's and clients to deliver impactful solutions, demonstrating strong collaboration and technical skills.",
      ],
    },
    {
      title: "CS 1021 Teaching Assistant",
      company_name: "College of Engineering and Applied Science",
      icon: ceas,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Led lab sessions for over 200 students, guiding them in understanding and applying fundamental C++ programming concepts.",
        "Evaluated student submissions and provided detailed feedback to foster good coding practices and improve programming proficiency, earning the Teaching Assistant of the Year Award for Spring 2024.",
        "Collaborated with faculty, including Dr. William Hawkins, to develop instructional materials and strategies for optimizing student learning experiences.",
        "Ensured the successful completion of weekly assignments by providing consistent support and clarifying complex programming topics.",
      ],
    },
    {
      title: "Undergraduate Research Assistant",
      company_name: "iCDCU Bio-Informatics Lab, College of Medicine",
      icon: icdcu,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developed and upgraded a research management portal, enabling doctors and researchers to safely upload projects and critical client data using Python Flask, JavaScript, and Bootstrap CSS.",
        "Collaborated with a team of four developers and a project manager, tracking progress through regular stand-up calls.",
        "Implemented Agile project development strategies to accommodate client needs and allow for iterative improvements.",
        "Ensured the secure handling and management of sensitive clinical data, maintaining high standards of data protection and privacy.",
      ],
    },
    {
      title: "SWE Intern - Data Engineering/Machine Learning",
      company_name: "Kinetic Vision",
      icon: kv,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Added new features to a web app that stores product testing data and manages user access, utilizing Python, GraphQL, TypeScript, React, and PostgreSQL.",
        " Measured and analyzed the flow of detergent from a syringe under different environments, providing data used by the simulation team to create simulation videos.",
        "Worked closely with cross-functional teams to enhance the functionality and user experience of the web app, ensuring robust data management and access control.",
      ],
    },
    
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
export default { services, technologies, experiences, testimonials, projects };