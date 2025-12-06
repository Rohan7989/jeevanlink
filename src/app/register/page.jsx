"use client";
import { useState } from "react";
import { INDIA_REGIONS } from "../data/india";
import { LineSpinner } from "ldrs/react";
import "ldrs/react/LineSpinner.css";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [group, setGroup] = useState("");
  const [stateUT, setStateUT] = useState("");
  const [district, setDistrict] = useState("");
  const [success, setSuccess] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // 🔹 new state

  const statesUTs = Object.keys(INDIA_REGIONS).sort();
  const districts = stateUT ? INDIA_REGIONS[stateUT] : [];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stateUT || !district || !group || !acceptedTerms) return;
    
    setIsLoading(true); // 🔹 start loader

    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        phone,
        state: stateUT,
        district,
        bloodGroup: group
      })
    });

    const data = await res.json();

    if (data.message) {
      setSuccess(true);
      setTimeout(() => setSuccess(false), 4000);
    }

    setName("");
    setPhone("");
    setGroup("");
    setStateUT("");
    setDistrict("");
    setAcceptedTerms(false);
    setIsLoading(false);
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold text-rose-700 mb-6">📝 Become a Donor</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Inputs */}
        <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} className="w-full border px-3 py-2 rounded-md" required />
        <input type="tel" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full border px-3 py-2 rounded-md" pattern="^[0-9]{10}$" title="Enter 10 digit mobile number" required />
        <select value={group} onChange={(e) => setGroup(e.target.value)} className="w-full border px-3 py-2 rounded-md bg-white text-slate-400" required>
          <option value="">Select Blood Group</option>
          {["A", "B", "AB", "O"].map((t) => (
            <optgroup key={t} label={t}>
              <option value={`${t}+`}>{t}+</option>
              <option value={`${t}-`}>{t}-</option>
            </optgroup>
          ))}
        </select>
        <select value={stateUT} onChange={(e) => { setStateUT(e.target.value); setDistrict(""); }} className="w-full border px-3 py-2 rounded-md bg-white text-slate-400" required>
          <option value="">Select State / Union Territory</option>
          {statesUTs.map((name) => (
            <option key={name} value={name}>{name}</option>
          ))}
        </select>
        <select value={district} onChange={(e) => setDistrict(e.target.value)} disabled={!stateUT} className="w-full border px-3 py-2 rounded-md bg-white text-slate-400 disabled:text-slate-400" required>
          <option value="">{stateUT ? "Select District" : "Select State first"}</option>
          {districts.map((d) => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>

        {/* ✅ Terms & Conditions Checkbox */}
        <div className="flex items-center space-x-2">
          <input type="checkbox" checked={acceptedTerms} onChange={(e) => setAcceptedTerms(e.target.checked)} />
          <span className="text-sm text-gray-700">I agree to the <button type="button" onClick={() => setShowTerms(true)} className="text-rose-600 underline">Terms and Conditions</button></span>
          <button type="button" onClick={() => setShowTerms(true)} className="w-5 h-5 flex items-center justify-center rounded-full border text-xs font-bold text-gray-600">i</button>
        </div>

        {/* Submit Button */}
        
        {/* <button
        type="submit"
        className="fancy-button text-rose-600"
        disabled={!stateUT || !district || !group || !acceptedTerms}
        >
            <span className="button_top">Submit</span>
          </button> */}
          <button
          type="submit"
          className="fancy-button text-rose-600 flex items-center justify-center"
          disabled={!stateUT || !district || !group || !acceptedTerms || isLoading}
        >
          {isLoading ? (
            <LineSpinner size="20" stroke="3" speed="1" color="black" />
          ) : (
            <span className="button_top">Submit</span>
          )}
        </button>

        {/* Success Box */}
        {success && (
          <div className="mt-4 p-5 bg-green-50 border border-green-200 rounded-xl flex flex-col items-center animate-fadeInScale shadow-md max-w-xs mx-auto">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center animate-bounceIn shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M20 6L9 17l-5-5" />
              </svg>
            </div>
            <p className="mt-3 text-green-700 font-semibold text-lg tracking-wide text-center">
              Registered Successfully
            </p>
          </div>
        )}
      </form>

      {/* Terms & Conditions Modal */}
      {showTerms && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-md shadow-lg">
            <h3 className="text-lg font-bold text-black mb-3">Terms and Conditions</h3>
            
            <ol className="list-decimal pl-5 space-y-0 text-black">            
              <li>You are filling this form in full awareness and by your own choice.</li>
              <li>Once you submit your information, you cannot delete it yourself. </li>
              <li>If you think you have entered any incorrect details (like name, district, blood group etc), you must email us at the address provided at the bottom of this website.</li>
              <li> Once submitted, your information will be stored in our database. Whenever a new user searches and their state, district and blood group match yours, your name and phone number will be shown to them, indicating that you are available for consultation.</li>
              <li>By submitting your information, you agree that JeevanLink is not responsible for any misuse of your data by third parties. You also agree that JeevanLink is not liable for any outcomes resulting from interactions between you and individuals who contact you based on the information provided.</li>
              <li> You confirm that you are eligible to donate blood as per the guidelines set by the National Blood Transfusion Council (NBTC) of India.</li>
              <li> You agree to inform JeevanLink if you are no longer willing or able to be a blood donor, so that your information can be updated or removed from our database.</li>
              <li> Your personal information will be handled in accordance with our Privacy Policy, which outlines how we collect, use,</li>        
            </ol>
            <div className="mt-4 flex justify-end">
              <button onClick={() => setShowTerms(false)} className="bg-rose-600 text-white px-4 py-1 rounded hover:bg-rose-700">Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
