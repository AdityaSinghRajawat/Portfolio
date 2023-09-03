import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    threejs,
    Glimpse,
    NewsSpace,
    Gossip,
    student,
    frontend,
    back,
    comm,
    learn
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

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React Developer",
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

const technologies = [
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
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "Front-End Development",
        company_name: "",
        icon: frontend,
        iconBg: "#383E56",
        date: "",
        points: [
            "Developed a series of responsive websites and interactive user interfaces.",
            "Achieved proficiency in HTML5, CSS3, and JavaScript fundamentals.",
            "Specialized in responsive web design for optimal user experiences.",
            "Expertise in building single-page applications with React.js.",
        ],
    },
    {
        title: "Back-End Development",
        company_name: "",
        icon: back,
        iconBg: "#E6DEDD",
        date: "",
        points: [
            "Gained back-end development skills with Node.js and Express.",
            "Integrated databases such as MongoDB and MySQL.",
            "Created RESTful APIs for web applications.",
            "Developed full-stack applications with a focus on functionality.",
        ],
    },
    {
        title: "Collaboration and Communication",
        company_name: "",
        icon: comm,
        iconBg: "#383E56",
        date: "",
        points: [
            "Collaborated effectively with diverse teams on web development projects.",
            "Communicated ideas clearly and contributed to group success.",
            "Utilized Git and GitHub for version control and collaborative coding.",
            "Maintained a clean commit history and resolved merge conflicts.",
        ],
    },
    {
        title: "Continuous Learning and Skill Development",
        company_name: "",
        icon: learn,
        iconBg: "#E6DEDD",
        date: "",
        points: [
            "Committed to staying updated with the latest web development trends.",
            "Actively participated in workshops and online courses.",
            "Embraced challenges and problem-solving as opportunities for growth.",
            "Implemented best practices in coding and development.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "Dedicated and quick to learn, Aditya demonstrates a passion for web development. His enthusiasm for coding is contagious.",
        name: "Ajay Singh",
        designation: "Student",
        company: "PIET",
        image: student,
    },
    {
        testimonial:
            "Impressive problem-solving skills! Aditya tackled complex coding challenges with determination and creativity.",
        name: "Riya",
        designation: "Student",
        company: "SKIT",
        image: student,
    },
    {
        testimonial:
            "Aditya has a knack for turning ideas into functional web apps. His coding projects showcase creativity and innovation.",
        name: "Ayush",
        designation: "Student",
        company: "MUJ",
        image: student,
    },
];

const projects = [
    {
        name: "Gossip",
        description:
            "Gossip is an engaging and user-friendly web chat application, facilitating real-time conversations, connecting people effortlessly, and fostering social connections online",
        tags: [
            {
                name: "nodejs",
                color: "blue-text-gradient",
            },
            {
                name: "expressjs",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: Gossip,
        source_code_link: "https://github.com/AdityaSinghRajawat/Gossip-ChattingApp",
    },
    {
        name: "NewsSpace",
        description:
            "Stay informed with breaking news and curated articles from around the world. Your go-to destination for timely, reliable, and personalized news updates.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "newsapi",
                color: "green-text-gradient",
            },
            {
                name: "bootstrap",
                color: "pink-text-gradient",
            },
        ],
        image: NewsSpace,
        source_code_link: "https://github.com/AdityaSinghRajawat/NewsSpace-React",
    },
    {
        name: "Glimpse",
        description:
            "Glimpse is a dynamic social media web app, providing users with a glimpse into the lives of friends and followers through images, updates, and connections.",
        tags: [
            {
                name: "reactjs",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "expressjs",
                color: "pink-text-gradient",
            },
        ],
        image: Glimpse,
        source_code_link: "https://github.com/",
    },
];

export { services, technologies, experiences, testimonials, projects };