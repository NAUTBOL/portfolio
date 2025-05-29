import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "QR Code Generator",
    description: "A versatile QR code generator that allows users to create custom QR codes with various data types and styles.",
    image: "/images/screencapture-localhost-5173-2025-05-29-13_53_08.png",
    tags: ["React", "Node.js", "Tailwind CSS", "TypeScript"],
    demoUrl: "https://qr-code-generator-sooty-two.vercel.app/",
    githubUrl: "https://github.com/NAUTBOL/qr-code-generator"
  },
  {
    id: 2,
    title: "SolarFleets",
    description: "Digitize and automate your fleet management: intelligent document scanning, maintenance tracking, expiration alerts, and performance analysis all in one place.",
    image: "/images/screencapture-solarfleets-es-2025-05-29-14_06_59.png",
    tags: ["React", "Node.js", "Nest.js", "TypeScript", "Refine", "MongoDB", "Ant Design", "OpenAI"],
    demoUrl: "https://www.solarfleets.com/",
    githubUrl: "https://github.com/NAUTBOL/"
  }
];