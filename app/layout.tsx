import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import NavigationComponent from '@/components/NavigationComponent/NavigationComponent'
import FooterComponent from '@/components/FooterComponent/FooterComponent'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: 'normal',
  preload: true,
  variable: '--font-Roboto',
  display: 'optional'
})

export const metadata: Metadata = {
  title: 'StrongWood-v2',
  description: 'StrongWood',
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
            <NavigationComponent />
            {children}
            <FooterComponent />
        </main>
      </body>
    </html>
  )
}