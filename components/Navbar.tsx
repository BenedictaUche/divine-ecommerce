import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/logo.svg";
import { Input } from "@/components/ui/input";
import { IoMdSearch } from "react-icons/io";
import { Inter } from "next/font/google";
import NavMenu from "./NavMenu";

const inter = Inter({ subsets: ["latin"] });

const Navbar = () => {
  return (
    <nav className={`${inter.className} flex flex-col`}>
      <div>
        <div className="mx-auto flex items-center">
          <div className="logo">
            <Image
              src={Logo}
              alt="Divine care logo"
              className="w-[400px] h-[120px]"
            />
          </div>
          <div className="flex flex-grow flex-col gap-4">
            <div className="bg-primary text-white flex-grow p-4">
              <p className="text-right">
                <Link href="/">Login</Link> | <Link href="/">Register</Link>
              </p>
            </div>
            <div className="relative">
              <Input
                placeholder="Search for a product"
                className="max-w-[400px]"
              />
              <IoMdSearch className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
        </div>
      </div>
      <NavMenu />
    </nav>
  );
};

export default Navbar;
