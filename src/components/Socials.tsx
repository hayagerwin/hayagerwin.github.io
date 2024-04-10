import Link from "next/link";
import { RiGithubLine, RiTwitterXLine } from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link href={"https://github.com/hayagerwin"} className="hover:text-accent transition-all duration-300" target="_blank">
        <RiGithubLine />
      </Link>
      <Link href={"https://twitter.com/reedro85"} className="hover:text-accent transition-all duration-300" target="_blank">
        <RiTwitterXLine />
      </Link>
    </div>
  );
};

export default Socials;
