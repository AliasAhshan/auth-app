"use client";

import axios from 'axios';
import React, { useState } from 'react';
import Link from 'next/link';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendResetLink = async () => {
    try {
      setLoading(true);
      await axios.post("/api/users/forgotpassword", { email });
      setMessage("Reset link sent to your email");
      setError(false);
    } catch (error: any) {
      setError(true);
      setMessage(error.response?.data?.error || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen transition-all duration-300">
      {/* Left panel */}
      <div className="hidden md:flex w-2/5 items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 text-white px-10">
        <div className="text-center opacity-0 animate-slide-fade-in [animation-delay:0.5s]">
          <h1 className="text-5xl font-extrabold mb-4">Need Help?</h1>
          <p className="text-lg opacity-90">We’ll get you back on track.</p>
        </div>
      </div>

      {/* Right panel - forgot password form */}
      <div className="flex flex-col w-full md:w-3/5 items-center justify-center px-6 sm:px-16 py-10 bg-white dark:bg-gray-900 text-gray-800 dark:text-white transition-all duration-300">
        <div className="w-full max-w-md space-y-6 opacity-0 translate-y-[-80px] animate-slide-fade-in [animation-delay:0.9s]">
          <h2 className="text-3xl font-bold text-center">
            Forgot Password
          </h2>

          <div>
            <label htmlFor="email" className="block mb-1 text-sm">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button
            onClick={sendResetLink}
            disabled={loading || !email}
            className={`w-full py-3 rounded-lg font-semibold text-white transition-all duration-200 ${
              loading || !email
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-lg"
            }`}
          >
            {loading ? "Sending..." : "Send Reset Link"}
          </button>

          {message && (
            <p
              className={`text-center text-sm ${
                error ? "text-red-500" : "text-green-500"
              }`}
            >
              {message}
            </p>
          )}

          <p className="text-sm text-center">
            <Link
              href="/login"
              className="text-blue-600 hover:underline dark:text-blue-400"
            >
              Back to Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
       
}
