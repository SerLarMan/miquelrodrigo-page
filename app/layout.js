import Header from "@/components/header";
import Footer from "@/components/footer";

import "./globals.css";

export const metadata = {
  title: "Miquel Rodrigo | Official Website",
  description: "",
  name: "viewport",
  content: "width=device-width, initial-scale=1.0"
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Header></Header>
        <main>{children}</main>
        <Footer></Footer>
      </body>
    </html>
  );
}
