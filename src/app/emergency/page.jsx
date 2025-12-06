// "use client";
// import { useState } from "react";
// import { INDIA_REGIONS } from "../data/india";
// import { LineSpinner } from "ldrs/react";
// import "ldrs/react/LineSpinner.css";

// export default function RegisterPage() {
//   const [name, setName] = useState("");
//   const [phone, setPhone] = useState("");
//   const [group, setGroup] = useState("");
//   const [stateUT, setStateUT] = useState("");
//   const [district, setDistrict] = useState("");
//   const [success, setSuccess] = useState(false);
//   const [acceptedTerms, setAcceptedTerms] = useState(false);
//   const [showTerms, setShowTerms] = useState(false);
//   const [isLoading, setIsLoading] = useState(false); // 🔹 new state

//   const statesUTs = Object.keys(INDIA_REGIONS).sort();
//   const districts = stateUT ? INDIA_REGIONS[stateUT] : [];

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!stateUT || !district || !group || !acceptedTerms) return;

//     setIsLoading(true); // 🔹 start loader

//     try {
//       const res = await fetch("/api/register", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           name,
//           phone,
//           state: stateUT,
//           district,
//           bloodGroup: group,
//         }),
//       });

//       const data = await res.json();

//       if (data.message) {
//         setSuccess(true);
//         setTimeout(() => setSuccess(false), 4000);
//       }

//       setName("");
//       setPhone("");
//       setGroup("");
//       setStateUT("");
//       setDistrict("");
//       setAcceptedTerms(false);
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setIsLoading(false); // 🔹 stop loader
//     }
//   };

//   return (
//     <div className="max-w-2xl mx-auto px-4 py-10">
//       <h2 className="text-2xl font-bold text-rose-700 mb-6">📝 Become a Donor</h2>

//       <form onSubmit={handleSubmit} className="space-y-4">
//         {/* Inputs */}
//         <input
//           type="text"
//           placeholder="Full Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           className="w-full border px-3 py-2 rounded-md"
//           required
//         />
//         <input
//           type="tel"
//           placeholder="Phone Number"
//           value={phone}
//           onChange={(e) => setPhone(e.target.value)}
//           className="w-full border px-3 py-2 rounded-md"
//           pattern="^[0-9]{10}$"
//           title="Enter 10 digit mobile number"
//           required
//         />
//         <select
//           value={group}
//           onChange={(e) => setGroup(e.target.value)}
//           className="w-full border px-3 py-2 rounded-md bg-white text-slate-400"
//           required
//         >
//           <option value="">Select Blood Group</option>
//           {["A", "B", "AB", "O"].map((t) => (
//             <optgroup key={t} label={t}>
//               <option value={`${t}+`}>{t}+</option>
//               <option value={`${t}-`}>{t}-</option>
//             </optgroup>
//           ))}
//         </select>
//         <select
//           value={stateUT}
//           onChange={(e) => {
//             setStateUT(e.target.value);
//             setDistrict("");
//           }}
//           className="w-full border px-3 py-2 rounded-md bg-white text-slate-400"
//           required
//         >
//           <option value="">Select State / Union Territory</option>
//           {statesUTs.map((name) => (
//             <option key={name} value={name}>
//               {name}
//             </option>
//           ))}
//         </select>
//         <select
//           value={district}
//           onChange={(e) => setDistrict(e.target.value)}
//           disabled={!stateUT}
//           className="w-full border px-3 py-2 rounded-md bg-white text-slate-400 disabled:text-slate-400"
//           required
//         >
//           <option value="">
//             {stateUT ? "Select District" : "Select State first"}
//           </option>
//           {districts.map((d) => (
//             <option key={d} value={d}>
//               {d}
//             </option>
//           ))}
//         </select>

//         {/* ✅ Terms & Conditions Checkbox */}
//         <div className="flex items-center space-x-2">
//           <input
//             type="checkbox"
//             checked={acceptedTerms}
//             onChange={(e) => setAcceptedTerms(e.target.checked)}
//           />
//           <span className="text-sm text-gray-700">
//             I agree to the{" "}
//             <button
//               type="button"
//               onClick={() => setShowTerms(true)}
//               className="text-rose-600 underline"
//             >
//               Terms and Conditions
//             </button>
//           </span>
//           <button
//             type="button"
//             onClick={() => setShowTerms(true)}
//             className="w-5 h-5 flex items-center justify-center rounded-full border text-xs font-bold text-gray-600"
//           >
//             i
//           </button>
//         </div>

//         {/* Submit Button with Loader */}
//         <button
//           type="submit"
//           className="fancy-button text-rose-600 flex items-center justify-center"
//           disabled={!stateUT || !district || !group || !acceptedTerms || isLoading}
//         >
//           {isLoading ? (
//             <LineSpinner size="20" stroke="3" speed="1" color="black" />
//           ) : (
//             <span className="button_top">Submit</span>
//           )}
//         </button>

//         {/* Success Box */}
//         {success && (
//           <div className="mt-4 p-5 bg-green-50 border border-green-200 rounded-xl flex flex-col items-center animate-fadeInScale shadow-md max-w-xs mx-auto">
//             <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center animate-bounceIn shadow-sm">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-9 w-9 text-white"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth={3}
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M20 6L9 17l-5-5" />
//               </svg>
//             </div>
//             <p className="mt-3 text-green-700 font-semibold text-lg tracking-wide text-center">
//               Registered Successfully
//             </p>
//           </div>
//         )}
//       </form>

//       {/* Terms & Conditions Modal */}
//       {showTerms && (
//         <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-lg max-w-md shadow-lg">
//             <h3 className="text-lg font-bold text-black mb-3">Terms and Conditions</h3>
//             {/* ... same as your code ... */}
//             <div className="mt-4 flex justify-end">
//               <button
//                 onClick={() => setShowTerms(false)}
//                 className="bg-rose-600 text-white px-4 py-1 rounded hover:bg-rose-700"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
import React from 'react'

const page = () => {
  return (
    <div>
      <>
    <h1>kya re wedya kya dekh raha hai</h1>
    </></div>
  )
}

export default page