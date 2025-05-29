"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";

export default function SignupPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });

  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const onSignup = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);
      console.log("Signup Success", response.data);
      router.push("/login");
    } catch (error: any) {
      console.log("Signup Failed", error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const { email, password, username } = user;
    setButtonDisabled(!(email && password && username));
  }, [user]);

  return (
    <div className="flex min-h-screen transition-all duration-300">
      {/* Left panel */}
      <div className="hidden md:flex w-2/5 items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 text-white px-10">
        <div className="text-center opacity-0 animate-slide-fade-in [animation-delay:0.5s]">
          <h1 className="text-5xl font-extrabold mb-4">Get Started!</h1>
          <p className="text-lg opacity-90">Join us and explore the features.</p>
        </div>
      </div>

      {/* Right panel - signup form */}
      <div className="flex flex-col w-full md:w-3/5 items-center justify-center px-6 sm:px-16 py-10 bg-white dark:bg-gray-900 text-gray-800 dark:text-white transition-all duration-300">
        <div className="w-full max-w-md space-y-6 opacity-0 translate-y-[-80px] animate-slide-fade-in [animation-delay:0.9s]">
          <h2 className="text-3xl font-bold text-center">
            {loading ? "Processing..." : "Create Your Account"}
          </h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="username" className="block mb-1 text-sm">
                Username
              </label>
              <input
                id="username"
                type="text"
                placeholder="Username"
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={user.username}
                onChange={(e) =>
                  setUser({ ...user, username: e.target.value })
                }
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 text-sm">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Email"
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="password" className="block mb-1 text-sm">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Password"
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
            </div>
          </div>

          <button
            onClick={onSignup}
            disabled={buttonDisabled}
            className={`w-full py-3 rounded-lg font-semibold text-white transition-all duration-200 ${
              buttonDisabled
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-lg"
            }`}
          >
            {buttonDisabled ? "Fill all fields" : "Sign Up"}
          </button>

          <p className="text-sm text-center mt-4">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-blue-600 hover:underline dark:text-blue-400"
            >
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
