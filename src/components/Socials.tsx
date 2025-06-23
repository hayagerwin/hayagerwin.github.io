import Link from "next/link";
import { RiGithubLine, RiTwitterXLine } from "react-icons/ri";

const socialLinks = [
  {
    href: "https://github.com/hayagerwin",
    icon: <RiGithubLine />,
    label: "GitHub Profile",
    platform: "GitHub"
  },
  {
    href: "https://twitter.com/reedro85",
    icon: <RiTwitterXLine />,
    label: "Twitter Profile",
    platform: "Twitter"
  },
  // {
  //   href: "https://www.linkedin.com/in/hayagerwin",
  //   icon: <RiLinkedinLine />,
  //   label: "LinkedIn Profile",
  //   platform: "LinkedIn"
  // }
];

const Socials = () => {
  return (
    <div
      className="flex items-center gap-x-5 text-lg"
      role="list"
      aria-label="Social media links"
    >
      {socialLinks.map((social, index) => (
        <Link
          key={index}
          href={social.href}
          className="hover:text-accent transition-all duration-300 focus-visible rounded-lg p-2"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit Erwin Hayag's ${social.platform} profile (opens in new tab)`}
          role="listitem"
        >
          <span aria-hidden="true">{social.icon}</span>
          <span className="sr-only">{social.label}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
