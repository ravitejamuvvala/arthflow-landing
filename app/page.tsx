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
      <section className="max-w-5xl mx-auto px-6 py-24">
        {/* Top Label */}
        <div className="flex justify-center mb-8">
          <div className="px-4 py-2 border border-white/[0.12] rounded-full">
            <span className="text-xs text-gray-300">🇮🇳 Built for India's next generation of earners</span>
          </div>
        </div>

        {/* Hero Headline */}
        <h1 className="text-5xl md:text-6xl font-bold text-center leading-tight mb-6">
          <span className="text-white">Finally know what to</span>
          <br />
          <span className="text-white">do with your <span className="text-blue-400">salary.</span></span>
        </h1>

        {/* Subtext */}
        <p className="text-center text-gray-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
          ArthFlow is your personal money operating system. It tells you exactly what to fix, where to save, and how to grow — every single month.
        </p>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {['No spreadsheets', 'No jargon', 'No confusion'].map((item) => (
            <div key={item} className="px-4 py-2 border border-white/[0.12] rounded-full">
              <span className="text-xs text-gray-300">✦ {item}</span>
            </div>
          ))}
        </div>

        {/* Waitlist Form */}
        <div className="max-w-lg mx-auto mb-16">
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 mb-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 px-5 py-4 bg-slate-900/50 border border-white/[0.1] rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 transition-all"
              required
            />
            <button
              type="submit"
              className="px-6 py-4 bg-blue-500 text-white font-semibold rounded-2xl hover:bg-blue-600 transition-all whitespace-nowrap"
              style={{
                boxShadow: '0 0 24px rgba(59,130,246,0.4)'
              }}
            >
              Join the Waitlist →
            </button>
          </form>
          <p className="text-center text-gray-500 text-sm">Free forever · No spam · Join our community waiting</p>
        </div>

        {/* UI Mockup Preview */}
        <div className="flex justify-center">
          <div className="w-full max-w-md h-48 rounded-3xl overflow-hidden" style={{
            background: 'rgba(255,255,255,0.04)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255,255,255,0.08)',
            padding: '24px'
          }}>
            <div className="flex items-center gap-2 mb-4">
              <div className="px-3 py-1 bg-green-500/30 border border-green-500/50 rounded-full">
                <span className="text-xs font-semibold text-green-300">You're on track ✓</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-blue-500/20"></div>
                <div className="flex-1">
                  <div className="h-2 bg-white/[0.1] rounded-full mb-2"></div>
                  <div className="h-2 bg-white/[0.05] rounded-full w-3/4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-widest text-blue-400 mb-4">The Problem</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Most people earn. Very few actually manage.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: '💸', title: 'Salary disappears', desc: 'Your salary hits. Then disappears. You\'re not sure where.' },
            { icon: '📊', title: 'Apps don\'t advise', desc: 'Expense apps show dashboards. They never tell you what to do.' },
            { icon: '😰', title: 'Monthly doubt', desc: 'By month end, you wonder — did I do okay this month?' },
          ].map((card, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl transition-all hover:border-blue-500/50"
              style={{
                background: 'rgba(255,255,255,0.04)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <div className="text-4xl mb-4">{card.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">{card.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-widest text-blue-400 mb-4">How ArthFlow Works</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            A system that thinks with you. Every month.
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-2">
          {['Observe', 'Analyse', 'Decide', 'Nudge', 'Improve'].map((step, idx) => (
            <div key={idx} className="flex items-center gap-6 w-full md:w-auto">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold mb-2">
                  {idx + 1}
                </div>
                <p className="font-semibold text-white text-sm">{step}</p>
                <p className="text-xs text-gray-500 mt-1 text-center w-16">Your money flow</p>
              </div>
              {idx < 4 && (
                <div className="hidden md:block text-blue-500/50 text-2xl">→</div>
              )}
              {idx < 4 && (
                <div className="md:hidden text-blue-500/50 text-2xl rotate-90">→</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-widest text-blue-400 mb-4">What You Get</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Everything you need. Nothing you don't.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: '🎯',
              title: 'Always know what to do next',
              desc: 'ArthFlow shows you one clear action — not a dashboard full of numbers.',
              badge: null,
            },
            {
              icon: '🤖',
              title: 'AI that acts like a financial advisor',
              desc: 'Get specific, personalised insights — not generic tips. Real rupee amounts, real actions.',
              badge: 'Powered by Claude AI',
            },
            {
              icon: '🏆',
              title: 'Goals that actually adapt',
              desc: 'Set a goal. ArthFlow tells you exactly how much to save monthly — and warns you early if you\'re off track.',
              badge: null,
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl transition-all hover:border-blue-500/50"
              style={{
                background: 'rgba(255,255,255,0.04)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">{feature.desc}</p>
              {feature.badge && (
                <div className="inline-block px-3 py-1 bg-blue-500/20 border border-blue-500/40 rounded-full">
                  <span className="text-xs font-medium text-blue-300">{feature.badge}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Transformation Section */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <div
          className="p-16 rounded-3xl text-center"
          style={{
            background: 'rgba(255,255,255,0.04)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            From confusion → clarity → control → confidence
          </h2>
          <p className="text-gray-300 mb-12">
            That's the ArthFlow journey. Every month, a little better.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            {[
              { emoji: '😕', label: 'Confusion', desc: 'Lost in numbers' },
              { emoji: '💡', label: 'Clarity', desc: 'See the picture' },
              { emoji: '🎯', label: 'Control', desc: 'Take action' },
              { emoji: '💪', label: 'Confidence', desc: 'Stay on track' },
            ].map((state, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <div className="text-center">
                  <div className="text-4xl mb-2">{state.emoji}</div>
                  <p className="font-semibold text-white text-sm">{state.label}</p>
                  <p className="text-xs text-gray-500">{state.desc}</p>
                </div>
                {idx < 3 && (
                  <div className="hidden md:block text-blue-500/50 text-2xl">→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist CTA Section */}
      <section className="max-w-5xl mx-auto px-6 py-24 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Be the first to take control.
        </h2>
        <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto">
          ArthFlow launches soon. Join the waitlist and get early access — free.
        </p>

        <div className="max-w-lg mx-auto mb-6">
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 mb-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 px-5 py-4 bg-slate-900/50 border border-white/[0.1] rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 transition-all"
              required
            />
            <button
              type="submit"
              className="px-6 py-4 bg-blue-500 text-white font-semibold rounded-2xl hover:bg-blue-600 transition-all whitespace-nowrap"
              style={{
                boxShadow: '0 0 24px rgba(59,130,246,0.4)'
              }}
            >
              Join the Waitlist →
            </button>
          </form>
        </div>

        <p className="text-gray-500 text-sm">No credit card. No commitment. Cancel anytime.</p>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.06] py-12 px-6 mt-24">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="font-bold text-white text-lg">ArthFlow</div>
          <div className="text-gray-400 text-sm">Built with care for India's earners 🇮🇳</div>
          <a href="https://arthflow.in" className="text-blue-400 hover:text-blue-300 transition-colors">
            arthflow.in
          </a>
        </div>
        <div className="max-w-5xl mx-auto mt-8 pt-8 border-t border-white/[0.06] text-center text-gray-600 text-xs">
          © 2025 ArthFlow · All rights reserved
        </div>
      </footer>
    </div>
  );
}
