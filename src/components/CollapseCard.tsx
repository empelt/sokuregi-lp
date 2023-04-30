import { ReactNode } from 'react'
import CardBase from 'components/CardBase'
import useCollapse from 'react-collapsed'
import useWindowSize from 'hooks/useWindowSize'

type Props = {
  imageSrc: string
  title: string
  text: string
  children: ReactNode
}

export default function CollapseCard({ imageSrc, title, text, children }: Props) {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()
  const [width] = useWindowSize()
  const isMobile = width <= 1000
  if (isMobile) {
    return (
      <div className="max-w-96">
        <CardBase>
          <div className="flex flex-col gap-4">
            <p className="text-2xl font-bold">{title}</p>
            <div className="flex gap-5">
              <div className="flex flex-col gap-2">
                <p className="font-bold">{text}</p>
                <div>
                  <button
                    {...getToggleProps()}
                    className={
                      'border-gray-300 text-gray-900 hover:bg-gray-100 focus:ring-gray-200 mt-2 rounded-full bg-white px-5 py-2.5 font-bold shadow-[rgba(13,_38,_76,_0.19)_0px_0px_20px] focus:outline-none focus:ring-4'
                    }
                  >
                    {isExpanded ? '少なく表示' : '詳しく見る'}
                  </button>
                </div>
              </div>
              <img src={imageSrc} alt={title} className={'h-20 w-20 rounded-3xl'} />
            </div>
            <section {...getCollapseProps()}>{children}</section>
          </div>
        </CardBase>
      </div>
    )
  }

  return (
    <div className="w-[500px]">
      <CardBase>
        <div className="h-46 flex flex-col gap-4">
          <p className="text-3xl font-bold">{title}</p>
          <div className="flex gap-5">
            <div className="flex flex-col gap-2">
              <p className="text-xl  font-bold leading-8">{text}</p>
              <div>
                <button
                  {...getToggleProps()}
                  className={
                    'border-gray-300 text-gray-900 hover:bg-gray-100 focus:ring-gray-200 mt-2 rounded-full bg-white px-5 py-2.5 font-bold shadow-[rgba(13,_38,_76,_0.19)_0px_0px_20px] focus:outline-none focus:ring-4'
                  }
                >
                  {isExpanded ? '少なく表示' : '詳しく見る'}
                </button>
              </div>
            </div>
            <img src={imageSrc} alt={title} className={'h-28 w-28 rounded-3xl'} />
          </div>
          <section {...getCollapseProps()}>{children}</section>
        </div>
      </CardBase>
    </div>
  )
}
