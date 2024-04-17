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
}

export const projectData: Project[] = [
  {
    slug: "lynn-villamor-dental-clinic",
    title: "Lynn Villamor Dental Clinic",
    cover: "/assets/images/lynn-villamor-dental-clinic/cover.png",
    category: "Reservation",
    year: 2021,
    team: ["Erwin Hayag"],
    client: ["Georgia Lynn M. Villamor"],
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas veniam tempore, soluta minima vel sapiente suscipit culpa eligendi in modi! Molestiae velit impedit unde nam.",
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
  },
  {
    slug: "lucky-star-grocery-store",
    title: "Lucky Star Grocery Store",
    cover: "/assets/images/lucky-star/cover.png",
    category: "E-commerce",
    year: 2021,
    team: ["Erwin Hayag"],
    client: ["Nenejj Store"],
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas veniam tempore, soluta minima vel sapiente suscipit culpa eligendi in modi! Molestiae velit impedit unde nam.",
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
