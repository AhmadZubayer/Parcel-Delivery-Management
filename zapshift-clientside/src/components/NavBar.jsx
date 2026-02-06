import React from 'react';
import { NavLink, Link } from 'react-router';
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
        <div className="navbar-end gap-2">
          {user ? (
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button">
                <img className='rounded-full h-[55px] w-[55px]' src={user.photoURL} alt="" />
              </div>
              <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                <li>{user.email}</li>
                <li><NavLink>Your Account</NavLink></li>
                <li><button onClick={handleSignOut}>Sign Out</button></li>
              </ul>
            </div>
          ) : (
            <div className="flex flex-col md:flex-row gap-2">
              <NavLink to="/signin" className="btn btn-2">Sign In</NavLink>
              <NavLink to="/register" className="btn btn-1">Register</NavLink>
            </div>
          )}
        </div>
      </div>
    </div>


  );
};

export default NavBar;
