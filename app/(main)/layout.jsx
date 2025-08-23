// app/(main)/layout.jsx
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import { ToastContainer } from "react-toastify"

export default function MainLayout({ children }) {
  return (
      <main className="min-h-screen flex flex-col w-11/12 mx-auto">
      
          <ToastContainer />
          <Navbar />
          {children}
          <Footer/>


    </main>
  )
}
