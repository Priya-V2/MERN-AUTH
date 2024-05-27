import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <nav className="">
        <div className="flex justify-between items-center bg-slate-200 my-5 py-4">
          <Link to="/">
            <h1 className="font-bold text-3xl ml-8">Auth App</h1>
          </Link>
          <ul className="flex gap-7 mr-8">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
            <Link to="/sign-in">
              <li>Sign in</li>
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
}
