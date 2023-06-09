import Topbar from '@/components/topbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className='flex min-h-screen'>
          <div className='w-full'>
            <Topbar />
            <div className='flex mx-10 mt-10'>
              {children}
            </div>
          </div>
        </main>
      </body>
    </html>
  )
}
