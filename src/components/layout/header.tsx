import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "../../images/logonew.png";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(
    null
  );
  const [location] = useLocation();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    {
      href: "/services/web-development",
      label: "Services",
      subItems: [
        { href: "/services/web-development", label: "Web Development" },
        // { href: "/services/digital-marketing", label: "Digital Marketing" },
        // { href: "/services/ecommerce-solutions", label: "E-commerce Solutions" },
        { href: "/services/graphic-design", label: "Graphic Design" },
        { href: "/services/mobile-development", label: "Mobile Development" },
      ],
    },
    // { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/" && location === "/") return true;
    if (path !== "/" && location.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="bg-navy text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-6 py-2">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={Image} alt="logo" className="w-[35px]"/>
          <Link href="/" className="flex items-center">
            <div className="text-2xl font-bold">DesignDynasty</div>
          </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) =>
              item.subItems ? (
                <div key={item.href} className="relative">
                  <button
                    className={`flex items-center gap-1 cursor-pointer hover:text-orange transition-colors font-medium ${
                      isActive(item.href) ? "text-orange" : ""
                    }`}
                    onClick={() =>
                      setOpenDropdown(
                        openDropdown === item.href ? null : item.href
                      )
                    }
                  >
                    {item.label}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        openDropdown === item.href ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Dropdown */}
                  <div
                    className={`absolute left-0 mt-2 w-56 rounded-lg shadow-lg py-2 bg-white text-navy z-50 ${
                      openDropdown === item.href ? "block" : "hidden"
                    }`}
                  >
                    {item.subItems.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className={`block px-4 py-2 hover:bg-gray-100 transition-colors ${
                          isActive(sub.href) ? "text-orange" : ""
                        }`}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`hover:text-orange transition-colors font-medium ${
                    isActive(item.href) ? "text-orange" : ""
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}

            {/* 🔹 Login Button (Desktop) */}
            <Link
              href="/login"
              className="ml-6 bg-orange px-8 py-1 pb-2 rounded-sm font-semibold text-white hover:bg-orange/90 transition-colors "
            >
              Login
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => {
              const next = !isMobileMenuOpen;
              setIsMobileMenuOpen(next);
              if (!next) setOpenMobileSubmenu(null);
            }}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden pb-4 border-t border-white/20 mt-4 pt-4">
            <div className="grid grid-cols-1 gap-2">
              {navItems.map((item) =>
                item.subItems ? (
                  <div key={item.href} className="rounded-lg">
                    <button
                      className={`w-full flex justify-between items-center py-3 px-4 rounded-lg hover:bg-white/10 transition-colors font-medium ${
                        isActive(item.href) ? "text-orange bg-white/10" : ""
                      }`}
                      onClick={() =>
                        setOpenMobileSubmenu(
                          openMobileSubmenu === item.href ? null : item.href
                        )
                      }
                    >
                      {item.label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          openMobileSubmenu === item.href ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {openMobileSubmenu === item.href && (
                      <div className="ml-4 mt-1 space-y-1">
                        {item.subItems.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className={`block py-2 px-4 rounded hover:bg-white/10 transition-colors ${
                              isActive(sub.href) ? "text-orange" : ""
                            }`}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block py-3 px-4 rounded-lg hover:bg-white/10 transition-colors font-medium ${
                      isActive(item.href) ? "text-orange bg-white/10" : ""
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              )}

              {/* 🔹 Login Button (Mobile) */}
              <Link
                href="/login"
                className="block text-center mt-4 bg-orange px-4 py-3 rounded-lg font-semibold text-white hover:bg-orange/90 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Login
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
