import "@/app/globals.css";

export const metadata = {
  title: "Admin",
  description: "Admin section of Khushiram website",
  keywords: ["admin", "khushiram", "mukul", "karnwal"],
  icons: {
    icon: "/icons/admin.svg",
    shortcut: "/icons/admin-shortcut.svg",
    apple: "/icons/admin-apple.svg",
  },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
