export interface Project {
  slug: string;
  title: string;
  cover: string;
  category: string;
  year: number;
  team: string[];
  client: string[];
  description: string;
  slides: { page: string; images: string[] }[];
  liveUrl?: string;
  githubUrl?: string;
  technologies: string[];
  status: 'deployed' | 'in-development' | 'coming-soon';
  featured: boolean;
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
    description:
      "Lynn Villamor Dental Clinic is a comprehensive healthcare platform designed to revolutionize dental care accessibility. This full-stack web application features an intuitive patient reservation system, robust administrative dashboard, and seamless appointment management. The platform streamlines the entire patient journey from initial booking to post-treatment follow-ups, while providing healthcare professionals with powerful tools for patient record management, scheduling optimization, and clinic operations. Built with modern web technologies, it ensures HIPAA-compliant data handling and delivers exceptional user experience across all devices.",
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
    liveUrl: "", // Will be updated when deployed
    githubUrl: "", // Private repository
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Prisma"],
    status: "coming-soon",
    featured: true,
  },
  {
    slug: "lucky-star-grocery-store",
    title: "Lucky Star Grocery Store",
    cover: "/assets/images/lucky-star/cover.png",
    category: "E-commerce & Retail",
    year: 2022,
    team: ["Erwin Hayag"],
    client: ["Nenejj Store"],
    description:
      "Lucky Star Grocery is a comprehensive e-commerce platform that transforms the local grocery shopping experience through innovative technology. This full-stack web application features advanced inventory management, real-time product availability, secure payment processing, and intelligent delivery logistics. The platform includes customer account management, order tracking, admin dashboard for store management, and mobile-responsive design. Built with modern web technologies, it delivers exceptional performance and user experience while supporting same-day delivery services for enhanced customer satisfaction.",
    liveUrl: "https://lucky-star-gktq.onrender.com",
    githubUrl: "", // Private repository
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Stripe API"],
    status: "deployed",
    featured: true,
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
