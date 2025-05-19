"use client";
import axios from "axios";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";




export default function ProfilePage() {
    const router = useRouter();
    const logout = async () => {
        try {
            await axios.get("/api/users/logout")
            toast.success("Logout successful");
            router.push("/login")

        } catch (error: any) {
            console.log(error.message);

            toast.error(error.message);
        }
    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Profile</h1>
            <hr />
            <p>Profile Page</p>
        <hr />
        <button
        onClick={logout}
        className="p-2 bg-blue-500 text-white rounded-lg mb-4 hover:bg-blue-600 mt-2"
        >Logout</button>
        </div>

    )
}