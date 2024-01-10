import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { ToastProvider } from '@/components/providers/toaster-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Udemy-Clone',
  description: 'Build a Course & LMS Platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel='icon' href='/favicon.ico'/>
        </head>

        <body className={inter.className}>
          <ToastProvider/>
          {children}
        </body>

      </html>
    </ClerkProvider>
  )
}
