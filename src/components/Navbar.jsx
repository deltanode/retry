import React from "react"

const Navbar = () => {
  return (
    <nav className=" flex justify-between items-center p-2 xs:p-4">
      <p className="text-red-500 text-2xl xs:text-4xl font-bold uppercase">Netflix</p>
      <div>
        <button className="text-white px-3 xs:px-6">Sign In</button>
        <button className="text-white border border-red-500 bg-red-500 px-2 xs:px-6 py-0.5 xs:py-2 rounded">Sign Up</button>
      </div>
    </nav>
  )
}

export default Navbar
