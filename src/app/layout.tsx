import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  title: 'Sri Gutala Portfolio',
  description: 'Portfolio of Sri Gutala, showcasing consulting, ventures, product, and UI/UX work.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Montserrat:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <div className="flex flex-col min-h-screen bg-background">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
