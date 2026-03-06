"use client"

import { useState } from "react"
import { loginUser } from "../../services/api"
import { useRouter } from "next/navigation"

export default function Login() {

  const router = useRouter()

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()

    const res = await loginUser({email,password})

    if(res.token){
      localStorage.setItem("token",res.token)
      router.push("/dashboard")
    }else {
      setError(res.message || "Invalid credentials")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">

        <h2 className="text-2xl font-bold mb-6 text-center">
          Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="email"
            placeholder="Email"
            className="w-full border p-3 rounded-md"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border p-3 rounded-md"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />

           {error && (
              <div className="bg-red-100 text-red-600 text-sm p-2 rounded">
                {error}
              </div>
            )}

          <button className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700">
            Login
          </button>

        </form>

        <p className="text-center text-sm text-gray-500 mt-4">
          Don't have an account? 
          <span
            className="text-blue-600 cursor-pointer ml-1"
            onClick={()=>router.push("/signup")}
          >
            Signup
          </span>
        </p>

      </div>

    </div>
  )
}