'use client';

import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    alert("You're on the waitlist! 🎉");
    setEmail('');
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950" style={{
      backgroundImage: `
        radial-gradient(ellipse at 20% 50%, rgba(59,130,246,0.08) 0%, transparent 60%),
        radial-gradient(ellipse at 80% 20%, rgba(16,185,129,0.06) 0%, transparent 60%)
      `
    }}>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl border-b border-white/[0.08]">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <span className="text-xl font-bold text-white">ArthFlow</span>
            <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
          </div>
          <div className="px-3 py-1.5 bg-blue-500/20 border border-blue-500/40 rounded-full">
            <span className="text-xs font-medium text-blue-300">Coming Soon</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 py-20 md:py-28">
        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl font-bold text-center leading-tight mb-6">
          <span className="text-white">Finally know what to do with your <span className="text-blue-400">salary</span> — every single month.</span>
        </h1>

        {/* Subtext */}
        <p className="text-center text-gray-300 text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
          ArthFlow tells you exactly where your money should go, what to fix, and how to improve — no spreadsheets, no confusion, no jargon.
        </p>

        {/* Visual Mockup */}
        <div className="flex justify-center mb-20">
          <div className="w-full max-w-md" style={{
            background: 'rgba(255,255,255,0.04)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '20px',
            padding: '24px',
            aspectRatio: '1/1.2'
          }}>
            <div className="h-full bg-gradient-to-br from-blue-500/20 to-transparent rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">💰</div>
                <p className="text-gray-300 text-sm">Smart money guidance</p>
              </div>
            </div>
          </div>
        </div>

        {/* Three Value Points */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {[
            "You're on track — or here's how to fix it",
            "AI that guides decisions, not just tracks expenses",
            "From confusion to clarity to confidence — every month",
          ].map((point, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl transition-all text-center"
              style={{
                background: 'rgba(255,255,255,0.04)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <p className="text-white text-sm leading-relaxed font-medium">{point}</p>
            </div>
          ))}
        </div>

        {/* Waitlist Section */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Be the first to take control of your money
          </h2>
          <p className="text-gray-300 text-sm md:text-base mb-8">
            Join our waitlist and be among the first to experience ArthFlow
          </p>

          <form onSubmit={handleSubmit} className="max-w-sm mx-auto mb-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-slate-900/50 border border-white/[0.1] rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 transition-all text-sm"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-2xl hover:bg-blue-600 transition-all whitespace-nowrap text-sm"
                style={{
                  boxShadow: '0 0 24px rgba(59,130,246,0.4)'
                }}
              >
                Join waitlist
              </button>
            </div>
          </form>
          <p className="text-gray-500 text-xs">Free to join. No spam. Ever.</p>
        </div>

        {/* Trust Signal */}
        <p className="text-center text-gray-400 text-sm mb-20">
          Trusted by India's next generation of earners
        </p>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.06] py-8 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-gray-300 text-sm mb-2">ArthFlow is coming soon</p>
          <p className="text-center text-gray-500 text-xs">
            Built for India's next generation of earners 🇮🇳 •{' '}
            <a href="https://arthflow.in" className="text-blue-400 hover:text-blue-300 transition-colors">
              arthflow.in
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
