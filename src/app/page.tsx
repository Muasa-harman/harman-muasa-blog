import Link from "next/link";
// import CallToAction from "@/components/CallToAction";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
// import PostCard from "../components/PostCard";
import { ArrowRight, Check, Star } from "lucide-react";
import Profile from "@/components/Profile";
import { Icons } from "@/components/Icons";
// import { Reviews } from "@/components/Reviews";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "react-bootstrap";

export default function Home() {
  // const isAdmin = searchParams.admin === 'true'   {searchParams}: SearchParamProps
  return (
    <div className="bg-slate-50 grainy-light">
      <section>
        <MaxWidthWrapper className="pb-24 pt-5 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-14 xl:pt-32 lg:pb-52">
          <div className="col-span-2 px-6 lg:px-0 ">
            <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
              <h3 className="text-3xl font-bold">
                Welcome to My Developer's Playground
              </h3>
              <p className="text-gray-500 text-xs sm:text-sm">
                Your go-to hub for all things tech! Dive into a world of
                insightful articles, especially on data structures and
                algorithms, step-by-step video tutorials, and in-depth
                explorations of cutting-edge topics in web development, software
                engineering, and programming languages like JavaScript,
                TypeScript, and Python. Whether you're a curious beginner or a
                seasoned pro, there's something here for everyone. Stay ahead of
                the curve with expert tips, hands-on guides, and personal
                reflections on the latest trends in the tech world. Ready to
                level up? Let's get started!
              </p>
                
              <div className="absolute w-28 left-0 -top-20 hidden lg:block">
                {/* i forgot this div right here in the video, it's purely visual gradient and looks nice */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t via-slate-50/50 from-slate-50 h-28" />
              </div>
              <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">
                <Link
                  href="/search"
                  className="text-xs sm:text-sm text-green-600 font-bold hover:underline"
                >
                  👉 Explore all posts{" "}
                  <span className="bg-green-600 px-2 text-white">
                    {" "}
                    and fuel your coding journey!
                  </span>{" "}
                </Link>
              </h1>
              <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
                Learn more about web development and software engineering,{" "}
                <span className="font-semibold">one-of-one</span> tutorials.
                HarmanMuasa blog is an exciting coding challenge, especially
                when it aims to offer a unique blend of functionality and
                whether you're working with a MERN stack, Next.js, or other
                tools, and the coding considerations involved.
              </p>

              <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start col-span-2 px-6 lg:px-0">
                <Container className="lg:items-end">
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe
                      className="embed-responsive-item"
                      src="https://www.youtube.com/embed/kdPxheeDF4g?si=A5CuY8krjjeoVYLi"
                      allowFullScreen
                    ></iframe>
                  </div>
                </Container>
                <ul className="mt-8 space-y-2 text-left font-medium  items-center sm:items-start">
                  <div className="space-y-2">
                    <li className="flex gap-1.5 items-center text-left">
                      <Check className="h-5 w-5 shrink-0 text-green-600" />
                      Readability
                    </li>
                    <li className="flex gap-1.5 items-center text-left">
                      <Check className="h-5 w-5 shrink-0 text-green-600" />
                      Simplicity
                    </li>
                    <li className="flex gap-1.5 items-center text-left">
                      <Check className="h-5 w-5 shrink-0 text-green-600" />
                      Modularity
                    </li>
                    <li className="flex gap-1.5 items-center text-left">
                      <Check className="h-5 w-5 shrink-0 text-green-600" />
                      Security
                    </li>
                    <li className="flex gap-1.5 items-center text-left">
                      <Check className="h-5 w-5 shrink-0 text-green-600" />
                      Consistency
                    </li>
                    <li className="flex gap-1.5 items-center text-left">
                      <Check className="h-5 w-5 shrink-0 text-green-600" />
                      Testability
                    </li>
                    <li className="flex gap-1.5 items-center text-left">
                      <Check className="h-5 w-5 shrink-0 text-green-600" />
                      Maintainability
                    </li>
                  </div>
                </ul>
              </div>

              <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5">  
              </div>
            </div>
          </div>

          <div className="col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit">
            <div className="relative md:max-w-xl">
            <Container className="lg:items-end">
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe
                      className="embed-responsive-item"
                      src="https://www.youtube.com/embed/kdPxheeDF4g?si=A5CuY8krjjeoVYLi"
                      allowFullScreen
                    ></iframe>
                  </div>
                </Container>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* value proposition section */}
      <section className="bg-slate-100 grainy-dark">
        <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-32">
          <div className="mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 gap-y-16">
            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
              <div className="flex gap-0.5 mb-2">
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
              </div>
              <div className="text-lg leading-8">
                <p>
                  "Data structures and algorithms is the basic building block
                  for programming and development i am able to tackle any coding
                  challenge and use the most optimum code in solving problems{" "}
                  <span className="p-0.5 bg-slate-800 text-white">
                    the code is prity clear
                  </span>
                  , i previously had skills on the programming but now i
                  understand the problem first then bring the solution in a code
                  "
                </p>
              </div>
            </div>

            {/* second user review */}
            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
              <div className="flex gap-0.5 mb-2">
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
              </div>
              <div className="text-lg leading-8">
                <p>
                  "I've been using TypeScript for a few months now, and it's
                  been a game changer. My code feels much more reliable, and
                  catching errors early has saved me so much time. Before, I
                  used plain JavaScript, and I'd constantly run into runtime
                  issues. With TypeScript, my code is cleaner, easier to
                  maintain,{" "}
                  <span className="p-0.5 bg-slate-800 text-white">
                    and the added type safety gives me confidence with each
                    build.
                  </span>
                  . I dig it."
                </p>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>

        <div className="pt-16">
          <h2 className="text-2xl font-semibold text-center">Recent Posts</h2>
          {/* <Reviews /> */}
        </div>
      </section>
    </div>
  );
}
