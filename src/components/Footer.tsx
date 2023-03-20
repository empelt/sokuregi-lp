import Image from 'next/image'

export default function Footer() {
  return (
    <div className="p-6">
      <div className="flex flex-col gap-6">
        <Image src={'/images/logo.png'} alt="sokuregi logo" width={250} height={50} />
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
