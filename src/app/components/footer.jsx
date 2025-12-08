// export default function Footer() {
//   return (
//     <footer className="bg-white border-t mt-auto">
//       <div className="max-w-5xl mx-auto px-4 py-4 text-sm text-slate-600 text-center">
//         <p>© 2025 JeevanLink. All rights reserved.</p>
//         <a href="/register" className="hover:text-rose-600 block mt-1">Become a Donor</a>
//       </div>
//     </footer>
//   );
// }
export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t mt-auto">
      <div className="max-w-5xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between text-sm text-slate-600">
        
        {/* Left side */}
        <p className="mb-2 sm:mb-0">
          © 2025 <span className="font-semibold text-rose-700">JeevanLink</span>. All rights reserved.
        </p>

        {/* Right side */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 text-center sm:text-right">
          <a
            href="/register"
            className="hover:text-rose-600 font-medium"
          >
            Become a Donor
          </a>
          <span className="hidden sm:inline">|</span>
          <a
            href="mailto:support@jeevanlink.com"
            className="hover:text-rose-600"
          >
            support@jeevanlink.com
          </a>
        </div>
      </div>
    </footer>
  );
}

