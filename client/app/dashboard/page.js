"use client"

import { useEffect, useState } from "react"
import { getBooks, addBook, deleteBook, updateBook } from "../../services/api"

import Navbar from "../../components/Navbar"
import AddBookModal from "../../components/AddBookModal"
import BookCard from "../../components/BookCard"
import StatusFilter from "../../components/StatusFilter"

export default function Dashboard(){

  const [books,setBooks] = useState([])
  const [filter,setFilter] = useState("All")
  const [editingBook,setEditingBook] = useState(null)

  const token =
    typeof window !== "undefined"
      ? localStorage.getItem("token")
      : null

  useEffect(()=>{
    fetchBooks()
  },[])

  const fetchBooks = async () =>{
    const data = await getBooks(token)
    setBooks(Array.isArray(data) ? data : data.books || [])
  }

  const handleAdd = async(book)=>{
    await addBook(book,token)
    fetchBooks()
  }

  const handleDelete = async(id)=>{
    await deleteBook(token,id)
    fetchBooks()
  }

  const handleStatusChange = async(id,status)=>{
    await updateBook(id,{status},token)
    fetchBooks()
  }

  const handleUpdate = async (id, data) => {
    await updateBook(id, data, token)
    fetchBooks()
  }

  const filteredBooks =
    filter === "All"
      ? books
      : books.filter(b=>b.status===filter)

  return (

    <div className="bg-gray-50 min-h-screen">

      <Navbar/>

      <div className="max-w-4xl mx-auto py-10 px-4">

        <p className="text-gray-500 mb-6">
          Total Books: {books.length}
        </p>

        <AddBookModal
          onAdd={handleAdd}
          onUpdate={handleUpdate}
          editingBook={editingBook}
          setEditingBook={setEditingBook}
        />

        <StatusFilter
          filter={filter}
          setFilter={setFilter}
        />

        <div className="space-y-4">

          {filteredBooks.length === 0 && (
            <p className="text-gray-400 text-center mt-10">
              No books added yet
            </p>
          )}

          {filteredBooks.map((book)=>(
            <BookCard
              key={book._id}
              book={book}
              onDelete={handleDelete}
              onStatusChange={handleStatusChange} 
              onEdit={setEditingBook}
            />
          ))}

        </div>

      </div>

    </div>
  )
}