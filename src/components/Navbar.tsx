import useWindowSize from 'hooks/useWindowSize'

export default function Navbar() {
  const [width] = useWindowSize()
  const isMobile = width <= 1000

  if (isMobile) {
    return (
      <div className="mt-4">
        <img src={'/images/logo.png'} alt="sokuregi logo" width={250} height={50} />
      </div>
    )
  }

  return (
    <div className="flex items-center justify-between p-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
      <img src={'/images/logo.png'} alt="sokuregi logo" width={250} height={50} />
      <div className="flex items-center gap-4">
        <div>
          <button className="border-gray-300 text-gray-900 hover:bg-gray-100 focus:ring-gray-200 rounded-full bg-white px-5 py-2.5 font-bold focus:outline-none focus:ring-4">
            特徴
          </button>
        </div>
        <div>
          <button className="border-gray-300 text-gray-900 hover:bg-gray-100 focus:ring-gray-200 rounded-full bg-white px-5 py-2.5 font-bold focus:outline-none focus:ring-4">
            利用手順
          </button>
        </div>
        <div>
          <button className="border-gray-300 text-gray-900 hover:bg-gray-100 focus:ring-gray-200 rounded-full bg-white px-5 py-2.5 font-bold focus:outline-none focus:ring-4">
            導入方法
          </button>
        </div>
        <div>
          <a
            href="https://forms.gle/gusk9HruYnXQg9jPA"
            target="_blank"
            rel="noopener noreferrer"
            className="focus:ring-gray-200 rounded-full bg-white px-3 py-5 text-center text-sm font-bold shadow-[rgba(23,_38,_76,_0.19)_0px_0px_20px] focus:outline-none focus:ring-4"
          >
            ⚡お問い合わせ
          </a>
        </div>
        <div>
          <button className="focus:ring-gray-200 rounded-full bg-download-red px-3 py-5 text-center text-sm font-bold text-white shadow-[rgba(23,_38,_76,_0.19)_0px_0px_20px] focus:outline-none focus:ring-4">
            📱アプリをダウンロード
          </button>
        </div>
      </div>
    </div>
  )
}
