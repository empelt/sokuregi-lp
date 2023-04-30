import useWindowSize from 'hooks/useWindowSize'

export default function Footer() {
  const [width] = useWindowSize()
  const isMobile = width <= 1000

  if (isMobile) {
    return (
      <div className="p-6">
        <div className="flex flex-col gap-6">
          <img src={'/images/logo.png'} alt="sokuregi logo" width={250} height={50} />
          <div className="flex justify-evenly">
            <div>
              <p className="mb-4 text-lg font-bold">SERVICE</p>
              <p>特徴</p>
              <p>使い方</p>
              <p>導入のご相談</p>
              <p>お問い合わせ</p>
              <p>ダウンロードリンク</p>
            </div>
            <div>
              <p className="mb-4 text-lg font-bold">SUPPORT</p>
              <p>運営会社</p>
              <p>利用規約</p>
              <p>プライバシーポリシー</p>
            </div>
          </div>
          <div className="m-auto w-fit">
            <p>&copy; {new Date().getFullYear()} PhatecHs Co., Ltd</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="border-t-2 pl-32 pr-32 pt-16 pb-16">
      <div className="flex flex-col gap-6">
        <div className="flex gap-6">
          <p className="text-xl">特徴</p>
          <p className="text-xl">使い方</p>
          <p className="text-xl">導入のご相談</p>
          <p className="text-xl">お問い合わせ</p>
          <p className="text-xl">ダウンロードリンク</p>
        </div>
        <div className="flex gap-6">
          <p className="text-xl">運営会社</p>
          <p className="text-xl">利用規約</p>
          <p className="text-xl">プライバシーポリシー</p>
        </div>
        <div className="flex items-center gap-6">
          <img src={'/images/logo.png'} alt="sokuregi logo" width={250} height={50} />
          <p className="text-xl">&copy; {new Date().getFullYear()} PhatecHs Co., Ltd</p>
        </div>
      </div>
    </div>
  )
}
