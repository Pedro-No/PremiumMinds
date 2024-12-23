'use client'

import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from 'next-themes';

import "@/styles/globals.css";
import "@/styles/colors.css";

import Header from "@/app/_components/app-ui/header/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel='icon' href='/favicon/favicon.ico' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon/favicon-16x16.png' />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider defaultTheme='dark'>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}