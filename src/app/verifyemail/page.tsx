"use client";

import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";



export default function VerifyEmailPage() {
  const [token, setToken] = useState("");
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(false);

  const verifyUserEmail = async () => {
    try {
      await axios.post("/api/users/verifyemail", { token });
      setVerified(true);
    } catch (error: any) {
      setError(true);
      console.log(error.response?.data);
    }
  };

  useEffect(() => {
    const urlToken = window.location.search.split("=")[1];
    setToken(urlToken || "");
  }, []);

  useEffect(() => {
    if (token.length > 0) {
      verifyUserEmail();
    }
  }, [token]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white transition-all duration-300 px-4">
      <div className="text-center max-w-lg space-y-6 opacity-0 translate-y-[-80px] animate-slide-fade-in [animation-delay:0.5s]">
        {verified && (
          <>
            <h1 className="text-4xl font-extrabold text-green-500">You&apos;re Verified!</h1>
            <p className="text-lg">You may now log into your account.</p>
            <Link href="/login" className="text-blue-600 dark:text-blue-400 hover:underline">
              Go to Login
            </Link>
          </>
        )}

        {error && (
          <>
            <h1 className="text-4xl font-extrabold text-red-500">Error Verifying</h1>
            <p className="text-lg">Please try again later or contact support.</p>
          </>
        )}
      </div>
    </div>
  );
}
