import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white shadow px-6 py-4 flex justify-between items-center">
      <div className="text-2xl font-bold text-blue-900">
        FundRaising Platform
      </div>
      <ul className="flex space-x-6 text-blue-900 font-medium">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/campaigns">Campaigns</Link></li>
        <li><Link href="/donate">Donate</Link></li>
        <li><Link href="/login">Login</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
