"use client";

import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { IoMenuSharp, IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const handlePostSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/posts");
  };

  return (
<header className="sticky bg-[rgb(16,23,42)] text-white z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 backdrop-blur-lg transition-all">
  <MaxWidthWrapper>
    <div className="flex h-14 items-center justify-center space-x-6 w-full">
      {/* Logo */}
      <Link href="/" className="flex z-40 font-semibold">
        H@rtman Muasa <span className="text-green-600">Blog</span>
      </Link>

      {/* Search Bar (Visible on Large Screens) */}
      <form onSubmit={handlePostSearch} className="hidden lg:flex items-center max-w-md mx-4">
        <div className="flex items-center">
          <Input
            type="text"
            placeholder="Search post..."
            className="outline-none border text-white p-2"
          />
          {/* <Button type="submit" className="w-12 h-10"></Button> */}
        </div>
      </form>

      {/* Centered Nav Items on Large Screens */}
      <nav className="hidden lg:flex justify-center gap-6 items-center text-white">
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/projects" className="hover:underline">Projects</Link>
        <Link href="/about" className="hover:underline">Canvas Profile</Link>
      </nav>

      {/* Sign-Up/Sign-In Buttons (Visible on Large Screens) */}
      <div className="hidden lg:flex gap-2 items-center">
        <Link href="/signup">
          <Button className="bg-white border-green text-gray-600">
            Sign-up
          </Button>
        </Link>
        <Link href="/signIn">
          <Button className="bg-green-600 text-white">Sign-in</Button>
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="lg:hidden p-2 text-xl text-white"
      >
        {menuOpen ? <IoCloseSharp /> : <IoMenuSharp />}
      </button>
    </div>

    {/* Mobile Menu (Visible on Small Screens) */}
    {menuOpen && (
      <nav className="flex flex-col items-start gap-4 p-4 bg-[rgb(16,23,42)] text-white lg:hidden">
        <Link href="/" onClick={() => setMenuOpen(false)}>
          Home
        </Link>
        <Link href="/projects/" onClick={() => setMenuOpen(false)}>
          Projects
        </Link>
        <Link href="/about" onClick={() => setMenuOpen(false)}>
          Canvas Profile
        </Link>
        {/* Mobile Search Bar */}
        <form onSubmit={handlePostSearch} className="w-full mt-2 flex items-center">
          <Input
            type="text"
            placeholder="Search post..."
            className="outline-none border text-white p-2 flex-grow"
          />
          {/* <Button type="submit" className="w-12 h-10"></Button> */}
        </form>
        {/* Mobile Sign-Up/Sign-In Buttons */}
        <div className="flex flex-col gap-2 w-full mt-4">
          <Link href="/signup" onClick={() => setMenuOpen(false)}>
            <Button className="bg-white text-gray-600 w-full">Sign-up</Button>
          </Link>
          <Link href="/signIn" onClick={() => setMenuOpen(false)}>
            <Button className="bg-green-600 text-white w-full">Sign-in</Button>
          </Link>
        </div>
      </nav>
    )}
  </MaxWidthWrapper>
</header>



    // <header className="sticky bg-[rgb(16,23,42)] text-white z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 backdrop-blur-lg transition-all">
    //   <MaxWidthWrapper>
    //     <div className="flex h-14 items-center justify-between">
    //       {/* Logo */}
    //       <Link href="/" className="flex z-40 font-semibold">
    //         H@rtman Muasa <span className="text-green-600">Blog</span>
    //       </Link>

    //       {/* Search Bar (Visible on Large Screens) */}
    //       <form
    //         onSubmit={handlePostSearch}
    //         className="hidden lg:block flex-grow max-w-md mx-4"
    //       >
    //         <div className="flex items-center">
    //           <Input
    //             type="text"
    //             placeholder="Search post..."
    //             className="outline-none border text-white p-2 "
    //           />
    //           <Button type="submit" className="w-12 h-10"></Button>
    //         </div>
    //       </form>

    //       {/* Sign-Up/Sign-In Buttons (Visible on Large Screens) */}
    //       <div className="hidden lg:flex gap-2 items-center">
    //         <Link href="/signup">
    //           <Button className="bg-white border-green text-gray-600">
    //             Sign-up
    //           </Button>
    //         </Link>
    //         <Link href="/signIn">
    //           <Button className="bg-green-600 text-white">Sign-in</Button>
    //         </Link>
    //       </div>

    //       {/* Mobile Menu Button */}
    //       <button
    //         onClick={() => setMenuOpen(!menuOpen)}
    //         className="lg:hidden p-2 text-xl text-white"
    //       >
    //         {menuOpen ? <IoCloseSharp /> : <IoMenuSharp />}
    //       </button>
    //     </div>

    //     {/* Mobile Menu (Visible on Small Screens) */}
    //     {menuOpen && (
    //       <nav className="flex flex-col items-start gap-4 p-4 bg-[rgb(16,23,42)] text-white lg:hidden">
    //         <Link href="/" onClick={() => setMenuOpen(false)}>
    //           Home
    //         </Link>
    //         <Link href="/projects/" onClick={() => setMenuOpen(false)}>
    //           Projects
    //         </Link>
    //         <Link href="/about" onClick={() => setMenuOpen(false)}>
    //           Canvas Profile
    //         </Link>
    //         {/* Mobile Search Bar */}
    //         <form onSubmit={handlePostSearch} className="w-full mt-2 flex items-center">
    //           <Input
    //             type="text"
    //             placeholder="Search post..."
    //             className="outline-none border text-white p-2 flex-grow"
    //           />
    //           <Button type="submit" className="w-12 h-10">
    //             Search
    //           </Button>
    //         </form>
    //         {/* Mobile Sign-Up/Sign-In Buttons */}
    //         <div className="flex flex-col gap-2 w-full mt-4">
    //           <Link href="/signup" onClick={() => setMenuOpen(false)}>
    //             <Button className="bg-white text-gray-600 w-full">Sign-up</Button>
    //           </Link>
    //           <Link href="/signIn" onClick={() => setMenuOpen(false)}>
    //             <Button className="bg-green-600 text-white w-full">Sign-in</Button>
    //           </Link>
    //         </div>
    //       </nav>
    //     )}
    //   </MaxWidthWrapper>
    // </header>
  );
};

export default Navbar;



// "use client"

// import Link from "next/link";
// import MaxWidthWrapper from "./MaxWidthWrapper";
// import { Input } from "./ui/input";
// import { Button } from "./ui/button";
// import {useRouter} from "next/navigation"
// import React, { useState } from "react";
// import { IoMenuSharp, IoCloseSharp } from "react-icons/io5";

// const Navbar = () => {
//   const router = useRouter()
//   const [menuOpen, setMenuOpen] = useState(false);
//   const handlePostSearch = (e:React.FormEvent) =>{
//       e.preventDefault()
//       router.push("/posts")
//   }
//   return (
//     <header className="sticky  bg-[rgb(16,23,42)] text-white z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200  backdrop-blur-lg transition-all">
//       <MaxWidthWrapper>
//         <div className="flex h-14 items-center justify-between ">    {/* bg-[rgb(16,23,42)] text-white border-b border-zinc-200 */}
//           <Link href="/" className="flex z-40 font-semibold">
//             H@rtman Muasa <span className="text-green-600">Blog</span>
//           </Link>
//           <form onSubmit={handlePostSearch}  className="hidden lg:block flex-grow max-w-md mx-4">
//             <div className="flex items-center">
//               <Input
//                 type="text"
//                 placeholder="search post..."
//                 className="outline-none border text-white p-2 "
//               />
//               <Button type="submit" className="w-12 h-10 lg:hidden"></Button>
//             </div>
//           </form>
//           <div className=" hidden lg:flex gap-2 items-center md:order-2">
//           <Link href="/signup">
//             <Button className="bg-white border-green focus:outline-green-600 text-gray-600 from-gray-300 via-slate-300 to-gray-100 ">
//               Sign-up
//             </Button>
//           </Link>
//           <Link href="/signIn">
//             <Button className="bg-green-600 focus:outline text-white from-gray-300 via-slate-300 to-gray-100">
//               Sign-in
//             </Button>
//           </Link>
//         {/* )} */}
//       </div>
//          {/* Mobile Menu Button */}
//          <button
//             onClick={() => setMenuOpen(!menuOpen)}
//             className="lg:hidden p-2 text-xl text-white"
//           >
//             {menuOpen ? <IoCloseSharp /> : <IoMenuSharp />}
//           </button>
//             {/* Mobile Menu */}
//           <nav className="flex items-center justify-evenly">
//             {/* <IoMenuSharp className="w-6 h-6"/> */}
//             <div className="mr-5 hover:hover:text-green-800 focus:border-green-500">
//               <Link href="/projects/">Projects</Link>
//             </div>
//             <div className="mr-5 hover:hover:text-green-800 focus:border-green-500">
//               <Link href="/about">Canvas Profile</Link>
//             </div>
//             <div className="ml-5 hover:hover:text-green-800 focus:border-green-500">
//               <Link href="/">Home</Link>
//             </div>
//           </nav>
//         </div>
//       </MaxWidthWrapper>
//     </header>
//   );
// };

// export default Navbar;
