
"use client";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { INDIA_REGIONS } from "../data/india";
// import { LineSpinner } from "ldrs/react";
// import "ldrs/react/LineSpinner.css";

// export default function QuickSearch() {
//   const [stateUT, setStateUT] = useState("");
//   const [district, setDistrict] = useState("");
//   const [group, setGroup] = useState("");
//   const router = useRouter();
//   const [isLoading, setIsLoading] = useState(false); // 🔹 new state

//   const statesUTs = Object.keys(INDIA_REGIONS).sort();
//   const districts = stateUT ? INDIA_REGIONS[stateUT] : [];

//   const handleSearch = () => {
//     const query = new URLSearchParams({
//       state: stateUT || "",
//       district: district || "",
//       group: group || ""
//     }).toString();
//     router.push(`/donors?${query}`);
//     setIsLoading(true); // 🔹 start loader
//   };

  

//   return (
//     <div className="space-y-3 mt-6">
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
//         {/* State / UT */}
//         <select
//           value={stateUT}
//           onChange={(e) => {
//             setStateUT(e.target.value);
//             setDistrict("");
//           }}
//           className="border px-3 py-2 rounded-md bg-white text-slate-400"
//         >
//           <option value="">Select State / Union Territory</option>
//           {statesUTs.map((name) => (
//             <option key={name} value={name}>
//               {name}
//             </option>
//           ))}
//         </select>

//         {/* District */}
//         <select
//           value={district}
//           onChange={(e) => setDistrict(e.target.value)}
//           disabled={!stateUT}
//           className="border px-3 py-2 rounded-md bg-white text-slate-400 disabled:text-slate-400" // disabled:bg-slate-100
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

//         {/* Blood group */}
//         <select
//           value={group}
//           onChange={(e) => setGroup(e.target.value)}
//           className="border px-3 py-2 rounded-md bg-white text-slate-400"
//         >
//           <option value="">Blood Group</option>
//           {["A", "B", "AB", "O"].map((t) => (
//             <optgroup key={t} label={t}>
//               <option value={`${t}+`}>{t}+</option>
//               <option value={`${t}-`}>{t}-</option>
//             </optgroup>
//           ))}
//         </select>
//       </div>

//       <button
//         onClick={handleSearch}
//         className=" fancy-button text-rose-600 flex items-center justify-center"
//         //className="fancy-button text-rose-600"
//         disabled={!stateUT || !district || !group}
//       >
//         {isLoading ? (
//             <LineSpinner size="25" stroke="3" speed="1" color="black" />
//           ) : (
//             <span className="button_top">Submit</span>
//           )}
//       </button> 
//     </div>
//   );
// }
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { INDIA_REGIONS } from "../data/india";
import { LineSpinner } from "ldrs/react";
import "ldrs/react/LineSpinner.css";

export default function QuickSearch() {
  const [stateUT, setStateUT] = useState("");
  const [district, setDistrict] = useState("");
  const [group, setGroup] = useState("");
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const statesUTs = Object.keys(INDIA_REGIONS).sort();
  const districts = stateUT ? INDIA_REGIONS[stateUT] : [];

  const handleSearch = () => {
    const criteria = { stateUT, district, group };
    // ✅ Save to localStorage
    localStorage.setItem("lastSearch", JSON.stringify(criteria));
    router.push("/donors");
    setIsLoading(true);
  };

  return (
    <div className="space-y-3 mt-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {/* State / UT */}
        <select
          value={stateUT}
          onChange={(e) => {
            setStateUT(e.target.value);
            setDistrict("");
          }}
          className="border px-3 py-2 rounded-md bg-white text-slate-400"
        >
          <option value="">Select State / Union Territory</option>
          {statesUTs.map((name) => (
            <option key={name} value={name}>{name}</option>
          ))}
        </select>

        {/* District */}
        <select
          value={district}
          onChange={(e) => setDistrict(e.target.value)}
          disabled={!stateUT}
          className="border px-3 py-2 rounded-md bg-white text-slate-400 disabled:text-slate-400"
        >
          <option value="">{stateUT ? "Select District" : "Select State first"}</option>
          {districts.map((d) => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>

        {/* Blood group */}
        <select
          value={group}
          onChange={(e) => setGroup(e.target.value)}
          className="border px-3 py-2 rounded-md bg-white text-slate-400"
        >
          <option value="">Blood Group</option>
          {["A", "B", "AB", "O"].map((t) => (
            <optgroup key={t} label={t}>
              <option value={`${t}+`}>{t}+</option>
              <option value={`${t}-`}>{t}-</option>
            </optgroup>
          ))}
        </select>
      </div>

      <button
        onClick={handleSearch}
        className="fancy-button text-rose-600 flex items-center justify-center"
        disabled={!stateUT || !district || !group}
      >
        {isLoading ? (
          <LineSpinner size="25" stroke="3" speed="1" color="black" />
        ) : (
          <span className="button_top">Submit</span>
        )}
      </button>
    </div>
  );
}
