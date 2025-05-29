"use client";

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function ResetPasswordPage() {
    const [token, setToken] = useState("")
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const router = useRouter();

    const isValidPassword = (password: string) => password.length >=8 && /[A-Z]/.test(password);



    const resetPassword = async () => {
        try {
            await axios.post("/api/users/resetpassword", {token, password})
            setSuccess(true);
            setTimeout(() => {router.push("/login")}, 2000);

        } catch (error: any) {
            setError(true)
            console.log(error.response.data)
        }
    }


    useEffect(() => {
        const urlToken = window.location.search.split("=")[1];
        setToken(urlToken || "")
    }, []);



    return (
    <div className="flex min-h-screen transition-all duration-300">
        {/* Left panel */}
        <div className="hidden md:flex w-2/5 items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 text-white px-10">
        <div className="text-center animate-fade-in [animation-delay:0.3s]">
            <h1 className="text-5xl font-extrabold mb-4">Almost Done!</h1>
            <p className="text-lg opacity-90">Set your new password and continue on your journey!</p>
        </div>
        </div>

        {/* Right panel - reset password form */}
        <div className="flex flex-col w-full md:w-3/5 items-center justify-center px-6 sm:px-16 py-10 bg-white dark:bg-gray-900 text-gray-800 dark:text-white transition-all duration-300">
        <div className="w-full max-w-md space-y-6 animate-fade-in [animation-delay:0.3s]">
            <h2 className="text-3xl font-bold text-center">
            Reset Your Password
            </h2>

            <div>
            <label htmlFor="password" className="block mb-1 text-sm">
                New Password
            </label>
            <input
                id="password"
                type="password"
                placeholder="Enter new password"
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            {password.length > 0 && !isValidPassword(password) && (
                <p className = "text-red-500 text-sm mt-1">
					Password must be at least 8 characters and include an uppercase letter.
                </p>
            )}
            </div>

            <button
            onClick={resetPassword}
            disabled={!isValidPassword(password)}
            className={`w-full py-3 rounded-lg font-semibold text-white transition-all duration-200 ${
                !isValidPassword(password)
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-lg"
            }`}
            >
            Reset Password
            </button>

            {success && (
            <p className="text-green-500 text-center text-sm">
                Password reset successful. Redirecting to login...
            </p>
            )}
            {error && (
            <p className="text-red-500 text-center text-sm">
                Error resetting password
            </p>
            )}

            <p className="text-sm text-center mt-4">
            <Link
                href="/login"
                className="text-blue-600 hover:underline dark:text-blue-400"
            >
                Return to Login
            </Link>
            </p>
        </div>
        </div>
    </div>
    );



}