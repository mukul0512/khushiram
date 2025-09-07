export const metadata = {
  title: "Services",
  description: "We provide a wide range of services to our clients",
  authors: [
    { name: "Khushiram Karnwal", url: "https://github.com/mukul0512" },
    {
      name: "Mukul Karnwal",
      url: "https://www.linkedin.com/in/mukul-karnwal-588486238/",
    },
  ],
  keywords: ["users services", "services", "users"],
  icons: {
    icon: "/icons/services.svg",
    shortcut: "/icons/services-shortcut.svg",
    apple: "/icons/services-apple.svg",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
