import { ReactNode, useCallback, useState } from 'react'
import CardBase from 'components/CardBase'
import Image from 'next/image'
import useCollapse from 'react-collapsed'

type Props = {
  imageSrc: string
  title: string
  text: string
  children: ReactNode
}

export default function CollapseCard({ imageSrc, title, text, children }: Props) {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()
  return (
    <div className="w-96">
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
                    'mr-2 mb-2 rounded-full bg-red-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900'
                  }
                >
                  {isExpanded ? '少なく表示' : '詳しく見る'}
                </button>
              </div>
            </div>
            <Image src={imageSrc} alt={title} fill className={'!relative !w-20 rounded-3xl'} />
          </div>
          <section {...getCollapseProps()}>{children}</section>
        </div>
      </CardBase>
    </div>
  )
}
