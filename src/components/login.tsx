import { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);
  };

  return (
    <div className="min-h-screen gradient-bg flex items-center justify-center px-4">
      <div className="bg-white/90 backdrop-blur-md shadow-2xl rounded-2xl overflow-hidden flex flex-col md:flex-row w-full max-w-5xl">
        
        {/* Left Side (Image / Illustration) */}
        <div className="hidden md:flex md:w-1/2 bg-[var(--orange)] text-white items-center justify-center p-10">
          <div className="text-center space-y-6">
            <h2 className="text-4xl font-bold">Welcome Back!</h2>
            <p className="text-lg opacity-90">
              Enter your credentials and continue your journey with us 
            </p>

          </div>
        </div>

        {/* Right Side (Form) */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex items-center justify-center">
          <div className="w-full">
            {/* Title */}
            <h2 className="text-3xl font-bold text-center text-gray-800">
              Login
            </h2>
            <p className="text-sm text-gray-500 text-center mt-2">
              Welcome back! Please enter your details
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              {/* Email */}
              <div>
                <label className="block text-gray-600 text-sm mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--orange)] transition"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-gray-600 text-sm mb-2">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  required
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--orange)] transition"
                />
              </div>

              {/* Remember me & Forgot password */}
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center space-x-2 text-gray-600">
                  <input
                    type="checkbox"
                    name="remember"
                    checked={formData.remember}
                    onChange={handleChange}
                    className="h-4 w-4 text-[var(--orange)] rounded focus:ring-[var(--orange)]"
                  />
                  <span>Remember me</span>
                </label>
                <a
                  href="#"
                  className="text-[var(--orange)] font-medium hover:underline"
                >
                  Forgot password?
                </a>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-[var(--orange)] hover:bg-orange/90 text-white font-medium py-3 rounded-lg transition transform hover:scale-[1.02] active:scale-95"
              >
                Login
              </button>
            </form>

            {/* Footer */}
            <p className="text-center text-gray-600 text-sm mt-6">
              Don’t have an account?{" "}
              <a href="/signup" className="text-[var(--orange)] font-medium hover:underline">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
