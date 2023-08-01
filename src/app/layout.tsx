import "../styles/globals.css";

import { Inter } from "next/font/google";

export const metadata = {
  title: "Francisco | Portfolio",
  description:
    "Desenvolvedor Front-end com experiência em Javascript, Typescript, React, Next.JS, TailwindCSS e UI/UX Design. Criação de sites e aplicativos otimizados, atraentes e responsivos.",
  openGraph: {
    title: "Francisco | Portfolio",
    description: "Desenvolvedor Front-end e Designer UI/UX",
    type: "website",
  },
};

const inter = Inter({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  style: ["normal"],
  variable: "--inter-font",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br" className={`${inter.variable}`} style={{ scrollBehavior: "smooth" }}>
      <body>{children}</body>
    </html>
  );
}
