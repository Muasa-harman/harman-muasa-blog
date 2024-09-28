import Link from "next/link";
import CallToAction from "@/components/CallToAction";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import PostCard from "../components/PostCard";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col gap-6  mx-auto">
        <h3 className="text-3xl font-bold">
          Welcome to My Developer's Playground
        </h3>
        {/* <h3 className=""></h3> */}
        <p className="text-gray-500 text-xs sm:text-sm">
          Your go-to hub for all things tech! Dive into a world of insightful
          articles, especially on data structures and algorithms, step-by-step
          tutorials, and in-depth explorations of cutting-edge topics in web
          development, software engineering, and programming languages like
          JavaScript, TypeScript, and Python. Whether you're a curious beginner
          or a seasoned pro, there's something here for everyone. Stay ahead of
          the curve with expert tips, hands-on guides, and personal reflections
          on the latest trends in the tech world. Ready to level up? Let's get
          started!
        </p>
        <Link
          href="/search"
          className="text-xs sm:text-sm text-green-600 font-bold hover:underline"
        >
          👉 Explore all posts and fuel your coding journey!
        </Link>
      </div>
      <div className="flex p-3 bg-amber-100 dark:bg-slate-700 justify-center mt-5">
        <section>
          <MaxWidthWrapper className="pb-24 pt-10 lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
            <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
              <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
                <CallToAction />
              </div>
              <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7">
                <div className="flex flex-col gap-6">
                  <h2 className="text-2xl font-semibold text-center">
                    Recent Posts
                  </h2>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <PostCard />
                    <PostCard />
                  </div>
                  <Link
                    href={"/search"}
                    className="text-lg text-teal-500 hover:underline text-center"
                  >
                    View all posts
                  </Link>
                </div>
              </div>
            </div>
          </MaxWidthWrapper>
        </section>
      </div>
    </div>
  );
}
