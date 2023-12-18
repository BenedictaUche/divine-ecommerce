import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/logo.svg";
import { Input } from "@/components/ui/input";
import { IoMdSearch, IoMdExit } from "react-icons/io";
import { RiShoppingBag3Line } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { Inter } from "next/font/google";
import NavMenu from "./NavMenu";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";


const inter = Inter({ subsets: ["latin"] });

const Navbar = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const openLoginModal = () => {
    setShowLoginModal(true);
    setShowRegisterModal(false);
  }

  const openRegisterModal = () => {
    setShowRegisterModal(true);
    setShowLoginModal(false);
  }

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
              <span onClick={openLoginModal} className=" cursor-pointer">
                Login
              </span>{" "}
              |{" "}
              <span onClick={openRegisterModal} className=" cursor-pointer">
                Register
              </span>
            </p>
            </div>
            <div className="inline-flex justify-between items-center">
              <div className="relative">
                <Input
                  placeholder="Search for a product"
                  className="max-w-[400px]"
                />
                <IoMdSearch className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400" />
              </div>
              <div className="inline-flex gap-4">
                <FaRegHeart className="text-2xl text-black" />
                <RiShoppingBag3Line className="text-2xl text-black" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {showLoginModal && (
        <div className="absolute flex justify-center items-center inset-x-0 inset-y-0 z-20">
        <Card className="w-[500px] h-[400px] relative pt-10 px-6">
          <CardHeader>
            <CardTitle>Log into your account</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="flex flex-col gap-5">
              <Input placeholder="Email" className="bg-[#EFEFEF]" />
              <Input placeholder="Password" className="bg-[#EFEFEF]" />
            </CardDescription>
            <div className=" py-3 flex justify-between">
              <div className="flex gap-2">
              <input type="checkbox" name="rememberPassword" id="" />
              <label htmlFor="rememberPassword">Remember password</label>
              </div>
              <Link href='/'>Forgot Password?</Link>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <button className="bg-primary text-white p-2 rounded-md hover:bg-teal-600">Start Shopping</button>
          </CardFooter>
          <IoMdExit className="absolute top-4 right-4 text-2xl cursor-pointer" onClick={() => setShowLoginModal(false)} />
        </Card>
        </div>
      )}


      {showRegisterModal && (
        <Card className="w-[400px] relative">
          <CardHeader>
            <CardTitle>Register</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              <Input placeholder="Email" />
              <Input placeholder="Password" />
              <Input placeholder="Confirm Password" />
            </CardDescription>
          </CardContent>
          <CardFooter>
            <button className="btn btn-primary">Register</button>
          </CardFooter>
          <IoMdExit className="absolute top-4 right-4 text-2xl cursor-pointer" onClick={() => setShowRegisterModal(false)} />
        </Card>
      )}
      <NavMenu />
    </nav>
  );
};

export default Navbar;
