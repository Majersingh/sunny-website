'use client'
import { useState } from "react";
 export default function SubscribeForm() {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (!email) return;
    const subject = encodeURIComponent("Subscription Request");
    const body = encodeURIComponent(`Hello,\n\nI would like to subscribe with this email: ${email}`);
    window.location.href = `mailto:support@sovnetworks.com?subject=${subject}&body=${body}`;
  };

  return (
    <form 
      className="flex gap-2"
      onSubmit={(e) => { e.preventDefault(); handleSubscribe(); }}
    >
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
        required
      />
      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2"
      >
        Subscribe
      </button>
    </form>
  );
}
