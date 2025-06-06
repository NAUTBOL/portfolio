import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "QR Code Generator",
    description: "A versatile, open-source QR code generator, free of charge and ad-free, that enables users to create customized QR codes with support for multiple data types and styling options.",
    image: "/images/qr.png",
    tags: ["React", "Node.js", "Tailwind CSS", "TypeScript"],
    demoUrl: "https://qr.kuantyk.com/",
    githubUrl: "https://github.com/NAUTBOL/qr-code-generator"
  },
  {
    id: 2,
    title: "Smart Fleets Management",
    description: "A comprehensive fleet management system designed to streamline operations, enhance efficiency, and improve overall fleet performance.",
    image: "/images/truck.png",
    tags: ["Refine", "NestJS", "Ant Design", "TypeScript"],
    demoUrl: "https://www.solarfleets.com/",
    githubUrl: "https://github.com/NAUTBOL/"
  },
  {
    id: 3,
    title: "OCR Image to Text",
    description: "An open-source OCR (Optical Character Recognition) tool that converts images into editable text, supporting multiple languages and various image formats.",
    image: "/images/ocr.png",
    tags: ["Node.js", "Tesseract.js", "JavaScript"],
    demoUrl: "https://ocr.kuantyk.com/",
    githubUrl: "https://github.com/NAUTBOL/vision-scribe-dark"
  }
];