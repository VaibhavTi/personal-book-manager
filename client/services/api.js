const API_URL = "http://localhost:5000/api"

export const signupUser = async (data) => {
  const res = await fetch(`${API_URL}/auth/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  })

  return res.json()
}

export const loginUser = async (data) => {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  })

  return res.json()
}

export const getBooks = async (token) => {
  const res = await fetch(`${API_URL}/books`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  return res.json()
}

export const addBook = async (data, token) => {
  const res = await fetch(`${API_URL}/books`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(data)
  })

  return res.json()
}

export const deleteBook = async (token, id) => {
  const res = await fetch(`${API_URL}/books/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  return res.json()
}

export const updateBook = async (id, data, token) => {

  const res = await fetch(`${API_URL}/books/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(data)
  })

  return res.json()

}