import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import GoogleIcon from "../../../public/google.svg";

function page() {
  return (
    <div className="mt-24 rounded bg-black/80 py-10 px-6 md:mt-0 md:max-w-sm md:px-14">
      <form action="">
        <h1 className="text-3xl font-semibold text-white mb-4 text-center">
          Sign Up
        </h1>
        <div>
          <Input
            type="email"
            name="email"
            placeholder="Email"
            className="bg-[#333] placeholder:text-xs placeholder:text-gray-400 w-full inline-block mb-4"
          />
          <Button
            type="submit"
            variant="destructive"
            className="w-full bg-[#e50914] mb-2"
          >
            Log In
          </Button>
        </div>
      </form>

      <div className="text-gray-500 text-sm mt-2 text-center">
        Already have an account?{" "}
        <Link className="text-white hover:underline" href="/login">
          Log in Now!
        </Link>
      </div>

      <div className="flex w-full justify-center items-center gap-x-3 mt-6">
        <Button variant="outline" size="icon">
          <FaGithub />
        </Button>
        <Button variant="outline" size="icon">
          <Image src={GoogleIcon} alt="Google icon" className="w-6 h-6" />
        </Button>
      </div>
    </div>
  );
}

export default page;
