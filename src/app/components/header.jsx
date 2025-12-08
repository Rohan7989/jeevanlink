// import Link from "next/link";
// import './click.css';
//  export default function Header() {
//    return (
//      <>
//      <header className="bg-white border-b shadow-sm">
//        <div className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
//          <a href="/" className="text-rose-600 font-bold text-xl">🩸 JeevanLink</a>
//          <nav className="flex gap-4 text-sm text-slate-700">           
//             <a
//   href="/donors"
//   className="relative inline-block text-black after:content-[''] after:absolute after:left-1/2 after:bottom-0  after:h-[2px] after:w-full after:bg-red-600
//              after:scale-x-0 after:origin-center after:transition-transform after:duration-300  hover:text-red-600 hover:after:scale-x-100 after:-translate-x-1/2"
//             >
//              Find Donors
//             </a>         
//            <a
//   href="/emergency"
//   className="relative inline-block text-black  after:content-[''] after:absolute after:left-1/2 after:bottom-0  after:h-[2px] after:w-full after:bg-red-600
//             after:scale-x-0 after:origin-center after:transition-transform after:duration-300  hover:text-red-600 hover:after:scale-x-100 after:-translate-x-1/2"            
//             >
//             Emergency
//             </a>   
//           <a
//   href="/testing"
//   className="relative inline-block text-black  after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-full after:bg-red-600
//             after:scale-x-0 after:origin-center after:transition-transform after:duration-300  hover:text-red-600 hover:after:scale-x-100 after:-translate-x-1/2"            
//             >
//             testing
//             </a>       
//              <Link
//   href="/emergency" 
//   className="relative inline-block text-black after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-full after:bg-red-600
//              after:scale-x-0 after:origin-center after:transition-transform after:duration-300  hover:text-red-600 hover:after:scale-x-100 after:-translate-x-1/2"
//              >
//               About Us
//               </Link>            
//             <a
//   href="/register"
//   className="nav-link"
//             >
//               Register
//             </a>   

//          </nav>
//        </div>
//      </header>
//      </>
//    );
//  }
////////////////////////////////////////////////////////////////////////////////////////////////////////
// "use client";
// import Link from "next/link";
// import { useState } from "react";
// import "./click.css";
// export default function Header() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <header className="bg-white border-b shadow-sm">
//       <div className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center ">
//         {/* Logo */}
//         <a href="/" className="text-rose-600 font-bold text-xl">
//           🩸 JeevanLink
//         </a>

//         {/* Desktop Nav (only visible on md and above) */}
//         <nav className="hidden md:flex gap-4 text-sm text-slate-700">
//           <a href="/donors" className="relative inline-block text-black after:content-[''] after:absolute after:left-1/2 after:bottom-0  after:h-[2px] after:w-full after:bg-red-600
//               after:scale-x-0 after:origin-center after:transition-transform after:duration-300  hover:text-red-600 hover:after:scale-x-100 after:-translate-x-1/2">Find Donors</a>
//           <a href="/emergency" className="relative inline-block text-black after:content-[''] after:absolute after:left-1/2 after:bottom-0  after:h-[2px] after:w-full after:bg-red-600
//               after:scale-x-0 after:origin-center after:transition-transform after:duration-300  hover:text-red-600 hover:after:scale-x-100 after:-translate-x-1/2">Emergency</a>
//           <a href="/testing" className="relative inline-block text-black after:content-[''] after:absolute after:left-1/2 after:bottom-0  after:h-[2px] after:w-full after:bg-red-600
//               after:scale-x-0 after:origin-center after:transition-transform after:duration-300  hover:text-red-600 hover:after:scale-x-100 after:-translate-x-1/2">Testing</a>
//           <Link href="/emergency" className="relative inline-block text-black after:content-[''] after:absolute after:left-1/2 after:bottom-0  after:h-[2px] after:w-full after:bg-red-600
//               after:scale-x-0 after:origin-center after:transition-transform after:duration-300  hover:text-red-600 hover:after:scale-x-100 after:-translate-x-1/2">About Us</Link>
//           <a href="/register" className="nav-link">Register</a>
//         </nav>

//         {/* Mobile Hamburger (only visible below md) */}
//         <button
//           className="block md:hidden text-2xl text-slate-700"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           ☰
//         </button>
//       </div>

//       {/* Mobile Dropdown (only visible below md) */}
//       {isOpen && (
//         <div className="md:hidden bg-white border-t shadow-sm px-4 py-3 space-y-2">
//           <a href="/donors" className="block hover:text-red-600">Find Donors</a>
//           <a href="/emergency" className="block hover:text-red-600">Emergency</a>
//           <a href="/testing" className="block hover:text-red-600">Testing</a>
//           <Link href="/emergency" className="block hover:text-red-600">About Us</Link>
//           <a href="/register" className="block hover:text-red-600">Register</a>
//         </div>
//       )}
//     </header>
//   );
// }
////////////////////////////////////////////////////////////////////////////////////////////////////////
"use client";
import Link from "next/link";
import { useState } from "react";
import "./click.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white border-b shadow-sm">
      <div className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="text-rose-600 font-bold text-xl">
          🩸 JeevanLink
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-4 text-sm text-slate-700">
          <a href="/donors" className="relative inline-block text-black after:content-[''] after:absolute after:left-1/2 after:bottom-0  after:h-[2px] after:w-full after:bg-red-600
              after:scale-x-0 after:origin-center after:transition-transform after:duration-300  hover:text-red-600 hover:after:scale-x-100 after:-translate-x-1/2">Find Donors</a>
          {/* <a href="/emergency" className="relative inline-block text-black after:content-[''] after:absolute after:left-1/2 after:bottom-0  after:h-[2px] after:w-full after:bg-red-600
              after:scale-x-0 after:origin-center after:transition-transform after:duration-300  hover:text-red-600 hover:after:scale-x-100 after:-translate-x-1/2">Emergency</a> */}
          {/* <a href="/testing" className="relative inline-block text-black after:content-[''] after:absolute after:left-1/2 after:bottom-0  after:h-[2px] after:w-full after:bg-red-600
              after:scale-x-0 after:origin-center after:transition-transform after:duration-300  hover:text-red-600 hover:after:scale-x-100 after:-translate-x-1/2">Testing</a> */}
          <Link href="/about-us" className="relative inline-block text-black after:content-[''] after:absolute after:left-1/2 after:bottom-0  after:h-[2px] after:w-full after:bg-red-600
              after:scale-x-0 after:origin-center after:transition-transform after:duration-300  hover:text-red-600 hover:after:scale-x-100 after:-translate-x-1/2">About Us</Link>
          <a href="/register" className="nav-link">Register</a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="block md:hidden text-2xl text-slate-700"
          onClick={() => setIsOpen(true)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Slide Menu */}
      <ul
        className={`fixed top-0 right-0 w-64 h-screen bg-rose-50 transition-transform duration-500 
          md:hidden flex flex-col gap-4 py-20 px-6 z-50
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <button
          className="absolute top-4 right-4 text-xl"
          onClick={() => setIsOpen(false)}
        >
          ✕
        </button>
        <a href="/" onClick={() => setIsOpen(false)} className="hover:text-red-600">Home</a>
        <a href="/donors" onClick={() => setIsOpen(false)} className="hover:text-red-600">Find Donors</a>
        {/* <a href="/emergency" onClick={() => setIsOpen(false)} className="hover:text-red-600">Emergency</a>
        <a href="/testing" onClick={() => setIsOpen(false)} className="hover:text-red-600">Testing</a> */}
        <Link href="/about-us" onClick={() => setIsOpen(false)} className="hover:text-red-600">About Us</Link>
        <a href="/register" onClick={() => setIsOpen(false)} className="bg-rose-600 text-white px-4 py-2 rounded-md hover:bg-rose-700">
          Register
        </a>
      </ul>
    </header>
  );
}



