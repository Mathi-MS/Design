import { useState } from "react";
import { useGSAPAnimation } from "@/hooks/use-gsap";
import { fadeLeftAnimation, fadeRightAnimation } from "@/lib/gsap-utils";
import { MapPin, Phone, Mail } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const { toast } = useToast();
  const leftRef = useGSAPAnimation(fadeRightAnimation);
  const rightRef = useGSAPAnimation(fadeLeftAnimation);

  const submitContact = useMutation({
    mutationFn: (data: typeof formData) =>
      apiRequest("POST", "/api/contact", data),
    onSuccess: () => {
      toast({
        title: "Message Sent ✅",
        description:
          "Thank you for reaching out! Our team will connect with you within 24 hours.",
      });
      setFormData({ name: "", email: "", service: "", message: "" });
    },
    onError: () => {
      toast({
        title: "Submission Failed ❌",
        description: "Please try again or email us directly.",
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
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white" data-testid="contact-section">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className="text-3xl lg:text-5xl font-bold text-dark-gray mb-6 leading-snug"
            data-testid="text-contact-title" data-aos="fade-up"
          >
            Let’s Build Something <span className="text-orange">Great</span> Together
          </h2>
          <p
            className="text-lg lg:text-xl text-text-gray max-w-2xl mx-auto leading-relaxed"
            data-testid="text-contact-subtitle" data-aos="fade-up"
          >
            Have a project in mind? Share your vision with us and our experts
            will craft tailored solutions that drive results.
          </p>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div ref={leftRef as any} className="space-y-10">
            <h3
              className="text-2xl font-semibold text-dark-gray"
              data-testid="text-get-in-touch"
            >
              Our Contact Information
            </h3>
            <p className="text-text-gray">
              Reach out directly or fill out the form and we’ll get back to you promptly.
            </p>

            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-14 h-14 bg-orange/10 rounded-lg flex items-center justify-center mr-4">
                  <MapPin className="w-6 h-6 text-orange" />
                </div>
                <div>
                  <h4 className="font-semibold text-dark-gray">Address</h4>
                  <p className="text-text-gray">
                    8197, Peggy CT, Zionsville -46077
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-14 h-14 bg-orange/10 rounded-lg flex items-center justify-center mr-4">
                  <Phone className="w-6 h-6 text-orange" />
                </div>
                <div>
                  <h4 className="font-semibold text-dark-gray">Call Us</h4>
                  <p className="text-text-gray">+1 (908) 205-1993</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-14 h-14 bg-orange/10 rounded-lg flex items-center justify-center mr-4">
                  <Mail className="w-6 h-6 text-orange" />
                </div>
                <div>
                  <h4 className="font-semibold text-dark-gray">Email Us</h4>
                  <p className="text-text-gray text-[15px]">designdynasty84@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div ref={rightRef as any}>
            <form
              onSubmit={handleSubmit}
              className="space-y-6 p-8 px-0 w-[100%]"
              data-testid="form-contact"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-dark-gray mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-[100%] px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-transparent transition-all"
                  placeholder="John Doe"
                  required
                  data-testid="input-name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-dark-gray mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-transparent transition-all"
                  placeholder="your@email.com"
                  required
                  data-testid="input-email"
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-medium text-dark-gray mb-2"
                >
                  Service Needed
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-transparent transition-all"
                  required
                  data-testid="select-service"
                >
                  <option value="">Select a service</option>
                  <option value="web-development">Web Development</option>
                  <option value="graphic-design">Graphic Design</option>
                  <option value="mobile-development">Mobile App Development</option>
                  <option value="consultation">IT Consultation</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-dark-gray mb-2"
                >
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-transparent transition-all"
                  placeholder="Tell us about your project goals, requirements, and timeline..."
                  required
                  data-testid="textarea-message"
                />
              </div>

              <button
                type="submit"
                disabled={submitContact.isPending}
                className="w-full bg-orange hover:bg-orange/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 disabled:opacity-50"
                data-testid="button-send-message"
              >
                {submitContact.isPending ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
  