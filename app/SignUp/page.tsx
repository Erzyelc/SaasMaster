"use client";

import { useState } from "react";

export default function SignUp() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.password
    ) {
      setError("All fields are required");
      return;
    }

    if (!isValidEmail(formData.email)) {
      setError("Please enter a valid email address");
      return;
    }

    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters long");
      return;
    }

    console.log("Form submitted:", formData);
    setFormData({ firstName: "", lastName: "", email: "", password: "" });
  };

  const isValidEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="w-full max-w-md bg-white dark:bg-[#1b1b1b] shadow-md rounded-lg overflow-hidden">
        <div className="px-6 py-8">
          <h2 className="text-2xl font-bold text-center text-[#3b82f6] mb-2">
            Sign Up
          </h2>
          <p className="text-gray-400 text-center mb-6">
            Create your account to get started
          </p>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-400 mb-1"
                  >
                    First name
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    className="w-full px-3 py-2 border border-[#3b82f6] rounded-md shadow-sm focus:outline-none "
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-400 mb-1"
                  >
                    Last name
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    className="w-full px-3 py-2 border border-[#3b82f6] rounded-md shadow-sm focus:outline-none "
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-400 mb-1"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full px-3 py-2 border border-[#3b82f6] rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 "
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-400 mb-1"
                >
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="w-full px-3 py-2 border border-[#3b82f6] rounded-md shadow-sm focus:outline-none "
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
            </div>
            {error && (
              <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                {error}
              </div>
            )}
            <button
              type="submit"
              className="w-full mt-6 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#3b82f6] hover:bg-[#3b82f6]/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign Up
            </button>
          </form>
        </div>
        <div className="px-6 py-4  border-t border-[#3b82f6]">
          <p className="text-sm text-center text-gray-400">
            Already have an account?{" "}
            <a
              href="/signin"
              className="font-medium text-[#3b82f6] hover:text-[#3b82f6]/80"
            >
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
