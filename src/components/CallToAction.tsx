"use client"

import React from "react";
import { Container } from "react-bootstrap";
import { Button } from "./ui/button";
import Link from "next/link";
import { motion } from "framer-motion";


const CallToAction = () => {
  return (
    <div className="flex flex-col sm:flex-row p-3  border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className="flex-1 justify-center flex flex-col">
        <Container>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              className="embed-responsive-item"
              src="https://www.youtube.com/embed/kdPxheeDF4g?si=A5CuY8krjjeoVYLi"
              allowFullScreen
            ></iframe>
          </div>
        </Container>

        <h2 className="text-2xl text-white mt-4">
          Want to learn more about Javascript: Typescript? && Python?
        </h2>
        <p className="text-white my-2 ">
          Checkout these resources with my JavaScript & Typescript Projects and
          django framework
        </p>
      </div>
        <motion.div
        className="mt-4 sm:mt-0 sm:ml-4"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        whileHover={{ scale: 1.1 }}
      >
        <Button className="rounded-bl-none bg-gradient-to-r from-gray-300 via-slate-500 to-gray-800 hover:bg-green-600 rounded-lg text-white p-2">
          <Link href="/myprojects" target="_blank" rel="noopener noreferrer" aria-label="View JavaScript, TypeScript, and Django Projects">
            Click to View!!!!! My Javascript/Typescript && Django Projects
          </Link>
        </Button>
      </motion.div>
    </div>
  );
};

export default CallToAction;
