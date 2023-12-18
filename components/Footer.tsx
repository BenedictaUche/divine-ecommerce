import { FaLocationDot, FaPhone, FaEnvelope } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <>
      <footer className="footer bg-black text-white">
        <div className="flex justify-between px-10 py-12">
          <div className="inline-flex flex-col gap-6">
            <div>
              <h2 className="text-white text-4xl font-semibold">Contact Us</h2>
              <div className="h-2 w-auto bg-teal-600 rounded-xl mt-2"></div>
            </div>
            <ul className="flex flex-col gap-6 text-neutral-400 text-lg">
              <li className="inline-flex gap-4">
                <span className="border-2 border-white p-1 h-10 w-10">
                  <FaLocationDot className="text-2xl font-semibold" />
                </span>
                4, Adeyemi Alao Str. Community <br /> Bus-stop, Oke-Ira,
                Ogba-Aguda, <br /> Lagos State, NIgeria
              </li>
              <li className="inline-flex gap-4">
                <span className="border-2 border-white p-1 h-10 w-10">
                  <FaPhone />
                </span>
                +(234) 8179333771 <br /> +(234) 8108085857 <br /> +(234)
                8023063705
              </li>
              <li className="inline-flex gap-4">
                <span className="border-2 border-white p-1 h-10 w-10">
                  <FaEnvelope />
                </span>
                lifelink60@yahoo.com
              </li>
            </ul>
          </div>

          <div className="inline-flex flex-col gap-6">
            <div>
              <h2 className="text-white text-4xl font-semibold">
                Opening Time
              </h2>
              <div className="h-2 w-auto bg-teal-600 rounded-xl mt-2"></div>
            </div>
            <ul className="flex flex-col gap-6 text-neutral-400 text-lg">
              <li>Monday - Saturday: 9:00am - 10:00pm</li>
              <li>Sunday: 4:00pm - 9:00pm</li>
            </ul>
          </div>
        </div>

        <div className="border-0 border-t-2 border-white py-4">
            <p className="text-center text-xl font-semibold">© DivineCare Pharmaceuticals & Supermarket. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
