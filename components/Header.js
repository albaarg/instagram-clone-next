import Image from "next/image";
import {
  SearchIcon,
  PlusCircleIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";

function Header() {
  const { data: session } = useSession();
  const [open, setOpen] = useRecoilState(modalState);
  const router = useRouter();

  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-50">
      <div className="flex justify-between max-w-6x1 mx-5 lg:mx-auto">
        <div
          onClick={() => router.push("/")}
          className="relative hidden lg:inline-grid w-24 cursor-pointer m-3"
        >
          <Image
            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div
          onClick={() => router.push("/")}
          className="relative w-16 lg:hidden flex-shrink-0 cursor-pointer
        "
        >
          <Image
            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="max-w-xs">
          <div className="relative mt-1 p-3 rounded-md">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-500" />
            </div>
            <input
              className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded:md"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="flex items-center justify-end space-x-4">
          <HomeIcon
            onClick={() => router.push("/")}
            className="h-6 w-6 hover:scale-110 transition transform duration-200 ease-out"
          />
          {session ? (
            <>
              <div className="relative">
                <PaperAirplaneIcon className="h-6 w-6 hover:scale-110 transition transform duration-200 ease-out" />
                <div className="absolute -top-1 -right-1 text-sm w-4 h-4 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white">
                  3
                </div>
              </div>
              <PlusCircleIcon
                onClick={() => setOpen(true)}
                className="h-6 w-6 hover:scale-110 transition transform duration-200 ease-out"
              />
              <HeartIcon className="h-6 w-6 hover:scale-110 transition transform duration-200 ease-out" />
              <img
                onClick={signOut}
                src={session.user.image}
                alt="profile"
                className="h-7 w-7 rounded-full cursor-pointer"
              />
            </>
          ) : (
            <button onClick={signIn}>Sign In</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
