// src/app/layout.tsx
import { ReactNode } from 'react';
import Header from './components/header';
import './globals.css';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Mi Proyecto Next.js</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="font-sans bg-gray-50">
        {/* Agregamos el Header global */}
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
