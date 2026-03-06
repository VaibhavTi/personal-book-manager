"use client"

import { useState, useEffect } from "react"

export default function AddBookModal({ onAdd, onUpdate, editingBook, setEditingBook }) {

  const [title,setTitle] = useState("")
  const [author,setAuthor] = useState("")
  const [status,setStatus] = useState("Want to Read")

  useEffect(()=>{

    if(editingBook){
      setTitle(editingBook.title)
      setAuthor(editingBook.author)
      setStatus(editingBook.status)
    }

  },[editingBook])

  const submit = (e) => {
    e.preventDefault()

    const bookData = {
      title,
      author,
      status,
      tags:[]
    }

    if(editingBook){

      onUpdate(editingBook._id,bookData)

      setEditingBook(null)

    }else{

      onAdd(bookData)

    }

    setTitle("")
    setAuthor("")
    setStatus("Want to Read")
  }

  return (
    <>
      {editingBook && (
          <p className="text-sm text-blue-600 mb-2">
            Editing: {editingBook.title}
          </p>
      )}


      <form
        onSubmit={submit}
        className="bg-white shadow p-4 rounded mb-6 flex gap-3"
      >

        <input
          placeholder="Book title"
          className="border p-2 rounded w-full"
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
        />

        <input
          placeholder="Author"
          className="border p-2 rounded w-full"
          value={author}
          onChange={(e)=>setAuthor(e.target.value)}
        />

        <select
          className="border p-2 rounded"
          value={status}
          onChange={(e)=>setStatus(e.target.value)}
        >
          <option>Want to Read</option>
          <option>Reading</option>
          <option>Completed</option>
        </select>

        <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
          {editingBook ? "Update" : "Add"}
        </button>

      </form>

    </>
  )
}