import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home - Página Inicial",
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

export default function Home(){
  return(
    <div>
      <h1>Página HOME</h1>
    </div>
  )
}