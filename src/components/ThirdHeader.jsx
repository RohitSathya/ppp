import React, { useState, useEffect } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaGoogle,
  FaUser,
} from "react-icons/fa";
import { MdKeyboardArrowDown, MdClose } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signInWithGoogle } from "./firebase";
import link from "../link";

const ThirdHeader = () => {
  const [showModal, setShowModal] = useState(false);
  const [isLoginView, setIsLoginView] = useState(true);
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const toggleModal = () => setShowModal(!showModal);

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithGoogle();
      if (!result.success) {
        toast.error("Google login failed.");
        return;
      }

      const response = await fetch(`${link}/api/auth/google-login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.user),
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setUser(data.user);
        localStorage.setItem("user", JSON.stringify(data.user));
        toast.success(`Welcome, ${data.user.username}!`);
        setShowModal(false);
      } else {
        toast.error(data.message || "Failed to save user data.");
      }
    } catch (error) {
      console.error("Error during Google login:", error);
      toast.error("An unexpected error occurred.");
    }
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    const response = await fetch(`${link}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    if (data.success) {
      setUser(data.user);
      localStorage.setItem("user", JSON.stringify(data.user));
      toast.success(`Welcome back, ${data.user.username}!`);
      setShowModal(false);
    } else {
      toast.error(data.message || "Login failed.");
    }
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    const response = await fetch(`${link}/api/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, password }),
    });

    const data = await response.json();
    if (data.success) {
      const newUser = { username, email };
      setUser(newUser);
      localStorage.setItem("user", JSON.stringify(newUser));
      toast.success(`Welcome, ${username}!`);
      setShowModal(false);
    } else {
      toast.error(data.message || "Registration failed.");
    }
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
    toast.info("You have been logged out.");
  };

  return (
    <div className="bg-black text-white w-full flex justify-between items-center px-6 py-2 text-sm shadow-md relative z-50">
      <ToastContainer />

      <div className="flex items-center space-x-4">
        <a href="#" className="text-gray-300 hover:text-white transition">
          <FaFacebookF />
        </a>
        <a href="#" className="text-gray-300 hover:text-white transition">
          <FaTwitter />
        </a>
        <a href="#" className="text-gray-300 hover:text-white transition">
          <FaGoogle />
        </a>
      </div>

      <div className="flex items-center space-x-6">
        {user ? (
          <div className="flex items-center space-x-4">
            <span className="text-orange-500 font-semibold">
              Welcome, {user.username}!
            </span>
            <button
              onClick={handleLogout}
              className="text-gray-300 hover:text-white transition"
            >
              Logout
            </button>
          </div>
        ) : (
          <button
            onClick={toggleModal}
            className="flex items-center text-gray-300 hover:text-white transition"
          >
            <FaUser className="text-orange-500 mr-2" />
            <span>Login or Register</span>
          </button>
        )}
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-md rounded-lg shadow-lg relative">
            <button
              onClick={toggleModal}
              className="absolute top-2 right-2 text-gray-400 hover:text-black transition"
            >
              <MdClose size={24} />
            </button>

            <div className="flex justify-center space-x-4 border-b p-4">
              <button
                onClick={() => setIsLoginView(true)}
                className={`text-lg font-semibold ${
                  isLoginView
                    ? "text-orange-500 border-b-2 border-orange-500"
                    : "text-gray-500"
                }`}
              >
                Log in
              </button>
              <button
                onClick={() => setIsLoginView(false)}
                className={`text-lg font-semibold ${
                  !isLoginView
                    ? "text-orange-500 border-b-2 border-orange-500"
                    : "text-gray-500"
                }`}
              >
                Register
              </button>
            </div>

            <div className="p-6">
              <button
                onClick={handleGoogleLogin}
                className="w-full bg-blue-500 text-white py-2 rounded-lg mb-4"
              >
                Continue with Google
              </button>
              {isLoginView ? (
                <form className="space-y-4" onSubmit={handleLogin}>
                  <input
                    name="email"
                    placeholder="Email"
                    className="w-full border px-4 py-2 rounded-lg text-black focus:ring focus:ring-orange-500 focus:outline-none"
                  />
                  <input
                    name="password"
                    placeholder="Password"
                    type="password"
                    className="w-full border px-4 py-2 rounded-lg text-black focus:ring focus:ring-orange-500 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition"
                  >
                    Login
                  </button>
                </form>
              ) : (
                <form className="space-y-4" onSubmit={handleRegister}>
                  <input
                    name="username"
                    placeholder="Username"
                    className="w-full border px-4 py-2 rounded-lg text-black focus:ring focus:ring-orange-500 focus:outline-none"
                  />
                  <input
                    name="email"
                    placeholder="Email"
                    className="w-full border px-4 py-2 rounded-lg text-black focus:ring focus:ring-orange-500 focus:outline-none"
                  />
                  <input
                    name="password"
                    placeholder="Password"
                    type="password"
                    className="w-full border px-4 py-2 rounded-lg text-black focus:ring focus:ring-orange-500 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition"
                  >
                    Register
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ThirdHeader;
