import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";

const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0">
      <Link
        href={"/projects"}
        className="relative w-[185px] h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group hover:shadow-glow transition-all duration-500"
      >
        <Image
          src={"/rounded-text.png"}
          width={141}
          height={148}
          alt="View Projects"
          className="animate-spin-slow w-full h-full max-w-[141px] max-h-[148px] group-hover:brightness-110 transition-all duration-300"
        />
        <HiArrowRight className="absolute text-4xl text-accent group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300" />
      </Link>
    </div>
  );
};

export default ProjectsBtn;
