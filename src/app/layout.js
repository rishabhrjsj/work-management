import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CustomNavbar from "@/components/CustomNavbar";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CustomNavbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
