import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <div className="flex justify-between border-b py-2 px-3 items-center   bg-zinc-50">
      <Link href={"/"} className="font-bold text-lg">RentEase</Link>

      <Link href={"/login"}>
        <Button>Login</Button>
      </Link>
    </div>
  );
};

export default Navbar;
