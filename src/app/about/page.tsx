import React from "react";
import Image from "next/image";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Profile from "@/components/Profile";
import Link from "next/link";

export default function About() {
  return (
    <div className="flex flex-col">
      <div className="min-h-screen flex items-center justify-center">
        <MaxWidthWrapper className="pb-24 pt-3 lg:grid lg:grid-cols-2 sm:pb-32 lg:gap-x-12 xl:gap-x-16 lg:pt-14 xl:pt-32 lg:pb-52">
          {/* Left Column - Text Content */}
          <section className="animate-fadeIn">
            <div className="max-w-2xl mx-auto p-3 text-left">
              <div>
                <h1 className="text-3xl font-semibold text-center my-7 text-white animate-fadeIn-up">
                  Harman Muasa
                </h1>
                <h1 className="text-xl text-center my-7 text-white animate-fadeIn-up">
                  Software Engineer |{" "}
                  <span className="text-green-600">Full-Stack Developer</span>
                </h1>
                <div className="text-md text-white flex flex-col gap-6">
                  <div>
                    <h1 className="text-3xl font-semibold text-white text-center my-7 animate-fadeIn-up">
                      Introduction
                    </h1>
                  </div>
                  <h1 className="text-xl text-white font animate-fadeIn-up">
                    About me
                  </h1>
                  <p className="animate-fadeIn-up">
                    Jambo, my name is{" "}
                    <span className="text-green-600">Harman Muasa</span>, a
                    software engineer living and coding in Nairobi, Kenya.
                    Outside my world of code, you might find me connecting with
                    nature through travel and camping or pumping iron at the
                    gym. However, I have a passion for teaching, which enables
                    me to stay up-to-date with trends in tech to showcase my
                    skills and share my thoughts and ideas with the world that I
                    have learned as a developer. I am passionate about
                    engineering because it lets me combine problem-solving with
                    building cool and innovative algorithms, and I am fired up
                    to share them with you. Above all, I find deep strength and
                    purpose in my devotion to God.
                  </p>
                  <h1 className="text-xl text-white font animate-fadeIn-up">
                    My Heritage and Roots
                  </h1>
                  <p className="animate-fadeIn-up">
                    As the youngest of four siblings, I grew up in a family that
                    instilled strong values in me. My father, a dedicated
                    military man, taught me the importance of discipline and
                    perseverance. My mother, a nurturing small-scale farmer,
                    grounded me with her love for hard work and respect for my
                    peers and elders as well. Being raised in this environment
                    shaped me into the person I am today. One of the most
                    cherished traditions in my family is spending the Christmas
                    season together with my siblings and their families in
                    Ukambani, our ancestral homeland. Ukambani is a beautiful
                    region in the eastern part of Kenya, known for its rich
                    cultural heritage. During this time, we gather with extended
                    family to celebrate, share stories, and catch up as we
                    strengthen our bond. The moments of togetherness are a
                    constant source of joy and inspiration for me.
                  </p>
                  <h1 className="text-xl text-white font animate-fadeIn-up">
                    Personal Journey and Milestones
                  </h1>
                  <p className="animate-fadeIn-up">
                    My undergraduate degree was a pivotal milestone in my
                    development. It equipped me with a strong foundation in
                    knowledge and critical thinking skills. This journey would
                    not have been possible without the unwavering support of my
                    parents and family. Their encouragement and belief in me
                    fueled my motivation throughout those challenging semesters.
                    The decision to major in software development after
                    graduation came from a desire to apply that knowledge in a
                    practical setting. It's a testament to their support that I
                    felt empowered to take this leap and embark on this exciting
                    new chapter.
                  </p>
                  <h1 className="text-xl text-white font animate-fadeIn-up">
                    My Future Aspirations
                  </h1>
                  <p className="text-white animate-fadeIn-up">
                    I aspire to develop tech solutions that address local and
                    global challenges and also uplift the less fortunate. This
                    could involve creating accessible educational platforms such
                    as my blog, building and contributing to open-source
                    applications that streamline essential services, or even
                    crafting programs that provide digital literacy training
                    like{" "}
                    <Link href={""} className="text-green-600">
                      my Youtube Channel
                    </Link>{" "}
                    where I post educational materials and programming concepts
                    — all with the goal of fostering a more inclusive and
                    tech-connected society as the world becomes a global
                    village.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Right Column - Profile Image (Sticky and Animated) */}
          <section className="relative">
            <div className="sticky top-20 animate-fadeIn">
              <Profile
                className="w-64"
                imgSrc="https://avatars.githubusercontent.com/u/123101284?s=400&u=a04dfe5638c3e7c0baa461bfe87c5a4c1ef123c2&v=4"
              />
            </div>
          </section>
        </MaxWidthWrapper>
      </div>
    </div>
  );
}
