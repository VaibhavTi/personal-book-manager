"use client"

import { useRouter } from "next/navigation"

export default function Navbar() {

  const router = useRouter()

  const logout = () => {
    localStorage.removeItem("token")
    router.push("/login")
  }

  return (
    <div className="bg-white border-b">
      <div className="max-w-5xl mx-auto flex justify-between items-center py-4 px-4">

        <h1 className="text-xl font-bold text-gray-800">
          Personal Book Manager
        </h1>

        <button
          onClick={logout}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm"
        >
          Logout
        </button>

      </div>
    </div>
  )
}