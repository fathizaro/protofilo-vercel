import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a  className="ml-3 text-x2 sm:text-3xl ">
            Fathi Zaru
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
         
          <a href="#skills" className="mr-5 hover:text-white">
            Skills
          </a>
          <a href="#about" className="mr-5 hover:text-white">
            About
          </a>
          <a href="#contact" className="mr-5 hover:text-white">
            My Contacts
          </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
          Hire Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        
        </a>

        {/* Facebook */}

      <a href="https://www.facebook.com/fathi.zaro" className = "p-2 focus:pointer-events-auto" >
      <svg
  class="w-6 h-6 text-blue-600 fill-current"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24">
  <path
    d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
  />
</svg>
      </a>

      {/* Linkedin */}

      <a className = "p-2 "  href="https://www.linkedin.com/in/fathi-zaru-6b630b1a3/">
      <svg
  class="w-6 h-6 text-blue-500 fill-current  "
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 448 512" 
  >
  <path
    d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
  ></path>
</svg>
      </a>
        {/* GitHub */}
<a className = "w-10 h-6 pb-4 mb-4"  href="https://github.com/fathizaro">
<img src="https://img.icons8.com/windows/2x/github.png"/>
</a>


      </div>
    </header>
  );
}
