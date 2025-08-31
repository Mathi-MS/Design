import { useEffect } from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { useGSAPAnimation, useCounterAnimation } from "@/hooks/use-gsap";
import { fadeUpAnimation } from "@/lib/gsap-utils";
import {
  Target,
  Users,
  Lightbulb,
  CheckCircle,
  Award,
  Globe,
  Shield,
  Zap,
} from "lucide-react";

const teamMembers = [
  {
    name: "John Smith",
    role: "CEO & Founder",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    description: "Visionary leader with 15+ years in tech industry",
    expertise: [
      "Strategic Planning",
      "Business Development",
      "Digital Transformation",
    ],
  },
  {
    name: "Sarah Johnson",
    role: "Lead Developer",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b3bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    description: "Full-stack developer specializing in modern web technologies",
    expertise: ["React/Node.js", "Cloud Architecture", "DevOps"],
  },
  {
    name: "Mike Chen",
    role: "Creative Director",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    description: "Award-winning designer with expertise in brand identity",
    expertise: ["UI/UX Design", "Brand Strategy", "Digital Marketing"],
  },
  {
    name: "Lisa Wang",
    role: "Project Manager",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    description: "Agile project management expert ensuring timely delivery",
    expertise: ["Agile/Scrum", "Team Leadership", "Quality Assurance"],
  },
  {
    name: "David Rodriguez",
    role: "Marketing Director",
    image:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    description: "Digital marketing strategist with proven ROI track record",
    expertise: ["SEO/SEM", "Social Media", "Analytics"],
  },
  {
    name: "Emma Thompson",
    role: "E-commerce Specialist",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    description:
      "E-commerce platform expert specializing in conversion optimization",
    expertise: [
      "Shopify/Magento",
      "Conversion Optimization",
      "Payment Systems",
    ],
  },
];

const values = [
  {
    icon: Target,
    title: "Excellence",
    description:
      "We strive for perfection in every project, delivering solutions that exceed expectations and drive real business results.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "We work closely with our clients as partners, ensuring transparent communication and shared success throughout every project.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We stay ahead of technology trends and continuously explore new solutions to solve complex business challenges.",
  },
  {
    icon: Shield,
    title: "Reliability",
    description:
      "Our clients trust us to deliver on time, within budget, and with the highest standards of quality and security.",
  },
];

const achievements = [
  {
    icon: Award,
    title: "Industry Recognition",
    description:
      "Winner of multiple web development and digital marketing awards",
    details: [
      "Best Web Development Agency 2023",
      "Top Digital Marketing Firm",
      "Excellence in E-commerce Solutions",
    ],
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Serving clients across 25+ countries worldwide",
    details: ["North America", "Europe", "Asia-Pacific", "Latin America"],
  },
  {
    icon: Zap,
    title: "Technology Leadership",
    description: "Certified partners with leading technology providers",
    details: [
      "AWS Partner",
      "Google Partner",
      "Shopify Expert",
      "Meta Business Partner",
    ],
  },
];

export default function About() {
  useEffect(() => {
    document.title = "About Us - DesignDynasty";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Learn about DesignDynasty's mission, team, and commitment to delivering exceptional IT solutions for businesses worldwide."
      );
    }
  }, []);

  const titleRef = useGSAPAnimation(fadeUpAnimation);
  const projectsCounterRef = useCounterAnimation(500);
  const clientsCounterRef = useCounterAnimation(200);
  const experienceCounterRef = useCounterAnimation(8);

  return (
    <div className="min-h-screen bg-white" data-testid="page-about">
      <Header />
      <main>
        {/* Hero Section */}
        <section
          className="gradient-bg text-white py-16 md:py-20 lg:py-24"
          data-testid="about-hero"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1
                ref={titleRef as any}
                className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight"
                data-testid="text-about-hero-title"
              >
                About DesignDynasty
              </h1>
              <p
                className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto"
                data-testid="text-about-hero-subtitle"
              >
                Empowering businesses with innovative technology solutions since
                2024. We're more than a service provider - we're your technology
                partners.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section
          className="py-16 md:py-20 bg-light-gray"
          data-testid="mission-section"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12 md:mb-16">
                <h2
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold text-dark-gray mb-6 md:mb-8"
                  data-testid="text-mission-title" data-aos="fade-up"
                >
                  Our Mission & Vision
                </h2>
                <p
                  className="text-lg md:text-xl text-text-gray leading-relaxed max-w-4xl mx-auto"
                  data-testid="text-mission-description" data-aos="fade-up"
                >
                  To deliver cutting-edge IT solutions that transform businesses
                  and drive growth. We believe in the power of technology to
                  solve complex challenges and create opportunities for our
                  clients to thrive in the digital age.
                </p>
              </div>

              <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-16">
                {/* <div
                  className="text-center bg-white p-6 rounded-xl shadow-lg"
                  data-testid="stat-projects-about"
                >
                  <div
                    ref={projectsCounterRef as any}
                    className="stat-number"
                    data-testid="counter-projects-about"
                  >
                    500+
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-dark-gray mb-2">
                    Projects Completed
                  </h3>
                  <p className="text-sm md:text-base text-text-gray">
                    Successfully delivered across all industries
                  </p>
                </div> */}
                {/* <div
                  className="text-center bg-white p-6 rounded-xl shadow-lg"
                  data-testid="stat-clients-about"
                >
                  <div
                    ref={clientsCounterRef as any}
                    className="stat-number"
                    data-testid="counter-clients-about"
                  >
                    200+
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-dark-gray mb-2">
                    Happy Clients
                  </h3>
                  <p className="text-sm md:text-base text-text-gray">
                    Trusted by businesses worldwide
                  </p>
                </div> */}
                <div
                  className="text-center bg-white p-6 rounded-xl shadow-lg"
                  data-testid="stat-experience-about" data-aos="fade-left"
                >
                  <div
                    ref={experienceCounterRef as any}
                    className="stat-number"
                    data-testid="counter-experience-about"
                  >
                    1+
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-dark-gray mb-2">
                    Years of Excellence
                  </h3>
                  <p className="text-sm md:text-base text-text-gray">
                    Proven track record of success
                  </p>
                </div>
                <div
                  className="text-center bg-white p-6 rounded-xl shadow-lg"
                  data-testid="stat-satisfaction-about" data-aos="fade-right"
                >
                  <div className="stat-number">98%</div>
                  <h3 className="text-lg md:text-xl font-semibold text-dark-gray mb-2">
                    Client Satisfaction
                  </h3>
                  <p className="text-sm md:text-base text-text-gray">
                    Consistently exceeding expectations
                  </p>
                </div>
              </div>

              {/* Values Section */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                {values.map((value, index) => {
                  const IconComponent = value.icon;
                  return (
                    <div
                      key={value.title}
                      className="text-center bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
                      data-testid={`value-${index}`}
                    >
                      <IconComponent className="w-8 h-8 md:w-10 md:h-10 text-orange mx-auto mb-4" />
                      <h3
                        className="text-lg md:text-xl font-bold text-dark-gray mb-3"
                        data-testid={`value-title-${index}`}
                      >
                        {value.title}
                      </h3>
                      <p
                        className="text-sm md:text-base text-text-gray"
                        data-testid={`value-description-${index}`}
                      >
                        {value.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        {/* <section
          className="py-16 md:py-20 bg-white"
          data-testid="achievements-section"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-dark-gray mb-4 md:mb-6"
                data-testid="text-achievements-title"
              >
                Our Achievements
              </h2>
              <p
                className="text-lg md:text-xl text-text-gray max-w-3xl mx-auto"
                data-testid="text-achievements-subtitle"
              >
                Recognition and partnerships that demonstrate our commitment to
                excellence
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto mb-16 md:mb-20">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <div
                    key={achievement.title}
                    className="text-center bg-light-gray rounded-xl p-6 md:p-8 hover:shadow-lg transition-all"
                    data-testid={`achievement-${index}`}
                  >
                    <IconComponent className="w-10 h-10 md:w-12 md:h-12 text-orange mx-auto mb-4 md:mb-6" />
                    <h3
                      className="text-lg md:text-xl font-bold text-dark-gray mb-3 md:mb-4"
                      data-testid={`achievement-title-${index}`}
                    >
                      {achievement.title}
                    </h3>
                    <p
                      className="text-sm md:text-base text-text-gray mb-4"
                      data-testid={`achievement-description-${index}`}
                    >
                      {achievement.description}
                    </p>
                    <ul className="space-y-2">
                      {achievement.details.map((detail, detailIndex) => (
                        <li
                          key={detailIndex}
                          className="flex items-center justify-center text-sm text-text-gray"
                        >
                          <CheckCircle className="w-4 h-4 text-orange mr-2 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section> */}

        {/* Team Section */}
        {/* <section
          className="py-16 md:py-20 bg-light-gray"
          data-testid="team-section"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-dark-gray mb-4 md:mb-6"
                data-testid="text-team-title"
              >
                Meet Our Expert Team
              </h2>
              <p
                className="text-lg md:text-xl text-text-gray max-w-3xl mx-auto"
                data-testid="text-team-subtitle"
              >
                Our diverse team of experts brings together years of experience
                and passion for technology
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
              {teamMembers.map((member, index) => (
                <div
                  key={member.name}
                  className="text-center bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all"
                  data-testid={`card-team-member-${index}`}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-20 h-20 md:w-32 md:h-32 rounded-full mx-auto mb-4 md:mb-6 object-cover"
                    data-testid={`img-team-member-${index}`}
                  />
                  <h3
                    className="text-lg md:text-xl font-bold text-dark-gray mb-2"
                    data-testid={`text-team-member-name-${index}`}
                  >
                    {member.name}
                  </h3>
                  <p
                    className="text-orange font-semibold mb-3 md:mb-4 text-sm md:text-base"
                    data-testid={`text-team-member-role-${index}`}
                  >
                    {member.role}
                  </p>
                  <p
                    className="text-text-gray mb-4 text-sm md:text-base"
                    data-testid={`text-team-member-description-${index}`}
                  >
                    {member.description}
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.expertise.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 md:px-3 md:py-1 bg-orange/10 text-orange text-xs md:text-sm rounded-full font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Values Section */}
        <section className="py-20 bg-light-gray" data-testid="values-section">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2
                className="text-3xl lg:text-4xl font-bold text-dark-gray mb-6"
                data-testid="text-values-title"
              >
                Our Values
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center" data-testid="value-innovation">
                <h3 className="text-xl font-bold text-dark-gray mb-4">
                  Innovation
                </h3>
                <p className="text-text-gray">
                  We constantly explore new technologies and approaches to
                  deliver cutting-edge solutions.
                </p>
              </div>
              <div className="text-center" data-testid="value-quality">
                <h3 className="text-xl font-bold text-dark-gray mb-4">
                  Quality
                </h3>
                <p className="text-text-gray">
                  Every project is executed with meticulous attention to detail
                  and highest standards.
                </p>
              </div>
              <div className="text-center" data-testid="value-integrity">
                <h3 className="text-xl font-bold text-dark-gray mb-4">
                  Integrity
                </h3>
                <p className="text-text-gray">
                  Transparency, honesty, and ethical practices guide all our
                  business relationships.
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
