"use client";
import { useState, useRef, useEffect } from "react";
import { X } from "lucide-react";

const QUICK_ACTIONS = [
  { label: "Website purpose", intent: "purpose" },
  { label: "How to register", intent: "register" },
  { label: "Find donors", intent: "search" },
  { label: "Contact donors", intent: "contact" },
  { label: "Who built this?", intent: "about" },
];

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "Hi!👋 I’m the JeevanLink Assistant. At the moment I can only answer questions on the below topics, We’re working on adding more features soon...",
    },
  ]);
  const [input, setInput] = useState("");
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const send = async (payload) => {
    const userText = payload?.text ?? input.trim();
    if (!userText) return;
    setMessages((m) => [...m, { role: "user", text: userText }]);
    setInput("");

    try {
      const res = await fetch("/api/chat-bot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: userText, intent: payload?.intent }),
      });
      const data = await res.json();
      setMessages((m) => [...m, { role: "bot", text: data.reply }]);
    } catch (e) {
      setMessages((m) => [
        ...m,
        { role: "bot", text: "Sorry, I could not fetch a reply. Please try again later." },
      ]);
    }
  };

  return (
    <div className="fixed bottom-20 right-6 z-50 group">
      {!open ? (
        // Circle button
         <div className="flex flex-col items-center">
                <span className="text-xs text-black mt-1">Need Help?</span>
          <button
            onClick={() => setOpen(true)}
            className="w-14 h-14 rounded-full  shadow-lg flex items-center justify-center text-white text-xl animate-pulse" /*className= hover:bg-rose-700 bg-rose-600 */
          >
            <img src="icons/blood.png" alt="" />
          </button>
          
        </div>
      ) : (
        // Chat window
        <div className="w-[320px] md:w-[360px] bg-white/95 backdrop-blur rounded-xl shadow-2xl border border-slate-200 overflow-hidden">
          <div className="bg-rose-600 text-white px-4 py-3 flex justify-between items-center">
            <p className="font-semibold">JeevanLink Assistant</p>
            <button onClick={() => setOpen(false)} className="hover:text-gray-200">
              <X size={18} />
            </button>
            {/* <button onClick={() => setOpen(false)} className="hover:text-gray-200">
                ✕
            </button> */}

          </div>

          <div className="p-3 space-y-2 max-h-[360px] overflow-y-auto">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`px-3 py-2 rounded-lg text-sm leading-relaxed ${
                    m.role === "user"
                      ? "bg-rose-600 text-white"
                      : "bg-slate-100 text-slate-800"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Quick actions */}
          <div className="px-3 pb-2 flex gap-2 flex-wrap">
            {QUICK_ACTIONS.map((qa) => (
              <button
                key={qa.intent}
                onClick={() => send({ text: qa.label, intent: qa.intent })}
                className="text-xs bg-slate-100 hover:bg-slate-200 text-slate-800 px-2 py-1 rounded-md"
              >
                {qa.label}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="p-3 border-t border-slate-200 flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask e.g. How to register?"
              className="flex-1 px-3 py-2 text-sm border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500 text-slate-800 placeholder-slate-400 bg-white"
            />
            <button
              onClick={() => send()}
              className="px-3 py-2 text-sm bg-rose-600 hover:bg-rose-700 text-white rounded-md"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
//💬
