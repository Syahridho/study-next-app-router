import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center min-h-screen justify-center">
      <h1 className="text-9xl">404</h1>
      <h2 className="mb-5">Not Found</h2>
      <Link
        href={"/"}
        className="bg-blue-800 text-white py-2 px-3 rounded shadow"
      >
        Back to Home
      </Link>
    </div>
  );
}
