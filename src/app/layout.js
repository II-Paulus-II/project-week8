/* ----- Project Imports ----- */
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import "./globals.css";

export const metadata = {
  title: "Order of Tea",
  description: "Website for the Order of Tea, developed by General Paulus!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Header />
      {children}
      <Footer />
      </body>
    </html>
  );
}
