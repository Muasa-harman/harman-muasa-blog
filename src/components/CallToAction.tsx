import React from "react";
import { Container } from "react-bootstrap";
import { Button } from "./ui/button";
import Link from "next/link";

const CallToAction = () => {
  return (
    <div className="flex flex-col sm:flex-row p-3  border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className="flex-1 justify-center flex flex-col">
        <Container className="">
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              className="embed-responsive-item"
              src="https://www.youtube.com/embed/kdPxheeDF4g?si=A5CuY8krjjeoVYLi"
              allowFullScreen
            ></iframe>
          </div>
        </Container>

        <h2 className="text-2xl text-white">
          Want to learn more about Javascript: Typescript? && Python?
        </h2>
        <p className="text-white my-2 ">
          Checkout these resources with my JavaScript & Typescript Projects and
          django framework
        </p>
      </div>
        <Button className="rounded-bl-none bg-gradient-to-r focus:outline from-gray-300 via-slate-500 to-gray-800 hover:bg-green-600 rounded-lg text-white p-2 text-black">
          {" "}
          <Link href="/myprojects" target="_blank" rel="noopener noreferrer">
            {" "}
            Click to View!!!!! My Javascript/Typescript && django Projects
          </Link>
        </Button>
    </div>
  );
};

export default CallToAction;
