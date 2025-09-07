import "@/app/globals.css";

export const metadata = {
  title: "Users",
  description: "User section of Khushiram website",
  keywords: ["users", "khushiram", "mukul", "karnwal"],
  icons: {
    icon: "/icons/users.svg",
    shortcut: "/icons/users-shortcut.svg",
    apple: "/icons/users-apple.svg",
  },
};

export default function UsersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
