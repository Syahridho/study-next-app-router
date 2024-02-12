import type { Metadata } from "next";

export const metadata: Metadata = {
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
  return (
    <main className="">
      <h1>Hello World</h1>
    </main>
  );
}
