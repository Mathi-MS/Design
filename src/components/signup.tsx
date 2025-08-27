import { useState } from "react";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign Up Data:", formData);
  };

  return (
    <div className="min-h-screen gradient-bg flex items-center justify-center px-4">
      <div className="bg-white/90 backdrop-blur-md shadow-2xl rounded-2xl overflow-hidden flex flex-col md:flex-row w-full max-w-5xl">

        {/* Left Side (Welcome text + Illustration) */}
        <div className="hidden md:flex md:w-1/2 bg-[var(--orange)] text-white flex-col items-center justify-center p-10 space-y-6">
          <h2 className="text-4xl font-bold">Join Us Today!</h2>
          <p className="text-lg opacity-90 text-center">
            Create an account to explore all features
          </p>
        </div>

        {/* Right Side (Form) */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-12 flex items-center justify-center">
          <div className="w-full max-w-md">
            {/* Title */}
            <h2 className="text-3xl font-bold text-center text-gray-800">
              Sign Up
            </h2>
            <p className="text-sm text-gray-500 text-center mt-2">
              Fill in your details to create an account
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-6 space-y-4 sm:space-y-5">
              {/* Username */}
              <div>
                <label className="block text-gray-600 text-sm mb-1 sm:mb-2">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="yourusername"
                  required
                  className="w-full px-4 py-3 sm:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--orange)] transition text-sm sm:text-base"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-600 text-sm mb-1 sm:mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                  className="w-full px-4 py-3 sm:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--orange)] transition text-sm sm:text-base"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-gray-600 text-sm mb-1 sm:mb-2">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  required
                  className="w-full px-4 py-3 sm:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--orange)] transition text-sm sm:text-base"
                />
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-gray-600 text-sm mb-1 sm:mb-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="••••••••"
                  required
                  className="w-full px-4 py-3 sm:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--orange)] transition text-sm sm:text-base"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-[var(--orange)] hover:bg-orange/90 text-white font-medium py-3 rounded-lg transition transform hover:scale-[1.02] active:scale-95"
              >
                Sign Up
              </button>
            </form>

            {/* Footer */}
            <p className="text-center text-gray-600 text-sm mt-6">
              Already have an account?{" "}
              <a href="/login" className="text-[var(--orange)] font-medium hover:underline">
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
