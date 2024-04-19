import { FaHtml5, FaCss3Alt, FaReact, FaGit } from "react-icons/fa";
import { TbBrandJavascript, TbApi, TbBrandFirebase } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";

export const projects = [
    {
        id: 1,
        title: "Messenger Application", 
        image: "/assets/messenger.png",
        description: "This is a simple mesenger application built with React and firebase",
        link1: "https://capable-praline-4278cd.netlify.app/",
        link2: "https://github.com/offiong-funmilola/Messenger-application"
    },
    {
        id: 2,
        title: "Weather Application", 
        image: "/assets/weather.png",
        description: "The Weather application allow users to have access to weather data throughout the globe, so as to make informed decisions. ",
        link1: "https://sunny-gnome-616413.netlify.app/",
        link2: "https://github.com/offiong-funmilola/Weather-App"
    },
    {
        id: 3,
        title: "Simple Banking System Implementation", 
        image: "/assets/tsf.png",
        description: "A Banking System Implementation built with React Js, powered by firebase backend. Allows customers to check their account balnace, make transactions and see their transaction details",
        link1: "https://fanciful-pithivier-b94539.netlify.app/",
        link2: "https://github.com/offiong-funmilola/Hephzibah-Banking-TSF-Task2"
    },
    {
        id: 4, title: "Calculator", 
        image: "/assets/calculator.jpeg",
        description: "A simple calculator Project built with vanilla javascript",
        link1: "https://classy-conkies-a38f99.netlify.app/",
        link2: "https://github.com/offiong-funmilola/Calculator"
    },   
]
export const certifications = [
    {
    id: 1,
    title: "Programming with Javascript",
    image: "/assets/Certificateimage.png",
    link1: "https://www.coursera.org/account/accomplishments/verify/UUABHGY5BA63"
    },
    {
    id: 2,
    title: "Advanced React",
    image: "/assets/Advancedreact.jpeg",
    link: "https://www.coursera.org/account/accomplishments/certificate/CUUHCKY8WWKE"
    }
]
export const skills = [
    {
        title: "HTML 5",
        icon: FaHtml5,
    },
    {
        title: "CSS 3",
        icon: FaCss3Alt
    },
    {
        title: "Javascript",
        icon: TbBrandJavascript
    },
    {
        title: "React",
        icon: FaReact,
    },
    {
        title: "Tailwind CSS",
        icon: SiTailwindcss,
    },
    {
        title: "Firebase",
        icon: TbBrandFirebase,
    },
    {
        title: "Git",
        icon: FaGit
    },
    {
        title: "REST API",
        icon: TbApi
    },
];
export const about = "I am a Front-end Engineer with strong analytic background and desire to build functional and aesthetically pleasing user interfaces without sacrificing business objectives. I am able to deliver well-structured pixel-perfect implementation of user interface/user experience designs."