import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Manish Guhe | Frontend Developer',
  description:
    "I'm Manish Guhe, a proficient frontend developer specializing in creating interactive, user-friendly web applications using modern technologies.",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
