import { useState } from "react"
import { logo, menu, close } from "../assets"
import { navLinks } from "../constants"

const NavBar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <nav className=" flex justify-between py-6 bg-dimWhit">
      <img src={logo} alt="logo" className="w-[135px] h-[34px]" />

      {/* for web version */}
      <ul className=" flex-1 list-none hidden md:flex justify-end items-center">
        {navLinks.map((navLink, index) => {
          return (
            <li key={navLink.id} className={`${index === navLinks.length - 1 ? "pr-0" : "pr-6"}`}>
              <a href={`#${navLink.id}`} className="font-poppins font-normal text-white text-[16px]">
                {navLink.title}
              </a>
            </li>
          )
        })}
      </ul>

      {/* for mobile version */}
      <div className=" md:hidden">
        <img src={toggle ? close : menu} alt="menu" className="w-[30px] h-[30px]" onClick={() => setToggle(prev => !prev)} />

        <div className={`${toggle ? "block" : "hidden"}  absolute top-20 right-20 rounded-xl px-8 py-4 bg-black-gradient text-white sideleft`}>
          <ul className="flex flex-col items-center ">
            {navLinks.map(navLink => {
              return (
                <li key={navLink.id} className="py-1">
                  <a href={`#${navLink.id}`}>{navLink.title}</a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
