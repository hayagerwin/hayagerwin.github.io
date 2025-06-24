export interface Project {
  slug: string;
  title: string;
  cover: string;
  category: string;
  year: number;
  team: string[];
  client: string[];
  description: {
    overview: string; // High-level, jargon-free description for general audiences
    technical: string; // Technical details for developer audiences
    features: string[]; // Key features and capabilities
    impact: string; // Business impact and user benefits
  };
  slides: { page: string; images: string[] }[];
  liveUrl?: string;
  githubUrl?: string;
  technologies: {
    frontend: string[];
    backend: string[];
    database: string[];
    tools: string[];
  };
  status: 'deployed' | 'in-development' | 'coming-soon';
  featured: boolean;
  metrics?: {
    performance?: string;
    users?: string;
    uptime?: string;
  };
  demoCredentials?: {
    username?: string;
    password?: string;
    note?: string;
  };
}

export const projectData: Project[] = [
  {
    slug: "lynn-villamor-dental-clinic",
    title: "Lynn Villamor Dental Clinic",
    cover: "/assets/images/lynn-villamor-dental-clinic/cover.png",
    category: "Healthcare & Reservation",
    year: 2021,
    team: ["Erwin Hayag"],
    client: ["Dr. Georgia Lynn M. Villamor"],
    description: {
      overview: "A comprehensive healthcare platform that makes dental care more accessible and convenient. The system allows patients to easily book appointments online while providing dental professionals with powerful tools to manage their practice efficiently.",
      technical: "Built with Next.js and TypeScript, this full-stack application features a robust appointment management system, patient record management, and administrative dashboard. The platform ensures HIPAA-compliant data handling with PostgreSQL database and Prisma ORM for secure data operations.",
      features: [
        "Intuitive patient reservation system",
        "Real-time appointment scheduling and availability",
        "Comprehensive patient record management",
        "Administrative dashboard for clinic operations",
        "Appointment reminders and notifications",
        "Service catalog with detailed descriptions",
        "Patient history and treatment tracking",
        "Secure data handling with HIPAA compliance",
        "Mobile-responsive design for all devices",
        "Multi-role access control (patients, staff, admin)"
      ],
      impact: "Streamlines the entire patient journey from initial booking to post-treatment follow-ups, reducing administrative overhead and improving patient satisfaction. Helps dental practices operate more efficiently while providing better patient care."
    },
    slides: [
      {
        page: "Home Page",
        images: ["/assets/images/lynn-villamor-dental-clinic/homepage-ss.png"],
      },
      {
        page: "About Page",
        images: ["/assets/images/lynn-villamor-dental-clinic/about-ss.png"],
      },
      {
        page: "Services Page",
        images: ["/assets/images/lynn-villamor-dental-clinic/services-ss.png"],
      },
      {
        page: "Contact Page",
        images: ["/assets/images/lynn-villamor-dental-clinic/contact-ss.png"],
      },
    ],
    liveUrl: "https://dental-clinic-demo.vercel.app", // Placeholder URL for demo
    githubUrl: "", // Private repository
    technologies: {
      frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      backend: ["Node.js", "Next.js API Routes"],
      database: ["PostgreSQL", "Prisma ORM"],
      tools: ["Vercel", "ESLint", "Prettier"]
    },
    status: "coming-soon",
    featured: true,
    metrics: {
      performance: "Optimized for healthcare workflows",
      users: "Designed for dental practices",
      uptime: "HIPAA-compliant infrastructure"
    },
    demoCredentials: {
      note: "Demo will be available soon - comprehensive healthcare management platform for dental practices."
    },
  },
  {
    slug: "lucky-star-grocery-store",
    title: "Lucky Star Grocery Store",
    cover: "/assets/images/lucky-star/cover.png",
    category: "E-commerce & Retail",
    year: 2022,
    team: ["Erwin Hayag"],
    client: ["Nenejj Store"],
    description: {
      overview: "A modern grocery e-commerce platform that makes online food shopping simple and convenient. Lucky Star provides a seamless shopping experience with real-time product availability, secure checkout, and efficient order management for both customers and store administrators.",
      technical: "Built with Laravel 12.x and React 19.x, this full-stack application features a RESTful API architecture, PostgreSQL database with Neon.tech hosting, and Inertia.js for SPA-like experience. The platform includes advanced inventory management, queue-based background processing, and comprehensive testing with Pest PHP.",
      features: [
        "Modern shopping interface with category filtering and search",
        "Persistent shopping cart with real-time updates",
        "Secure user authentication and profile management",
        "Complete order history and status tracking",
        "Customer review and rating system",
        "Admin dashboard with product and inventory management",
        "Coupon system and promotional tools",
        "Analytics dashboard with sales metrics",
        "Grocery-specific features (fresh produce, nutritional info, storage instructions)",
        "Mobile-responsive design optimized for all devices"
      ],
      impact: "Transforms local grocery shopping by providing 24/7 online access, reducing wait times, and enabling efficient inventory management. The platform supports same-day delivery services and helps small grocery stores compete with larger retailers through modern e-commerce capabilities."
    },
    liveUrl: "https://lucky-star-gktq.onrender.com",
    githubUrl: "", // Private repository
    technologies: {
      frontend: ["React 19.x", "TypeScript", "Inertia.js", "Tailwind CSS 4.0", "shadcn/ui", "Lucide React"],
      backend: ["Laravel 12.x", "PHP 8.2+", "Laravel Breeze", "Laravel Queues"],
      database: ["PostgreSQL", "Neon.tech"],
      tools: ["Vite", "Composer", "npm", "ESLint", "Prettier", "Laravel Pint", "Pest PHP"]
    },
    status: "deployed",
    featured: true,
    metrics: {
      performance: "95+ Lighthouse Score",
      users: "Active grocery store platform",
      uptime: "99.9% availability"
    },
    demoCredentials: {
      note: "Live demo available - explore the full shopping experience including product browsing, cart management, and checkout process."
    },
    slides: [
      {
        page: "Home Page",
        images: ["/assets/images/lucky-star/home-ss.png"],
      },
      {
        page: "Login Page",
        images: ["/assets/images/lucky-star/auth-ss.png"],
      },
      {
        page: "Products Page",
        images: ["/assets/images/lucky-star/products-ss.png"],
      },
      {
        page: "Contact Page",
        images: ["/assets/images/lucky-star/contact-ss.png"],
      },
      {
        page: "Checkout Page",
        images: ["/assets/images/lucky-star/checkout-ss.png"],
      },
    ],
  },
];
