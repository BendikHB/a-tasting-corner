import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Studio - Blend HB",
  description: "Blend your content",
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
