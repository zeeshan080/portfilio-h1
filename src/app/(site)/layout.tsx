import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Sidebar from '../components/sidebar'
import SideMenu from '../components/sidemenu'
import { ThemeProvider } from '../components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex flex-col lg:flex-row gap-3 p-3 lg:py-3 lg:px-6 h-full">
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <aside className="flex flex-col w-full lg:w-[20%]">
          <Sidebar />
        </aside>
        <main className="w-[75%]">{children}</main>
        <aside className="lg:flex mt-[25vh] flex-col w-[5%] hidden">
          <SideMenu />
        </aside>
      </ThemeProvider>
      </body>
    </html>
  )
}