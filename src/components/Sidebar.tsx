"use client";

import { Search } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Router from "next/router";
import React, { useState } from "react";

const Sidebar: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
  };

  const handleButtonSearch = (e:React.FormEvent) =>{
    e.preventDefault();
    router.push('/post')
  }
  return (
    <div className="flex flex-col justify-between h-screen w-48 text-gray-300 border-r border-white">
      <div className="">
        <h1 className="text-2xl font-bold text-white position-sticky text-center">
          H@rtman
        </h1>
      </div>
      <div className="flex flex-col space-y-4 p-6">
        {/* Search Input */}
        <form
          className="flex flex-col flex-grow mb-4"
          // onSubmit={handleSearch}
        >

        <div className="relative ml-5 max-w-md mx-auto mt-4">
          <div className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by distance, keyword..."
              className="border border-gray-300 rounded-md pl-12 pr-4 py-2 w-full bg-custom-dark text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
              <Search className="text-gray-400" />
            </div>
          </div>
        </div>
        </form>
      </div>
      <h4 className="">Select Framework:</h4>
      <div className="space-y-6">
      <div className="flex justify-around space-x-16">
        <div className="max-w-lg shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-bold mb-2">Language:</h2>
          <div className="space-y-3">
            <label className="flex items-center">
              <input
                type="radio"
                name="framework"
                // checked={selectedFrame === "typescript"}
                value="any"
                // checked={selectedDistance === "any"}
                onChange={handleSearch}
                className="form-radio text-custom-purple"
              />
              <span className="ml-2">Typescript</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="distance"
                value="under_3"
                // checked={selectedFrame === "typescript"}
                // onChange={handleDistanceChange}
                className="form-radio text-custom-purple"
              />
              <span className="ml-2">Javascript</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="distance"
                value="3_to_6"
                // checked={selectedFrame === "react"}
                // onChange={handleDistanceChange}
                className="form-radio text-custom-purple"
              />
              <span className="ml-2">React</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="distance"
                value="6_to_15"
                // checked={selectedFrame ==="next"}
                // onChange={handleDistanceChange}
                className="form-radio text-custom-purple"
              />
              <span className="ml-2">Next</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="distance"
                value="more_than_16"
                // checked={selectedFrame ==="python"}
                // onChange={handleDistanceChange}
                className="form-radio text-custom-purple"
              />
              <span className="ml-2">Python</span>
            </label>
          </div>
          <button onClick={handleButtonSearch} className="bg-green-500 p-3 mt-2 hover:bg-slate-500 rounded-md
           text-white transition duration-200 items-center px-4 py-2" type="submit">Filter</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Sidebar;
