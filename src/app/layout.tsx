import { Work_Sans, Rock_Salt } from 'next/font/google'
import './globals.css'

const workSans = Work_Sans({ subsets: ['latin'] })
const rockSalt = Rock_Salt({ weight: '400', subsets: ['latin'] })

export const metadata = {
  title: 'Oahu Surf Co. - Hawaiian-Inspired Surf Apparel',
  description: 'Experience the spirit of Hawaii with premium surf apparel, beachwear, and lifestyle clothing from Oahu Surf Co.'
}

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${workSans.className} bg-white text-volcanic`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}