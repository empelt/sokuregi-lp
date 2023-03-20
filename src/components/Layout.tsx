import { ReactNode } from 'react'
import Head from 'next/head'
import Footer from 'components/Footer'
import Navbar from 'components/Navbar'
import useWindowSize from 'hooks/useWindowSize'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Head>
        <title>Sokuregi LP</title>
        <meta name="description" content="Sokuregi LP" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

type SectionProps = {
  children: ReactNode
  title: string
  text: string
}
export function Section({ children, title, text }: SectionProps) {
  const [width] = useWindowSize()

  if (width <= 1000) {
    return (
      <div className="flex flex-col items-center gap-3">
        <p className="text-2xl font-bold">{title}</p>
        <p className="pl-4 pr-4">{text}</p>
        {children}
      </div>
    )
  }
  return (
    <div className="mt-60 flex flex-col items-center gap-3">
      <p className="text-5xl font-bold">{title}</p>
      <p className="mb-12 text-xl">{text}</p>
      {children}
    </div>
  )
}
