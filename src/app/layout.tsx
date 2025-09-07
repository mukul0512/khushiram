import "@/app/globals.css";
import Navigation from "@/components/navigation";
// import Footer from "@/components/home/footer";
import { Roboto, Work_Sans } from "next/font/google";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

const workSans = Work_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-work-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} ${workSans.className}`}>
        <Navigation />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
