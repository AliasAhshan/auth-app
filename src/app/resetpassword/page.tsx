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
        <div className="flex flex-col items-center justify-center h-screen bg-black">
            <h1 className="text-2xl font-bold mb-4">Reset Password</h1>
            <input
                type="password"
                placeholder="New Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border border-gray-300 p-2 mb-4"
            />
            <button
                onClick={resetPassword}
                className="bg-blue-500 text-white px-4 py-2 rounded"
            >
                Reset Password
            </button>
            <Link href="/login" className="text-blue-500">Login</Link>
            {success && <p className="text-green-500 mt-2">Password reset successful. Redirecting to login...</p>}
            {error && <p className="text-red-500 mt-2">Error resetting password</p>}

        </div>
    )


}