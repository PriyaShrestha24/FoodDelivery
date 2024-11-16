import React from "react";
import { assets } from "../assets/assets"; // Ensure this path is correct for your assets
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="flex h-screen w-full">
      {/* Container for both sides */}
      <div className="flex w-full">
        {/* Left Side: Image */}
        <div
          className="hidden lg:block flex-1 h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${assets.login})` }}
        ></div>

        {/* Right Side: Form */}
        <div className="flex flex-1 items-center justify-center bg-white p-6 lg:p-12">
          <div className="w-full max-w-md">
            <h2 className="text-3xl font-bold mb-6">Signup</h2>
            <div className="flex items-center justify-between mb-4">
              {/* Buttons for Google and Facebook */}
              <a
                href="https://www.google.com"
                target="_blank" // Opens the link in a new tab
                rel="noopener noreferrer" // Security measure for external links
                className="bg-red-500 text-white px-4 py-2 rounded-lg w-1/2 mr-2 text-center"
              >
                Sign up with Google
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank" // Opens the link in a new tab
                rel="noopener noreferrer" // Security measure for external links
                className="bg-blue-600 text-white px-4 py-2 rounded-lg w-1/2 ml-2 text-center"
              >
                Sign up with Facebook
              </a>
            </div>
            <div className="text-center my-4 text-gray-500">
                <a
                    href="https://mail.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 text-blue-500 hover:underline"
                >
                    Or Use Your Email
                </a>
             </div>

            <form>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded"
                  placeholder="Enter your password"
                  required
                />
              </div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <input type="checkbox" id="remember" className="mr-2" />
                  <label htmlFor="remember" className="text-gray-700 text-sm">
                    I agree to the Terms of Service and Privacy Policy
                  </label>
                </div>
                <a href="#" className="text-sm text-blue-500 hover:underline">
                  Forgot Password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full bg-red-500 text-white p-2 rounded hover:bg-red-600"
              >
                Sign up
              </button>
            </form>
            <div className="text-center mt-4">
              Already Have An Account?{" "}
              <Link to="/" className="text-blue-500 hover:underline">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
