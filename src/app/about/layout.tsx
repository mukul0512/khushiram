import "@/app/globals.css";

export default function AboutLayout({children }: {children: React.ReactNode}){
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}