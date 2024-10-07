import Link from "next/link";
import { PasskeyModal } from "@/components/PassKeyModal";
import { UserForm } from "@/components/forms/UserForm";
import TimeDisplay from "@/components/TimeDisplay";

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
          {isAdmin && <PasskeyModal />}

          <UserForm />

          <div className="text-14-regular mt-2 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
              © 2024 Harman Muasa Blog
            </p>
            <Link href="/?admin=true" className="text-green-500">
              Admin
            </Link>
          </div>
        </div>
      </section>

      {/* Right Section */}
      <div className="side-img flex items-center justify-center bg-[rgb(8,23,42)] text-white">
        <div className="text-center">
          <TimeDisplay />
        </div>
      </div>
    </div>
  );
};

export default signIn;






