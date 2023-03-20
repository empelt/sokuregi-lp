import Image from 'next/image'
import PointCard from 'components/PointCard'
import ExplanationCard, { ExplanationCardWithMovie } from 'components/ExplanationCard'
import Layout from 'components/Layout'

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col gap-10 pl-5 pr-5 pt-12">
        <div className="m-auto w-56">
          <p className="text-4xl font-bold">待ち時間0のレジアプリを体験しよう。</p>
        </div>
        <div className="pl-8 pr-8">
          <p className="text-xl font-bold">
            非常にシンプルに使えるから、いつでも誰でも、お買い物がよりスムーズに
          </p>
        </div>

        <div>
          <Image src={'/images/top.png'} alt={'top'} fill className="!relative" />
        </div>

        <div className="flex flex-col gap-6">
          <ExplanationCard
            tag="POINT 01"
            title="いつでも待ち時間0で、すぐにお会計！"
            text="レジに並ぶ時間、無駄だなと思いませんか？アプリを使えば、いつでも待ち時間0でお会計できます。"
          />
          <ExplanationCardWithMovie
            tag="POINT 02"
            title="QRをかざして、すぐにお支払いに進める！"
            text="レジではQRをかざすだけだから、3秒で終わり！店員さんが一つ一つ商品をスキャンしないから、ぼーっと待つ時間もなし。"
          />
          <ExplanationCard
            tag="POINT 03"
            title="カゴからバッグへ移し替える必要なし！"
            text="カゴ→カゴ→バッグと何度も商品を移動させるのは面倒。アプリを使えば、バッグに入れながら買い物ができちゃう！"
          />
        </div>

        <div className="flex flex-col items-center gap-3">
          <p className="text-2xl font-bold">使い方も非常に簡単</p>
          <p className="pl-4 pr-4">誰でも使いやすいUIと、非常にシンプルな操作のモバイルアプリ</p>
          <div className="flex flex-col gap-6">
            <PointCard
              imageSrc="/images/ic_download.png"
              title="アプリダウンロード"
              text="会員登録不要だから、すぐに利用できる"
            />
            <PointCard
              imageSrc="/images/ic_cart.png"
              title="お買い物"
              text="商品をかごに入れる際に、アプリで商品をスキャン"
            />
            <PointCard
              imageSrc="/images/ic_money.png"
              title="優先レジでお支払い"
              text="スマホをレジでかざして、待ち時間0でお支払いに進む"
            />
          </div>
        </div>

        <div className="flex flex-col items-center gap-3">
          <p className="text-2xl font-bold">導入のご相談</p>
          <p className="pl-4 pr-4">店舗への導入に関する資料請求・ご質問等はこちら</p>
          <div className="flex gap-8">
            <div className="flex flex-col items-center">
              <Image
                src={'/images/ic_mail.png'}
                alt={'contact'}
                width={100}
                height={100}
                className={'rounded-3xl'}
              />
              <p className="font-bold">CONTACT</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src={'/images/ic_web.png'}
                alt={'contact'}
                width={100}
                height={100}
                className={'rounded-3xl'}
              />
              <p className="font-bold">事業者向けLP</p>
            </div>
          </div>
        </div>

        <DownloadButton />
      </div>
    </Layout>
  )
}

function DownloadButton() {
  return (
    <div className="sticky bottom-4 rounded-full bg-red-400 p-6 text-center">
      <p className="font-bold text-white">アプリをダウンロード</p>
    </div>
  )
}
