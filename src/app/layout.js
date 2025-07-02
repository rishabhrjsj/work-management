import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CustomNavbar from "@/components/CustomNavbar";
import Footer from "@/components/Footer";
import UserProvider from "@/context/UserProvider"; // ✔ correct path

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <UserProvider>
          <CustomNavbar />
          {children}
          <Footer />
        </UserProvider>
      </body>
    </html>
  );
}
