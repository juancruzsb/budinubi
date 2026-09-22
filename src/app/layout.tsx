import type { Metadata } from "next";
import { Baloo_2, Fraunces, Nunito_Sans } from "next/font/google";
import "./globals.css";

const baloo2 = Baloo_2({
  variable: "--font-baloo-2",
  weight: ["400", "700", "800"],
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  weight: ["400", "700"],
  subsets: ["latin"],
});

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  weight: ["400", "500", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "budinubi · budines artesanales",
  description:
    "Budines artesanales que combinan sabor, calidad y dedicación para acompañar tus momentos especiales.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${baloo2.variable} ${fraunces.variable} ${nunitoSans.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
