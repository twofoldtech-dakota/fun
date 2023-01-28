import { Inter, Roboto_Mono } from "@next/font/google";
import { Footer } from "../components/footer";
import { MobileNavbar } from "../components/MobileNavbar";
import { SideNav } from "../components/SideNav";
import "../styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "optional",
});

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  display: "optional",
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
        <div className="flex">
          <div className="relative">
            <SideNav />
          </div>
          <div className="flex w-full flex-col">
            <MobileNavbar />
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
