import Link from "next/link";
import { FaPlus } from "react-icons/fa6";
import { MdShoppingCart } from "react-icons/md";


const CategoriesCard = () => {
  return (
    <div className="flex gap-6 text-white  justify-center my-24">
      <div className="bg-primary relative w-[350px] h-[180px] flex flex-col justify-center items-center uppercase">
        <div className="flex justify-center absolute left-1/2 transform -translate-x-1/2 -top-6 bg-primary rounded-full h-12 w-12 p-4">
          <FaPlus className='text-xl font-bold'/>
        </div>
        <div className="text-center">
          <h2 className="font-semibold text-2xl">Pharmacy</h2>
          <p className=" text-sm">We care not just cure</p>
        </div>
        <button className="bg-white text-primary shadow-md -bottom-4 px-4 py-1 rounded-lg absolute left-1/2 transform -translate-x-1/2 font-medium">
          Shop now
        </button>
      </div>

      <div className="bg-cyan-950 relative w-[350px] h-[180px] flex flex-col justify-center items-center uppercase">
        <div className="absolute left-1/2 transform -translate-x-1/2 -top-6 bg-cyan-950 rounded-full h-12 w-12 p-4">
          <MdShoppingCart />
        </div>
        <div className="text-center">
          <h2 className="font-semibold text-2xl">supermarket</h2>
          <p className=" text-sm">We serve not just submit</p>
        </div>
        <button className="bg-white text-cyan-950 shadow-md -bottom-4 px-4 py-1 rounded-lg absolute left-1/2 transform -translate-x-1/2 font-medium">
          Shop now
        </button>
      </div>
    </div>
  );
};

export default CategoriesCard;
