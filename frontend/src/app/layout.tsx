import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import 'react-toastify/dist/ReactToastify.css'
import StoreProvider from './storeProvider'
const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata: Metadata = {
  title: 'Delliv CC',
  description: 'Rastreamento de entregas',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  )
}
