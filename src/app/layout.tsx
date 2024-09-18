import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "@next/font/google"

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const poppins = Poppins ({
  subsets: ['latin'],
  weight: ['400', '700'], 
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={poppins.className}>
      <body>
        {children}
      </body>
    </html>
  );
}