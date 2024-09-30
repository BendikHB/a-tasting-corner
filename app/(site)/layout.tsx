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
        <header className="flex items-center justify-between p-6 text-xl fixed z-50 bg-white w-screen">
          <Link href={"/"}>a tasting corner</Link>
          <div className="flex items-center gap-8">
            {pages.map((page) => (
              <Link key={page._id} href={`/${page.slug}`}>
                {page.title}
              </Link>
            ))}
          </div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
