import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar"; 
import Footer from "../components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mustapha Abdallah",
  description: "My Software Engineering Portfolio"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
<head>
<link rel="icon" href="/icon?<generated>" type="image/png" sizes="32x32" />
</head>
      <body className={inter.className}>
      <Navbar />
        <div className="py-[10vh] max-w-3xl mx-auto p-6">{children}</div>
        <Footer />
      </body>
    </html>

  );
}