"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, Lock } from "lucide-react";
import { site } from "@/data/site";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const subject = String(data.get("subject") || "New message");
    const message = String(data.get("message") || "");
    const body = encodeURIComponent(`From: ${name} (${email})\n\n${message}`);
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${body}`;
    setSent(true);
  }

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-[#12121a] sm:p-8">
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
        Send Me a Message
      </h2>
      <p className="mt-2 text-sm text-slate-500 dark:text-zinc-400">
        Tell me about your idea and I&apos;ll get back to you within 24 hours.
      </p>

      {sent ? (
        <p className="mt-8 rounded-2xl bg-emerald-50 p-4 text-sm text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300">
          Thanks! Your email app should open with the message ready to send.
        </p>
      ) : (
        <form onSubmit={onSubmit} className="mt-6 space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-sm font-medium text-slate-700 dark:text-zinc-300">
              Your Name
              <input
                name="name"
                required
                placeholder="John Doe"
                className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-primary focus:bg-white dark:border-white/10 dark:bg-white/5 dark:text-white dark:focus:bg-white/10"
              />
            </label>
            <label className="block text-sm font-medium text-slate-700 dark:text-zinc-300">
              Your Email
              <input
                name="email"
                type="email"
                required
                placeholder="john@example.com"
                className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-primary focus:bg-white dark:border-white/10 dark:bg-white/5 dark:text-white dark:focus:bg-white/10"
              />
            </label>
          </div>
          <label className="block text-sm font-medium text-slate-700 dark:text-zinc-300">
            Subject
            <input
              name="subject"
              required
              placeholder="Project inquiry"
              className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-primary focus:bg-white dark:border-white/10 dark:bg-white/5 dark:text-white dark:focus:bg-white/10"
            />
          </label>
          <label className="block text-sm font-medium text-slate-700 dark:text-zinc-300">
            Message
            <textarea
              name="message"
              required
              rows={6}
              placeholder="Tell me about your project..."
              className="mt-2 w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-primary focus:bg-white dark:border-white/10 dark:bg-white/5 dark:text-white dark:focus:bg-white/10"
            />
          </label>
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition hover:bg-indigo-600"
          >
            Send Message
            <ArrowRight className="h-4 w-4" />
          </button>
        </form>
      )}

      <p className="mt-5 flex items-center justify-center gap-2 text-xs text-slate-500 dark:text-zinc-500">
        <Lock className="h-3.5 w-3.5" />
        Your information is safe with me. I respect your privacy.
      </p>
    </div>
  );
}
