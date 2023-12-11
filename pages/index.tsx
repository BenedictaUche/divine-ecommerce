import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from '@/components/Homepage/Hero'
import CategoriesCard from '@/components/Homepage/CatergoriesCard'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div
      className={`  ${inter.className}`}
    >
      <Hero />
      <CategoriesCard />
    </div>
  )
}
