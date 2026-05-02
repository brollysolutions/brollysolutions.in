import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer"
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Brolly Solutions",
  description: "Empowering Businesses with Smart Digital Solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        
        {/* Global Toast Provider styled to match the premium theme */}
        <Toaster 
          position="bottom-right"
          toastOptions={{
            style: {
              background: '#171717', // brand-dark
              color: '#fff',
              border: '1px solid #333',
            },
            success: {
              iconTheme: {
                primary: '#D4AF37', // brand-gold
                secondary: '#171717',
              },
            },
          }}
        />
      </body>
    </html>
  );
}