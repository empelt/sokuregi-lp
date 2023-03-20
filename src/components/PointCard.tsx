import CardBase from 'components/CardBase'
import Image from 'next/image'

type Props = {
  imageSrc: string
  title: string
  text: string
}

export default function PointCard({ imageSrc, title, text }: Props) {
  return (
    <CardBase>
      <div className="flex gap-5">
        <Image src={imageSrc} alt={title} width={100} height={100} className={'rounded-3xl'} />
        <div className="flex flex-col justify-center">
          <p className="font-bold">{title}</p>
          <p>{text}</p>
        </div>
      </div>
    </CardBase>
  )
}
