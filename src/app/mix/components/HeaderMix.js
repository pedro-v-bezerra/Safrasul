"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from 'next/link';

export default function HeaderMix({ footerRef }) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const getActiveLink = () => {
    if (pathname === "/") return "home";
    if (pathname === "/about") return "about";
    if (pathname === "/products") return "products";
    if (pathname === "/mix") return "products";
    if (pathname === "/blog") return "blog";
    if (pathname === "/contact") return "contact";
    return "";
  };

  const [activeLink, setActiveLink] = useState(getActiveLink);

  useEffect(() => {
    setActiveLink(getActiveLink());
  }, [pathname]);

  const scrollToFooter = () => {
    if (footerRef && footerRef.current) {
      footerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative bg-[#FFF]">
      <header className="bg-[#EC732E] px-4 md:px-8 lg:px-16 xl:px-40 py-1">
        <nav
          aria-label="Global"
          className="w-full flex items-center justify-between"
        >
          <div className="flex flex-1">
            <a href="/" className="p-2">
              <span className="sr-only">Your Company</span>
              <img
                alt="Logo"
                src="/imgs/logo-branco.png"
                className="h-10 md:h-12 w-auto"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="inline-flex items-center justify-center p-2 text-white"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <PopoverGroup className="hidden lg:flex lg:gap-x-12 items-center">
            <Link href="/" className={`text-lg leading-6 text-white font-openSans font-medium ${activeLink === "home" ? "text-[#F8EB5E]" : ""
              }`}>
              Home
            </Link>
            <Link href="/about" className={`text-lg leading-6 text-white font-openSans font-medium ${activeLink === "about" ? "text-[#F8EB5E]" : ""
              }`}>
              Quem Somos
            </Link>
            <Link href="/products" className={`text-lg leading-6 text-white font-openSans font-medium ${activeLink === "products" ? "text-[#F8EB5F]" : ""
              }`}>
              Produtos
            </Link>
            <Link
              href="/contact"
              className={`text-lg leading-6 text-white font-openSans font-medium ${activeLink === "contact" ? "text-[#F8EB5E]" : ""
                }`}
              onClick={(e) => {
                e.preventDefault(); // Prevent default link behavior
                scrollToFooter();
              }}
            >
              Contato
            </Link>
          </PopoverGroup>
        </nav>
        <Dialog
          open={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-10" />
          <DialogPanel className="fixed inset-0 z-20 w-full max-w-sm bg-white px-6 py-6">
            <div className="flex items-center justify-between">
              <a href="#" className="p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt="Logo"
                  src="/imgs/logo.png"
                  className="h-8 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6">
              <div className="-my-6 divide-y divide-gray-200">
                <div className="py-6 space-y-2">
                  <Link
                    href="/"
                    className={`block py-2 text-base font-semibold ${activeLink === "home" ? "text-customGreen" : "text-gray-900"} hover:bg-gray-50`}
                  >
                    Home
                  </Link>
                  <Link
                    href="/about"
                    className={`block py-2 text-base font-semibold ${activeLink === "about" ? "text-customGreen" : "text-gray-900"} hover:bg-gray-50`}
                  >
                    Quem Somos
                  </Link>
                  <Link
                    href="/products"
                    className={`block py-2 text-base font-semibold ${activeLink === "products" ? "text-customGreen" : "text-gray-900"} hover:bg-gray-50`}
                  >
                    Produtos
                  </Link>
                  <Link
                    href="/blog"
                    className={`block py-2 text-base font-semibold ${activeLink === "blog" ? "text-customGreen" : "text-gray-900"} hover:bg-gray-50`}
                  >
                    Blog
                  </Link>
                  <a
                    href="#"
                    className={`block py-2 text-base font-semibold ${activeLink === "contact" ? "text-customGreen" : "text-gray-900"} hover:bg-gray-50`}
                    onClick={(e) => {
                      e.preventDefault(); // Prevent default link behavior
                      scrollToFooter();
                    }}
                  >
                    Contato
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </div>
  );
}
