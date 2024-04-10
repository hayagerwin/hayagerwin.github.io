import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-full w-full bg-primary/60 flex flex-col justify-center items-center">
      <h2>Page Not Found</h2>
      <p>Could not find requested resource</p>
    </div>
  );
}
