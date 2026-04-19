"use client";

import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --bg: #06091A;
          --surface: #0D1326;
          --surface2: #121929;
          --border: rgba(255,255,255,0.07);
          --blue: #4F8EF7;
          --blue-dim: rgba(79,142,247,0.12);
          --blue-glow: rgba(79,142,247,0.25);
          --green: #34D399;
          --green-dim: rgba(52,211,153,0.1);
          --amber: #FBBF24;
          --text: #F1F5F9;
          --text-2: #94A3B8;
          --text-3: #475569;
          --font-head: 'Sora', sans-serif;
          --font-body: 'DM Sans', sans-serif;
        }

        html { scroll-behavior: smooth; }

        body {
          background: var(--bg);
          color: var(--text);
          font-family: var(--font-body);
          font-size: 16px;
          line-height: 1.6;
          overflow-x: hidden;
          -webkit-font-smoothing: antialiased;
        }

        .bg-mesh {
          position: fixed;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          background:
            radial-gradient(ellipse 80% 60% at 10% 20%, rgba(79,142,247,0.07) 0%, transparent 70%),
            radial-gradient(ellipse 60% 50% at 90% 80%, rgba(52,211,153,0.05) 0%, transparent 70%),
            radial-gradient(ellipse 40% 40% at 50% 50%, rgba(79,142,247,0.03) 0%, transparent 100%);
        }

        .page { position: relative; z-index: 1; }

        /* NAV */
        nav {
          position: sticky;
          top: 0;
          z-index: 100;
          padding: 18px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 1100px;
          margin: 0 auto;
        }

        nav::before {
          content: '';
          position: fixed;
          top: 0; left: 0; right: 0;
          height: 72px;
          background: rgba(6,9,26,0.8);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--border);
          z-index: -1;
        }

        .logo {
          font-family: var(--font-head);
          font-size: 20px;
          font-weight: 700;
          color: var(--text);
          letter-spacing: -0.02em;
        }

        .logo span { color: var(--blue); }

        .nav-pill {
          background: var(--blue-dim);
          border: 1px solid rgba(79,142,247,0.2);
          color: var(--blue);
          font-size: 12px;
          font-weight: 600;
          padding: 6px 14px;
          border-radius: 20px;
          letter-spacing: 0.04em;
        }

        /* SECTIONS */
        section {
          max-width: 1100px;
          margin: 0 auto;
          padding: 96px 24px;
        }

        section.tight { padding: 64px 24px; }

        .section-label {
          font-family: var(--font-body);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--blue);
          margin-bottom: 16px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .section-label::before {
          content: '';
          width: 20px;
          height: 1.5px;
          background: var(--blue);
          border-radius: 2px;
        }

        /* HERO */
        .hero {
          text-align: center;
          padding-top: 80px;
          padding-bottom: 80px;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: transparent;
          border: 1px solid var(--border);
          color: var(--text-2);
          font-size: 13px;
          padding: 8px 16px;
          border-radius: 20px;
          margin-bottom: 40px;
        }

        .hero h1 {
          font-family: var(--font-head);
          font-size: clamp(36px, 6vw, 64px);
          font-weight: 800;
          line-height: 1.08;
          letter-spacing: -0.03em;
          color: var(--text);
          margin-bottom: 24px;
          max-width: 820px;
          margin-left: auto;
          margin-right: auto;
        }

        .hero h1 .blue { color: var(--blue); }
        .hero h1 .green { color: var(--green); }

        .hero-sub {
          font-size: 18px;
          color: var(--text-2);
          max-width: 560px;
          margin: 0 auto 40px;
          line-height: 1.7;
          font-weight: 400;
        }

        .trust-pills {
          display: flex;
          gap: 10px;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 48px;
        }

        .trust-pill {
          background: transparent;
          border: 1px solid var(--border);
          color: var(--text-3);
          font-size: 12px;
          padding: 6px 14px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .trust-pill .dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--green);
        }

        /* WAITLIST FORM */
        .waitlist-form {
          display: flex;
          gap: 10px;
          max-width: 480px;
          margin: 0 auto 16px;
        }

        .waitlist-form input {
          flex: 1;
          background: var(--surface);
          border: 1px solid var(--border);
          color: var(--text);
          font-family: var(--font-body);
          font-size: 15px;
          padding: 14px 18px;
          border-radius: 14px;
          outline: none;
          transition: border-color 0.2s;
        }

        .waitlist-form input::placeholder { color: var(--text-3); }
        .waitlist-form input:focus { border-color: rgba(79,142,247,0.4); }

        .btn-cta {
          background: var(--blue);
          color: #fff;
          font-family: var(--font-head);
          font-size: 14px;
          font-weight: 700;
          padding: 14px 24px;
          border-radius: 14px;
          border: none;
          cursor: pointer;
          white-space: nowrap;
          box-shadow: 0 0 28px var(--blue-glow);
          transition: all 0.2s ease;
          letter-spacing: 0.01em;
        }

        .btn-cta:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 32px var(--blue-glow);
        }

        .btn-cta:active { transform: scale(0.98); }

        .form-note {
          font-size: 12px;
          color: var(--text-3);
          text-align: center;
        }

        /* SUCCESS */
        .success-msg {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: var(--green-dim);
          border: 1px solid rgba(52,211,153,0.2);
          color: var(--green);
          font-size: 14px;
          font-weight: 500;
          padding: 14px 24px;
          border-radius: 14px;
          margin-bottom: 16px;
        }

        /* MOCKUP PREVIEW */
        .mockup {
          margin: 56px auto 0;
          max-width: 360px;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 24px;
          padding: 24px;
          box-shadow: 0 24px 64px rgba(0,0,0,0.4), 0 0 0 1px var(--border);
        }

        .mockup-status {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--green-dim);
          border: 1px solid rgba(52,211,153,0.2);
          color: var(--green);
          font-size: 13px;
          font-weight: 600;
          padding: 8px 14px;
          border-radius: 20px;
          margin-bottom: 20px;
        }

        .mockup-status .dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--green);
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }

        .mockup-label {
          font-size: 11px;
          color: var(--text-3);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 10px;
        }

        .mockup-amount {
          font-family: var(--font-head);
          font-size: 28px;
          font-weight: 700;
          color: var(--text);
          margin-bottom: 4px;
        }

        .mockup-sub {
          font-size: 12px;
          color: var(--text-2);
          margin-bottom: 16px;
        }

        .flow-bar {
          height: 10px;
          border-radius: 8px;
          background: rgba(255,255,255,0.06);
          overflow: hidden;
          display: flex;
          gap: 2px;
          margin-bottom: 10px;
        }

        .flow-bar .spend { width: 52%; background: var(--blue); border-radius: 8px 0 0 8px; }
        .flow-bar .save { width: 28%; background: var(--green); }
        .flow-bar .invest { width: 18%; background: var(--amber); border-radius: 0 8px 8px 0; }

        .flow-legend {
          display: flex;
          gap: 14px;
        }

        .legend-item {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 11px;
          color: var(--text-2);
        }

        .legend-dot {
          width: 7px;
          height: 7px;
          border-radius: 2px;
        }

        /* PROBLEM SECTION */
        .problem-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-top: 48px;
        }

        .glass-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 20px;
          padding: 28px;
          transition: border-color 0.2s, transform 0.2s;
        }

        .glass-card:hover {
          border-color: rgba(79,142,247,0.2);
          transform: translateY(-2px);
        }

        .card-icon {
          font-size: 28px;
          margin-bottom: 16px;
          display: block;
        }

        .card-title {
          font-family: var(--font-head);
          font-size: 16px;
          font-weight: 700;
          color: var(--text);
          margin-bottom: 8px;
          line-height: 1.3;
        }

        .card-body {
          font-size: 14px;
          color: var(--text-2);
          line-height: 1.6;
        }

        /* HOW IT WORKS */
        .steps {
          display: flex;
          align-items: flex-start;
          gap: 0;
          margin-top: 56px;
          position: relative;
        }

        .step {
          flex: 1;
          text-align: center;
          position: relative;
          padding: 0 12px;
        }

        .step:not(:last-child)::after {
          content: '→';
          position: absolute;
          right: -8px;
          top: 16px;
          color: var(--text-3);
          font-size: 18px;
        }

        .step-num {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: var(--blue-dim);
          border: 1px solid rgba(79,142,247,0.25);
          color: var(--blue);
          font-family: var(--font-head);
          font-size: 14px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 14px;
        }

        .step-title {
          font-family: var(--font-head);
          font-size: 14px;
          font-weight: 700;
          color: var(--text);
          margin-bottom: 6px;
        }

        .step-desc {
          font-size: 12px;
          color: var(--text-2);
          line-height: 1.5;
        }

        /* FEATURES */
        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-top: 48px;
        }

        .feature-card {
          background: var(--surface2);
          border: 1px solid var(--border);
          border-radius: 20px;
          padding: 32px 28px;
          transition: border-color 0.25s, transform 0.25s;
        }

        .feature-card:hover {
          border-color: rgba(79,142,247,0.25);
          transform: translateY(-3px);
        }

        .feature-card.featured {
          border-color: rgba(79,142,247,0.2);
          background: linear-gradient(135deg, rgba(79,142,247,0.06) 0%, var(--surface2) 100%);
        }

        .ai-badge {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          background: var(--blue-dim);
          border: 1px solid rgba(79,142,247,0.2);
          color: var(--blue);
          font-size: 11px;
          font-weight: 600;
          padding: 4px 10px;
          border-radius: 10px;
          margin-top: 14px;
        }

        /* TRANSFORMATION */
        .transform-section {
          text-align: center;
          padding: 80px 24px;
        }

        .transform-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 28px;
          padding: 56px 48px;
          max-width: 900px;
          margin: 0 auto;
        }

        .transform-card h2 {
          font-family: var(--font-head);
          font-size: clamp(22px, 3.5vw, 36px);
          font-weight: 800;
          letter-spacing: -0.02em;
          color: var(--text);
          margin-bottom: 12px;
        }

        .transform-card p {
          color: var(--text-2);
          font-size: 16px;
          margin-bottom: 48px;
        }

        .journey {
          display: flex;
          align-items: flex-start;
          justify-content: center;
          gap: 0;
        }

        .journey-step {
          flex: 1;
          text-align: center;
          padding: 0 12px;
          position: relative;
        }

        .journey-step:not(:last-child)::after {
          content: '→';
          position: absolute;
          right: -6px;
          top: 16px;
          color: var(--text-3);
          font-size: 16px;
        }

        .journey-emoji {
          font-size: 28px;
          display: block;
          margin-bottom: 10px;
        }

        .journey-label {
          font-family: var(--font-head);
          font-size: 14px;
          font-weight: 700;
          color: var(--text);
          margin-bottom: 4px;
        }

        .journey-desc {
          font-size: 12px;
          color: var(--text-2);
          line-height: 1.5;
        }

        /* SECTION HEADLINES */
        .section-head {
          font-family: var(--font-head);
          font-size: clamp(28px, 4vw, 42px);
          font-weight: 800;
          letter-spacing: -0.02em;
          color: var(--text);
          margin-bottom: 16px;
          line-height: 1.15;
        }

        .section-sub {
          font-size: 17px;
          color: var(--text-2);
          max-width: 560px;
          line-height: 1.65;
        }

        /* FOOTER */
        footer {
          border-top: 1px solid var(--border);
          padding: 40px 24px;
          max-width: 1100px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
        }

        .footer-logo {
          font-family: var(--font-head);
          font-size: 17px;
          font-weight: 700;
          color: var(--text);
        }

        .footer-logo span { color: var(--blue); }

        .footer-center {
          font-size: 13px;
          color: var(--text-3);
          text-align: center;
          flex: 1;
        }

        .footer-right {
          font-size: 13px;
          color: var(--text-3);
          text-align: right;
        }

        /* DIVIDER */
        .divider {
          width: 100%;
          height: 1px;
          background: var(--border);
          max-width: 1100px;
          margin: 0 auto;
        }

        /* RESPONSIVE */
        @media (max-width: 768px) {
          section { padding: 64px 20px; }
          .problem-grid { grid-template-columns: 1fr; gap: 14px; }
          .features-grid { grid-template-columns: 1fr; gap: 14px; }
          .steps { flex-direction: column; gap: 32px; align-items: center; }
          .step:not(:last-child)::after { content: '↓'; right: auto; top: auto; bottom: -20px; left: 50%; transform: translateX(-50%); }
          .step { width: 100%; max-width: 280px; }
          .journey { flex-direction: column; gap: 28px; align-items: center; }
          .journey-step:not(:last-child)::after { content: '↓'; right: auto; left: 50%; top: auto; bottom: -20px; transform: translateX(-50%); }
          .journey-step { width: 100%; max-width: 200px; }
          .waitlist-form { flex-direction: column; }
          .transform-card { padding: 36px 24px; }
          footer { flex-direction: column; align-items: center; text-align: center; }
          .footer-right { text-align: center; }
        }
      `}</style>

      <div className="bg-mesh" />
      <div className="page">

        {/* NAV */}
        <nav>
          <div className="logo">Arth<span>Flow</span></div>
          <div className="nav-pill">Coming Soon</div>
        </nav>

        {/* HERO */}
        <section className="hero">
          <div className="hero-badge">
            🇮🇳 Built for India&apos;s next generation of earners
          </div>

          <h1>
            Finally know what to do<br />
            with your <span className="blue">salary</span> —<br />
            every <span className="green">single</span> month.
          </h1>

          <p className="hero-sub">
            ArthFlow is your personal money operating system. It tells you exactly
            what to fix, where to save, and how to grow — no spreadsheets, no confusion.
          </p>

          <div className="trust-pills">
            <div className="trust-pill"><span className="dot" />No spreadsheets</div>
            <div className="trust-pill"><span className="dot" />No jargon</div>
            <div className="trust-pill"><span className="dot" />No confusion</div>
          </div>

          {submitted ? (
            <div className="success-msg">
              ✓ &nbsp;You&apos;re on the waitlist! We&apos;ll reach out soon.
            </div>
          ) : (
            <form className="waitlist-form" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn-cta">Join Waitlist →</button>
            </form>
          )}

          <p className="form-note">Free forever · No spam · No credit card</p>

          {/* MOCKUP */}
          <div className="mockup">
            <div className="mockup-status">
              <div className="dot" />
              You&apos;re on track this month
            </div>
            <div className="mockup-label">October money flow</div>
            <div className="mockup-amount">₹84,000</div>
            <div className="mockup-sub">Total income · Oct 2025</div>
            <div className="flow-bar">
              <div className="spend" />
              <div className="save" />
              <div className="invest" />
            </div>
            <div className="flow-legend">
              <div className="legend-item"><div className="legend-dot" style={{ background: "#4F8EF7" }} />Spend ₹43.7K</div>
              <div className="legend-item"><div className="legend-dot" style={{ background: "#34D399" }} />Save ₹23.5K</div>
              <div className="legend-item"><div className="legend-dot" style={{ background: "#FBBF24" }} />Invest ₹15K</div>
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* PROBLEM */}
        <section>
          <div className="section-label">The Problem</div>
          <h2 className="section-head">Most people earn.<br />Very few actually manage.</h2>
          <p className="section-sub">Sound familiar? You&apos;re not alone — and it&apos;s not your fault.</p>

          <div className="problem-grid">
            <div className="glass-card">
              <span className="card-icon">💸</span>
              <div className="card-title">Salary hits. Then disappears.</div>
              <div className="card-body">You check your account mid-month and wonder — where did it all go? No clear answer.</div>
            </div>
            <div className="glass-card">
              <span className="card-icon">📊</span>
              <div className="card-title">Apps track. They never guide.</div>
              <div className="card-body">Expense trackers show you dashboards. None of them tell you what to actually do next.</div>
            </div>
            <div className="glass-card">
              <span className="card-icon">😰</span>
              <div className="card-title">Month-end guilt, every month.</div>
              <div className="card-body">&quot;Did I do okay this month?&quot; — you ask yourself, without a real answer. Again.</div>
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* HOW IT WORKS */}
        <section>
          <div className="section-label">How ArthFlow Works</div>
          <h2 className="section-head">A system that thinks<br />with you. Every month.</h2>

          <div className="steps">
            {[
              { n: "01", title: "Observe", desc: "We look at your income, spending, and goals" },
              { n: "02", title: "Analyse", desc: "AI finds patterns, gaps, and opportunities" },
              { n: "03", title: "Decide", desc: "We show you one clear action to take" },
              { n: "04", title: "Nudge", desc: "Gentle reminders keep you on track" },
              { n: "05", title: "Improve", desc: "Every month, your finances get better" },
            ].map((s) => (
              <div className="step" key={s.n}>
                <div className="step-num">{s.n}</div>
                <div className="step-title">{s.title}</div>
                <div className="step-desc">{s.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <div className="divider" />

        {/* FEATURES */}
        <section>
          <div className="section-label">What You Get</div>
          <h2 className="section-head">Everything you need.<br />Nothing you don&apos;t.</h2>

          <div className="features-grid">
            <div className="feature-card">
              <span className="card-icon">🎯</span>
              <div className="card-title">Always know what to do next</div>
              <div className="card-body">One clear action per screen — not a dashboard full of numbers that overwhelms you.</div>
            </div>
            <div className="feature-card featured">
              <span className="card-icon">🤖</span>
              <div className="card-title">AI that acts like a financial advisor</div>
              <div className="card-body">Specific, personalised insights in plain language. Real ₹ amounts. Real decisions. No jargon.</div>
              <div className="ai-badge">⚡ Powered by Claude AI</div>
            </div>
            <div className="feature-card">
              <span className="card-icon">🏆</span>
              <div className="card-title">Goals that actually adapt</div>
              <div className="card-body">Set a goal. ArthFlow tells you exactly how much to save monthly — and warns you early if you&apos;re falling behind.</div>
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* TRANSFORMATION */}
        <section className="transform-section" style={{ maxWidth: "100%", padding: "80px 24px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div className="transform-card">
              <div className="section-label" style={{ justifyContent: "center" }}>The ArthFlow Journey</div>
              <h2>From confusion → clarity<br />→ control → confidence</h2>
              <p>That&apos;s what ArthFlow does. Every month, a little better.</p>

              <div className="journey">
                {[
                  { emoji: "😕", label: "Confusion", desc: "Don't know where money goes" },
                  { emoji: "💡", label: "Clarity", desc: "See your full money picture" },
                  { emoji: "🎯", label: "Control", desc: "Make the right moves" },
                  { emoji: "💪", label: "Confidence", desc: "Build real wealth, calmly" },
                ].map((j) => (
                  <div className="journey-step" key={j.label}>
                    <span className="journey-emoji">{j.emoji}</span>
                    <div className="journey-label">{j.label}</div>
                    <div className="journey-desc">{j.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* FINAL CTA */}
        <section style={{ textAlign: "center" }}>
          <div className="section-label" style={{ justifyContent: "center" }}>Early Access</div>
          <h2 className="section-head" style={{ maxWidth: 600, margin: "0 auto 16px" }}>
            Be the first to take<br />control of your money.
          </h2>
          <p className="section-sub" style={{ margin: "0 auto 40px", textAlign: "center" }}>
            ArthFlow launches soon. Join the waitlist and get early access — completely free.
          </p>

          {submitted ? (
            <div className="success-msg">
              ✓ &nbsp;You&apos;re on the waitlist! We&apos;ll reach out soon.
            </div>
          ) : (
            <form className="waitlist-form" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn-cta">Get Early Access →</button>
            </form>
          )}

          <p className="form-note" style={{ marginTop: 12 }}>No credit card · No commitment · Cancel anytime</p>
        </section>

        {/* FOOTER */}
        <footer>
          <div className="footer-logo">Arth<span>Flow</span></div>
          <div className="footer-center">Built with care for India&apos;s earners 🇮🇳 · © 2025 ArthFlow</div>
          <div className="footer-right">arthflow.in</div>
        </footer>

      </div>
    </>
  );
}
