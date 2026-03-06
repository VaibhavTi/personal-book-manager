import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      
      <div className="bg-white shadow-lg rounded-xl p-10 w-[420px] text-center">

        <h1 className="text-2xl font-semibold mb-2">
          Personal Book Manager
        </h1>

        <p className="text-gray-500 mb-6">
          Track your reading journey and manage your favorite books.
        </p>

        <div className="flex gap-4 justify-center">

          <Link
            href="/login"
            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
          >
            Login
          </Link>

          <Link
            href="/signup"
            className="border border-gray-300 px-5 py-2 rounded-lg hover:bg-gray-100"
          >
            Signup
          </Link>

        </div>

      </div>

    </main>
  )
}