import Link from "next/link";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Check, Star } from "lucide-react";
import { Container } from "react-bootstrap";

export default function Home() {
  return (
    <div className="grainy-light min-h-screen bg-[rgb(16,23,42)] text-white flex flex-col justify-between">
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section>
          <MaxWidthWrapper className="pb-20 pt-8 bg-[rgb(16,23,42)] text-white lg:grid lg:grid-cols-3 sm:pb-28 lg:gap-x-0 xl:gap-x-8 lg:pt-10 xl:pt-16 lg:pb-40">
            <div className="col-span-2 px-6 lg:px-0">
              <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
                <h3 className="text-3xl font-bold">
                  Welcome to My Developer's Playground
                </h3>
                <p className="text-white text-xs sm:text-sm">
                  Your go-to hub for all things tech! Dive into a world of
                  insightful articles, especially on data structures and
                  algorithms, step-by-step video tutorials, and in-depth
                  explorations of cutting-edge topics in web development,
                  software engineering, and programming languages like
                  JavaScript, TypeScript, and Python. Whether you're a curious
                  beginner or a seasoned pro, there's something here for
                  everyone. Stay ahead of the curve with expert tips, hands-on
                  guides, and personal reflections on the latest trends in the
                  tech world. Ready to level up? Let's get started!
                </p>

                <div className="absolute w-28 left-0 -top-20 hidden lg:block">
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t via-slate-50/50 from-slate-50 h-28" />
                </div>

                <h1 className="relative w-fit tracking-tight text-balance mt-6 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">
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

                <p className="mt-6 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
                  Learn more about web development and software engineering,{" "}
                  <span className="font-semibold">one-of-one</span> tutorials.
                  HarmanMuasa blog is an exciting coding challenge, especially
                  when it aims to offer a unique blend of functionality and
                  whether you're working with a MERN stack, Next.js, or other
                  tools, and the coding considerations involved.
                </p>

                <Container className="my-8 lg:items-end">
                  {/* <iframe
                    className="embed-responsive-item"
                    src="https://www.youtube.com/embed/kdPxheeDF4g"
                    allowFullScreen
                  /> */}
                  <iframe
                    width="639"
                    height="360"
                    src="https://www.youtube.com/embed/KrlmeH05gJI"
                    title="introduction to Next.js and my project part 2"
                    allowFullScreen
                  />
                </Container>

                {/* List and Chat Component Side by Side */}
                <div className="flex flex-col lg:flex-row justify-between w-full mt-4">
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
                      <li key={item} className="flex gap-1.5 items-center">
                        <Check className="h-5 w-5 shrink-0 text-green-600" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Chat Component */}
                  <div className="lg:ml-16 w-full lg:w-auto lg:max-w-xs bg-green-100 border border-green-300 p-4 text-center rounded-lg animate-slide-up">
                    <p className="text-green-700 font-bold text-lg">
                      Let us chat here!
                      <br />
                      coming Soon
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit">
              <div className="relative md:max-w-xl">
                <Container className="lg:items-end">
                  <iframe
                    className="embed-responsive-item"
                    src="https://www.youtube.com/embed/kdPxheeDF4g"
                    allowFullScreen
                  />
                </Container>
              </div>
            </div>
          </MaxWidthWrapper>
        </section>

        {/* Value Proposition Section */}
        <section className="grainy-dark bg-[rgb(16,23,42)] text-white">
          <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-32">
            <div className="mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 gap-y-16">
              {[
                `“Data structures and algorithms are the building blocks for development. I can tackle any coding challenge using optimum code to solve problems. Now, I understand the problem before bringing the solution in code."`,
                `“I've been using TypeScript for months, and it's a game changer. My code is more reliable, catching errors early saves time, and the added type safety gives me confidence.”`,
              ].map((review, index) => (
                <div
                  key={index}
                  className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20"
                >
                  <div className="flex gap-0.5 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-green-600 fill-green-600"
                      />
                    ))}
                  </div>
                  <div className="text-lg leading-8">
                    <p>{review}</p>
                  </div>
                </div>
              ))}
            </div>
          </MaxWidthWrapper>

          {/* Recent Posts Section */}
          <div className="pt-16 bg-[rgb(16,23,42)] text-white">
            <h2 className="text-2xl font-semibold text-center">Recent Posts</h2>
            {/* Insert recent posts or reviews here */}
          </div>
        </section>
      </main>
    </div>
  );
}

