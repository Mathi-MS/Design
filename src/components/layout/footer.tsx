import { useState } from "react";
import { Link } from "wouter";
import { Facebook, Twitter, Linkedin } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

export default function Footer() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const subscribeToNewsletter = useMutation({
    mutationFn: (email: string) =>
      apiRequest("POST", "/api/newsletter", { email }),
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "Thank you for subscribing to our newsletter!",
      });
      setEmail("");
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to subscribe. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      subscribeToNewsletter.mutate(email);
    }
  };

  return (
    <footer className="bg-navy text-white py-16" data-testid="footer">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="text-2xl font-bold mb-6">DesignDynasty</div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your trusted IT solution partner delivering innovative web
              development, graphic design, and mobile app solutions.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-orange transition-colors"
                data-testid="link-twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-orange transition-colors"
                data-testid="link-facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-orange transition-colors"
                data-testid="link-linkedin"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services/web-development"
                  className="text-gray-300 hover:text-orange transition-colors"
                  data-testid="link-footer-web-development"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/graphic-design"
                  className="text-gray-300 hover:text-orange transition-colors"
                  data-testid="link-footer-graphic-design"
                >
                  Graphic Design
                </Link>
              </li>
              <li>
                <Link
                  href="/services/mobile-development"
                  className="text-gray-300 hover:text-orange transition-colors"
                  data-testid="link-footer-mobile-apps"
                >
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-orange transition-colors"
                  data-testid="link-footer-consultation"
                >
                  Consultation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-orange transition-colors"
                  data-testid="link-footer-about"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-gray-300 hover:text-orange transition-colors"
                  data-testid="link-footer-portfolio"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-300 hover:text-orange transition-colors"
                  data-testid="link-footer-blog"
                >
                  Blog
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-orange transition-colors"
                  data-testid="link-footer-careers"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-orange transition-colors"
                  data-testid="link-footer-support"
                >
                  Support
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-orange transition-colors"
                  data-testid="link-footer-contact"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-orange transition-colors"
                  data-testid="link-footer-privacy"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-orange transition-colors"
                  data-testid="link-footer-terms"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p
              className="text-gray-300 mb-4 md:mb-0"
              data-testid="text-copyright"
            >
              &copy; 2024 DesignDynasty. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <span className="text-gray-300">
                Stay informed with our newsletter
              </span>
              <form onSubmit={handleSubscribe} className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-4 py-2 bg-white/10 border border-gray-600 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange"
                  required
                  data-testid="input-newsletter-email"
                />
                <button
                  type="submit"
                  disabled={subscribeToNewsletter.isPending}
                  className="bg-orange hover:bg-orange/90 px-6 py-2 rounded-r-lg font-semibold transition-colors disabled:opacity-50"
                  data-testid="button-newsletter-subscribe"
                >
                  {subscribeToNewsletter.isPending ? "..." : "Subscribe"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
