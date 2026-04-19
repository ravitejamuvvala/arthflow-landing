'use client';

import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Joined waitlist with ${email}`);
    // TODO: Integrate with backend to handle waitlist signup
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-50 dark:bg-black p-4">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl font-bold text-black dark:text-zinc-50 mb-4">
          Manage your first salary, stress-free
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
          ArthFlow tells you exactly what to do with your money
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 mb-8">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Join waitlist
          </button>
        </form>
        <img
          src="/app-screenshot.png"
          alt="ArthFlow App UI Screenshot"
          className="w-full max-w-md mx-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}
