import Navigation from "@/components/navigation";
// import Footer from "@/components/home/footer";

export default function RootLayout({children }: {children: React.ReactNode}){
  return (
    <html>
      <body>
        <Navigation />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}