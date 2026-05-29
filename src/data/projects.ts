import { Project } from "~/types/data";

export const projects: Project[] = [
  {
    id: "resumefreepro",
    title: "Shop Management System",
    description:
      "Developed a full-stack shop management web application enabling shop owners to efficiently track, add, and maintain inventory in real time. Implemented secure user authentication and role-based access control for admin and staff users. Built a comprehensive admin panel for managing products, stock levels, and customer purchase entries. Integrated payment processing and automated bill generation to streamline the customer checkout workflow.",
    techStack: ["MongoDB", "Express.js", "React.js", "Node.js"],
    liveUrl: "#",
    image: "#",
    featured: true,
    highlights: [
      {
        icon: "Zap",
        label: "Real-time Inventory",
        detail: "Instant updates for stock and products",
      },
      {
        icon: "ShieldCheck",
        label: "Role-based Access",
        detail: "Secure authentication for admins & staff",
      },
      {
        icon: "Sparkles",
        label: "Automated Billing",
        detail: "Streamlined checkout and bill generation",
      },
      {
        icon: "Users",
        label: "Admin Dashboard",
        detail: "Comprehensive management for shop owners",
      },
    ],
  },
  {
    id: "ecommerce-clothing-platform",
    title: "E-Commerce Clothing Platform",
    description:
      "Developed a full-stack e-commerce clothing web application using the MERN stack, allowing customers to browse, purchase, and place orders for clothing products with a smooth and responsive shopping experience. Implemented secure user authentication and session management, alongside a dynamic admin panel enabling administrators to manage product listings and update order statuses in real time. Integrated a payment gateway to facilitate seamless and secure online transactions, ensuring a reliable and efficient checkout experience for customers.",
    techStack: ["MongoDB", "Express.js", "React.js", "Node.js"],
    githubUrl: "https://github.com/yourusername/your-ecommerce-repo",
    liveUrl: "#",
    image: "#",
    featured: true,
    highlights: [
      {
        icon: "Zap",
        label: "Smooth Shopping",
        detail: "Responsive product browsing and ordering",
      },
      {
        icon: "ShieldCheck",
        label: "Secure Payments",
        detail: "Integrated reliable payment gateway",
      },
      {
        icon: "Users",
        label: "Admin Panel",
        detail: "Real-time order & product management",
      },
      {
        icon: "Sparkles",
        label: "User Sessions",
        detail: "Secure authentication and session control",
      },
    ],
  },
  {
    id: "traveloop",
    title: "Traveloop – AI-Powered Travel Planning Platform",
    description:
      "Developed a full-stack travel planning platform that centralizes itinerary management, budget tracking, packing checklists, and travel journaling within a modern and responsive user interface. Built interactive trip planning features with Leaflet maps, expense visualization dashboards using Recharts, and community-sharing functionality for discovering and cloning public itineraries. Implemented secure authentication and role-based access control (RBAC) using JWT and bcryptjs, along with a dedicated Admin Console for analytics, user management, and platform oversight. Strengthened backend security through Helmet, strict CORS policies, request sanitization, rate limiting, and robust input validation. Designed a normalized relational database schema using Prisma ORM with SQLite for development and MySQL production readiness.",
    techStack: ["React.js", "Vite", "Tailwind CSS", "Node.js", "Express.js", "Prisma", "MySQL", "JWT", "Leaflet.js"],
    githubUrl: "https://github.com/yourusername/traveloop",
    liveUrl: "#",
    image: "#",
    featured: true,
    highlights: [
      {
        icon: "Zap",
        label: "Interactive Maps",
        detail: "Leaflet maps for trip planning",
      },
      {
        icon: "Users",
        label: "Community Sharing",
        detail: "Discover and clone public itineraries",
      },
      {
        icon: "ShieldCheck",
        label: "Robust Security",
        detail: "JWT auth, RBAC, and strict CORS",
      },
      {
        icon: "Sparkles",
        label: "Expense Tracking",
        detail: "Visual dashboards with Recharts",
      },
    ],
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


