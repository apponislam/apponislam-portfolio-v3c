export const personalInfo = {
    name: "Appon Islam",
    role: "Full Stack Developer",
    tagline: "Building high-performance, scalable web applications with robust backend systems and seamless API integrations.",
    email: "appon.islam@example.com",
    location: "Dhaka, Bangladesh",
    resumeUrl: "/resume.pdf",
    profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1000",
    socials: [
        { name: "GitHub", url: "https://github.com/apponislam", icon: "CodeXml" },
        { name: "LinkedIn", url: "https://linkedin.com/in/apponislam", icon: "UserCircle" },
        { name: "Twitter", url: "https://twitter.com/apponislam", icon: "Send" },
    ],
};

export const skills = [
    "HTML",
    "CSS",
    "Bootstrap",
    "Tailwind CSS",
    "JavaScript",
    "TypeScript",
    "React.js",
    "Next.js",
    "Redux",
    "RTK Query",
    "Node.js",
    "Express.js",
    "REST API",
    "Prisma",
    "Mongoose",
    "Socket.IO",
    "MongoDB",
    "PostgreSQL",
    "SQL",
    "NoSQL",
    "Git",
    "GitHub",
    "CI/CD",
    "Nginx",
    "Firebase",
    "Netlify",
    "Vercel",
    "Postman",
    "Creative Problem Solving",
    "Time Management",
    "Teamwork",
    "Professionalism",
    "Effective Communication",
];

export const experience = [
    {
        title: "Senior Full Stack Developer",
        company: "Tech Innovators",
        period: "2023 - Present",
        description: "Leading the development of enterprise-grade web applications using Next.js and Node.js. Optimized performance by 40%.",
    },
    {
        title: "Full Stack Developer",
        company: "Web Solutions Ltd.",
        period: "2021 - 2023",
        description: "Developed and maintained multiple client projects. Focused on building responsive UIs and robust backend APIs.",
    },
    {
        title: "Junior Developer",
        company: "StartUp Hub",
        period: "2020 - 2021",
        description: "Assisted in frontend development using React and styling with Tailwind CSS. Collaborated with senior devs on API integration.",
    },
];

export const education = [
    {
        degree: "B.Sc. in Computer Science & Engineering",
        institution: "Daffodil International University",
        period: "2016 - 2020",
        description: "Focused on software engineering, data structures, and algorithms.",
    },
];

export const projects = [
    {
        id: 1,
        title: "NexShop: Enterprise E-Commerce",
        description: "A high-performance enterprise-grade e-commerce solution built for scale and speed.",
        fullDescription:
            "NexShop is a cutting-edge e-commerce platform engineered to provide a seamless shopping experience for thousands of concurrent users. The system leverages a microservices-inspired architecture on the frontend using Next.js 15, ensuring lightning-fast page transitions and optimal SEO performance. On the backend, we implemented a robust Node.js and Express server with a MongoDB cluster to handle high-frequency data operations. The integration of Socket.IO allows for real-time inventory tracking and dynamic price updates without requiring page refreshes, providing a truly interactive user experience.",
        image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=90&w=2000",
        gallery: ["https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=1600", "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1600", "https://images.unsplash.com/photo-1523450001312-daa4e2e17f0e?auto=format&fit=crop&q=80&w=1600"],
        tags: ["Next.js 15", "Tailwind CSS v4", "Node.js", "MongoDB", "Socket.IO"],
        category: "Full Stack",
        liveUrl: "https://nexshop-demo.vercel.app",
        githubUrl: "https://github.com/apponislam/nexshop-enterprise",
        keyFeatures: [
            "Real-time Inventory Management: Instant stock updates across all client sessions using WebSocket technology.",
            "Advanced Search Engine: Multi-faceted filtering and full-text search capabilities powered by MongoDB Atlas Search.",
            "Secure Payment Ecosystem: Fully integrated Stripe Checkout with support for multiple currencies and payment methods.",
            "Dynamic Admin Panel: A comprehensive dashboard for managing products, tracking orders, and viewing real-time sales analytics.",
            "Optimized Image Delivery: Next.js Image component integrated with Cloudinary for automated compression and lazy loading.",
        ],
        challenges: "The primary technical hurdle was maintaining data consistency during high-traffic flash sales. We solved this by implementing a Redis-based caching layer and a queuing system for order processing, which decoupled the checkout process from the database writes and ensured 99.9% uptime.",
        technologies: ["Frontend: Next.js 15, React 19, Tailwind CSS v4, Redux Toolkit, RTK Query", "Backend: Node.js, Express.js, Socket.IO, JWT Authentication", "Database: MongoDB Atlas, Redis (Caching)", "DevOps: Docker, GitHub Actions CI/CD, Vercel Deployment"],
        architecture: "The application follows a clean architecture pattern with clear separation between business logic, data access, and UI layers. This ensures that the system remains maintainable and testable as it scales.",
    },
    {
        id: 2,
        title: "TeamSync: Collaborative Workspace",
        description: "A centralized platform for team collaboration, task management, and real-time communication.",
        fullDescription:
            "TeamSync is designed to solve the fragmentation of modern remote work. It brings together task tracking, document sharing, and real-time team communication into a single, cohesive interface. Built with a focus on low latency, the application uses PostgreSQL with Prisma ORM to manage complex relational data with high integrity. The frontend utilizes React's latest features to provide a snappy, application-like feel, while the backend is optimized for horizontal scaling to support growing teams.",
        image: "https://images.unsplash.com/photo-1454165833762-02ac4f40c5e8?auto=format&fit=crop&q=90&w=2000",
        gallery: ["https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600", "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1600", "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=1600"],
        tags: ["React 19", "PostgreSQL", "Prisma", "Express", "Socket.IO"],
        category: "Full Stack",
        liveUrl: "https://teamsync-collab.netlify.app",
        githubUrl: "https://github.com/apponislam/teamsync-workspace",
        keyFeatures: [
            "Interactive Kanban Boards: Drag-and-drop task management with real-time status syncing for all team members.",
            "Granular Access Control: Enterprise-grade RBAC (Role-Based Access Control) system for secure project management.",
            "Real-time Activity Stream: Live notifications and audit logs for every action performed within a workspace.",
            "Rich Text Documentation: Collaborative document editing with markdown support and version history.",
            "Resource Analytics: Visual charts and graphs representing project progress and team productivity.",
        ],
        challenges: "Handling concurrent edits on Kanban boards was a significant challenge. We implemented a robust optimistic UI update strategy combined with server-side validation and conflict resolution using WebSockets to ensure a smooth, zero-latency user experience.",
        technologies: ["Frontend: React 19, TypeScript, Tailwind CSS, Framer Motion, Lucide Icons", "Backend: Node.js, Express, Prisma ORM, Socket.IO", "Database: PostgreSQL (Supabase), Redis for session management", "Tools: Zod for validation, Jest for unit testing"],
        architecture: "TeamSync utilizes a modular monolithic architecture, allowing for easy transitions to microservices if needed. The backend API is strictly versioned and documented using Swagger/OpenAPI standards.",
    },
    {
        id: 3,
        title: "ElitePortfolio: GSAP Experience",
        description: "A premium, high-interaction portfolio showcasing advanced web animations and UI patterns.",
        fullDescription:
            "ElitePortfolio is more than just a website; it's a technical demonstration of modern web capabilities. It explores the boundaries of what's possible with GSAP and ScrollTrigger in a React environment. Every transition, scroll interaction, and micro-animation is meticulously crafted to provide a high-end, cinematic feel without compromising on performance or accessibility. The project serves as a blueprint for high-conversion landing pages that require a strong visual identity.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=90&w=2000",
        gallery: ["https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1600", "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1600", "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=1600"],
        tags: ["Next.js", "GSAP", "ScrollTrigger", "Animation", "UI/UX"],
        category: "Frontend",
        liveUrl: "https://elite-dev-portfolio.vercel.app",
        githubUrl: "https://github.com/apponislam/elite-gsap-portfolio",
        keyFeatures: [
            "Cinematic Section Transitions: Smooth, scroll-aware transitions that guide the user's attention.",
            "Custom Cursor Ecosystem: A context-aware cursor that reacts dynamically to different UI elements.",
            "Bento Grid Architecture: A highly responsive and visually organized layout for complex data display.",
            "Glassmorphism UI Engine: A consistent styling system using Tailwind v4 for modern frosted-glass effects.",
            "High-Performance Rendering: Optimized GSAP timelines and component lifecycle management for 60fps performance.",
        ],
        challenges: "The main challenge was ensuring that the heavy use of animations didn't impact the site's accessibility or mobile performance. We achieved this by implementing a 'reduced motion' preference check and using GSAP's matchMedia for responsive animation tailoring.",
        technologies: ["Core: Next.js 15, React 19, TypeScript", "Animation: GSAP, ScrollTrigger, Framer Motion", "Styling: Tailwind CSS v4, PostCSS", "Performance: Sharp for image optimization, Lighthouse CI"],
        architecture: "The project uses a component-driven architecture where every animated element is a reusable, self-contained unit. This approach ensures consistency across the site and simplifies debugging.",
    },
    {
        id: 4,
        title: "VibeChat: Real-time Messenger",
        description: "A scalable, secure real-time messaging application with global reach and low latency.",
        fullDescription:
            "VibeChat is a full-scale messaging solution built to demonstrate the power of real-time bidirectional communication. It features private messaging, dynamic group creation, and real-time user status tracking. Security was a top priority, so we implemented end-to-end encryption concepts and secure JWT-based authentication. The application is designed to handle high volumes of messages with sub-100ms latency, making it suitable for professional and personal use cases.",
        image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&q=90&w=2000",
        gallery: ["https://images.unsplash.com/photo-1577563906417-45a11b3f9f7c?auto=format&fit=crop&q=80&w=1600", "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1600", "https://images.unsplash.com/photo-1423784103155-23686951e9c4?auto=format&fit=crop&q=80&w=1600"],
        tags: ["Socket.IO", "Node.js", "React", "MongoDB", "Real-time"],
        category: "Full Stack",
        liveUrl: "https://vibechat-messenger.vercel.app",
        githubUrl: "https://github.com/apponislam/vibechat-messenger",
        keyFeatures: [
            "Low-Latency Messaging: Powered by Socket.IO for near-instant message delivery globally.",
            "Global State Sync: Using Redux Toolkit to maintain message history and user states across the app.",
            "Secure Auth Flow: Robust login/signup system with password hashing and refresh token logic.",
            "Media Sharing: Integrated with Cloudinary for seamless image and file uploads within chats.",
            "Typing Indicators & Read Receipts: Real-time UI updates reflecting the status of interactions.",
        ],
        challenges: "Scaling the WebSocket server to handle multiple rooms and users while maintaining low latency was the core challenge. We utilized Socket.IO's Redis adapter to allow for horizontal scaling across multiple server instances.",
        technologies: ["Frontend: React 19, Redux Toolkit, Tailwind CSS", "Backend: Node.js, Express, Socket.IO, bcrypt", "Database: MongoDB, Cloudinary API", "Authentication: JSON Web Tokens (JWT), HTTP-only cookies"],
        architecture: "VibeChat follows an event-driven architecture. The frontend and backend communicate through a predefined set of events, ensuring a clear contract between the two and making the system highly predictable.",
    },
];

export const blogs = [
    {
        id: 1,
        title: "Modern Web Animation with GSAP",
        excerpt: "Learn how to create stunning web animations using GSAP and ScrollTrigger in Next.js applications.",
        date: "March 15, 2024",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1600",
        slug: "modern-web-animation-gsap",
    },
    {
        id: 2,
        title: "The Power of Tailwind CSS",
        excerpt: "Why Tailwind CSS is the best choice for modern web design and how to use it effectively.",
        date: "February 28, 2024",
        image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80&w=1600",
        slug: "power-of-tailwind-css",
    },
];

export const services = [
    {
        title: "Web Development",
        description: "Building fast, responsive, and SEO-friendly full-stack web applications using modern frameworks.",
        icon: "Layout",
    },
    {
        title: "Backend Development",
        description: "Developing robust, scalable backend services and high-performance server-side architectures.",
        icon: "Server",
    },
    {
        title: "API Integration",
        description: "Seamlessly connecting frontend and backend systems with secure and efficient RESTful and GraphQL APIs.",
        icon: "Workflow",
    },
];

export const testimonials = [
    {
        name: "John Doe",
        role: "CEO, Tech Corp",
        content: "Appon is an exceptional developer who consistently delivers high-quality work. His attention to detail and animation skills are top-notch.",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100",
    },
    {
        name: "Jane Smith",
        role: "Product Manager, Creative Hub",
        content: "Working with Appon was a breeze. He understood our requirements perfectly and brought our vision to life with amazing animations.",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100",
    },
];
