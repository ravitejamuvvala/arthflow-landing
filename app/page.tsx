'use client';

import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail('');
    setTimeout(() => setSubmitted(false), 3000);
    // TODO: Integrate with Supabase to handle waitlist signup
  };

  const features = [
    {
      title: "You're on track — or here's how to fix it",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "AI that guides decisions, not just tracks expenses",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: "From confusion to clarity to confidence — every month",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <div className="text-2xl font-bold text-blue-900">ArthFlow</div>
        <div className="text-sm text-slate-600">Coming soon</div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        {/* Tagline */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 mb-6">
          <span className="text-sm font-semibold text-blue-900">Your Monthly Money Operating System</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
          Finally know what to do with your salary — every single month.
        </h1>

        {/* Subheadline */}
        <p className="text-xl text-slate-600 leading-relaxed mb-12 max-w-2xl mx-auto">
          ArthFlow tells you exactly where your money should go, what to fix, and how to improve — no spreadsheets, no confusion, no jargon.
        </p>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 my-16">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-blue-300 transition-colors">
              <div className="flex justify-center mb-4">
                <div className="text-blue-900 bg-blue-100 p-3 rounded-full">
                  {feature.icon}
                </div>
              </div>
              <p className="text-sm font-medium text-slate-700">{feature.title}</p>
            </div>
          ))}
        </div>

        {/* Waitlist Section */}
        <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl border border-blue-200 p-12 my-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Be the first to take control of your money</h2>
          <p className="text-slate-600 mb-8">Join our waitlist and be among the first to experience ArthFlow</p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3 mb-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 border border-slate-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-all"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-blue-900 text-white font-semibold rounded-2xl hover:bg-blue-950 transition-colors"
              >
                Join waitlist
              </button>
            </div>
            <p className="text-xs text-slate-500">Free to join. No spam. Ever.</p>
            {submitted && (
              <p className="mt-3 text-sm text-green-600 font-medium">
                ✓ Thanks for joining! Check your email.
              </p>
            )}
          </form>
        </div>

        {/* Social Proof */}
        <p className="text-slate-600 text-sm mb-20">Trusted by India's next generation of earners</p>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-slate-600 mb-2">ArthFlow is coming soon</p>
          <p className="text-slate-500 text-sm">
            Built for India's next generation of earners • 
            <a href="https://arthflow.in" className="text-blue-900 hover:underline ml-1">
              arthflow.in
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
