import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="grid grid-cols-3 items-center py-5 px-10 bg-white border-b border-gray-500/20 sticky top-0 z-50 shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
      
      
      <div className="justify-self-start">
        <Link
          href="#home"
          className="group relative font-semibold text-[1.05rem] tracking-[0.5px] transition-all duration-300 py-1 capitalize text-gray-800 hover:opacity-80 hover:-translate-y-[1px]"
        >
          Home
          <span className="absolute w-0 h-[2px] -bottom-1 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-900 via-indigo-700 to-purple-600 transition-all duration-300 ease-out group-hover:w-full rounded-sm"></span>
        </Link>
      </div>

      
      <div className="flex justify-center gap-12">
        <Link
          href="#about"
          className="group relative font-semibold text-[1.05rem] tracking-[0.5px] transition-all duration-300 py-1 capitalize text-gray-800 hover:opacity-80 hover:-translate-y-[1px]"
        >
          About
          <span className="absolute w-0 h-[2px] -bottom-1 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-900 via-indigo-700 to-purple-600 transition-all duration-300 ease-out group-hover:w-full rounded-sm"></span>
        </Link>

        <Link
          href="#experience"
          className="group relative font-semibold text-[1.05rem] tracking-[0.5px] transition-all duration-300 py-1 capitalize text-gray-800 hover:opacity-80 hover:-translate-y-[1px]"
        >
          Experience
          <span className="absolute w-0 h-[2px] -bottom-1 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-900 via-indigo-700 to-purple-600 transition-all duration-300 ease-out group-hover:w-full rounded-sm"></span>
        </Link>

        <Link
          href="#projects"
          className="group relative font-semibold text-[1.05rem] tracking-[0.5px] transition-all duration-300 py-1 capitalize text-gray-800 hover:opacity-80 hover:-translate-y-[1px]"
        >
          Projects
          <span className="absolute w-0 h-[2px] -bottom-1 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-900 via-indigo-700 to-purple-600 transition-all duration-300 ease-out group-hover:w-full rounded-sm"></span>
        </Link>
        <Link
            href="#contact"
            className="group relative font-semibold text-[1.05rem] tracking-[0.5px] transition-all duration-300 py-1 capitalize text-gray-800 hover:opacity-80 hover:-translate-y-[1px]"
          >
            Contact
            <span className="absolute w-0 h-[2px] -bottom-1 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-900 via-indigo-700 to-purple-600 transition-all duration-300 ease-out group-hover:w-full rounded-sm"></span>
          </Link>
      </div>


      <div></div>
    </nav>
  );
}