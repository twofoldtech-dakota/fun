import { Inter, Roboto_Mono } from '@next/font/google';
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import "../styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'optional'
});

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  variable: '--font-roboto-mono',
  display: 'optional'
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${roboto_mono.variable}`}>
      <head />
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
