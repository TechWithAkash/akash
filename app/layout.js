import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
// import Sidebar from "@/components/Sidebar";
// import Navbar from "@/components/Navbar";
export const metadata = {
  title: "Akash Portfolio",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     
      <body className={inter.className}>
      {/* <Navbar/> */}
        {children}
        {/* <Sidebar /> */}
        </body>
    </html>
  );
}
