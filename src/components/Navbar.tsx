import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const Navbar = () => {
  // const handleSubmit = (e) =>{
  //     e.preventDefault()
  // }
  return (
    <header className="sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link href="/" className="flex z-40 font-semibold">
            Harman Muasa <span className="text-green-600">Blog</span>
          </Link>
          <form>
            <div className="flex items-center">
              <Input
                type="text"
                placeholder="search post..."
                className="outline-none border text-black p-2 "
              />
              <Button type="submit" className="w-12 h-10 lg:hidden"></Button>
            </div>
          </form>
          <div className="flex gap-2 items-center md:order-2">
        <button
        //   onClick={() => dispatch(toggleTheme())}
          className="w-12 h-10 hidden items-center sm:inline"
        >
          {/* {theme === "light" ? ( */}
            {/* <FaSun /> */}
          {/* ) : ( */}
            {/* <FaMoon className="w-6 h-6" pill="true" /> */}
          {/* )} */}
        </button>
        {/* {currentUser ? ( */}
            <h3>currentUser</h3>
        {/* //   <Menu /> */}
        {/* ) : ( */}
          <Link href="/signIn">
            <Button className="bg-gradient-to-r focus:outline text-green-600 from-gray-300 via-slate-300 to-gray-100 rounded-lg">
              Sign-In
            </Button>
          </Link>
        {/* )} */}
        {/* Navbar-toggle */}
      </div>
          <nav className="flex items-center justify-evenly">
            {/* <IoMenuSharp className="w-6 h-6"/> */}
            <div className="mr-5 hover:text-slate-800 focus:border-green-500">
              <Link href="/projects/">Projects</Link>
            </div>
            <div className="mr-5 hover:text-slate-800 focus:border-green-500">
              <Link href="/about">Canvas Profile</Link>
            </div>
            <div className="ml-5 hover:text-slate-800 focus:border-green-500">
              <Link href="/">Home</Link>
            </div>
          </nav>
        </div>
      </MaxWidthWrapper>
    </header>
  );
};

export default Navbar;