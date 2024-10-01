import type { Metadata } from "next";
import "../globals.css";
import Link from "next/link";
import { getPages } from "@/sanity/sanity-utils";

export const metadata: Metadata = {
  title: "a tasting corner",
  description: "Elevate your palate",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pages = await getPages();

  return (
    <html lang="en">
      <body>
        <div className="flex flex-row-reverse">
        <header className="p-6 text-xl sticky z-50 bg-white min-w-fit top-0 h-screen">
          <div className="flex flex-col items-end">
          <Link href={"/"} className="text-5xl font-CormorantUpright">a tasting corner</Link>
          <div className="text-primary">Elevate your palate</div>
          </div>
          <div className="flex items-center gap-8">
            {pages.map((page) => (
              <Link key={page._id} href={`/${page.slug}`}>
                {page.heading}
              </Link>
            ))}
          </div>
        </header>
        <main className="w-full">{children}</main>
        </div>
        <footer></footer>
      </body>
    </html>
  );
}
