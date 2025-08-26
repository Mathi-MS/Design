import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    {
      href: "/services/web-development",
      label: "Services",
      subItems: [
        { href: "/services/web-development", label: "Web Development" },
        { href: "/services/digital-marketing", label: "Digital Marketing" },
        {
          href: "/services/ecommerce-solutions",
          label: "E-commerce Solutions",
        },
        { href: "/services/graphic-design", label: "Graphic Design" },
        { href: "/services/mobile-development", label: "Mobile Development" },
      ],
    },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/pricing", label: "Pricing" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/" && location === "/") return true;
    if (path !== "/" && location.startsWith(path)) return true;
    return false;
  };

  return (
    <header
      className="bg-navy text-white sticky top-0 z-50 shadow-lg"
      data-testid="header"
    >
      <div className="container mx-auto px-6 py-2">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center" data-testid="link-home">
            <div className="text-2xl font-bold">DesignDynasty</div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8" data-testid="nav-desktop">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`hover:text-orange transition-colors font-medium ${
                  isActive(item.href) ? "text-orange" : ""
                }`}
                data-testid={`link-${item.label.toLowerCase()}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
            aria-label="Toggle mobile menu"
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
          <nav
            className="lg:hidden pb-4 border-t border-white/20 mt-4 pt-4"
            data-testid="nav-mobile"
          >
            <div className="grid grid-cols-1 gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block py-3 px-4 rounded-lg hover:bg-white/10 transition-colors font-medium ${
                    isActive(item.href) ? "text-orange bg-white/10" : ""
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  data-testid={`link-mobile-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
