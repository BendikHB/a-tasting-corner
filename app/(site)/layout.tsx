import type { Metadata } from "next";
import "../globals.css";
import Link from "next/link";
import { getPages } from "@/sanity/sanity-utils";
import { Page } from "@/types/Pages";
import DropDownMenu from "@/components/drop-down-menu";

export const metadata: Metadata = {
  title: "a tasting corner",
  description: "Elevate your palate",
};

interface menu {
  main: Page;
  subList?: Page[];
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pages = await getPages();
  const menu = [
    "drikke",
    /* "mat", */ "smak og behag",
    "anbefalinger",
    "om oss",
  ];
  const drinksMenu = ["drinker", "vin" /* "uten alkohol" */];
  const sortedMenu: menu[] = [];

  pages.forEach((page) => {
    const subMenu: Page[] = [];
    if (page.name.toLowerCase() === "drikke") {
      pages.forEach((c) => {
        if (drinksMenu.includes(c.name.toLowerCase())) subMenu.push(c);
      });
    }
    if (subMenu && menu.includes(page.name.toLowerCase())) {
      sortedMenu.push({ main: page, subList: subMenu });
    } else if (menu.includes(page.name.toLowerCase())) {
      sortedMenu.push({ main: page });
    }
  });
  sortedMenu.sort(
    (a, b) =>
      menu.indexOf(a.main.name.toLowerCase()) -
      menu.indexOf(b.main.name.toLowerCase()),
  );

  return (
    <html lang="en">
      <body>
        <div className="flex flex-col md:flex-row-reverse">
          <header className="p-6 text-2xl sticky z-50 bg-black min-w-fit top-0 md:h-screen border-l border-black">
            <div className="flex justify-between">
              <div className="flex flex-col md:items-end text-white">
                <Link
                  href={"/"}
                  className="text-4xl md:text-5xl md:text-right font-CormorantUpright"
                >
                  a tasting corner
                </Link>
                <div className="text-primary text-xl md:text-2xl">
                  Elevate your palate
                </div>
              </div>
              <div className="md:hidden flex flex-col justify-end items-center text-white w-1/5">
                <DropDownMenu />
              </div>
            </div>
            <div
              id="main-menu"
              className="absolute right-0 -left-px h-0 md:h-dvh pr-6 bg-black md:block opacity-0 md:opacity-100 overflow-hidden"
            >
              <div className="flex flex-col items-end gap-8 pt-8 text-white">
                {sortedMenu &&
                  sortedMenu.map((page) => {
                    const { main, subList } = page;
                    return (
                      <div key={main._id} className="flex-col flex items-end">
                        <Link
                          className="border-b border-b-transparent hover:border-b-white transition-all duration-100"
                          href={`/${main.slug}`}
                        >
                          {main.name}
                        </Link>
                        <div className="flex flex-col items-end text-base gap-4 pt-4">
                          {subList &&
                            subList.map((subPage) => {
                              return (
                                <Link
                                  className="border-b border-b-transparent hover:border-b-white transition-all duration-100"
                                  key={subPage._id}
                                  href={`/${main.slug}/${subPage.slug}`}
                                >
                                  {subPage.name}
                                </Link>
                              );
                            })}
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </header>
          <main className="w-full">{children}</main>
        </div>
        <footer className="pb-5"></footer>
      </body>
    </html>
  );
}
