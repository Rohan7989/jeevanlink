
"use client";
// import { useSearchParams } from "next/navigation";
// import { useEffect, useState } from "react";
// import ContactCard from "../components/ContactCard";

// export default function DonorsPage() {
//   const params = useSearchParams();
//   const state = params.get("state");
//   const district = params.get("district");
//   const group = params.get("group"); // ✅ correct param

//   const [donors, setDonors] = useState([]);

//   useEffect(() => {
//     async function fetchDonors() {
//       try {
//         const res = await fetch(
//           `/api/donors?state=${encodeURIComponent(state)}&district=${encodeURIComponent(district)}&group=${encodeURIComponent(group)}`
//         );
//         const data = await res.json();
//         setDonors(data);
//       } catch (err) {
//         console.error("Error fetching donors:", err);
//       }
//     }
//     if (state && district && group) {
//       fetchDonors();
//     }
//   }, [state, district, group]);

//   async function handleContact() {
    
//   }

//   return (
//     <div className="max-w-5xl mx-auto px-4 py-10">
//       <h2 className="text-2xl font-bold text-rose-700 mb-4">🔍 Search Results</h2>
//       <p className="text-slate-700 mb-6">
//         Showing donors for <strong>{group}</strong> blood group in{" "}
//         <strong>{district}</strong>, <strong>{state}</strong>.
//       </p>
      
//       <ul className="space-y-4">
//   {Array.isArray(donors) && donors.length > 0 ? (
//     donors.map((donor, idx) => (
//       <li
//         key={idx}
//         className="border p-4 rounded-md shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between"
//       >
//         {/* Left side: Name + Blood info */}
//         <div>
//           <h3 className="font-semibold text-lg">{donor.name}</h3>
//           <p className="text-sm text-slate-600">
//             {donor.bloodGroup} | {donor.district}, {donor.state}
//           </p>
//         </div>

//         {/* Right side: Contact button */}
//         <div className="mt-3 sm:mt-0">
//           <ContactCard phone={donor.phone} />
//         </div>
//       </li>
//     ))
//   ) : (
//     "loading..."
//   )}
// </ul>

//     </div>
//   );
// }
//  <button> 
//         Contact
//         </button> 
////className="mt-2 bg-rose-600 text-white px-3 py-1 rounded hover:bg-rose-700" 
{/* 43-57--------<ul className="space-y-4">
  {Array.isArray(donors) && donors.length > 0 ? (
    donors.map((donor, idx) => (
      <li key={idx} className="border p-4 rounded-md shadow-sm ">
        <h3 className="font-semibold text-lg ">{donor.name}</h3>
        <p className="text-sm text-slate-600">
          {donor.bloodGroup} | {donor.district}, {donor.state}
        </p>
        <ContactCard phone={donor.phone} />
      </li>
    ))
  ) : (
    "loading..."
  )}
      </ul>   */}


// import { useEffect, useState } from "react";
// import ContactCard from "../components/ContactCard";

// export default function DonorsPage() {
//   const [donors, setDonors] = useState([]);
//   const [criteria, setCriteria] = useState(null);

//   useEffect(() => {
//     const savedSearch = localStorage.getItem("lastSearch");
//     if (savedSearch) {
//       const parsed = JSON.parse(savedSearch);
//       setCriteria(parsed);

//       async function fetchDonors() {
//         try {
//           const res = await fetch(
//             `/api/donors?state=${encodeURIComponent(parsed.stateUT)}&district=${encodeURIComponent(parsed.district)}&group=${encodeURIComponent(parsed.group)}`
//           );
//           const data = await res.json();
//           setDonors(data);
//         } catch (err) {
//           console.error("Error fetching donors:", err);
//         }
//       }
//       fetchDonors();
//     }
//   }, []);

//   return (
//     <div className="max-w-5xl mx-auto px-4 py-10">
//       <h2 className="text-2xl font-bold text-rose-700 mb-4">🔍 Search Results</h2>
//       {criteria && (
//         <p className="text-slate-700 mb-6">
//           Showing donors for <strong>{criteria.group}</strong> blood group in{" "}
//           <strong>{criteria.district}</strong>, <strong>{criteria.stateUT}</strong>.
//         </p>
//       )}

//       <ul className="space-y-4">
//         {Array.isArray(donors) && donors.length > 0 ? (
//           donors.map((donor, idx) => (
//             <li key={idx} className="border p-4 rounded-md shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between">
//               <div>
//                 <h3 className="font-semibold text-lg">{donor.name}</h3>
//                 <p className="text-sm text-slate-600">
//                   {donor.bloodGroup} | {donor.district}, {donor.state}
//                 </p>
//               </div>
//               <div className="mt-3 sm:mt-0">
//                 <ContactCard phone={donor.phone} />
//               </div>
//             </li>
//           ))
//         ) : (
//           "loading..."
//         )}
//       </ul>
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import ContactCard from "../components/ContactCard";

export default function DonorsPage() {
  const [donors, setDonors] = useState([]);
  const [criteria, setCriteria] = useState(null);
  const [loading, setLoading] = useState(true); // new loading state

  useEffect(() => {
    const savedSearch = localStorage.getItem("lastSearch");
    if (savedSearch) {
      const parsed = JSON.parse(savedSearch);
      setCriteria(parsed);

      async function fetchDonors() {
        try {
          setLoading(true); // start loading
          const res = await fetch(
            `/api/donors?state=${encodeURIComponent(parsed.stateUT)}&district=${encodeURIComponent(parsed.district)}&group=${encodeURIComponent(parsed.group)}`
          );
          const data = await res.json();
          setDonors(data);
        } catch (err) {
          console.error("Error fetching donors:", err);
        } finally {
          setLoading(false); // stop loading
        }
      }
      fetchDonors();
    } else {
      setLoading(false); // no search criteria
    }
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold text-rose-700 mb-4">🔍 Search Results</h2>
      {criteria && (
        <p className="text-slate-700 mb-6">
          Showing donors for <strong>{criteria.group}</strong> blood group in{" "}
          <strong>{criteria.district}</strong>, <strong>{criteria.stateUT}</strong>.
        </p>
      )}

      <ul className="space-y-4">
        {loading ? (
          <p>Loading...</p>
        ) : Array.isArray(donors) && donors.length > 0 ? (
          donors.map((donor, idx) => (
            <li
              key={idx}
              className="border p-4 rounded-md shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <h3 className="font-semibold text-lg">{donor.name}</h3>
                <p className="text-sm text-slate-600">
                  {donor.bloodGroup} | {donor.district}, {donor.state}
                </p>
              </div>
              <div className="mt-3 sm:mt-0">
                <ContactCard phone={donor.phone} />
              </div>
            </li>
          ))
        ) : (
          <p className="text-red-600 font-medium">❌ No donors found for the given criteria.</p>
        )}
      </ul>
    </div>
  );
}
