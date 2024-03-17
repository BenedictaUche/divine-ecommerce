import React from 'react';
import { FaLocationDot, FaPhone, FaEnvelope } from 'react-icons/fa6';

const Footer: React.FC = () => {
  return (
    <>
      <footer className="footer bg-black text-white">
        <div className="flex flex-wrap justify-between lg:justify-between px-4 lg:px-10 py-12">
          <div className="w-full lg:w-1/2 inline-flex flex-col gap-6 mb-8 lg:mb-0">
            <div>
              <h2 className="text-white text-2xl lg:text-4xl font-semibold">
                Contact Us
              </h2>
              <div className="h-2 w-auto sm:w-[40%] bg-teal-600 rounded-xl mt-2"></div>
            </div>
            <ul className="flex flex-col gap-6 text-neutral-400 text-lg">
              <li className="inline-flex gap-4">
                <span className="border-2 border-white p-1 h-8 w-8">
                  <FaLocationDot className="text-xl lg:text-2xl font-semibold" />
                </span>
                <span>
                  4, Adeyemi Alao Str. Community <br /> Bus-stop, Oke-Ira,
                  Ogba-Aguda, <br /> Lagos State, Nigeria
                </span>
              </li>
              <li className="inline-flex gap-4">
                <span className="border-2 border-white p-1 h-8 w-8">
                  <FaPhone />
                </span>
                <span>
                  +(234) 8179333771 <br /> +(234) 8108085857 <br /> +(234)
                  8023063705
                </span>
              </li>
              <li className="inline-flex gap-4">
                <span className="border-2 border-white p-1 h-8 w-8">
                  <FaEnvelope />
                </span>
                <span>lifelink60@yahoo.com</span>
              </li>
            </ul>
          </div>

          <div className="w-full lg:w-1/2 inline-flex flex-col gap-6">
            <div>
              <h2 className="text-white text-2xl lg:text-4xl font-semibold">
                Opening Time
              </h2>
              <div className="h-2  w-auto sm:w-[40%]  bg-teal-600 rounded-xl mt-2"></div>
            </div>
            <ul className="flex flex-col gap-6 text-neutral-400 text-lg">
              <li>Monday - Saturday: 9:00am - 10:00pm</li>
              <li>Sunday: 4:00pm - 9:00pm</li>
            </ul>
          </div>
        </div>

        <div className="border-0 border-t-2 border-white py-4">
          <p className="text-center text-lg lg:text-xl font-semibold">
            © DivineCare Pharmaceuticals & Supermarket. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
