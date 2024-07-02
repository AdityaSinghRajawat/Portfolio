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
    threejs,
    Glimpse,
    NewsSpace,
    Gossip,
    student,
    frontend,
    promptoasis,
    resushape,
    brainiac,
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
        title: "Full Stack Developer",
        icon: web,
    },
    {
        title: "MERN Stack Developer",
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
        title: "Full Stack Developer Intern",
        company_name: "Learn and Build pvt ltd.",
        icon: frontend,
        iconBg: "#383E56",
        date: "",
        points: [
            "Developed and maintained full-stack applications using MERN Stack.",
            "Collaborated with teams to implement AI-powered features",
            "Contributed to the creation of innovative solutions for various web apps",
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
        name: "ResuShape",
        description:
            "Resushape is a platform for creating resumes using different templates",
        tags: [
            {
                name: "Nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "Django",
                color: "green-text-gradient",
            },
            {
                name: "Amazon S3",
                color: "pink-text-gradient",
            },
            {
                name: "Latex",
                color: "blue-text-gradient",
            },
            {
                name: "Typescript",
                color: "green-text-gradient",
            },
        ],
        image: resushape,
        source_code_link: "https://github.com/Ad-30/resumemaker",
    },
    {
        name: "PromptOasis",
        description:
            "PromptOasis is an AI-powered hub for sharing and creating prompts",
        tags: [
            {
                name: "Nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "Typescript",
                color: "green-text-gradient",
            },
            {
                name: "NextAuth",
                color: "pink-text-gradient",
            },
        ],
        image: promptoasis,
        source_code_link: "https://github.com/AdityaSinghRajawat/PromptOasis-nextjs",
    },
    {
        name: "Brainiac",
        description:
            "AI-powered SaaS platform offering diverse AI tools.",
        tags: [
            {
                name: "Nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "Clerk",
                color: "green-text-gradient",
            },
            {
                name: "AI tools",
                color: "pink-text-gradient",
            },
        ],
        image: brainiac,
        source_code_link: "https://github.com/AdityaSinghRajawat/Brainiac-AI",
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
        source_code_link: "https://github.com/AdityaSinghRajawat/GlimpseServer",
    },
];

export { services, technologies, experiences, testimonials, projects };