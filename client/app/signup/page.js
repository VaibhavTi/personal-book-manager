"use client"

import { useState } from "react"
import { signupUser } from "../../services/api"
import { useRouter } from "next/navigation"

export default function Signup(){

  const router = useRouter()

  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const handleSubmit = async (e) =>{
    e.preventDefault()

    await signupUser({name,email,password})

    router.push("/login")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">

        <h2 className="text-2xl font-bold mb-6 text-center">
          Signup
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            placeholder="Name"
            className="w-full border p-3 rounded-md"
            value={name}
            onChange={(e)=>setName(e.target.value)}
          />

          <input
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

          <button className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700">
            Create Account
          </button>

        </form>

      </div>

    </div>
  )
}