"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { navigationStyle } from "./style";

const Navigation = () => {
  const logoRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const bubbleTimeline = useRef<gsap.core.Timeline | null>(null);
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/client", label: "Client" },
    { href: "/server", label: "Server" },
    { href: "/rendering-poc", label: "Rendering POC" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  useEffect(() => {
    if (pathname !== "/") return;

    const logoElement = logoRef.current;
    const overlayElement = overlayRef.current;

    const ctx = gsap.context(() => {
      if (!logoElement || !overlayElement) {
        return;
      }

      if (bubbleTimeline.current) {
        bubbleTimeline.current.kill();
      }
      gsap.set(overlayElement, {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity: 1,
      });

      gsap.set(logoElement, {
        position: "relative",
        scale: 0,
        opacity: 0,
        borderRadius: "50%",
        background:
          "linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4)",
        backgroundSize: "400% 400%",
        padding: "30px 40px",
        boxShadow: "0 0 50px rgba(255,255,255,0.3)",
        color: "white",
        fontWeight: "bold",
        fontSize: "24px",
        textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
      });

      bubbleTimeline.current = gsap.timeline();

      bubbleTimeline.current
        .to(logoElement, {
          duration: 0.3,
          opacity: 1,
          scale: 1.5,
          ease: "elastic.out(1, 0.3)",
        })
        .to(
          logoElement,
          {
            duration: 0.8,
            backgroundPosition: "200% 0%",
            ease: "none",
            repeat: 0,
          },
          0.1
        )
        .to(logoElement, {
          duration: 0.5,
          y: -20,
          rotation: 5,
          scale: 1.4,
          ease: "power2.inOut",
          yoyo: true,
          repeat: 0,
        })
        .to(logoElement, {
          duration: 0.3,
          scale: 1,
          rotation: 0,
          y: 0,
          borderRadius: "0",
          background: "transparent",
          backgroundSize: "auto",
          padding: "0",
          boxShadow: "none",
          color: "inherit",
          fontSize: "20px",
          fontWeight: "bold",
          textShadow: "none",
          ease: "power3.out",
        })
        .to(
          overlayElement,
          {
            duration: 0.3,
            opacity: 0,
            ease: "power2.out",
          },
          "-=0.1"
        )
        .set(overlayElement, {
          display: "none",
        })
        .to(logoElement, {
          duration: 1.5,
          y: -2,
          rotation: 1,
          scale: 1.01,
          ease: "power2.inOut",
          yoyo: true,
          repeat: -1,
        });
    });

    return () => {
      if (bubbleTimeline.current) {
        bubbleTimeline.current.kill();
      }
      if (logoElement) {
        gsap.set(logoElement, {
          position: "static",
          scale: 1,
          opacity: 1,
          borderRadius: "0",
          background: "transparent",
          backgroundSize: "auto",
          padding: "0",
          boxShadow: "none",
          color: "inherit",
          fontSize: "20px",
          fontWeight: "bold",
          textShadow: "none",
          x: 0,
          y: 0,
          rotation: 0,
        });
      }

      if (overlayElement) {
        gsap.set(overlayElement, {
          display: "none",
          opacity: 0,
        });
      }

      ctx.revert();
    };
  }, [pathname]);

  return (
    <>
      <div ref={overlayRef} style={{ display: "none" }}>
        <div ref={logoRef} style={navigationStyle.logo}>
          Logo
        </div>
      </div>

      <header style={navigationStyle.header} className="font-work">
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
