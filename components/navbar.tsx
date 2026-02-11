import { BriefcaseBusinessIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link
          href={"/"}
          className="flex gap-2 items-center text-lg text-primary font-semibold"
        >
          <BriefcaseBusinessIcon />
          Job Tracker
        </Link>

        <div className="flex items-center gap-4">
          <Link href={"sign-in"}>
            <Button
              variant={"ghost"}
              className="text-gray-700 hover:text-black"
            >
              Log In
            </Button>
          </Link>

          <Link href={"sign-up"}>
            <Button className="bg-primary hover:bg-primary/90">
              Start for free
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
