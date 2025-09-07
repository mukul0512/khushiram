export const metadata = {
  title: "Contact",
  description: "If any query you can contact us +919759376278",
  authors: [
    { name: "Khushiram Karnwal", url: "https://github.com/mukul0512" },
    {
      name: "Mukul Karnwal",
      url: "https://www.linkedin.com/in/mukul-karnwal-588486238/",
    },
  ],
  keywords: ["contact us", "contact", "khushiram", "mukul", "karnwal"],
  icons: {
    icon: "/icons/contact.svg",
    shortcut: "/icons/contact-shortcut.svg",
    apple: "/icons/contact-apple.svg",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
