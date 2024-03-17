import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/logo.svg";
import { Input } from "@/components/ui/input";
import { IoMdSearch, IoMdExit, IoMdMenu } from "react-icons/io";
import { RiShoppingBag3Line } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { Inter } from "next/font/google";
import NavMenu from "./NavMenu";
import Login from "./Auth/Login";
import Register from "./Auth/Register";


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
        <Login setShowLoginModal = {setShowLoginModal} />
      )}


      {showRegisterModal && (
        <Register setShowRegisterModal = {setShowRegisterModal} />
      )}
      <NavMenu />
      <IoMdMenu className="text-2xl text-primary hidden" />
      <IoMdExit className="text-2xl text-primary hidden" />
    </nav>
  );
};

export default Navbar;
