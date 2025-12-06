"use client";

import ChatBot from "./components/ChatBot";
import Counter from "./components/Counter";
import QuickSearch from "./components/QuickSearch";

export default function Home() {
  return (
   
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-rose-700 mb-4">Welcome to JeevanLink</h1>
      <p className="text-black">
        Quickly find blood donors in your area. In emergencies, there's no room to waste time.
      </p>
     
      <QuickSearch />
       <Counter />
       <ChatBot />
    </div>
  );
}