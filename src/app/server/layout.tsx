export const metadata = {
  title: "Server",
  description: "Server section of Khushiram website",
  authors: [
    { name: "Khushiram Karnwal", url: "https://github.com/mukul0512" },
    {
      name: "Mukul Karnwal",
      url: "https://www.linkedin.com/in/mukul-karnwal-588486238/",
    },
  ],
  keywords: ["server", "khushiram", "mukul", "karnwal"],
  icons: {
    icon: "/icons/server.svg",
    shortcut: "/icons/server-shortcut.svg",
    apple: "/icons/server-apple.svg",
  },
};

export default function ServerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
