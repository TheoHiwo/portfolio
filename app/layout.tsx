import "./globals.css";
import { Layout } from '@/components/dom/Layout';
// import '@/global.css'
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
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
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}