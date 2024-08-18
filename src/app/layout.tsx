// This is the root layout component for your Next.js app.
// Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required
'use client';

import { Inter } from 'next/font/google'
import { cn } from '@/lib/utils'
import './globals.css'
import { SessionProvider } from 'next-auth/react';


const fontHeading = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
})

const fontBody = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-body',
})

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body>
        <SessionProvider>{children}</SessionProvider>
        </body>
        </html>
    );
}