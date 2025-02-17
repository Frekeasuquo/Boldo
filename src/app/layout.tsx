import type { Metadata } from "next";
import "./globals.css";
import { Manrope} from "next/font/google"
import Footer from "../components/Footer";
import { cn } from "../libs/utils";
import NavbarWrapper from "../components/NavbarWrapper";
import FooterWrapper from "../components/FooterWrapper";
const manrope = Manrope({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Freke",
  description: "Generated by create next app",
};



export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {

  return (
    <html lang="en" className="h-full w-full">
      <body className={cn("relative h-full w-full antialiased", manrope.className)}>
        <main className="relative flex flex-col min-h-screen w-full">
          <NavbarWrapper />
          <div>{children}</div>
        </main>
        <FooterWrapper />
      </body>
    </html>
  );
}

