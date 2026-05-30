import type { Metadata, Viewport } from 'next';
// import { Geist, Geist_Mono } from 'next/font/google';
// import {
//     NavigationMenuItem,
//     NavigationMenuLink,
//     navigationMenuTriggerStyle
// } from '@/components/ui/navigation-menu';
import Link from 'next/link';
import '../globals.css';

export const metadata: Metadata = {
  title: 'ポートフォリオ',
  description: 'naoki1001のポートフォリオサイト',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#000000',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='ja'
      className='scroll-smooth'
    >
      <body className='bg-gradient-to-r from-blue-100 to-indigo-100 text-gray-800'>
        <header className='bg-white bg-opacity-90 text-gray-800 p-4 fixed w-full top-0 z-10 shadow-md'>
          <div className='container mx-auto flex justify-between items-center'>
            <h1 className='text-2xl font-bold text-indigo-600'>Portfolio</h1>
            <nav>
                <ul className='flex space-x-6'>
                    <li><Link href='#home' className='hover:text-indigo-600 transition duration-300'>Home</Link></li>
                    <li><Link href='#about' className='hover:text-indigo-600 transition duration-300'>About</Link></li>
                    <li><Link href='#works' className='hover:text-indigo-600 transition duration-300'>Works</Link></li>
                    <li><Link href='#contact' className='hover:text-indigo-600 transition duration-300'>Contact</Link></li>
                </ul>
            </nav>
          </div>
        </header>
        {children}
        <footer className='bg-indigo-800 text-white p-6 mt-16'>
        <div className='container mx-auto text-center'>
            <p>
              Copyright &copy; 2026 naoki1001. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
