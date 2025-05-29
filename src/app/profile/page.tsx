"use client";

import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();
  const [userId, setUserId] = useState("");
  const [loading, setLoading] = useState(false);

  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("Logout successful");
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  const getUserDetails = async () => {
    try {
      setLoading(true);
      const res = await axios.get("/api/users/me");
      setUserId(res.data.data._id);
    } catch (err) {
      toast.error("Failed to fetch user details.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white px-6 transition-all duration-300">
      <div className="w-full max-w-2xl rounded-lg shadow-lg bg-gradient-to-br from-white to-slate-100 dark:from-gray-800 dark:to-gray-900 p-8 space-y-6 opacity-0 translate-y-[-80px] animate-slide-fade-in [animation-delay:0.3s]">
        <h1 className="text-3xl font-bold text-center">Welcome to Your Profile</h1>
        <p className="text-center text-gray-500 dark:text-gray-400">
          Here you can manage your session, view your data, and explore more.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center mt-6">
          <button
            onClick={getUserDetails}
            disabled={loading}
            className={`w-full md:w-auto px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
              loading
                ? "bg-gray-400 cursor-not-allowed text-white"
                : "bg-green-600 hover:bg-green-700 text-white shadow-md hover:shadow-lg"
            }`}
          >
            {loading ? "Fetching..." : "Get User Details"}
          </button>

          <button
            onClick={logout}
            className="w-full md:w-auto px-6 py-3 rounded-lg font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg transition-all duration-200"
          >
            Logout
          </button>
        </div>

        {userId && (
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Your Profile Link:</p>
            <Link
              href={`/profile/${userId}`}
              className="text-blue-600 dark:text-blue-400 hover:underline break-all"
            >
              View Full Profile
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
