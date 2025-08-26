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
        title: "Success!",
        description:
          "Thank you for your message! We will get back to you soon.",
      });
      setFormData({ name: "", email: "", service: "", message: "" });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
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
    <section className="py-20 bg-white" data-testid="contact-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className="text-3xl lg:text-4xl font-bold text-dark-gray mb-6"
            data-testid="text-contact-title"
          >
            Customizable coverage options for businesses of all types and sizes
          </h2>
          <p
            className="text-xl text-text-gray max-w-3xl mx-auto"
            data-testid="text-contact-subtitle"
          >
            Let's start building your custom IT solution today. Our team is
            ready to turn your vision into reality.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div ref={leftRef as any}>
            <h3
              className="text-2xl font-bold text-dark-gray mb-6"
              data-testid="text-get-in-touch"
            >
              Get in Touch
            </h3>
            <div className="space-y-6 mb-8">
              <div
                className="flex items-center"
                data-testid="contact-info-address"
              >
                <div className="w-12 h-12 bg-orange/10 rounded-lg flex items-center justify-center mr-4">
                  <MapPin className="w-6 h-6 text-orange" />
                </div>
                <div>
                  <h4 className="font-semibold text-dark-gray">Address</h4>
                  <p className="text-text-gray">
                    123 Tech Street, Innovation District, CA 90210
                  </p>
                </div>
              </div>
              <div
                className="flex items-center"
                data-testid="contact-info-phone"
              >
                <div className="w-12 h-12 bg-orange/10 rounded-lg flex items-center justify-center mr-4">
                  <Phone className="w-6 h-6 text-orange" />
                </div>
                <div>
                  <h4 className="font-semibold text-dark-gray">Phone</h4>
                  <p className="text-text-gray">+1 (555) 123-4567</p>
                </div>
              </div>
              <div
                className="flex items-center"
                data-testid="contact-info-email"
              >
                <div className="w-12 h-12 bg-orange/10 rounded-lg flex items-center justify-center mr-4">
                  <Mail className="w-6 h-6 text-orange" />
                </div>
                <div>
                  <h4 className="font-semibold text-dark-gray">Email</h4>
                  <p className="text-text-gray">contact@DesignDynasty.com</p>
                </div>
              </div>
            </div>
          </div>

          <div ref={rightRef as any}>
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-transparent transition-colors"
                  placeholder="Your full name"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-transparent transition-colors"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-transparent transition-colors"
                  required
                  data-testid="select-service"
                >
                  <option value="">Select a service</option>
                  <option value="web-development">Web Development</option>
                  <option value="graphic-design">Graphic Design</option>
                  <option value="mobile-development">
                    Mobile App Development
                  </option>
                  <option value="consultation">Consultation</option>
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-transparent transition-colors"
                  placeholder="Tell us about your project..."
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
