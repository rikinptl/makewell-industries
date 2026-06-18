"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { getFaqReply } from "@/lib/faq-bot";
import { suggestedQuestions } from "@/lib/faq";
import { company } from "@/lib/site";

type Message = {
  id: string;
  role: "user" | "bot";
  text: string;
  link?: { href: string; label: string };
};

const WELCOME: Message = {
  id: "welcome",
  role: "bot",
  text: `Hi! I'm the ${company.name} assistant. Ask about our machines, quotes, location, catalogues, or delivery.`,
};

function createId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

export function FaqChatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      inputRef.current?.focus();
    }
  }, [open]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing]);

  function sendQuestion(question: string) {
    const trimmed = question.trim();
    if (!trimmed || typing) return;

    const userMessage: Message = { id: createId(), role: "user", text: trimmed };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setTyping(true);

    window.setTimeout(() => {
      const reply = getFaqReply(trimmed);
      setMessages((prev) => [
        ...prev,
        {
          id: createId(),
          role: "bot",
          text: reply.text,
          link: reply.link,
        },
      ]);
      setTyping(false);
    }, 450);
  }

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-[5.25rem] left-4 right-4 z-50 flex max-h-[min(70vh,520px)] flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl sm:left-auto sm:bottom-36 sm:right-8 sm:w-[380px]"
            role="dialog"
            aria-label="FAQ chat"
          >
            <div className="flex items-center justify-between border-b border-border bg-charcoal px-4 py-3.5">
              <div>
                <p className="text-sm font-semibold text-white">FAQ Assistant</p>
                <p className="text-xs text-brand-light/70">Makewell Industries</p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-full text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                aria-label="Close chat"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto bg-background p-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[88%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-brand text-white"
                        : "border border-border bg-surface text-foreground"
                    }`}
                  >
                    <p>{msg.text}</p>
                    {msg.link && (
                      <Link
                        href={msg.link.href}
                        onClick={() => setOpen(false)}
                        className={`mt-2 inline-flex text-xs font-semibold underline-offset-2 hover:underline ${
                          msg.role === "user" ? "text-white/90" : "text-brand"
                        }`}
                      >
                        {msg.link.label} →
                      </Link>
                    )}
                  </div>
                </div>
              ))}
              {typing && (
                <div className="flex justify-start">
                  <div className="rounded-2xl border border-border bg-surface px-4 py-3">
                    <span className="flex gap-1">
                      {[0, 1, 2].map((i) => (
                        <span
                          key={i}
                          className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-muted"
                          style={{ animationDelay: `${i * 150}ms` }}
                        />
                      ))}
                    </span>
                  </div>
                </div>
              )}
            </div>

            <div className="border-t border-border bg-surface p-3">
              <div className="no-scrollbar mb-2 flex gap-2 overflow-x-auto pb-1">
                {suggestedQuestions.map((q) => (
                  <button
                    key={q}
                    type="button"
                    onClick={() => sendQuestion(q)}
                    className="shrink-0 rounded-full border border-brand/20 bg-brand-light/50 px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-brand/40"
                  >
                    {q}
                  </button>
                ))}
              </div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  sendQuestion(input);
                }}
                className="flex gap-2"
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask a question…"
                  className="min-w-0 flex-1 rounded-full border border-border bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || typing}
                  className="btn-primary shrink-0 px-4 py-2.5 text-sm disabled:opacity-50"
                >
                  Send
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="fixed bottom-[5.25rem] right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-brand text-white shadow-lg transition-transform hover:scale-105 lg:bottom-24 lg:right-8"
          aria-label="Open FAQ chat"
          aria-expanded={false}
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.75}
              d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        </button>
      )}
    </>
  );
}
