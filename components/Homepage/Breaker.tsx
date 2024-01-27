import React from 'react';
import { IoMdChatbubbles } from 'react-icons/io';

const breakerData = [
  {
    id: 1,
    title: '100% positive feedback',
    icon: <IoMdChatbubbles />,
  },
  {
    id: 2,
    title: '100% secure payment',
    icon: <IoMdChatbubbles />,
  },
  {
    id: 3,
    title: 'Free shipping & return',
    icon: <IoMdChatbubbles />,
  },
];

const Breaker = () => {
  return (
    <div className='flex flex-wrap justify-center items-stretch my-8 divide-y-0 sm:divide-y-2'>
      {breakerData.map((breaker) => (
        <div key={breaker.id} className="flex flex-col items-center justify-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4 bg-amber-600">
          <div className="flex items-center justify-center w-16 h-16 bg-gray-300 rounded-full mb-4">
            {breaker.icon}
          </div>
          <h2 className="text-lg font-bold capitalize text-center">{breaker.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default Breaker;
