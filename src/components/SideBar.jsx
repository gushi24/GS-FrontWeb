import { createContext, useContext, useState } from "react";
import { IoMdMore } from "react-icons/io";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Logo from '../assets/logo.svg'

const SideBarContext = createContext()
export default function SideBar({ children }) {
  const [expanded, setExpanded] = useState(true)
  return (
    <>
      <aside className="h-screen">
        <nav className={`h-full flex flex-col bg-white border-r shadow-sm 
          ${expanded ? "max-w-52" : "max-w-16"} `}>
          <div className="p-4 pb-2 flex justify-between items-center">
            <img src={Logo}
            className={`overflow-hidden transition-all ${
              expanded ? "w-32" : "w-0"
              }`}/>
            <button onClick={() => setExpanded((curr) => !curr)} 
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100 transition ease-in-out delay-300 ">
              {expanded ? <MdKeyboardDoubleArrowLeft/> : <MdKeyboardDoubleArrowRight/>}
            </button>
          </div>
 
          <SideBarContext.Provider value={{ expanded }}>
            <ul className="flex-1 px-3">{children}</ul>
          </SideBarContext.Provider>

          <div className="border-t flex p-3">
            <img src='https://ui-avatars.com/api/?background=a0a0a0' 
            className="w-10 h-10 rounded-md"/>
            <div className={`flex justify-between items-center overflow-hidden transition-all ${expanded ? "w-52 ml3" : "w-0"} `}>
              <div className="leading-4 ml-2">
                <h4  className="font-semibold">John Doe</h4>
                <span className="text-xs text-gray-600">johndoe@gmail.com</span>
              </div>
              <IoMdMore size={20}></IoMdMore>
            </div>
          </div>

        </nav>

      </aside>
    </>
  )
}

export function SideBarItem({icon, text, active}) {
  const {expanded} = useContext(SideBarContext)
  return(
    <li className={`relative flex items-center py-2 px-2 my-1 font-medium rounded-md cursor-pointer
      transition-color group
      ${
        active
          ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
          : "hover:bg-indigo-50 text-gray-600"
      }
    `}>
      <div className="w-5">
        {icon}
      </div>
      <span className={`overflow-hidden transition-all ${
        expanded ? "w-52 ml-3" : "w-0"}`}>{text}</span>
        
      {!expanded && <div className={`
        absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm 
        invisible opacity-20 -translate-x-3 transition-all 
        group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
        `}>{text}</div>}
    </li>
  )
}