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
        "In anim nisi laborum aute qui eu tempor reprehenderit ullamco.",
        "Labore mollit dolor fugiat dolor sunt in laboris minim sit laboris est cillum irure nisi.",
        "Consectetur id dolor mollit non sit sit exercitation do ullamco voluptate aliqua exercitation incididunt pariatur.",
        "Aliqua non Lorem et id commodo non quis.",
      ],
    },
    {
      title: "SWE Itern",
      company_name: "Kinetic Vision",
      icon: kv,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "In anim nisi laborum aute qui eu tempor reprehenderit ullamco.",
        "Labore mollit dolor fugiat dolor sunt in laboris minim sit laboris est cillum irure nisi.",
        "Consectetur id dolor mollit non sit sit exercitation do ullamco voluptate aliqua exercitation incididunt pariatur.",
        "Aliqua non Lorem et id commodo non quis.",
      ],
    },
    {
      title: "CS 1021C TA",
      company_name: "College of Engineering and Applied Science",
      icon: ceas,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "In anim nisi laborum aute qui eu tempor reprehenderit ullamco.",
        "Labore mollit dolor fugiat dolor sunt in laboris minim sit laboris est cillum irure nisi.",
        "Consectetur id dolor mollit non sit sit exercitation do ullamco voluptate aliqua exercitation incididunt pariatur.",
        "Aliqua non Lorem et id commodo non quis.",
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
        "Aute cupidatat magna laboris occaecat adipisicing in nisi enim in.",
      name: "Rodney Clark",
      designation: "Team LEAD",
      company: "Kinetic Vision",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "Velit ullamco id nulla eiusmod exercitation nisi aliqua minim exercitation.",
      name: "Liam Stojanovic",
      designation: "SWE",
      company: "Kinetic Vision",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "Commodo ea veniam enim tempor esse magna minim irure reprehenderit ex.",
      name: "Scott Fasone",
      designation: "Lead SWE",
      company: "Kinetic",
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