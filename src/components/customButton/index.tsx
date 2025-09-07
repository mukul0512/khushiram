import Link from "next/link";
import { ReactNode } from "react";

interface CustomButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
}

const CustomButton = ({ children, href, onClick }: CustomButtonProps) => {
  if (href) {
    return (
      <button className="custom-button">
        <Link href={href} className="text-white no-underline">
          {children}
        </Link>
      </button>
    );
  }

  return (
    <button className="custom-button" onClick={onClick}>
      {children}
    </button>
  );
};

export default CustomButton;
