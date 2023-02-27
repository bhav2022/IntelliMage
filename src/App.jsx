import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import React from "react";

import { logo } from "./assets";
import { logo2 } from "./assets";
import { Home, CreatePost, About } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
        <Link to={"/"}>
          <img src={logo} alt="Logo" className="object-contain w-36" />
        </Link>
        <div>
          <Link
            to={"/create-post"}
            className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md mr-3">
            Create
          </Link>
          <Link
            to={"/"}
            className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md">
            Community Showcase
          </Link>
        </div>
      </header>
      <main className="sm:p-8 px-4 py-8 w-full bg-[#f9f8fe] min-h-[calc(100vh-73px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      <footer className="p-4 bg-[#f9f8fe] rounded-lg md:px-6 md:py-8 m-7 shadow-xl">
        <div className="sm:flex sm:items-center sm:justify-between">
          <img src={logo} className="h-8 mr-3 w-36" alt="Logo" />
          <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0">
            <li>
              <a href="/about" className="mr-4 hover:underline md:mr-6 ">
                About
              </a>
            </li>
            <li>
              <a href="/policy" className="mr-4 hover:underline md:mr-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center">
          This web application is made with
          <span className="flex justify-center align-middle mt-2">
            <a href="https://openai.com/" target="_blank">
              <img src={logo2} alt="OpenAI Logo" className="w-24" />
            </a>
          </span>
        </span>
      </footer>
    </BrowserRouter>
  );
};

export default App;
