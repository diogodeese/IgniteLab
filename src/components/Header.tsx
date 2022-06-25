import { Logo } from "./Logo";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="w-full py-5 flex items-center justify-center bg-gray-700 border-b border-gray-600">
      <Link to="/" className="ml-8 md:ml-0">
        <Logo />
      </Link>
    </header>
  );
}
