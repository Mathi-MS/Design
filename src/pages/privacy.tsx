// PrivacyPolicy.tsx

import Footer from "../components/layout/footer";
import Header from "../components/layout/header";

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
        <Header />
      {/* Hero Section */}
      <div className="gradient-bg text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
        <p className="max-w-2xl mx-auto text-lg opacity-90">
          Your privacy matters to us. Learn how we collect, use, and protect your
          personal information.
        </p>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto py-12 px-6 space-y-10">
        {/* Introduction */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">1. Introduction</h2>
          <p className="text-gray-700 leading-relaxed">
            Welcome to our company. This Privacy Policy outlines how we collect,
            use, and safeguard your information when you use our services
            including mobile development, web development, and graphic design
            solutions.
          </p>
        </section>

        {/* Information We Collect */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">2. Information We Collect</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Personal details such as name, email, and phone number.</li>
            <li>Information you provide when requesting services or support.</li>
            <li>Usage data such as browser type, IP address, and device info.</li>
          </ul>
        </section>

        {/* How We Use Information */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">3. How We Use Your Information</h2>
          <p className="text-gray-700 leading-relaxed">
            We use your data to provide, improve, and personalize our services.
            This includes:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mt-2">
            <li>Responding to inquiries and providing support.</li>
            <li>Enhancing our mobile, web, and graphic design services.</li>
            <li>Sending updates, promotions, or important service notices.</li>
          </ul>
        </section>

        {/* Data Protection */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">4. Data Protection</h2>
          <p className="text-gray-700 leading-relaxed">
            We implement strict security measures to safeguard your personal
            information. However, no online transmission is 100% secure, and we
            cannot guarantee absolute security.
          </p>
        </section>

        {/* Sharing Information */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">5. Sharing Information</h2>
          <p className="text-gray-700 leading-relaxed">
            We do not sell or rent your personal data. Information may only be
            shared with trusted partners when necessary to deliver our services,
            comply with the law, or protect our rights.
          </p>
        </section>

        {/* Cookies */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">6. Cookies</h2>
          <p className="text-gray-700 leading-relaxed">
            Our website may use cookies to improve user experience, track website
            performance, and provide relevant content. You can disable cookies in
            your browser settings.
          </p>
        </section>

        {/* Your Rights */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">7. Your Rights</h2>
          <p className="text-gray-700 leading-relaxed">
            You have the right to access, update, or request deletion of your
            personal data. Please contact us if you wish to exercise these rights.
          </p>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">8. Contact Us</h2>
          <p className="text-gray-700 leading-relaxed">
            If you have questions about this Privacy Policy, please reach out to us:
          </p>
          <div className="mt-4 bg-gray-100 p-6 rounded-lg shadow-md">
            <p className="font-medium">📧 Email: support@yourcompany.com</p>
            <p className="font-medium">📞 Phone: +1 (908) 205-1993</p>
            <p className="font-medium">🏢 Address: Chennai, Tamil Nadu, India</p>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
