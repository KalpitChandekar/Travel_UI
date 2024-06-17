'use client'

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { NAV_LINKS } from "@/constants";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>

      <ul
        className={`hidden lg:flex h-full gap-12 ${
          menuOpen ? "flex" : "hidden"
        }`}
      >
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="hidden lg:flexCenter">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>

      <Image
        src="/menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
        onClick={handleMenuToggle}
      />

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="absolute top-16 right-0 mt-2 w-full bg-white flex flex-col items-center gap-6 py-4 lg:hidden">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="regular-16 text-gray-50 cursor-pointer transition-all hover:font-bold"
              onClick={handleMenuToggle} // Close menu on link click
            >
              {link.label}
            </Link>
          ))}
          <Button
            type="button"
            title="Login"
            icon="/user.svg"
            variant="btn_dark_green"
            onClick={handleMenuToggle} // Close menu on button click
          />
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
