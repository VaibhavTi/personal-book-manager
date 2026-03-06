const express = require("express")
const router = express.Router()

const authMiddleware = require("../middleware/authMiddleware")

const {
 createBook,
 getBooks,
 updateBook,
 deleteBook
} = require("../controllers/bookController")

router.post("/", authMiddleware, createBook)
router.get("/", authMiddleware, getBooks)
router.put("/:id", authMiddleware, updateBook)
router.delete("/:id", authMiddleware, deleteBook)

module.exports = router