import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Manish Guhe | Frontend Developer',
  description:
    "I'm Manish Guhe, a proficient frontend developer specializing in creating interactive, user-friendly web applications using modern technologies.",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='w-screen h-screen bg-gradient-to-b from-blue-100 to-red-100'>
          <div className='h-24'>
            <Navbar />
          </div>
          <div className='h-[calc(100vh - 6rem)] '>{children}</div>
        </div>
      </body>
    </html>
  );
}
