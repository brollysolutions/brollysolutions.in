import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ClientSpotlight from "@/components/layout/ClientSpotlight";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Brolly Solutions — Senior Engineering Collective",
  description: "Boutique software engineering and tech advisory. We build reliable, scalable systems for businesses that demand excellence.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-brand-black text-white antialiased">
        <ClientSpotlight>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ClientSpotlight>

        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: '#111111',
              color: '#fff',
              border: '1px solid #222',
              borderRadius: '12px',
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '14px',
            },
            success: {
              iconTheme: {
                primary: '#F2DA60',
                secondary: '#111111',
              },
            },
          }}
        />
      </body>
    </html>
  );
}