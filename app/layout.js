import NavBar from "@/components/nav";
import Footer from "@/components/footer";
import localFont from "next/font/local";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import "./globals.css";

const bodyFont = localFont({ src: "../public/fonts/AnekTelugu.ttf" });

export const metadata = {
  title: "Miquel Rodrigo | Official Website",
  description: "",
  name: "viewport",
  content: "width=device-width, initial-scale=1.0",
  link: "https://fonts.googleapis.com/css?family=Sofia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={bodyFont.className}>
        <header className="relative">
          <NavBar />
        </header>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
