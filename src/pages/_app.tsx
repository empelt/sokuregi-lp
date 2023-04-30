import { Inter, Zen_Kaku_Gothic_New } from '@next/font/google'
import '../styles/globals.css'
import type { AppProps } from 'next/app'

const gothic = Zen_Kaku_Gothic_New({ subsets: ['latin'], weight: '900' })
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Component {...pageProps} />
      <style jsx global>
        {`
          :root {
            --font-gothic: ${gothic.style.fontFamily};
          }
        `}
      </style>
    </div>
  )
}
