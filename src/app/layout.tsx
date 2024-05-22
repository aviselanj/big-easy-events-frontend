import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from './components/Header';
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Big Easy Events",
  description: "A New Orleans events application Generated by create next app"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  
    <html lang="en">
      
      
      <body>
        {<Header />}
        <main className="flex min-h-screen p-24 flex-col items-center  h-14 bg-gradient-to-r from-cyan-500 to-blue-500">
          {children}
        </main>
        {<Footer />}
        </body>
      
    </html>
 
  );
}
