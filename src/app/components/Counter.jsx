"use client";

import { useEffect, useState, useRef } from "react";
import { animate } from "framer-motion";

export default function Counter() {
  const [count, setCount] = useState(0);
  const nodeRef = useRef();

  useEffect(() => {
    fetch("/api/donorCount")
      .then((res) => res.json())
      .then((data) => {
        const controls = animate(0, data.total, {
          duration: 2,
          onUpdate(v) {
            nodeRef.current.textContent = Math.floor(v).toLocaleString();
          },
        });
        return () => controls.stop();
      })
      .catch((err) => console.error(err));
  }, []);

return (
    <section className="bg-gradient-to-r from-rose-600 to-pink-500 rounded-xl shadow-lg py-10 mt-16 max-w-[420px] md:max-w-[350px] mx-auto">
      <div className="max-w-5xl mx-auto px-6 text-center text-white">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8">
          Together we are building a lifesaving community
        </h2>
        <div className="flex justify-center">
          <div className="bg-white/10 backdrop-blur-md px-10 py-8 rounded-lg shadow-md flex flex-col items-center">
            {/* Fixed width for 2 digits */}
            <span
              ref={nodeRef}
              className="font-mono text-6xl font-extrabold leading-none w-[3ch] text-center"
            />
            <p className="mt-4 text-lg md:text-xl font-medium">
              Registered Donors
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

//   return (
//   <section className="bg-gradient-to-r from-rose-600 to-pink-500 rounded-xl shadow-lg py-10 mt-16 max-w-[420px] md:max-w-[520px] mx-auto">
//     <div className="px-6 text-center text-white">
//       <h2 className="text-2xl md:text-3xl font-semibold mb-8">
//         Together we are building a lifesaving community
//       </h2>

//       <div className="flex justify-center">
//         <div className="bg-white/10 backdrop-blur-md py-8 rounded-lg shadow-md flex flex-col items-center w-[220px] md:w-[260px]">
//           {/* Fixed width for 2 digits */}
//           <span
//             ref={nodeRef}
//             className="font-mono text-6xl font-extrabold leading-none w-[3ch] text-center"
//           />
//           <p className="mt-4 text-lg md:text-xl font-medium">
//             Registered Donors
//           </p>
//         </div>
//       </div>
//     </div>
//   </section>
// );
// }


//   return (
//     <section className="bg-gradient-to-r from-rose-600 to-pink-500 py-12 mt-16 rounded-xl shadow-lg">
//       <div className="max-w-5xl mx-auto px-6 text-center text-white">
//         <h2 className="text-2xl md:text-3xl font-semibold mb-4">
//           Together we are building a lifesaving community
//         </h2>
//         <div className="flex justify-center">
//           <div className="bg-white/10 backdrop-blur-md px-10 py-6 rounded-lg shadow-md">
//             <span
//               ref={nodeRef}
//               className="text-5xl md:text-6xl font-extrabold tracking-tight"
//             />
//             <p className="mt-2 text-lg md:text-xl font-medium">
//               Registered Donors
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


/////////////////////////////////////////////////////////////////////////////////////////

// import { useEffect, useState, useRef } from "react";
// import { animate } from "framer-motion";

// export default function Counter() {
//   const [count, setCount] = useState(0);
//   const nodeRef = useRef();

//   useEffect(() => {
//     fetch("/api/donorCount")
//       .then((res) => res.json())
//       .then((data) => {
//         const controls = animate(0, data.total, {
//           duration: 2,
//           onUpdate(v) {
//             nodeRef.current.textContent = Math.floor(v).toLocaleString();
//           },
//         });
//         return () => controls.stop();
//       })
//       .catch((err) => console.error(err));
//   }, []);

//   return (
//     <div className="text-center my-8">
//       <span
//         ref={nodeRef}
//         className="text-5xl font-extrabold text-rose-600 drop-shadow-lg"
//       />
//       <p className="text-gray-200 mt-2 text-lg">Registered Donors</p>
//     </div>
//   );
// }

/////////////////////////////////////////////////////////////////////////////////////////
// "use client";
// import { useEffect, useState } from "react";

// export default function Counter() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     fetch("/api/donorCount")
//       .then((res) => res.json())
//       .then((data) => setCount(data.total))
//       .catch((err) => console.error(err));
//   }, []);

//   return (
//     <div className="text-center my-8">
//       <h2 className="text-5xl font-extrabold text-rose-600 drop-shadow-lg">
//         {count.toLocaleString()}+
//       </h2>
//       <p className="text-gray-200 mt-2 text-lg">Registered Donors</p>
//     </div>
//   );
// }
