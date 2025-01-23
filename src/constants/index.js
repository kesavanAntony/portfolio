import project1 from "../assets/projects/tomato.png";
import project2 from "../assets/projects/razo.png";
import project3 from "../assets/projects/portfolio.png";
import project4 from "../assets/projects/imagify.png";

export const HERO_CONTENT = `I am a passionate Web developer with a knack for crafting robust and scalable web applications. With a years of hands-on experience, I have honed my skills in front-end technologies like React js, as well as back-end technologies like Node.js, Express.js, MySQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile Web developer with a passion for creating efficient and user-friendly web applications. With 1 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, Express.js, MySQL and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "Oct 2023 - Present",
    role: "Web Developer",
    company: "Optimista Training & Development India Pvt Ltd",
    description: `Developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["HTML", "CSS", "Bootstrap", "Javascript", "React.js", "NodeJs", "Express", "MongoDB", "Mysql"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce platform designed with features such as product listing, user authentication, an add to cart option, secure payment methods, and an admin panel for managing products, orders, and users.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
    link:"https://tomato-frontend-do8k.onrender.com/"
  },
  {
    title: "Text to Images generator with AI",
    image: project4,
    description:
      "An AI-powered application that generates high-quality images based on textual prompts. It leverages advanced machine learning models to understand text input and create visually appealing and contextually accurate outputs. The tool can be used for creative design, content generation, and more.",
    technologies: ["HTML", "Tailwind", "Framer Motion" ,"React", "Node.js", "MongoDB"],
    link:"https://imagify-frontend-34qv.onrender.com/"
  },
  {
    title: "Mobile Recharge App",
    image: project2,
    description:
      "An application designed for managing recharge payments, featuring functionalities such as generating recharge payment links via SMS, wallet recharge options, and full CRUD (Create, Read, Update, Delete) operations for managing user and payment data.",
    technologies: ["HTML", "CSS", "React", "Node.js", "Mysql"],
    link:"https://razo.co.in/login"
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML","Tailwind", "React",],
    link:"https://kesavanportfolio.netlify.app"
  },
];

export const CONTACT = {
  address: "48, Velunayakar Street, Sholinganallur, Chennai",
  phoneNo: "+91 8525905774",
  email: "kesavanantony5@gmail.com",
};
