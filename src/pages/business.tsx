import PointCard, { PointCardWithMovie } from 'components/PointCard'
import CollapseCard from 'components/CollapseCard'
import ExplanationCard from 'components/ExplanationCard'
import Layout, { Section } from 'components/Layout'
import useWindowSize from 'hooks/useWindowSize'
import CardBase from 'components/CardBase'

export default function Business() {
  const [width] = useWindowSize()

  if (width <= 1000) {
    return (
      <Layout>
        <div className="flex flex-col gap-10 pl-5 pr-5 pt-12">
          <div className="m-auto w-56">
            <p className="text-4xl font-bold">モバイルアプリDXでEX/CXを</p>
          </div>
          <div className="pl-8 pr-8">
            <p className="text-xl font-bold">
              急速に広がるスマホレジシステムを、汎用的に導入できるように落とし込んだモバイルアプリ
            </p>
          </div>

          <div>
            <img src={'/images/top.png'} alt={'top'} className="!relative" />
          </div>

          <div className="flex flex-col items-center gap-3">
            <p className="text-2xl font-bold">何を解決するのか</p>
            <p className="pl-4 pr-4">主に3つの課題解決をご提案させて頂きます</p>
            <div className="flex flex-col gap-8">
              <CollapseCard
                imageSrc="/images/ic_calc.png"
                title="レジ作業の約66%を削減"
                text="深刻な人手不足の中、レジ作業の省力化と人件費削減を実現します。"
              >
                <div className="flex flex-col items-center gap-4">
                  <p className="font-bold">
                    SokuREGIでは、レジ作業で多くの時間を割いている登録作業を削減することができます。
                  </p>
                  <img
                    src={'/images/ic_mail.png'}
                    alt={'chart'}
                    width={100}
                    height={100}
                    className={'rounded-3xl'}
                  />
                  <p className="font-bold">
                    小売店で多く導入されているセミセルフレジは、支払いのみをセルフで行うため、作業時間の大半を占める登録作業は依然として残ります。単体では、限定的な効果しか期待できません。
                  </p>
                  <p className="font-bold">
                    SokuREGIとセルフレジを組み合わせることで、支払いまで一貫してDXを実現することも可能です。
                  </p>
                </div>
              </CollapseCard>
              <CollapseCard
                imageSrc="/images/ic_time.png"
                title="お客様のレジ待ち時間を0に"
                text="ストレスに感じる待ち時間をなくすことで、CX向上/競合他社との差別化を実現します。"
              >
                <p className="font-bold">
                  スーパーでは、6割の人が待ち時間が3分以内でストレスに感じることがわかっています。レジの待ち時間をいかに減らすかが、CXに最も直結する喫緊の課題です。
                </p>
              </CollapseCard>
              <CollapseCard
                imageSrc="/images/ic_cart2.png"
                title="カゴ移動を最短0に"
                text="カゴ→カゴ→バッグと何度も商品を移動しないから、お客様も時間短縮できます。"
              >
                <div className="flex flex-col items-center gap-4">
                  <p className="font-bold">
                    従来の買い物の流れでは、どうしても商品を移動する手間が発生してしまいます。レジでの商品移動は、待ち時間を発生させる一番の原因です。袋詰めでの移動は、お客様に負担をかけてしまうことや、袋詰めのための場所を広く用意する必要が出てきます。
                  </p>
                  <p className="font-bold">
                    また、商品を何度も移動することで、商品を傷める原因となったり、従業員の精神的な負担となりえます。
                  </p>
                  <img
                    src={'/images/ic_mail.png'}
                    alt={'chart'}
                    width={100}
                    height={100}
                    className={'rounded-3xl'}
                  />
                  <p className="font-bold">
                    SokuREGIでは、レジバックカゴを利用することで商品を一度も移動させずにお買い物いただけます。
                  </p>
                  <div className="flex flex-col gap-2 self-start">
                    <div className="flex gap-2">
                      <img src={'/images/ic_check.png'} alt={'check'} className={'h-6 w-6'} />
                      <p className="font-bold">お客様の袋詰め作業を無くす</p>
                    </div>
                    <div className="flex gap-2">
                      <img src={'/images/ic_check.png'} alt={'check'} className={'h-6 w-6'} />
                      <p className="font-bold">従業員の商品移動の身体的負担を減らす</p>
                    </div>
                    <div className="flex gap-2">
                      <img src={'/images/ic_check.png'} alt={'check'} className={'h-6 w-6'} />
                      <p className="font-bold">従業員が商品に触れる精神的負担を減らす</p>
                    </div>
                  </div>
                </div>
              </CollapseCard>
            </div>
          </div>

          <div className="flex flex-col items-center gap-3">
            <p className="text-2xl font-bold">SokuREGIの強み</p>
            <p className="pl-4 pr-4">
              スタートアップ企業が運営するならではの、独自の強みを持っています。
            </p>
            <div className="flex flex-col gap-6">
              <PointCard
                tag="POINT 01"
                title="すべてのPOSシステムに対応できる高い汎用性"
                text="メーカー/機種/バージョンなどに関わらず、どの小売店でも導入できる汎用的なアプリだから、独自に開発したり、POSの改修等も不要。"
              />
              <PointCardWithMovie
                tag="POINT 02"
                title="従量課金制だから初期投資が不要"
                text="導入に初期投資を行うことは、リスクとなり得ます。SokuREGIは、利用した分の支払いしか発生しないため、最も導入しやすいスマホレジアプリといえます。"
              />
              <PointCard
                tag="POINT 03"
                title="専用のセルフレジを設置する必要なし"
                text="スマホレジアプリ専用のセルフレジを設置する必要がないから、機材購入や新たに場所を確保の必要はありません。全てのレジがSokuREGI対応のレジに変わります。"
              />
              <PointCard
                tag="POINT 04"
                title="万引き抑止の仕組み"
                text="店側の目視確認がワンクッション入ることで、万引きの強い抑止となります。他社サービスと比べて最も万引きを防げる仕組みが整っています。"
              />
            </div>
          </div>

          <div className="flex flex-col items-center gap-3">
            <p className="text-2xl font-bold">導入の流れ</p>
            <p className="pl-4 pr-4">全てのレジがSokuREGI対応のレジに</p>
            <div className="flex flex-col gap-6">
              <ExplanationCard
                imageSrc="/images/ic_hardware.png"
                title="専用機器の設置"
                text="レジごとに専用機器を接続し、セットアップを行う"
              />
              <ExplanationCard
                imageSrc="/images/ic_phone.png"
                title="貸出機の設置"
                text="店舗入口にデジタルサイネージとスマホ貸出機を設置"
              />
              <ExplanationCard
                imageSrc="/images/ic_file.png"
                title="商品マスター提供"
                text="月一回の頻度で、マスターデータをご提供いただきます"
              />
            </div>
          </div>

          <div className="flex flex-col items-center gap-3">
            <p className="text-2xl font-bold">使い方も非常に簡単</p>
            <p className="pl-4 pr-4">誰でも使いやすいUIと、非常にシンプルな操作のモバイルアプリ</p>
            <div className="flex flex-col gap-6">
              <ExplanationCard
                imageSrc="/images/ic_download.png"
                title="アプリダウンロード"
                text="会員登録不要だから、すぐに利用できる"
              />
              <ExplanationCard
                imageSrc="/images/ic_cart.png"
                title="お買い物"
                text="商品をかごに入れる際に、アプリで商品をスキャン"
              />
              <ExplanationCard
                imageSrc="/images/ic_money.png"
                title="優先レジでお支払い"
                text="スマホをレジでかざして、待ち時間0でお支払いに進む"
              />
            </div>
          </div>

          <div className="flex flex-col items-center gap-3">
            <p className="text-2xl font-bold">導入に関するご相談/お問い合わせ</p>
            <p className="pl-4 pr-4">他と違いを作るDX導入の実現を</p>
            <div className="flex gap-8">
              <div className="flex flex-col items-center">
                <img
                  src={'/images/ic_mail.png'}
                  alt={'mail'}
                  width={100}
                  height={100}
                  className={'rounded-3xl'}
                />
                <p className="font-bold">CONTACT</p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={'/images/ic_web.png'}
                  alt={'contact'}
                  width={100}
                  height={100}
                  className={'rounded-3xl'}
                />
                <p className="font-bold">利用者用サイト</p>
              </div>
            </div>
          </div>

          <DownloadButton />
        </div>
      </Layout>
    )
  }
  return (
    <Layout>
      <div className="flex flex-col gap-48 pl-5 pr-5 pt-12">
        <img src={'/images/top2.png'} alt={'chart'} className={'!relative'} />

        <Section title="何を解決できるのか" text="主に3つの課題解決をご提案させて頂きます">
          <div className="flex max-w-[1620px] flex-wrap justify-center gap-16">
            <CollapseCard
              imageSrc="/images/ic_calc.png"
              title="レジ作業の約66%を削減"
              text="深刻な人手不足の中、レジ作業の省力化と人件費削減を実現します。"
            >
              <div className="flex flex-col items-center gap-4">
                <p className="font-bold">
                  SokuREGIでは、レジ作業で多くの時間を割いている登録作業を削減することができます。
                </p>
                <img
                  src={'/images/ic_mail.png'}
                  alt={'chart'}
                  width={100}
                  height={100}
                  className={'rounded-3xl'}
                />
                <p className="font-bold">
                  小売店で多く導入されているセミセルフレジは、支払いのみをセルフで行うため、作業時間の大半を占める登録作業は依然として残ります。単体では、限定的な効果しか期待できません。
                </p>
                <p className="font-bold">
                  SokuREGIとセルフレジを組み合わせることで、支払いまで一貫してDXを実現することも可能です。
                </p>
              </div>
            </CollapseCard>
            <CollapseCard
              imageSrc="/images/ic_time.png"
              title="お客様のレジ待ち時間を0に"
              text="ストレスに感じる待ち時間をなくすことで、CX向上/競合他社との差別化を実現します。"
            >
              <p className="font-bold">
                スーパーでは、6割の人が待ち時間が3分以内でストレスに感じることがわかっています。レジの待ち時間をいかに減らすかが、CXに最も直結する喫緊の課題です。
              </p>
            </CollapseCard>
            <CollapseCard
              imageSrc="/images/ic_cart2.png"
              title="カゴ移動を最短0に"
              text="カゴ→カゴ→バッグと何度も商品を移動しないから、お客様も時間短縮できます。"
            >
              <div className="flex flex-col items-center gap-4">
                <p className="font-bold">
                  従来の買い物の流れでは、どうしても商品を移動する手間が発生してしまいます。レジでの商品移動は、待ち時間を発生させる一番の原因です。袋詰めでの移動は、お客様に負担をかけてしまうことや、袋詰めのための場所を広く用意する必要が出てきます。
                </p>
                <p className="font-bold">
                  また、商品を何度も移動することで、商品を傷める原因となったり、従業員の精神的な負担となりえます。
                </p>
                <img
                  src={'/images/ic_mail.png'}
                  alt={'chart'}
                  width={100}
                  height={100}
                  className={'rounded-3xl'}
                />
                <p className="font-bold">
                  SokuREGIでは、レジバックカゴを利用することで商品を一度も移動させずにお買い物いただけます。
                </p>
                <div className="flex flex-col gap-2 self-start">
                  <div className="flex gap-2">
                    <img src={'/images/ic_check.png'} alt={'check'} className={'h-6 w-6'} />
                    <p className="font-bold">お客様の袋詰め作業を無くす</p>
                  </div>
                  <div className="flex gap-2">
                    <img src={'/images/ic_check.png'} alt={'check'} className={'h-6 w-6'} />
                    <p className="font-bold">従業員の商品移動の身体的負担を減らす</p>
                  </div>
                  <div className="flex gap-2">
                    <img src={'/images/ic_check.png'} alt={'check'} className={'h-6 w-6'} />
                    <p className="font-bold">従業員が商品に触れる精神的負担を減らす</p>
                  </div>
                </div>
              </div>
            </CollapseCard>
          </div>
        </Section>

        <Section
          title="SokuREGIの強み"
          text="スタートアップ企業が運営するならではの、独自の強みを持っています。"
        >
          <div className="flex max-w-[1620px] flex-wrap justify-center gap-16">
            <PointCard
              tag="POINT 01"
              title="すべてのPOSシステムに対応できる高い汎用性"
              text="メーカー/機種/バージョンなどに関わらず、どの小売店でも導入できる汎用的なアプリだから、独自に開発したり、POSの改修等も不要。"
            />
            <PointCard
              tag="POINT 02"
              title="従量課金制だから初期投資が不要"
              text="導入に初期投資を行うことは、リスクとなり得ます。SokuREGIは、利用した分の支払いしか発生しないため、最も導入しやすいスマホレジアプリといえます。"
            />
            <PointCard
              tag="POINT 03"
              title="専用のセルフレジを設置する必要なし"
              text="スマホレジアプリ専用のセルフレジを設置する必要がないから、機材購入や新たに場所を確保の必要はありません。全てのレジがSokuREGI対応のレジに変わります。"
            />
            <PointCard
              tag="POINT 04"
              title="万引き抑止の仕組み"
              text="店側の目視確認がワンクッション入ることで、万引きの強い抑止となります。他社サービスと比べて最も万引きを防げる仕組みが整っています。"
            />
          </div>
        </Section>

        <div className="flex justify-center gap-14">
          <div className="w-1/3">
            <Section title="導入の流れ" text="全てのレジがSokuREGI対応のレジに">
              <div className="flex flex-col gap-6">
                <ExplanationCard
                  imageSrc="/images/ic_hardware.png"
                  title="専用機器の設置"
                  text="レジごとに専用機器を接続し、セットアップを行う"
                />
                <ExplanationCard
                  imageSrc="/images/ic_phone.png"
                  title="貸出機の設置"
                  text="店舗入口にデジタルサイネージとスマホ貸出機を設置"
                />
                <ExplanationCard
                  imageSrc="/images/ic_file.png"
                  title="商品マスター提供"
                  text="月一回の頻度で、マスターデータをご提供いただきます"
                />
              </div>
            </Section>
          </div>
          <div className="mt-52 border"></div>
          <div className="w-1/3">
            <Section
              title="使い方も非常に簡単"
              text="誰でも使いやすいUIと、非常にシンプルな操作のモバイルアプリ"
            >
              <div className="flex flex-col gap-6">
                <ExplanationCard
                  imageSrc="/images/ic_download.png"
                  title="アプリダウンロード"
                  text="会員登録不要だから、すぐに利用できる"
                />
                <ExplanationCard
                  imageSrc="/images/ic_cart.png"
                  title="お買い物"
                  text="商品をかごに入れる際に、アプリで商品をスキャン"
                />
                <ExplanationCard
                  imageSrc="/images/ic_money.png"
                  title="優先レジでお支払い"
                  text="スマホをレジでかざして、待ち時間0でお支払いに進む"
                />
              </div>
            </Section>
          </div>
        </div>

        <div className="m-auto mb-56 w-[950px]">
          <CardBase>
            <Section title="導入に関するご相談/お問い合わせ" text="他と違いを作るDX導入の実現を">
              <div className="flex gap-8">
                <div className="flex flex-col items-center">
                  <img
                    src={'/images/ic_mail.png'}
                    alt={'mail'}
                    width={100}
                    height={100}
                    className={'rounded-3xl'}
                  />
                  <p className="font-bold">CONTACT</p>
                </div>
                <div className="flex flex-col items-center">
                  <img
                    src={'/images/ic_web.png'}
                    alt={'contact'}
                    width={100}
                    height={100}
                    className={'rounded-3xl'}
                  />
                  <p className="font-bold">利用者用サイト</p>
                </div>
              </div>
            </Section>
          </CardBase>
        </div>
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
