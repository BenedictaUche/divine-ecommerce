import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from '@/components/Homepage/Hero'
import CategoriesCard from '@/components/Homepage/CatergoriesCard'
import Fitness from '@/components/Homepage/Fitness'
import { GetStaticProps } from 'next'
import { createClient } from 'contentful'

const inter = Inter({ subsets: ['latin'] })

interface HomeProps {
  products : any
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {

  const client = createClient({
      space : process.env.CONTENTFUL_SPACE_ID || " ",
      accessToken : process.env.CONTENTFUL_ACCESS_KEY || " "
  });

  const res = await client.getEntries({ content_type : "product" });

  return {
      props : {
          products : res.items
      }
  }
}

export default function Home({ products }: HomeProps) {
  return (
    <div
      className={`  ${inter.className}`}
    >
      <Hero />
      <CategoriesCard />
      <Fitness products={products} />
    </div>
  )
}
