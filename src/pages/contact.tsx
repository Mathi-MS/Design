import { useEffect, useState } from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { useGSAPAnimation } from "@/hooks/use-gsap";
import {
  fadeUpAnimation,
  fadeLeftAnimation,
  fadeRightAnimation,
} from "@/lib/gsap-utils";
import { MapPin, Phone, Mail, Clock, FileUp } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    content: "123 Tech Street, Innovation District, CA 90210",
    link: "https://maps.google.com",
  },
  {
    icon: Phone,
    title: "Phone",
    content: "+1 (908) 205-1993",
    link: "tel:+15551234567",
  },
  {
    icon: Mail,
    title: "Email",
    content: "designdynasty84@gmail.com",
    link: "mailto:designdynasty84@gmail.com",
  },
  {
    icon: Clock,
    title: "Business Hours",
    content: "Mon - Fri: 9:00 AM - 6:00 PM EST",
    link: null,
  },
];

const serviceOptions = [
  "Web Development",
  "Mobile App Development",
  "Graphic Design",
  "Brand Identity",
  "E-commerce Solutions",
  "Consultation",
  "Other",
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    timeline: "",
    message: "",
    attachments: [],
  });

  const { toast } = useToast();
  const titleRef = useGSAPAnimation(fadeUpAnimation);
  const leftRef = useGSAPAnimation(fadeRightAnimation);
  const rightRef = useGSAPAnimation(fadeLeftAnimation);

  useEffect(() => {
    document.title = "Contact Us - DesignDynasty";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Get in touch with DesignDynasty for your web development, mobile app, and design needs. Free consultation and project quotes available."
      );
    }
  }, []);

  const submitContact = useMutation({
    mutationFn: (data: typeof formData) =>
      apiRequest("POST", "/api/contact", {
        name: data.name,
        email: data.email,
        service: data.service,
        message: `Phone: ${data.phone}\nCompany: ${data.company}\nBudget: ${data.budget}\nTimeline: ${data.timeline}\n\nMessage: ${data.message}`,
      }),
    onSuccess: () => {
      toast({
        title: "Success!",
        description:
          "Thank you for your message! We'll get back to you within 24 hours.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        budget: "",
        timeline: "",
        message: "",
        attachments: [],
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description:
          "Failed to send message. Please try again or contact us directly.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitContact.mutate(formData);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen bg-white" data-testid="page-contact">
      <Header />
      <main>
        {/* Hero Section */}
        <section
          className="gradient-bg text-white py-20"
          data-testid="contact-hero"
        >
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1
                ref={titleRef as any}
                className="text-4xl lg:text-6xl font-bold mb-6"
                data-testid="text-contact-title"
              >
                Get In Touch
              </h1>
              <p
                className="text-xl lg:text-2xl text-gray-300"
                data-testid="text-contact-subtitle"
              >
                Ready to start your project? Let's discuss your requirements and
                create something amazing together.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 bg-light-gray" data-testid="contact-info">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactInfo.map((info, index) => {
                const InfoIcon = info.icon;
                return (
                  <div
                    key={info.title}
                    className="text-center bg-white rounded-xl p-8 shadow-lg"
                    data-testid={`contact-info-${index}`}
                  >
                    <InfoIcon className="w-12 h-12 text-orange mx-auto mb-4" />
                    <h3
                      className="text-lg font-bold text-dark-gray mb-3"
                      data-testid={`contact-info-title-${index}`}
                    >
                      {info.title}
                    </h3>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-text-gray hover:text-orange transition-colors"
                        data-testid={`contact-info-link-${index}`}
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p
                        className="text-text-gray"
                        data-testid={`contact-info-content-${index}`}
                      >
                        {info.content}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20 bg-white" data-testid="contact-form-section">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div ref={leftRef as any}>
                <h2
                  className="text-3xl font-bold text-dark-gray mb-6"
                  data-testid="text-contact-form-title"
                >
                  Tell Us About Your Project
                </h2>
                <p
                  className="text-text-gray text-lg mb-8"
                  data-testid="text-contact-form-description"
                >
                  Fill out the form below with details about your project, and
                  we'll get back to you with a personalized proposal and
                  timeline.
                </p>

                <div className="space-y-6">
                  <div className="bg-light-gray rounded-lg p-6">
                    <h3 className="font-semibold text-dark-gray mb-3">
                      What happens next?
                    </h3>
                    <ul className="space-y-2 text-text-gray">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-orange rounded-full mr-3"></div>
                        We'll review your requirements within 24 hours
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-orange rounded-full mr-3"></div>
                        Schedule a free consultation call
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-orange rounded-full mr-3"></div>
                        Receive a detailed proposal and timeline
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-orange rounded-full mr-3"></div>
                        Start building your solution
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div ref={rightRef as any}>
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  data-testid="form-contact-extended"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-dark-gray mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-transparent transition-colors"
                        placeholder="Your full name"
                        required
                        data-testid="input-contact-name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-dark-gray mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-transparent transition-colors"
                        placeholder="your@email.com"
                        required
                        data-testid="input-contact-email"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-dark-gray mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-transparent transition-colors"
                        placeholder="+1 (908) 205-1993"
                        data-testid="input-contact-phone"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-dark-gray mb-2"
                      >
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-transparent transition-colors"
                        placeholder="Your company name"
                        data-testid="input-contact-company"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-dark-gray mb-2"
                    >
                      Service Needed *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-transparent transition-colors"
                      required
                      data-testid="select-contact-service"
                    >
                      <option value="">Select a service</option>
                      {serviceOptions.map((option) => (
                        <option
                          key={option}
                          value={option.toLowerCase().replace(/\s+/g, "-")}
                        >
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="budget"
                        className="block text-sm font-medium text-dark-gray mb-2"
                      >
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-transparent transition-colors"
                        data-testid="select-contact-budget"
                      >
                        <option value="">Select budget range</option>
                        <option value="under-1k">Under $1,000</option>
                        <option value="1k-5k">$1,000 - $5,000</option>
                        <option value="5k-10k">$5,000 - $10,000</option>
                        <option value="10k-25k">$10,000 - $25,000</option>
                        <option value="over-25k">Over $25,000</option>
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="timeline"
                        className="block text-sm font-medium text-dark-gray mb-2"
                      >
                        Timeline
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-transparent transition-colors"
                        data-testid="select-contact-timeline"
                      >
                        <option value="">Select timeline</option>
                        <option value="asap">ASAP</option>
                        <option value="1-month">Within 1 month</option>
                        <option value="3-months">Within 3 months</option>
                        <option value="6-months">Within 6 months</option>
                        <option value="flexible">Flexible</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-dark-gray mb-2"
                    >
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-transparent transition-colors"
                      placeholder="Please describe your project requirements, goals, and any specific features you need..."
                      required
                      data-testid="textarea-contact-message"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-dark-gray mb-2">
                      Attachments (Optional)
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-orange transition-colors">
                      <FileUp className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-text-gray text-sm">
                        Drop files here or click to upload
                      </p>
                      <p className="text-text-gray text-xs mt-1">
                        Supported formats: PDF, DOC, PNG, JPG (Max 10MB)
                      </p>
                      <input
                        type="file"
                        multiple
                        className="hidden"
                        accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
                        data-testid="input-contact-attachments"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={submitContact.isPending}
                    className="w-full bg-orange hover:bg-orange/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 disabled:opacity-50"
                    data-testid="button-send-contact-message"
                  >
                    {submitContact.isPending ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-light-gray" data-testid="contact-map">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2
                className="text-3xl font-bold text-dark-gray mb-4"
                data-testid="text-map-title"
              >
                Visit Our Office
              </h2>
              <p className="text-text-gray" data-testid="text-map-description">
                Located in the heart of the Innovation District
              </p>
            </div>
            <div
              className="bg-gray-300 rounded-xl h-96 flex items-center justify-center"
              data-testid="map-placeholder"
            >
              <div className="text-center">
                <MapPin className="w-12 h-12 text-gray-500 mx-auto mb-4" />
                <p className="text-gray-600">
                  Interactive map would be embedded here
                </p>
                <p className="text-sm text-gray-500">
                  123 Tech Street, Innovation District, CA 90210
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
