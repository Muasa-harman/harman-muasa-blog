"use client";
import React, { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ThemeProvider } from "next-themes";

const client = new QueryClient();

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    //   <ThemeProvider attribute="class" defaultTheme="dark">
    <QueryClientProvider client={client}>
      {/* <div className="bg-[rgb(16,23,42)] text-gray-700 dark:text-gray-200 dark:bg-[rgb(16,23,42)] min-h-screen"> */}
        {children}
      {/* </div> */}
    </QueryClientProvider>
 
    // {/* </ThemeProvider> */}
  );
};

export default Providers;
