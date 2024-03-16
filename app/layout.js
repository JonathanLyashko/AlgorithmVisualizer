import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sorting Visualizer",
  description: "User interface for visualizing and understanding various sorting algorithms. Built by Jonathan Lyashko.",
  icons: {
    icon: [
      { url: '/favicon.ico'},
      { url: '/favicon-32x32.png', sizes: '32x32'},
      { url: '/favicon-16x16.png', sizes: '16x16'}
    ],
    shortcut: ['/favicon.ico'],
    apple: [
      { url: '/apple-touch-icon.png'}
    ]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
