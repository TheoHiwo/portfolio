

import "./globals.css";
import { Layout } from '@/components/dom/Layout';
// import '@/global.css'
import { VT323 } from "next/font/google";

const pixel = VT323({
  weight: '400',
  subsets: ['latin-ext'],
});




export const metadata = {
  title: "Théo Berraboukh",
  description:
    "Théo Berraboukh's portfolio",
};

export default function RootLayout({ children } : {children : any}) {
  return (
    <html lang='en' className='antialiased'>
      <head />
      <body className={pixel.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}