import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex flex-wrap items-center justify-between px-6 py-4 z-50 fixed w-full bg-white">
      <Link href={"/"}>
        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="Logo"
            className="h-6 w-6 object-cover"
            width={24}
            height={24}
            priority
          />
          <span className="pl-2 mb-2 text-xl font-bold">passvault</span>
        </div>
      </Link>

      <div className="hidden md:flex items-center space-x-6">
        <a className="text-gray-700 hover:text-black">Product</a>
        <a className="text-gray-700 hover:text-black">Features</a>
        <a className="text-gray-700 hover:text-black">Marketplace</a>
        <a className="text-gray-700 hover:text-black">Company</a>
      </div>

      <div className="hidden md:flex">
        <a className="text-black flex items-center">
          Log in <span className="ml-1">→</span>
        </a>
      </div>

      <div className="md:hidden flex items-center">
        <button className="focus:outline-none">
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
