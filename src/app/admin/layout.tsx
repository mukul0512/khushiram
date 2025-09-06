import "@/app/globals.css";
import Navigation from "@/components/navigation";
// import Footer from "@/components/home/footer";

export default function AdminLayout({children }: {children: React.ReactNode}){
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