import CardBase from 'components/CardBase'
import Image from 'next/image'
import useWindowSize from 'hooks/useWindowSize'

type Props = {
  tag: string
  title: string
  text: string
}

export default function ExplanationCard({ tag, title, text }: Props) {
  const [width] = useWindowSize()

  if (width <= 1000) {
    return (
      <CardBase>
        <div className="flex flex-col gap-4">
          <div className="w-fit rounded-3xl p-2 pl-4 pr-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
            <p className="font-bold">{tag}</p>
          </div>
          <p className="text-2xl font-bold">{title}</p>
          <p>{text}</p>
        </div>
      </CardBase>
    )
  }
  return (
    <div className="w-96">
      <CardBase>
        <div className="flex flex-col gap-4">
          <div className="w-fit rounded-3xl p-2 pl-4 pr-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
            <p className="font-bold">{tag}</p>
          </div>
          <p className="text-2xl font-bold">{title}</p>
          <p>{text}</p>
        </div>
      </CardBase>
    </div>
  )
}

export function ExplanationCardWithMovie({ tag, title, text }: Props) {
  return (
    <CardBase>
      <div className="flex flex-col gap-4">
        <div className="w-fit rounded-3xl p-2 pl-4 pr-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
          <p className="font-bold">{tag}</p>
        </div>
        <p className="text-2xl font-bold">{title}</p>
        <p>{text}</p>
        <Image src={'/SokuREGI.gif'} fill alt="movie" className="!relative rounded-2xl" />
      </div>
    </CardBase>
  )
}
