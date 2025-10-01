
import "./globals.css";

import {Header} from "../components/header"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "DashBoard",
  description: "Página Inicial do projeto NetxJS",
  openGraph:{
    title: 'Minha primeira página inicial com o NextJS',
    description: "Página Inicial do projeto NetxJS",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
    }
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >

        <Header />

        {children}
      </body>
    </html>
  );
}
