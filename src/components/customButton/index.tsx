import Link from "next/link";
import { ReactNode } from "react";

interface CustomButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
}

const CustomButton = ({ children, href, onClick }: CustomButtonProps) => {
  const buttonClasses =
    "bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg";

  if (href) {
    return (
      <button className={buttonClasses}>
        <Link href={href} className="text-white no-underline">
          {children}
        </Link>
      </button>
    );
  }

  return (
    <button className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  );
};

export default CustomButton;
