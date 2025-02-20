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
//       <main>
//         {/* Hero Section */}
//         <motion.section
//           initial={{ y: -50 }}
//           animate={{ y: 0 }}
//           transition={{ duration: 1, ease: "easeOut" }}
//         >
//           <MaxWidthWrapper className="pb-20 pt-8 bg-[rgb(16,23,42)] text-white lg:grid lg:grid-cols-3 sm:pb-28 lg:gap-x-0 xl:gap-x-8 lg:pt-10 xl:pt-16 lg:pb-40">
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
//                   <ul className="space-y-2 text-left font-medium items-center sm:items-start">
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
//                         className="flex gap-1.5 items-center"
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
//                     {/* <p className="text-green-700 font-bold text-lg">
//                       Let us chat here!
//                       <br />
//                       <span className="text-gray-500">Coming Soon</span>
//                     </p> */}
//                   </motion.div>
                   
//                     <ChatBot/>
//                 </div>
//               </div>
//             </div>
//           </MaxWidthWrapper>
//         </motion.section>

//         {/* YouTube Video - Fixed on the Right */}
//         <div className="hidden lg:block lg:fixed lg:right-10 lg:top-24 w-96 h-56">
//           <Container className="lg:items-end">
//             <iframe
//               className="w-full h-full rounded-lg shadow-lg"
//               src="https://www.youtube.com/embed/kdPxheeDF4g"
//               allowFullScreen
//             />
//           </Container>
//         </div>

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
//                   className="flex flex-col items-center text-start lg:text-left gap-4 w-auto min-w-[300px] max-w-[600px] p-4 bg-gray-900 rounded-lg shadow-lg"
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
"use client";

import Link from "next/link";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Check, Star } from "lucide-react";
import { Container } from "react-bootstrap";
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
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <MaxWidthWrapper className="pb-20 pt-8 bg-[rgb(16,23,42)] text-white lg:grid lg:grid-cols-3 sm:pb-28 lg:gap-x-8 lg:pt-10 xl:pt-16 lg:pb-40">
            {/* Left Column - Text Content */}
            <div className="col-span-2 px-6 lg:px-0">
              <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
                <Link
                  href={"/projects"}
                  className="hover:text-green-800 text-green-500 focus:border-green-500"
                >
                  <AnimatedWrapper>
                    <h3 className="text-3xl font-bold">
                      Welcome to My Dev Playground
                    </h3>
                  </AnimatedWrapper>
                </Link>

                <p className="text-white text-xs sm:text-sm mt-4">
                  Your go-to hub for all things tech! Dive into insightful
                  articles,
                  <br />
                  video tutorials, and in-depth explorations of web development,
                  software engineering, JavaScript, TypeScript, and Python.
                </p>

                {/* Call-to-Action */}
                <h1 className="relative w-fit tracking-tight mt-6 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">
                  <Link
                    href="/search"
                    className="text-xs sm:text-sm text-green-600 font-bold hover:underline"
                  >
                    👉 Explore all posts{" "}
                    <span className="px-2 text-green-800">
                      {" "}
                      and fuel your coding journey!
                    </span>{" "}
                  </Link>
                </h1>

                {/* Key Features */}
                <div className="flex flex-col lg:flex-row justify-between w-full mt-6">
                  <ul className="space-y-2 text-left font-medium items-center sm:items-start">
                    {[
                      "Readability",
                      "Simplicity",
                      "Modularity",
                      "Security",
                      "Consistency",
                      "Testability",
                      "Maintainability",
                    ].map((item) => (
                      <motion.li
                        key={item}
                        className="flex gap-1.5 items-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                      >
                        <Check className="h-5 w-5 shrink-0 text-green-600" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>

                  {/* Chat Component */}
                  <motion.div
                    className="lg:ml-16 w-full lg:w-auto lg:max-w-xs bg-green-100 border border-green-300 p-4 text-center rounded-lg animate-slide-up"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 1 }}
                  >
                    <div className="hidden lg:block lg:fixed lg:right-10 lg:top-24 w-96 h-56">
              <Container className="lg:items-end">
                <iframe
                  className="w-full h-full rounded-lg shadow-lg"
                  src="https://www.youtube.com/embed/kdPxheeDF4g"
                  allowFullScreen
                />
              </Container>
            </div>
                  </motion.div>

                  <ChatBot />
                </div>
              </div>
            </div>
    
          </MaxWidthWrapper>
        </motion.section>

        {/* Value Proposition Section */}
        <motion.section
          className="grainy-dark bg-[rgb(16,23,42)] text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-32 justify-center">
            <div className="flex flex-col items-center gap-8 px-4 lg:px-0">
              {[
                `“Data structures and algorithms are the building blocks for development. I can tackle any coding challenge using optimal code to solve problems. Now, I understand the problem before bringing the solution in code."`,
                `“I've been using TypeScript for months, and it's a game changer. My code is more reliable, catching errors early saves time, and the added type safety gives me confidence.”`,
                `“Web development is evolving rapidly, and mastering frameworks like Next.js gives me a competitive edge in the industry.”`,
              ].map((review, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-start text-left lg:text-left gap-4 w-auto min-w-[300px] max-w-[600px] p-4 bg-gray-900 rounded-lg shadow-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.2, duration: 1 }}
                >
                  {/* Stars */}
                  <div className="flex gap-0.5 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-green-600 fill-green-600"
                      />
                    ))}
                  </div>

                  {/* Review Text */}
                  <div className="text-lg leading-8 text-white">
                    <p>{review}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </MaxWidthWrapper>

          {/* Recent Posts Section */}
          <div className="pt-16 bg-[rgb(16,23,42)] text-white">
            <h2 className="text-2xl font-semibold text-center">Recent Posts</h2>
            <p className="text-center">Coming soon</p>
            {/* Insert recent posts or reviews here */}
          </div>
        </motion.section>
      </main>
    </motion.div>
  );
}
