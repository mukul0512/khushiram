import React from "react";
import Link from "next/link";
import { navigationStyle } from "./style";

const Navigation = () => {
  const navItems = [
    { href: " /", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/service", label: "Service" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <header style={navigationStyle.header}>
        <div style={navigationStyle.logo}>Logo</div>
        <nav>
          <ul style={navigationStyle.navList}>
            {navItems.map((item, index) => (
              <li key={index}>
                <Link href={item.href} style={navigationStyle.navLink}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navigation;
