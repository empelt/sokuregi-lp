import Image from 'next/image'
import useWindowSize from 'hooks/useWindowSize'

export default function Navbar() {
  const [width] = useWindowSize()
  const isMobile = width <= 1000

  if (isMobile) {
    return (
      <div className="mt-4">
        <Image src={'/images/logo.png'} alt="sokuregi logo" width={250} height={50} />
      </div>
    )
  }

  return (
    <div className="p-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
      <Image src={'/images/logo.png'} alt="sokuregi logo" width={250} height={50} />
    </div>
  )
}
