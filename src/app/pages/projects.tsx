import CallToAction from "@/components/CallToAction";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import React from "react";

export default function projects() {
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <MaxWidthWrapper>
        <div className="min-h-screen max-w-3xl mx-auto flex justify-center items-center flex-col p-3 gap-6">
          <h1 className="text-3xl font-semibold">Projects</h1>
          <p className="text-md text-gray-500">
            Build fun and engaging projects while learning JavaScript/TypeScript
            <br /> Nodejs and django  projects
          </p>
          <CallToAction />
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
