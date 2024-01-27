import React from 'react'
import { Input } from "@/components/ui/input";
import { IoMdExit } from 'react-icons/io';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface RegisterProps {
    setShowRegisterModal: (show: boolean) => void;
}

const Register: React.FC<RegisterProps> = ({ setShowRegisterModal }) => {
  return (
    <div>
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
    </div>
  )
}

export default Register
