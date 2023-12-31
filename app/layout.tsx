import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import FooterComponent from '@/components/FooterComponent/FooterComponent'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: 'normal',
  preload: true,
  variable: '--font-Roboto',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'StrongWood',
  description: 'StrongWood',
  colorScheme: 'light',
  themeColor: 'dark'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <main>
          {children}
          <FooterComponent />
        </main>
      </body>
    </html>
  )
}