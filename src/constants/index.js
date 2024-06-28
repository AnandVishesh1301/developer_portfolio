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
      icon: uc,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Collaborated with a team of 26 SOLs to organize orientations for over 8,000 incoming students from diverse majors, ensuring a smooth transition from high school to college.",
        "Underwent rigorous training sessions to familiarize new students with university resources, fostering an inclusive and welcoming environment.",
        "Coordinated daily plans and activities to ensure seamless execution of orientation events, enhancing the overall experience for new students and parents.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: uc,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: kv,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: ceas,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "PHolder",
      company_name: "XYZ COmpany",
      icon: icdcu,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Enim cillum sunt deserunt ullamco laborum nulla enim sunt esse tempor eu. Id fugiat adipisicing id dolore amet qui magna fug.",
        " Nulla enim adipisicing tempor dolor ex culpa eu cupidatat deserunt.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "oluptate laborum culpa excepteur excepteur et nulla quis culpa proident et irure excepteur",
      ],
    },
    {
      title: "PHolder2",
      company_name: "XYZ COmpany",
      icon: kv,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "PHolder ETxt-2 fhgub jvhcguyggewkuye.",
        " Nulla enim adipisicing tempor dolor ex culpa eu cupidatat deserunt.",
        "berjwhgregerhjrejhregjgrgereeere.",
        "oluptate laborum culpa excepteur excepteur et nulla quis culpa proident et irure excepteur",
      ],
    },
    
    
  ];
  
  export const testimonials = [
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
  
  export const projects = [
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