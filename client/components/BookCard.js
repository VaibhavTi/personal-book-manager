"use client"

import { Trash2, Pencil } from "lucide-react"

export default function BookCard({ book, onDelete, onStatusChange, onEdit }) {

  const getOptions = () => {

    if (book.status === "Want to Read") {
      return ["Want to Read", "Reading"]
    }

    if (book.status === "Reading") {
      return ["Reading", "Completed"]
    }

    return ["Completed"]

  }

  return (

    <div className="bg-white border border-gray-200 rounded-lg px-5 py-4 flex justify-between items-center hover:shadow-md transition">

      <div>
        <h2 className="font-semibold text-lg text-gray-800">
          {book.title}
        </h2>

        <p className="text-sm text-gray-500 mt-1">
          {book.author}
        </p>
      </div>

      <div className="flex items-center gap-3">

        {book.status === "Completed" ? (

          <span className="px-3 py-1 text-sm rounded-full bg-green-100 text-green-700 font-medium">
            Completed
          </span>

        ) : (

          <select
            value={book.status}
            onChange={(e)=>onStatusChange(book._id,e.target.value)}
            className="border rounded-md px-3 py-1 text-sm bg-gray-50 hover:bg-gray-100"
          >

            {getOptions().map((status)=>(
              <option key={status} value={status}>
                {status}
              </option>
            ))}

          </select>

        )}

        <button
          onClick={()=>onEdit(book)}
          className="text-gray-500 hover:text-blue-600 transition"
        >
          <Pencil size={18}/>
        </button>

        <button
          onClick={()=>onDelete(book._id)}
          className="text-gray-400 hover:text-red-600 transition"
        >
          <Trash2 size={18}/>
        </button>

      </div>

    </div>
  )
}