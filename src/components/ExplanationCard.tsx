import CardBase from 'components/CardBase'
import useWindowSize from 'hooks/useWindowSize'

type Props = {
  imageSrc: string
  title: string
  text: string
}

export default function ExplanationCard({ imageSrc, title, text }: Props) {
  const [width] = useWindowSize()
  const isMobile = width <= 1000

  if (isMobile) {
    return (
      <CardBase>
        <div className="flex gap-5">
          <img src={imageSrc} alt={title} className={'h-20 w-20 rounded-3xl'} />
          <div className="flex flex-col justify-center">
            <p className="font-bold">{title}</p>
            <p>{text}</p>
          </div>
        </div>
      </CardBase>
    )
  }

  return (
    <div className="max-w-[600px]">
      <CardBase>
        <div className="flex items-center gap-5">
          <img src={imageSrc} alt={title} className={'h-28 w-28 rounded-3xl'} />
          <div className="flex flex-col justify-center">
            <p className="mb-2 text-center text-2xl font-bold">{title}</p>
            <p className="text-lg">{text}</p>
          </div>
        </div>
      </CardBase>
    </div>
  )
}
