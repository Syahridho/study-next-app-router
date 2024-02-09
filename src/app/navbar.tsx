import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { status }: { status: string } = useSession();

  return (
    <nav className="bg-slate-500 flex items-center">
      <div className="flex container mx-auto justify-between text-white  px-5 py-4">
        <h1 className="font-semibold">NAVBAR</h1>
        <ul className="flex gap-4">
          <Link href="/">
            <li className={pathname === "/" ? "text-red-500" : "text-white"}>
              Home
            </li>
          </Link>
          <Link href="/about">
            <li
              className={pathname === "/about" ? "text-red-500" : "text-white"}
            >
              About
            </li>
          </Link>
          <Link href="/about/profile">
            <li
              className={
                pathname === "/about/profile" ? "text-red-500" : "text-white"
              }
            >
              Profile
            </li>
          </Link>
        </ul>
      </div>
      <div>
        {status === "authenticated" ? (
          <button
            className="bg-white text-slate-800 rounded-md py-1 px-4 me-12 cursor-pointer"
            onClick={() => signOut()}
          >
            signOut
          </button>
        ) : (
          <button
            className="bg-white text-slate-800 rounded-md py-1 px-4 me-12 cursor-pointer"
            onClick={() => signIn()}
          >
            login
          </button>
        )}
      </div>
    </nav>
  );
}
