// "use client";

// import Link from "next/link";
// import MaxWidthWrapper from "@/components/MaxWidthWrapper";
// import { Check, Star } from "lucide-react";
// import { Container } from "react-bootstrap";
// import { motion } from "framer-motion";
// import AnimatedWrapper from "@/components/AnimatedWrapper";
// import ChatBot from "@/components/ChatBot";

// export default function Home() {
//   return (
//     <motion.div
//       className="grainy-light min-h-screen bg-[rgb(16,23,42)] text-white flex flex-col justify-between"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 1 }}
//     >
//       {/* Main Content */}
//       <main className="flex-grow">
//         {/* Hero Section */}
//         <motion.section
//           initial={{ y: -50 }}
//           animate={{ y: 0 }}
//           transition={{ duration: 1, ease: "easeOut" }}
//         >
//           <MaxWidthWrapper className="pb-20 pt-8 bg-[rgb(16,23,42)] text-white lg:grid lg:grid-cols-3 sm:pb-28 lg:gap-x-8 lg:pt-10 xl:pt-16 lg:pb-40">
//             {/* Left Column - Text Content */}
//             <div className="col-span-2 px-6 lg:px-0">
//               <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
//                 <Link
//                   href={"/projects"}
//                   className="hover:text-green-800 text-green-500 focus:border-green-500"
//                 >
//                   <AnimatedWrapper>
//                     <h3 className="text-3xl font-bold">
//                       Welcome to My Dev Playground
//                     </h3>
//                   </AnimatedWrapper>
//                 </Link>

//                 <p className="text-white text-xs sm:text-sm mt-4">
//                   Your go-to hub for all things tech! Dive into insightful
//                   articles,
//                   <br />
//                   video tutorials, and in-depth explorations of web development,
//                   software engineering, JavaScript, TypeScript, and Python.
//                 </p>

//                 {/* Call-to-Action */}
//                 <h1 className="relative w-fit tracking-tight mt-6 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">
//                   <Link
//                     href="/search"
//                     className="text-xs sm:text-sm text-green-600 font-bold hover:underline"
//                   >
//                     👉 Explore all posts{" "}
//                     <span className="px-2 text-green-800">
//                       {" "}
//                       and fuel your coding journey!
//                     </span>{" "}
//                   </Link>
//                 </h1>

//                 {/* Key Features */}
//                 <div className="flex flex-col lg:flex-row justify-between w-full mt-6">
//                   <ul className="space-y-3 text-center flex-col justify-center font-medium items-center sm:items-start">
//                     {[
//                       "Readability",
//                       "Simplicity",
//                       "Modularity",
//                       "Security",
//                       "Consistency",
//                       "Testability",
//                       "Maintainability",
//                     ].map((item) => (
//                       <motion.li
//                         key={item}
//                         className="flex items-center  gap-1.5 text-center"
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         transition={{ delay: 0.5, duration: 1 }}
//                       >
//                         <Check className="h-5 w-5 shrink-0 text-green-600" />
//                         {item}
//                       </motion.li>
//                     ))}
//                   </ul>

//                   {/* Chat Component */}
//                   <motion.div
//                     className="lg:ml-16 w-full lg:w-auto lg:max-w-xs bg-green-100 border border-green-300 p-4 text-center rounded-lg animate-slide-up"
//                     initial={{ opacity: 0, y: 50 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.7, duration: 1 }}
//                   >
//                     <div className="w-full flex justify-center lg:fixed lg:right-10 lg:top-24 lg:w-96 lg:h-56">
//                       <Container className="lg:items-end w-full max-w-lg">
//                         <iframe
//                           className="w-full h-48 sm:h-56 md:h-64 lg:h-full rounded-lg shadow-lg"
//                           src="https://www.youtube.com/embed/kdPxheeDF4g"
//                           allowFullScreen
//                         />
//                       </Container>
//                     </div>
//                   </motion.div>

//                   <ChatBot />
//                 </div>
//               </div>
//             </div>
//           </MaxWidthWrapper>
//         </motion.section>

//         {/* Value Proposition Section */}
//         <motion.section
//           className="grainy-dark bg-[rgb(16,23,42)] text-white"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//         >
//           <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-32 justify-center">
//             <div className="flex flex-col items-center gap-8 px-4 lg:px-0">
//               {[
//                 `“Data structures and algorithms are the building blocks for development. I can tackle any coding challenge using optimal code to solve problems. Now, I understand the problem before bringing the solution in code."`,
//                 `“I've been using TypeScript for months, and it's a game changer. My code is more reliable, catching errors early saves time, and the added type safety gives me confidence.”`,
//                 `“Web development is evolving rapidly, and mastering frameworks like Next.js gives me a competitive edge in the industry.”`,
//               ].map((review, index) => (
//                 <motion.div
//                   key={index}
//                   className="flex flex-col items-start text-left lg:text-left gap-4 w-auto min-w-[300px] max-w-[600px] p-4 bg-gray-900 rounded-lg shadow-lg"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: index * 0.2, duration: 1 }}
//                 >
//                   {/* Stars */}
//                   <div className="flex gap-0.5 mb-2">
//                     {[...Array(5)].map((_, i) => (
//                       <Star
//                         key={i}
//                         className="h-5 w-5 text-green-600 fill-green-600"
//                       />
//                     ))}
//                   </div>

//                   {/* Review Text */}
//                   <div className="text-lg leading-8 text-white">
//                     <p>{review}</p>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </MaxWidthWrapper>

//           {/* Recent Posts Section */}
//           <div className="pt-16 bg-[rgb(16,23,42)] text-white">
//             <h2 className="text-2xl font-semibold text-center">Recent Posts</h2>
//             <p className="text-center">Coming soon</p>
//             {/* Insert recent posts or reviews here */}
//           </div>
//         </motion.section>
//       </main>
//     </motion.div>
//   );
// }



// "use client";

// import Link from "next/link";
// import MaxWidthWrapper from "@/components/MaxWidthWrapper";
// import { Check, Star } from "lucide-react";
// import { Container } from "react-bootstrap";
// import { motion } from "framer-motion";
// import AnimatedWrapper from "@/components/AnimatedWrapper";
// import ChatBot from "@/components/ChatBot";

// export default function Home() {
//   return (
//     <motion.div
//       className="grainy-light min-h-screen bg-[rgb(16,23,42)] text-white flex flex-col justify-between"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 1 }}
//     >
//       {/* Main Content */}
//       <main className="flex-grow">
//         {/* Hero Section */}
//         <motion.section
//           className="py-20"
//           initial={{ y: -50 }}
//           animate={{ y: 0 }}
//           transition={{ duration: 1, ease: "easeOut" }}
//         >
//           <MaxWidthWrapper className="flex flex-col items-center text-center lg:text-left lg:items-start gap-12">
//             {/* Heading */}
//             <AnimatedWrapper>
//               <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-green-500">
//                 Welcome to My Dev Playground
//               </h1>
//             </AnimatedWrapper>

//             {/* Subheading */}
//             <p className="text-lg text-gray-300 max-w-2xl">
//               Your go-to hub for all things tech! Dive into insightful articles,
//               video tutorials, and in-depth explorations of web development,
//               software engineering, JavaScript, TypeScript, and Python.
//             </p>

//             {/* Call-to-Action */}
//             <Link
//               href="/search"
//               className="px-8 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
//             >
//               Explore All Posts
//             </Link>

//             {/* Key Features */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full mt-12">
//               {[
//                 "Readability",
//                 "Simplicity",
//                 "Modularity",
//                 "Security",
//                 "Consistency",
//                 "Testability",
//                 "Maintainability",
//               ].map((item, index) => (
//                 <motion.div
//                   key={item}
//                   className="flex items-center gap-3 p-4 bg-gray-800 rounded-lg"
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: index * 0.1, duration: 0.5 }}
//                 >
//                   <Check className="h-5 w-5 text-green-500" />
//                   <span className="text-gray-200">{item}</span>
//                 </motion.div>
//               ))}
//             </div>
//           </MaxWidthWrapper>
//         </motion.section>

//         {/* Value Proposition Section */}
//         <motion.section
//           className="py-20 bg-gray-900"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//         >
//           <MaxWidthWrapper className="flex flex-col items-center gap-12">
//             <h2 className="text-3xl font-bold text-green-500">
//               What Developers Say
//             </h2>

//             {/* Testimonials Carousel */}
//             <div className="flex flex-col lg:flex-row gap-8 overflow-x-auto w-full">
//               {[
//                 `“Data structures and algorithms are the building blocks for development. I can tackle any coding challenge using optimal code to solve problems. Now, I understand the problem before bringing the solution in code."`,
//                 `“I've been using TypeScript for months, and it's a game changer. My code is more reliable, catching errors early saves time, and the added type safety gives me confidence.”`,
//                 `“Web development is evolving rapidly, and mastering frameworks like Next.js gives me a competitive edge in the industry.”`,
//               ].map((review, index) => (
//                 <motion.div
//                   key={index}
//                   className="flex flex-col gap-4 p-6 bg-gray-800 rounded-lg min-w-[300px] max-w-[400px]"
//                   initial={{ opacity: 0, x: -50 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: index * 0.2, duration: 0.5 }}
//                 >
//                   {/* Stars */}
//                   <div className="flex gap-0.5">
//                     {[...Array(5)].map((_, i) => (
//                       <Star
//                         key={i}
//                         className="h-5 w-5 text-green-500 fill-green-500"
//                       />
//                     ))}
//                   </div>

//                   {/* Review Text */}
//                   <p className="text-gray-200">{review}</p>
//                 </motion.div>
//               ))}
//             </div>
//           </MaxWidthWrapper>
//         </motion.section>

//         {/* Recent Posts Section */}
//         <motion.section
//           className="py-20 bg-[rgb(16,23,42)]"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//         >
//           <MaxWidthWrapper className="flex flex-col items-center gap-12">
//             <h2 className="text-3xl font-bold text-green-500">Recent Posts</h2>

//             {/* Placeholder Grid */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
//               {[...Array(3)].map((_, index) => (
//                 <motion.div
//                   key={index}
//                   className="p-6 bg-gray-800 rounded-lg"
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: index * 0.1, duration: 0.5 }}
//                 >
//                   <div className="h-40 bg-gray-700 rounded-lg animate-pulse"></div>
//                   <p className="mt-4 text-gray-400">Coming soon...</p>
//                 </motion.div>
//               ))}
//             </div>
//           </MaxWidthWrapper>
//         </motion.section>
//       </main>

//       {/* ChatBot */}
//       <ChatBot />
//     </motion.div>
//   );
// }

"use client";

import Link from "next/link";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Check, Star } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedWrapper from "@/components/AnimatedWrapper";
import ChatBot from "@/components/ChatBot";

export default function Home() {
  return (
    <motion.div
      className="grainy-light min-h-screen bg-[rgb(16,23,42)] text-white flex flex-col justify-between"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <motion.section
          className="py-20"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <MaxWidthWrapper className="flex flex-col items-center text-center lg:text-left lg:items-start gap-12">
            {/* Heading */}
            <AnimatedWrapper>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-green-500">
                Welcome to My Dev Playground
              </h1>
            </AnimatedWrapper>

            {/* Subheading */}
            <p className="text-lg text-gray-300 max-w-2xl">
              Your go-to hub for all things tech! Dive into insightful articles,
              video tutorials, and in-depth explorations of web development,
              software engineering, JavaScript, TypeScript, and Python.
            </p>

            {/* Call-to-Action */}
            <Link
              href="/search" // Fixed: Added missing closing quote
              className="px-8 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
            >
              Explore All Posts
            </Link>

            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full mt-12">
              {[
                "Readability",
                "Simplicity",
                "Modularity",
                "Security",
                "Consistency",
                "Testability",
                "Maintainability",
              ].map((item, index) => (
                <motion.div
                  key={item}
                  className="flex items-center gap-3 p-4 bg-gray-800 rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Check className="h-5 w-5 text-green-500" />
                  <span className="text-gray-200">{item}</span>
                </motion.div>
              ))}
            </div>
          </MaxWidthWrapper>
        </motion.section>

        {/* YouTube Embed Section */}
        <motion.section
          className="py-12 bg-gray-900" // Reduced padding
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <MaxWidthWrapper className="flex flex-col items-center gap-8"> {/* Reduced gap */}
            <h2 className="text-2xl font-bold text-green-500"> {/* Smaller heading */}
              Check Out My YouTube Channel
            </h2>

            {/* YouTube Embed */}
            <motion.div
              className="w-2/3 max-w-3xl aspect-video rounded-lg overflow-hidden shadow-lg" // Reduced width
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <iframe
                className="w-full h-full" // Full width and height of the container
                src="https://www.youtube.com/embed/kdPxheeDF4g"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          </MaxWidthWrapper>
        </motion.section>

        {/* Value Proposition Section */}
        <motion.section
          className="py-20 bg-[rgb(16,23,42)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <MaxWidthWrapper className="flex flex-col items-center gap-12">
            <h2 className="text-3xl font-bold text-green-500">
              What Developers Say
            </h2>

            {/* Testimonials Carousel */}
            <div className="flex flex-col lg:flex-row gap-8 overflow-x-auto w-full">
              {[
                `“Data structures and algorithms are the building blocks for development. I can tackle any coding challenge using optimal code to solve problems. Now, I understand the problem before bringing the solution in code."`,
                `“I've been using TypeScript for months, and it's a game changer. My code is more reliable, catching errors early saves time, and the added type safety gives me confidence.”`,
                `“Web development is evolving rapidly, and mastering frameworks like Next.js gives me a competitive edge in the industry.”`,
              ].map((review, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col gap-4 p-6 bg-gray-800 rounded-lg min-w-[300px] max-w-[400px]"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                >
                  {/* Stars */}
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-green-500 fill-green-500"
                      />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-gray-200">{review}</p>
                </motion.div>
              ))}
            </div>
          </MaxWidthWrapper>
        </motion.section>

        {/* Recent Posts Section */}
        <motion.section
          className="py-20 bg-[rgb(16,23,42)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <MaxWidthWrapper className="flex flex-col items-center gap-12">
            <h2 className="text-3xl font-bold text-green-500">Recent Posts</h2>

            {/* Placeholder Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              {[...Array(3)].map((_, index) => (
                <motion.div
                  key={index}
                  className="p-6 bg-gray-800 rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <div className="h-40 bg-gray-700 rounded-lg animate-pulse"></div>
                  <p className="mt-4 text-gray-400">Coming soon...</p>
                </motion.div>
              ))}
            </div>
          </MaxWidthWrapper>
        </motion.section>
      </main>

      {/* ChatBot */}
      <ChatBot />
    </motion.div>
  );
}