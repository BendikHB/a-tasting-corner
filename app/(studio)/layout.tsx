import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Studio - a tasting corner",
  description: "content for a tasting corner",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
