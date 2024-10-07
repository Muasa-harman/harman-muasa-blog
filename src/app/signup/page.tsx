import Link from "next/link";
import TimeDisplay from "@/components/TimeDisplay";
import { RegisterForm } from "@/components/forms/RegisterForm";

const signIn = ({ searchParams }: SearchParamProps) => {
  const isAdmin = searchParams?.admin === "true";

  return (
    <div className="h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* Left Section */}
      <section className="remove-scrollbar flex flex-col justify-center container my-auto">
        <div className="sub-container max-w-[496px] mx-auto">
          <div className="mb-12 h-10 w-fit text-2xl font-bold">
            Harman Muasa Blog
          </div>

          {/* Conditionally render the Passkey Modal for admin */}
          <RegisterForm />

          <div className="text-14-regular mt-2 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
              © 2024 Harman Muasa Blog
            </p>
            <Link href="/signIn" className="text-green-500">
              SignIn
            </Link>
          </div>
        </div>
      </section>
      {/* <hr/> */}
      {/* Right Section */}
      <div className="side-img flex items-center justify-center bg-[rgb(8,23,42)] text-white ">
        <div className="text-center">
          <TimeDisplay />
        </div>
      </div>
    </div>
  );
};

export default signIn;


