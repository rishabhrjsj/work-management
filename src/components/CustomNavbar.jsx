"use client";
import Link from "next/link";
export default function CustomNavbar() {
  return (
    <div className="bg-red-900 h-14 px-5 flex justify-between items-center">
      <div>
        <Link href={"/"} className="font-semibold">
          Work Manager
        </Link>
      </div>
      <div className="flex ">
        <ul className="flex space-x-6">
          <li>
            <Link href={"/"} className="hover:text-red-400">
              Home
            </Link>
          </li>
          <li>
            <Link href={"/add-task"} className="hover:text-red-400">
              Add Task
            </Link>
          </li>
          <li>
            <Link href={"/show-task"} className="hover:text-red-400">
              Show Task
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <ul className="flex space-x-6">
          <li>
            <Link href={"/signup"}>SignUp</Link>
          </li>
          <li>
            <Link href={"/login"}>Login</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
