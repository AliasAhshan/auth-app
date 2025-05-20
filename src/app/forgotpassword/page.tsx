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
    <div className="flex flex-col items-center justify-center h-screen bg-black">
      <h1 className="text-2xl font-bold mb-4">Forgot Password</h1>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border border-gray-300 p-2 mb-4"
      />
      <button
        onClick={sendResetLink}
        className={`bg-blue-500 text-white px-4 py-2 rounded ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
        disabled={loading || !email}
      >
        {loading ? "Sending..." : "Send Reset Link"}
      </button>
      {message && <p className={`mt-2 ${error ? "text-red-500" : "text-green-500"}`}>{message}</p>}
      <Link href="/login" className="text-blue-500 mt-4">Back to Login</Link>
    </div> 
  );        
}
