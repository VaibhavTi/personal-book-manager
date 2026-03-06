const Book = require("../models/Book")

exports.createBook = async (req,res)=>{

 try{

  const {title,author,tags,status} = req.body

  const book = new Book({
   title,
   author,
   tags,
   status,
   user:req.user.id
  })

  await book.save()

  res.json(book)

 }catch(err){
  res.status(500).json({message:"Error creating book"})
 }

}

exports.getBooks = async (req,res)=>{

 try{

  const books = await Book.find({user:req.user.id})

  res.json(books)

 }catch(err){
  res.status(500).json({message:"Error fetching books"})
 }

}

exports.updateBook = async (req,res)=>{

 try{

  const book = await Book.findOneAndUpdate(
   { _id: req.params.id, user: req.user.id },
   req.body,
   { new:true }
  )

  if(!book){
   return res.status(404).json({message:"Book not found"})
  }

  res.json(book)

 }catch(err){
  res.status(500).json({message:"Error updating book"})
 }

}

exports.deleteBook = async (req,res)=>{

 try{

  const book = await Book.findOneAndDelete({
   _id:req.params.id,
   user:req.user.id
  })

  if(!book){
   return res.status(404).json({message:"Book not found"})
  }

  res.json({message:"Book deleted"})

 }catch(err){
  res.status(500).json({message:"Error deleting book"})
 }

}