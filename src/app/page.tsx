import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"
  ),
  title: "home page",
  description: "Aplikasi untuk belajar nextjs",
  authors: [
    { name: "Syahridho Arjuna Syahputra", url: "https://syahridho.github.io" },
  ],
  icons: {
    icon: "/images/icon.png",
  },
  openGraph: {
    title: "belajar next js",
  },
};

export default function Home() {
  // throw new Error("some thing went wrong");
  return (
    <main className="">
      <h1>Hello World</h1>
    </main>
  );
}
