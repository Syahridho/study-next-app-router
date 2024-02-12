import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const { data: session, status }: { data: any; status: string } = useSession();

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
          <div className="flex items-center">
            <Image
              className="w-8 rounded-full mx-2"
              src={"/images/profile.png"}
              alt="profile"
              width={100}
              height={100}
            />
            <h4 className="text-white w-full mr-5">
              {session?.user?.fullname}
            </h4>
            <button
              className="bg-white text-slate-800 rounded-md py-1 px-4 me-12 cursor-pointer"
              onClick={() => signOut()}
            >
              signOut
            </button>
          </div>
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
