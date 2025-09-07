import "@/app/globals.css";
import Navigation from "@/components/navigation";
// import Footer from "@/components/home/footer";
import { Roboto, Work_Sans } from "next/font/google";

export const metadata = {
  title: {
    default: "Khushiram | Mukul",
    template: "%s | Khushiram",
  },
  description: "We are a team of developers",
  keywords: ["peeyush bhaiya", "mukul", "khushiram", "pulkit", "rishab"],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  metadataBase: new URL("https://www.linkedin.com/in/mukul-karnwal-588486238/"),
  openGraph: {
    title: "Khushiram Karnwal",
    description: "Welcome to our website",
    url: "https://github.com/mukul0512",
    siteName: "Khushiram Karnwal",
    images: [
      {
        url: "/assets/logo.svg",
        width: 1200,
        height: 630,
        alt: "Khushiram Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Khushiram Karnwal",
    description: "We are a team of developers",
    creator: "@mukul0512",
    images: ["/assets/logo.svg"],
  },
};

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
