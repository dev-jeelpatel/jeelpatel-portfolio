import { Project } from "~/types/data";

export const projects: Project[] = [
  {
    id: "resumefreepro",
    title: "Shop Management System",
    description:
      "Developed a full-stack shop management web application enabling shop owners to efficiently track, add, andmaintain inventory in real time.Implemented secure user authentication and role-based access control for admin and staff users.Built a comprehensive admin panel for managing products, stock levels, and customer purchase entries. Integrated payment processing and automated bill generation to streamline the customer checkout workflow.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "React", "AI / NLP", "PDF Generation"],
    liveUrl: "https://cdn.dribbble.com/userupload/46725995/file/5a78bb0bba9fc00466174a6e463903c0.png?resize=1024x768&vertical=center",
    image: "https://cdn.dribbble.com/userupload/46725995/file/5a78bb0bba9fc00466174a6e463903c0.png?resize=1024x768&vertical=center",
    featured: true,
    highlights: [

      {
        icon: "Sparkles",
        label: "AI-Powered Writing",
        detail: "Smart suggestions tailored to the job description",
      },
      {
        icon: "ShieldCheck",
        label: "ATS-Optimized",
        detail: "Passes automated screening at top companies",
      },
      {
        icon: "Zap",
        label: "Instant PDF Export",
        detail: "Download a polished resume in one click",
      },
      {
        icon: "Users",
        label: "1,250+ Users",
        detail: "Rated 4.8/5 — trusted by job seekers worldwide",
      },
    ],
  },
  {
    id: "create-modern-react",
    title: "Ecommerce Fashion Store",
    description:
      "Developed a full-stack e-commerce clothing web application using the MERN stack, allowing customers to browse, purchase, and place orders for clothing products with a smooth and responsive shopping experience. Implemented secure user authentication and session management, alongside a dynamic admin panel enabling administrators to manage product listings and update order statuses in real time. Integrated a payment gateway to facilitate seamless and secure online transactions, ensuring a reliable and efficient checkout experience for customers.",
    techStack: ["Node.js", "React", "TypeScript", "Vite", "Tailwind CSS"],
    npmUrl: "https://www.npmjs.com/package/create-modern-react",
    githubUrl: "https://github.com/abhay-rana/create-modern-react",
    liveUrl: "https://stackblitz.com/~/github.com/abhay-rana/create-modern-react",
    image: "/projects/create-modern-react.jpg",
    featured: true,
  },
  {
    id: "healthmug",
    title: "Traveloop - Your Joruney Buddy",
    description:
      "India's leading online healthcare platform with 100K+ products across Ayurveda, Homeopathy, and wellness categories. Features real-time inventory, PAN India delivery, and free expert consultation.",
    techStack: ["React", "Node.js", "MongoDB", "Express", "Redux"],
    liveUrl: "https://www.healthmug.com",
    image: "/projects/healthmug.jpg",
    featured: true,
  },
  {
    id: "coming-soon-1",
    title: "Coming Soon",
    description:
      "An exciting new project is currently in development. Stay tuned for updates.",
    techStack: ["???"],
    image: "/projects/placeholder.jpg",
    featured: false,
    disabled: true,
  },
  {
    id: "coming-soon-2",
    title: "Coming Soon",
    description:
      "Another innovative project is on the way. Check back soon.",
    techStack: ["???"],
    image: "/projects/placeholder.jpg",
    featured: false,
    disabled: true,
  },
];


