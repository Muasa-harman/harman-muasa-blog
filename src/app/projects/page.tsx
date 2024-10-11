import CallToAction from "@/components/CallToAction";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import React from "react";

export default function projects() {
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <MaxWidthWrapper>
        <div className="min-h-screen max-w-3xl mx-auto flex justify-center items-center flex-col p-3 gap-6">
          <Link href={"/"}>
          <h1 className="text-3xl font-semibold hover:text-green-800 focus:border-green-500">Projects.</h1>
          </Link>
          <p className="text-md text-white">
            Build fun and engaging projects while learning JavaScript/TypeScript
            <br /> Nodejs and django  projects.
          </p>
          <CallToAction />
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
