import React from 'react';
import { NavLink } from 'react-router';
import Logo from './Logo';
import useAuth from '../hooks/useAuth';
import '../App.css';

const NavBar = () => {
  const { user, loading, logOut } = useAuth();

  if (loading) {
    return null; // or a spinner if you want
  }

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.error(error);
    }
  };

  const links = (
    <>
      <li><NavLink to="/services">Services</NavLink></li>
      <li><NavLink to="/send-parcel">Send a Parcel</NavLink></li>
      <li><NavLink to="/coverage">Coverage</NavLink></li>
      <li><NavLink to="/about">About Us</NavLink></li>
      <li><NavLink to="/pricing">Pricing</NavLink></li>
      <li><NavLink to="/rider">Become a Rider</NavLink></li>
    </>
  );

  return (
    <div className="mb-5">
      <div className="navbar bg-base-100 shadow-sm">

        {/* LEFT */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>

          <Logo />
        </div>

        {/* CENTER */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        {/* RIGHT */}
        <div className="navbar-end gap-2">
          {user ? (
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
               
                  {user.photoURL ? (
                    <img
                      src={user.photoURL}
                      alt="Profile"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-semibold">
                      {(user.displayName || user.email)
                        ?.charAt(0)
                        .toUpperCase()}
                    </div>
                  )}
                
              </div>

              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li className="menu-title">
                  <span className="text-base font-semibold">
                    {user.displayName || user.email}
                  </span>
                </li>
                <li>
                  <button onClick={handleSignOut} className="text-error">
                    Sign Out
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <>
              <NavLink to="/signin" className="btn btn-2">Sign In</NavLink>
              <NavLink to="/register" className="btn btn-1">Register</NavLink>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
