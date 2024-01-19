import React from 'react'
import { IoMdChatbubbles } from 'react-icons/io'


const breakerData = [
    {
        title: '100% positive feedback',
        icon: <IoMdChatbubbles />,
    },
    {
        title: '100% secure payment',
        icon: <IoMdChatbubbles />,
    },
    {
        title: 'Free shipping & return',
        icon: <IoMdChatbubbles />,
    },
]


const Breaker = () => {
  return (
    <div className='flex items-center separator'>
        {breakerData.map((breaker) => {
            return (
                <div className="flex items-center gap-2 justify-center w-full h-32 bg-amber-600">
                    <div className="flex items-center justify-center w-16 h-16 bg-gray-300 rounded-full">
                        {breaker.icon}
                    </div>
                    <h2 className="mt-4 text-2xl font-bold capitalize">{breaker.title}</h2>
                </div>
            )
        })}
    </div>
  )
}

export default Breaker
