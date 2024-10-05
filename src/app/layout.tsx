import type { Metadata } from "next";
import {Recursive} from "next/font/google"
import "./globals.css";
import Navbar from "@/components/Navbar";
import Providers from "@/components/Providers";
import Footer from "@/components/Footer";
// import { Provider } from "@/components/Provider";

// const inter = Inter({subsets: ["latin"], variable: "--font-sans"})
const recursive = Recursive({subsets: ['latin']})

export const metadata: Metadata = {
  title: "harman-muasa-blog-next",
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
        <Navbar/>
        <main className="flex grainy-light flex-col min-h-[calc(100vh-3.5rem-1px)]">
          <div className="flex-1 flex flex-col h-full">
            <Providers>{children}</Providers>
          </div>
          <Footer/>
        </main>
      </body>
    </html>
  );
}
