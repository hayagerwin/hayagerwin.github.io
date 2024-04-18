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
    client: ["Dr. Georgia Lynn M. Villamor"],
    description:
      "Lynn Villamor Dental Clinic is a state-of-the-art reservation website tailored for patients seeking professional dental care. The platform simplifies the appointment-making process, allowing users to book visits with ease and confidence. Behind the scenes, the clinic’s administration benefits from a robust management system capable of handling patient records, scheduling, and other essential tasks. This digital solution empowers the clinic to offer an enhanced patient experience while maintaining high standards of care and organization.",
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
    year: 2022,
    team: ["Erwin Hayag"],
    client: ["Nenejj Store"],
    description:
      "Lucky Star Grocery is an innovative e-commerce platform designed to revolutionize the local grocery shopping experience. With a commitment to convenience and speed, Lucky Star Grocery offers a seamless online shopping solution, ensuring that customers in nearby areas can enjoy same-day delivery of their favorite products. The website boasts a user-friendly interface, real-time inventory updates, and secure payment options, making it a reliable and efficient choice for those who value their time and comfort.",
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
