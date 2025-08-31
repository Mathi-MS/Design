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
    content: "8197, Peggy CT, Zionsville -46077",
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
  mutationFn: async (data: typeof formData) => {
    const formDataToSend = new FormData();

    formDataToSend.append("Full Name", data.name);
    formDataToSend.append("Email Address", data.email);
    formDataToSend.append("Phone Number", data.phone);
    formDataToSend.append("Company", data.company);
    formDataToSend.append("Service Needed", data.service);
    formDataToSend.append("Project Details", data.message);

    // Attachments (only if valid)
    data.attachments.forEach((file) => {
      if (file.size <= 2 * 1024 * 1024) {
        formDataToSend.append("Attachments", file);
      }
    });
for (const [key, value] of formDataToSend.entries()) {
  console.log(key, value);
}
    
    return apiRequest("POST", "/api/contact", formDataToSend, {
    });
  },
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
    <>
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
                    <div
  className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-orange transition-colors cursor-pointer"
  onClick={() => document.getElementById("attachments")?.click()}
>
  <FileUp className="w-8 h-8 text-gray-400 mx-auto mb-2" />
  <p className="text-text-gray text-sm">
    Drop files here or click to upload
  </p>
  <p className="text-text-gray text-xs mt-1">
    Supported formats: PDF, DOC, PNG, JPG (Max 10MB)
  </p>

  <input
    id="attachments"
    type="file"
    multiple
    className="hidden"
    accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
    onChange={(e) => {
  const files = Array.from(e.target.files || []);
  const validFiles = files.filter((file) => {
    if (file.size > 2 * 1024 * 1024) {
      toast({
        title: "File too large",
        description: `${file.name} exceeds 2MB limit.`,
        variant: "destructive",
      });
      return false;
    }
    return true;
  });

  setFormData((prev) => ({
    ...prev,
    attachments: validFiles,
  }));
}}

    data-testid="input-contact-attachments"
  />

  {/* Show selected files */}
  {formData.attachments.length > 0 && (
    <div className="mt-4 text-left">
      <p className="text-sm font-medium text-dark-gray mb-2">
        Selected files:
      </p>
      <ul className="list-disc list-inside text-sm text-text-gray">
        {formData.attachments.map((file, index) => (
          <li key={index}>{file.name}</li>
        ))}
      </ul>
    </div>
  )}
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
               Our Location
              </h2>
            </div>
            <div
              className="bg-gray-300 rounded-xl h-96 flex items-center justify-center"
              data-testid="map-placeholder"
            >
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3057.1741630093647!2d-86.31634472529237!3d39.98221308197296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88135440e6c375bb%3A0x64c8c024606d6f1d!2s8197%20Peggy%20Ct%2C%20Zionsville%2C%20IN%2046077%2C%20USA!5e0!3m2!1sen!2sin!4v1756655175444!5m2!1sen!2sin" width="100%" height="100%"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </section>
      </main>
{/* <div className="elfsight-app-b82afd7c-a99e-4388-b77f-9c7ce9f9e2b4" data-elfsight-app-lazy></div> */}
      <Footer />
    </div>

    </>
    
  );
}
