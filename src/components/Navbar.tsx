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
    <div className="flex items-center justify-between p-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
      <Image src={'/images/logo.png'} alt="sokuregi logo" width={250} height={50} />
      <div className="flex items-center gap-4">
        <div>
          <button className="rounded-full border-gray-300 bg-white px-5 py-2.5 font-bold text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700">
            特徴
          </button>
        </div>
        <div>
          <button className="rounded-full border-gray-300 bg-white px-5 py-2.5 font-bold text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700">
            利用手順
          </button>
        </div>
        <div>
          <button className="rounded-full border-gray-300 bg-white px-5 py-2.5 font-bold text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700">
            導入方法
          </button>
        </div>
        <div>
          <button className="rounded-full border-gray-300 bg-white px-5 py-2.5 font-bold text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700">
            お問い合わせ
          </button>
        </div>
        <div>
          <button className="rounded-full border-gray-300 bg-white px-5 py-2.5 font-bold text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700">
            アプリダウンロード
          </button>
        </div>
      </div>
    </div>
  )
}
