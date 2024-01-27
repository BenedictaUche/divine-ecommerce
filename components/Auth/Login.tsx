import React, { useState } from 'react'
import Link from 'next/link';
import { Input } from "@/components/ui/input";
import { IoMdExit } from 'react-icons/io';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface LoginProps {
    setShowLoginModal: (show: boolean) => void;
}

const Login: React.FC<LoginProps> = ({ setShowLoginModal }) => {

  return (
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
  )
}

export default Login
