import './globals.css'
import {Open_Sans} from 'next/font/google';
import Navbar from "@/app/(shared)/Navbar";
import Footer from "@/app/(shared)/Footer";

const openSans = Open_Sans({subsets: ['latin']})

export const metadata = {
    title: 'Blog Ai App',
    description: 'Blog build in next js uses AI',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={openSans.className}>
        <Navbar />
            {children}
        <Footer />
        </body>
        </html>
    )
}
