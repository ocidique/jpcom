import React from "react";
import { Link } from "gatsby";

type Props = {
  to: string;
  children: React.ReactNode;
};

const CTA: React.FunctionComponent<Props> = ({ to, children }) => {
  return (
    <Link to={to} className="inline-flex items-center space-x-4 text-orange-700 hover:text-orange-600">
      {children}
      <span className="ml-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </span>
    </Link>
  );
};

export default CTA;
