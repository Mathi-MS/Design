import { Link } from "wouter";
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy text-white pt-16 pb-8" data-testid="footer">
      <div className="container mx-auto px-6">
        {/* Grid Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold mb-6">DesignDynasty</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              We craft high-performing websites, engaging mobile apps, and
              impactful designs that help businesses stand out and scale.
            </p>
            {/* <div className="flex space-x-3">
              <a
                href="#"
                aria-label="Twitter"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-orange transition"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-orange transition"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-orange transition"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div> */}
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services/web-development"
                  className="text-gray-300 hover:text-orange transition"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/graphic-design"
                  className="text-gray-300 hover:text-orange transition"
                >
                  Graphic Design
                </Link>
              </li>
              <li>
                <Link
                  href="/services/mobile-development"
                  className="text-gray-300 hover:text-orange transition"
                >
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-orange transition"
                >
                  Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-orange transition"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-300 hover:text-orange transition"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-orange transition"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-gray-300 hover:text-orange transition"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-orange mt-1" />
                <span>8197,Peggy ct, Zionsville, Indiana-46077</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-orange mt-1" />
                <span>+1 (908) 205-1993</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-orange mt-1" />
                <span>designdynasty84@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 pt-8 text-center md:text-left">
          <p className="text-gray-300">
            &copy; {new Date().getFullYear()} DesignDynasty. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
