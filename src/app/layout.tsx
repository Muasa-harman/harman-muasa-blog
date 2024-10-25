import type { Metadata } from "next";
import {Recursive} from "next/font/google"
import "./globals.css";
import Navbar from "@/components/Navbar";
import Providers from "@/components/Providers";
import Footer from "@/components/Footer";


const recursive = Recursive({subsets: ['latin']})

export const metadata: Metadata = {
  title: "h@rtman-muasa-blog-@next",
  description: "pages",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
         className={recursive.className}
      >
          <div className="flex-1 flex flex-col h-full bg-[rgb(16,23,42)] text-white text-gray-200 min-h-screen">
        <Navbar/>
        <main className="flex grainy-light flex-col min-h-[calc(100vh-3.5rem-1px)]">
            <Providers>{children}</Providers>
          <Footer/>
        </main>
          </div>
      </body>
    </html>
  );
}
