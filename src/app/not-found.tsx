import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-full w-full bg-primary/60 flex flex-col justify-center items-center px-4 text-center">
      <h2 className="h2 mb-4">Page Not Found</h2>
      <p className="text-large mb-6 max-w-md">
        Sorry, we couldn&apos;t find the page you&apos;re looking for.
      </p>
      <Link
        href="/"
        className="btn-primary"
        aria-label="Return to homepage"
      >
        Return Home
      </Link>
    </div>
  );
}
