import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-slate-500">
      <div className="flex container mx-auto justify-between  text-white  px-5 py-4">
        <h1 className="font-semibold">NAVBAR</h1>
        <ul className="flex gap-4">
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/about">
            <li>About</li>
          </Link>
          <Link href="/about/profile">
            <li>Profile</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}
