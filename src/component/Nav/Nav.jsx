import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../../Auth/CreateContext";

const Nav = () => {
  const { user, logOut, setUser, loading } = useContext(AuthContext);
  const navigate = useNavigate();
  const [theme, setTheme] = useState(localStorage.getItem('theme') || "light")

    useEffect(() => {
      const html = document.querySelector('html')
       html.setAttribute("data-theme", theme)
       localStorage.setItem("theme", theme)
    }, [theme])
      const handleTheme = (checked) => {
    setTheme(checked ? "dark": "light")
  }

  const handleLogout = async () => {
    try {
      await logOut();
      setUser(null); // Use null instead of empty string for strict typing habits
      navigate("/");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  // Function to close dropdown on mobile click
  const closeMenu = () => {
    const elem = document.activeElement;
    if (elem) {
      elem.blur();
    }
  };

  // Define links in an array for cleaner rendering
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "All Toys", path: "/toys" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Support", path: "/support" }
  ];

  return (
    <div className="navbar sticky top-0 z-50 w-full backdrop-blur-md bg-base-100/90 shadow-sm transition-all duration-300">
      <div className="w-11/12 flex max-w-7xl mx-auto">
        
        {/* --- Navbar Start: Mobile Menu & Logo --- */}
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden mr-2"
              aria-label="Open Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            {/* Mobile Dropdown Content */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg bg-base-100 rounded-box w-52"
            >
              {navLinks.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      isActive ? "text-primary font-bold bg-base-200" : ""
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
             {/* Optional: Add an icon here */}
             <span className="text-2xl font-extrabold tracking-tight text-primary">
              Toy<span className="text-base-content">Topia</span>
            </span>
          </Link>
        </div>

        {/* --- Navbar Center: Desktop Menu --- */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-1">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-lg transition-all duration-200 hover:bg-base-200 ${
                      isActive
                        ? "bg-primary/10 text-primary font-bold"
                        : "text-base-content font-medium"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          
          </ul>
        </div>
        

        {/* --- Navbar End: Auth Logic --- */}
        <div className="navbar-end gap-3">
          <input
           onChange={(e)=> handleTheme(e.target.checked)}
           type="checkbox"
           defaultChecked={localStorage.getItem('theme') === "dark"}
           className="toggle"/>
          {loading ? (
            <div className="flex items-center gap-2">
               <span className="loading loading-spinner loading-md text-primary"></span>
            </div>
          ) : user ? (
            // User is Logged In: Show Avatar with Dropdown
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar ring ring-primary ring-offset-base-100 ring-offset-2"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="User Avatar"
                    src={user?.photoURL || "https://i.ibb.co/T0x4D0H/user-placeholder.png"} 
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow-xl menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                {/* User Name Badge */}
                <li className="menu-title px-4 py-2 border-b border-base-200 mb-2">
                  <span className="text-base-content truncate block">
                    Hello, {user?.displayName?.split(" ")[0] || "User"}
                  </span>
                </li>
                
                {/* Profile Links */}
                <li>
                  <Link to="/profile" className="justify-between" onClick={closeMenu}>
                    Profile
                    <span className="badge badge-primary badge-sm">New</span>
                  </Link>
                </li>
                <li>
                   <Link to="/toyreturn" onClick={closeMenu}>My Returns</Link>
                </li>
                
                <div className="divider my-1"></div>
                
                {/* Logout */}
                <li>
                  <button 
                    onClick={() => {
                        handleLogout();
                        closeMenu();
                    }} 
                    className="text-error font-medium hover:bg-error/10"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            // User is Logged Out
            <div className="flex gap-2">
              <Link to="/login">
                <button className="btn btn-primary btn-sm md:btn-md shadow-md">
                   Login
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;