import Image from "next/image";
import Link from "next/link";
import { Form, FormControl } from "@/components/ui/form";
import { getRecentAppointmentList } from "@/lib/actions/appointment.actions";
import { FileUploader } from "@/components/FileUploader";
import CustomFormField, { FormFieldType } from "@/components/CustomFormField";

const Page = async () => {
  const appointments = await getRecentAppointmentList();

  return (
    <div className="mx-auto flex max-w-7xl flex-col space-y-14">
      <header className="admin-header">
        <Link href="/" className="cursor-pointer">
          <Image
            src="/assets/icons/logo-full.svg"
            height={32}
            width={162}
            alt="logo"
            className="h-8 w-fit"
          />
        </Link>

        <p className="text-16-semibold">Admin Dashboard</p>
      </header>

      <main className="admin-main">
        <section className="w-full space-y-4">
          <h1 className="header">Welcome 👋</h1>
          <p className="text-dark-700">
            Start the day with managing new appointments
          </p>
        </section>

        <section className="admin-stat">
          <h3 className="">Test</h3>
        
        </section>

     
      </main>
    </div>
  );
};

export default Page;
