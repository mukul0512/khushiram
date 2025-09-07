export const metadata = {
    title: "Client",
    description: "Client section of Khushiram website",
    authors: [
      { name: "Khushiram Karnwal", url: "https://github.com/mukul0512" },
      {
        name: "Mukul Karnwal",
        url: "https://www.linkedin.com/in/mukul-karnwal-588486238/",
      },
    ],
    keywords: ["client", "khushiram", "mukul", "karnwal"],
    icons: {
      icon: "/icons/client.svg",
      shortcut: "/icons/client-shortcut.svg",
      apple: "/icons/client-apple.svg",
    },
  };
  
  export default function ClientLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return <>{children}</>;
  }
  