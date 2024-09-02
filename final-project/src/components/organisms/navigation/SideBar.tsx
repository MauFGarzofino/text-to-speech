import "./styles/nav.css";
import { useState } from "react";
import NavItemMolecule from "../../molecules/navigation/NavItem";
import ButtonAtom from "../../atoms/buttons/PrimaryButton";
import { useAuth } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { signOut } = useAuth();
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = async () => {
    await signOut();
    navigate("/login");
  };

  return (
    <>
      <button
        onClick={toggleSidebar}
        aria-controls="sidebar-multi-level-sidebar"
        type="button"
        className="nav-toggle-button inline-flex items-start p-2 mt-10 ms-3 text-sm text-gray-500 rounded-lg focus:outline-none"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="sidebar-multi-level-sidebar"
        className={`fixed top-0 left-0 z-40 w-60 h-screen transition-transform sidebar ${
          isSidebarOpen ? "open" : ""
        }`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-[#1d1c1cc5] flex flex-col justify-center">
          <ul className="space-y-1 font-medium mt-20 flex-grow">
            <li>
              <NavItemMolecule type="home" text="Home" />
            </li>
            <li>
              <NavItemMolecule type="search" text="Search" />
            </li>
            <li>
              <NavItemMolecule type="lyrics" text="Lyrics" />
            </li>
          </ul>
          <div className="mb-4 flex flex justify-center align-center">
            <ButtonAtom text="Logout" onClick={handleLogout} />
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
