import { Link } from "react-router-dom";
import { Header } from "../components/Header";

export function PageNotFound() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="flex flex-col h-[80vh] justify-center items-center">
        <span className="text-4xl">Page not found</span>
        <strong className="mt-8 text-8xl">404</strong>
        <Link
          to="/"
          className="mt-16 p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors"
        >
          Home Page
        </Link>
      </div>
    </div>
  );
}
