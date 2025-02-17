import Link from "next/link";
import Search from "./search";

export default function Navbar() {
  return (
    <nav className="flex flex-col sm:flex-row justify-between items-center bg-gray-900 p-4 border-b-2 border-gray-700">
      <h1 className="text-3xl font-bold text-white mb-4 sm:mb-0">
        <Link href="/">DxO Wiki</Link>
      </h1>
      <div className="w-full sm:w-auto">
        <Search />
      </div>
    </nav>
  );
}