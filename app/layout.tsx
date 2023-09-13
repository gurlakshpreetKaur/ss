import './globals.css';
import { NavBar } from './(Components)/NavBar';
import { Footer } from './(Components)/Footer';
import { AiOutlineUser } from 'react-icons/ai';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='anonymous' />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet" />
      </head>

      <body>
        <NavBar />
        <main className=''>
          {children}
        </main>
        <a href='/user' className="min-[400px]:hidden"><button className='bg-gray-900 text-white p-4 rounded-full fixed right-[25px] bottom-[25px]'><AiOutlineUser /></button></a>
        <Footer />
      </body>
    </html>
  )
}
