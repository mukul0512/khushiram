export default function RootLayout({children }: {children: React.ReactNode}){
  return (
    <html>
      <body>
        <h1>Hello root layout</h1>
        {children}
      </body>
    </html>
  );
}