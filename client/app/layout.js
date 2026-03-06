import "../styles/globals.css"

export const metadata = {
  title: "Personal Book Manager",
  description: "MERN stack assignment"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}