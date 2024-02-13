"use client";

import Link from "next/link";

export default function Error() {
  return (
    <div className="flex flex-col items-center min-h-screen justify-center">
      <h1 className="text-9xl">500</h1>
      <h2 className="mb-5">something went wrong</h2>
      <Link
        href={"/"}
        className="bg-blue-800 text-white py-2 px-3 rounded shadow"
      >
        Back to Home
      </Link>
    </div>
  );
}
