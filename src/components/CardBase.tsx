import { ReactNode } from 'react'

export default function CardBase({ children }: { children: ReactNode }) {
  return <div className="rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">{children}</div>
}
