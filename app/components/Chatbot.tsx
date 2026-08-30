"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { Bot, Clock3, Loader2, MapPin, MessageCircle, Phone, Send, Sparkles, Stethoscope, X } from "lucide-react";
import { clinic } from "../lib/data";

type Message = { id: string; role: "user" | "assistant"; content: string };

const starters = [
  { label: "What services do you offer?", icon: Stethoscope },
  { label: "Where are you located?", icon: MapPin },
  { label: "What are your opening hours?", icon: Clock3 },
  { label: "How can I contact the clinic?", icon: Phone },
];

const initialMessage: Message = {
  id: "welcome",
  role: "assistant",
  content: "Hi! I’m **Lucin**, Lucin Medical Centre’s virtual assistant. 👋\n\nI can help you with our **services, doctors, opening hours, location, and contact details**. What would you like to know?",
};

function renderInline(text: string) {
  const tokenPattern = /(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\([^\)]+\))/g;
  return text.split(tokenPattern).filter(Boolean).map((chunk, index) => {
    if (chunk.startsWith("**") && chunk.endsWith("**")) return <strong key={index}>{chunk.slice(2, -2)}</strong>;
    if (chunk.startsWith("`") && chunk.endsWith("`")) return <code key={index}>{chunk.slice(1, -1)}</code>;
    const link = chunk.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) return <a key={index} href={link[2]} target={link[2].startsWith("http") ? "_blank" : undefined} rel="noreferrer">{link[1]}</a>;
    return <span key={index}>{chunk}</span>;
  });
}

function renderMarkdown(text: string) {
  return text.split("\n").map((line, index) => {
    const trimmed = line.trim();
    const isBullet = /^[-*]\s+/.test(trimmed);
    const isNumber = /^\d+[.)]\s+/.test(trimmed);
    const content = trimmed.replace(/^[-*]\s+/, "").replace(/^\d+[.)]\s+/, "");
    if (trimmed.startsWith("## ")) return <h3 key={index}>{renderInline(trimmed.slice(3))}</h3>;
    if (isBullet) return <li key={index}>{renderInline(content)}</li>;
    if (isNumber) return <li key={index} className="list-decimal ml-4">{renderInline(content)}</li>;
    if (!trimmed) return <div key={index} className="h-2" />;
    return <p key={index}>{renderInline(trimmed)}</p>;
  });
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([initialMessage]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showStarters, setShowStarters] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const node = scrollRef.current;
    if (node) node.scrollTo({ top: node.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  useEffect(() => {
    if (open) window.setTimeout(() => inputRef.current?.focus(), 180);
  }, [open]);

  async function sendMessage(value?: string) {
    const text = (value ?? input).trim();
    if (!text || loading) return;
    setInput("");
    setShowStarters(false);
    const nextMessage: Message = { id: crypto.randomUUID(), role: "user", content: text };
    const nextMessages = [...messages, nextMessage];
    setMessages(nextMessages);
    setLoading(true);
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages.filter((message) => message.id !== "welcome").map(({ role, content }) => ({ role, content })) }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data?.error || "Unable to reach the assistant");
      setMessages((current) => [...current, { id: crypto.randomUUID(), role: "assistant", content: data.message }]);
    } catch (error) {
      setMessages((current) => [...current, { id: crypto.randomUUID(), role: "assistant", content: `I’m sorry, I couldn’t connect right now. You can reach Lucin Medical Centre directly at **${clinic.phone}** or [WhatsApp the clinic](${clinic.whatsappHref}).` }]);
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void sendMessage();
  }

  return (
    <>
      {open && <div className="fixed inset-0 z-[90] bg-slate-950/20 backdrop-blur-[2px] sm:hidden" onClick={() => setOpen(false)} />}
      <section aria-label="Lucin Medical Centre virtual assistant" className={`fixed z-[100] transition-all duration-300 ease-out sm:right-6 sm:bottom-6 ${open ? "inset-x-0 bottom-0 top-16 sm:inset-auto sm:h-[min(680px,calc(100vh-48px))] sm:w-[410px] sm:translate-y-0 sm:opacity-100" : "pointer-events-none bottom-24 right-6 translate-y-4 opacity-0 sm:translate-y-2"}`}>
        <div className="flex h-full flex-col overflow-hidden border border-slate-200/80 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.20)] sm:h-full sm:rounded-[28px]">
          <header className="relative overflow-hidden bg-gradient-to-br from-brand-800 via-brand-700 to-brand-600 px-5 pb-5 pt-4 text-white">
            <div className="absolute -right-12 -top-16 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
            <div className="relative flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-brand-700 shadow-lg"><Bot size={22} strokeWidth={2.2} /><span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-brand-700 bg-emerald-300" /></div>
                <div><div className="flex items-center gap-1.5"><h2 className="font-semibold tracking-tight">Lucin Assistant</h2><Sparkles size={14} className="text-amber-200" /></div><p className="mt-0.5 text-xs text-white/75">Virtual front desk · Kasarani</p></div>
              </div>
              <button type="button" aria-label="Close assistant" onClick={() => setOpen(false)} className="rounded-full p-2 text-white/80 transition hover:bg-white/10 hover:text-white"><X size={19} /></button>
            </div>
            <p className="relative mt-4 max-w-[330px] text-sm leading-5 text-white/85">Ask about services, doctors, hours, directions or how to contact us.</p>
          </header>

          <div ref={scrollRef} className="min-h-0 flex-1 overflow-y-auto bg-[var(--color-cream)] px-4 py-4 sm:px-5">
            <div className="space-y-3">
              {messages.map((message) => <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}><div className={message.role === "user" ? "max-w-[84%] rounded-[20px] rounded-br-md bg-brand-700 px-4 py-3 text-sm leading-5 text-white shadow-sm" : "max-w-[90%] rounded-[20px] rounded-bl-md border border-slate-200 bg-white px-4 py-3 text-sm leading-5 text-ink-800 shadow-sm"}>{message.role === "assistant" ? <div className="chat-markdown">{renderMarkdown(message.content)}</div> : message.content}</div></div>)}
              {loading && <div className="flex justify-start"><div className="flex items-center gap-2 rounded-[20px] rounded-bl-md border border-slate-200 bg-white px-4 py-3 text-sm text-ink-500 shadow-sm"><span className="flex gap-1"><i className="h-1.5 w-1.5 animate-bounce rounded-full bg-brand-500 [animation-delay:-0.2s]" /><i className="h-1.5 w-1.5 animate-bounce rounded-full bg-brand-500 [animation-delay:-0.1s]" /><i className="h-1.5 w-1.5 animate-bounce rounded-full bg-brand-500" /></span>Lucin is thinking…</div></div>}
            </div>
          </div>

          {showStarters && messages.length === 1 && <div className="border-t border-slate-100 bg-white px-4 py-3 sm:px-5"><p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-400">Quick questions</p><div className="grid grid-cols-2 gap-2">{starters.map(({ label, icon: Icon }) => <button key={label} type="button" onClick={() => void sendMessage(label)} className="flex min-h-10 items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-left text-xs font-medium text-ink-700 transition hover:border-brand-200 hover:bg-brand-50 hover:text-brand-800"><Icon size={14} className="shrink-0 text-brand-600" /><span>{label}</span></button>)}</div></div>}

          <div className="border-t border-slate-100 bg-white px-3 pb-3 pt-2 sm:px-4"><form onSubmit={submit} className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 p-1.5 transition focus-within:border-brand-300 focus-within:bg-white focus-within:ring-4 focus-within:ring-brand-50"><input ref={inputRef} value={input} onChange={(event) => setInput(event.target.value)} placeholder="Ask Lucin something…" aria-label="Message Lucin Assistant" disabled={loading} className="min-w-0 flex-1 bg-transparent px-3 py-2 text-sm text-ink-900 outline-none placeholder:text-slate-400 disabled:opacity-60" /><button type="submit" disabled={!input.trim() || loading} aria-label="Send message" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-700 text-white transition hover:bg-brand-800 disabled:cursor-not-allowed disabled:opacity-40">{loading ? <Loader2 size={17} className="animate-spin" /> : <Send size={17} />}</button></form><div className="mt-2 flex items-center justify-between gap-2 px-1 text-[10px] text-slate-400"><span>For urgent medical emergencies, seek emergency care.</span><a href={clinic.phoneHref} className="shrink-0 font-medium text-brand-700 hover:underline">Call</a></div></div>
        </div>
      </section>

      {!open && <button type="button" onClick={() => setOpen(true)} aria-label="Open Lucin virtual assistant" className="fixed bottom-5 right-5 z-[100] flex items-center gap-3 rounded-full bg-brand-700 p-2.5 pr-4 text-white shadow-[0_14px_36px_rgba(13,148,136,0.32)] transition duration-300 hover:-translate-y-1 hover:bg-brand-800 hover:shadow-[0_18px_42px_rgba(13,148,136,0.38)] sm:bottom-6 sm:right-6"><span className="relative flex h-11 w-11 items-center justify-center rounded-full bg-white text-brand-700"><MessageCircle size={22} /><span className="absolute right-0 top-0 h-3 w-3 rounded-full border-2 border-white bg-emerald-400" /></span><span className="hidden text-left sm:block"><span className="block text-[11px] font-medium text-white/70">Need help?</span><span className="block text-sm font-semibold">Ask Lucin</span></span></button>}
    </>
  );
}
