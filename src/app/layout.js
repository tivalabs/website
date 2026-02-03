import { Orbitron, Exo_2 } from 'next/font/google'
import './globals.css'

const orbitron = Orbitron({ subsets: ['latin'], variable: '--font-orbitron' })
const exo2 = Exo_2({ subsets: ['latin'], variable: '--font-exo' })

export const metadata = {
  title: 'Tiva Web3',
  description: 'A Market For The Future',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${orbitron.variable} ${exo2.variable} font-exo bg-background text-text`}>{children}</body>
    </html>
  )
}
