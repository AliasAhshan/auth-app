import Link from "next/link";
import BackgroundDots from "@/components/BackgroundDots"; // adjust path if needed

export const metadata = {
  title: "Home | Auth App",
  description: "Welcome to the authentication app homepage",
};

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 dark:from-gray-900 dark:to-gray-800 text-center px-6 transition-all duration-300 overflow-hidden">
      
      {/* Animated SVG Dots */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <BackgroundDots />
      </div>

      {/* Content */}
      <h1 className="relative z-10 text-4xl sm:text-5xl font-bold text-gray-800 dark:text-white mb-6 animate-fade-in [animation-delay:0.3s]">
        Welcome to the <span className="text-blue-600">Next.js</span> Authentication Application
      </h1>

      <p className="relative z-10 text-lg text-gray-600 dark:text-gray-300 mb-10 animate-fade-in [animation-delay:0.7s]">
        Click below to check out the application!
      </p>

      <Link
        href="/signup"
        className="relative z-10 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg animate-fade-in [animation-delay:1.2s] hover:scale-105"
      >
        Go to Signup
      </Link>
    </div>
  );
}
