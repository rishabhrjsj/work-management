"use client";
import UserContext from "@/context/userContext";
import Link from "next/link";
import { useContext } from "react";
import logout from "@/app/services/logoutService";
import { useRouter } from "next/navigation";

export default function CustomNavbar() {
  const context = useContext(UserContext);
  console.log(context);

  const router = useRouter();

  async function doLogout() {
    try {
      const result = await logout();
      console.log(result);
      context.setUser(undefined);
      router.push("/");
    } catch (error) {
      alert("Can't Logout ");
      console.log(error);
    }
  }
  return (
    <div className="bg-red-900 h-14 px-5 flex justify-between items-center">
      <div>
        <Link href={"/"} className="font-semibold">
          Work Manager
        </Link>
      </div>
      <div className="flex ">
        <ul className="flex space-x-6">
          {context.user && (
            <>
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
            </>
          )}
        </ul>
      </div>
      <div>
        <ul className="flex space-x-6">
          {context.user && (
            <>
              {/* <li>
                <Link href={"/"}>{context.user.user.name}</Link>
              </li> */}
              <li>
                <button onClick={doLogout}>Logout</button>
              </li>
            </>
          )}
          {!context.user && (
            <>
              <li>
                <Link href={"/signup"}>SignUp</Link>
              </li>
              <li>
                <Link href={"/login"}>Login</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}
