"use client"
import { Button } from "../../components/ui/button";
import { ArrowRight } from "lucide-react";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { useState } from "react";
const WaitlistForm = () => {
  const [email, setEmail] = useState("");
  const [suggestion, setSuggestion] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState()

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/waitlist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, suggestion, name }),
    });

    const data = await res.json();
    if (res.ok) {
      setMessage("🎉 You're on the waitlist!");
      setEmail("");
      setSuggestion("");
      setName("")
    } else {
      setMessage(`❌ ${data.error}`);
    }
  };

  return (
    <>
      <div className="w-fit mx-auto bg-card p-8 rounded-2xl shadow-lg border border-border space-y-6 mt-6">
        <h3 className="text-xl font-bold text-center bg-gradient-to-r from-teal-900 via-purple-300 to-pink-900 text-transparent bg-clip-text">
          Join the <span className="">Waitlist</span>
        </h3>

        <form className="space-y-5">
          {/* Name + Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              type="text"
              placeholder="Your name"
              className="w-full px-5 py-3.5 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary text-base"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              type="email"
              placeholder="Your email"
              className="w-full px-5 py-3.5 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary text-base"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Feature request */}
          <Textarea
            placeholder="Feature request or Suggestion"
            className="w-full px-5 py-3.5 min-h-[120px] rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary text-base"
            value={suggestion}
            onChange={(e) => setSuggestion(e.target.value)}
          ></Textarea>

          {/* CTA */}
          <Button
            size="lg"
            type="submit"
            className="w-full px-6 py-4 text-lg font-semibold rounded-xl shadow-glow cursor-pointer"
            onClick={handleSubmit}
          >
            Join the Waitlist
          </Button>

          {
            message && <p className="bg-gradient-to-r from-teal-500 via-purple-500 to-pink-600 text-transparent bg-clip-text">{message}</p>
          }
        </form>
      </div>
    </>
  );
};

export default WaitlistForm;
