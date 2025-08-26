import { useEffect, useState } from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { useGSAPAnimation } from "@/hooks/use-gsap";
import { fadeUpAnimation } from "@/lib/gsap-utils";

const portfolioItems = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "Modern online store with seamless shopping experience, payment integration, and inventory management system.",
    category: "Web Development",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    clientFeedback:
      "The platform increased our online sales by 300% and improved customer satisfaction significantly.",
    projectUrl: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Fitness Mobile App",
    description:
      "Cross-platform fitness tracking app with social features, workout plans, and progress analytics.",
    category: "Mobile Development",
    technologies: ["React Native", "Firebase", "Node.js"],
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    clientFeedback:
      "Outstanding user experience design and smooth performance across all devices.",
    projectUrl: "#",
    featured: true,
  },
  {
    id: 3,
    title: "Brand Identity Design",
    description:
      "Complete brand identity package including logo design, color palette, typography, and marketing materials.",
    category: "Graphic Design",
    technologies: ["Adobe Creative Suite", "Figma"],
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    clientFeedback:
      "The new brand identity perfectly captures our company values and vision.",
    projectUrl: "#",
    featured: true,
  },
  {
    id: 4,
    title: "SaaS Dashboard",
    description:
      "Analytics dashboard for business intelligence with real-time data visualization and reporting.",
    category: "Web Development",
    technologies: ["React", "D3.js", "Express", "MongoDB"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    clientFeedback:
      "Reduced data processing time by 70% and improved decision-making speed.",
    projectUrl: "#",
    featured: false,
  },
  {
    id: 5,
    title: "Restaurant Mobile App",
    description:
      "Food ordering app with menu browsing, order tracking, and loyalty program integration.",
    category: "Mobile Development",
    technologies: ["Flutter", "Firebase", "Stripe"],
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    clientFeedback:
      "Streamlined our ordering process and increased customer retention by 40%.",
    projectUrl: "#",
    featured: false,
  },
  {
    id: 6,
    title: "Corporate Website Redesign",
    description:
      "Professional website redesign with improved user experience and mobile optimization.",
    category: "Web Development",
    technologies: ["React", "Tailwind CSS", "Node.js"],
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    clientFeedback:
      "Professional design that perfectly represents our business values.",
    projectUrl: "#",
    featured: false,
  },
];

const categories = [
  "All",
  "Web Development",
  "Mobile Development",
  "Graphic Design",
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredItems, setFilteredItems] = useState(portfolioItems);

  useEffect(() => {
    document.title = "Portfolio - DesignDynasty";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Explore DesignDynasty's portfolio of successful projects including web development, mobile apps, and graphic design work for clients worldwide."
      );
    }
  }, []);

  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredItems(portfolioItems);
    } else {
      setFilteredItems(
        portfolioItems.filter((item) => item.category === activeCategory)
      );
    }
  }, [activeCategory]);

  const titleRef = useGSAPAnimation(fadeUpAnimation);

  return (
    <div className="min-h-screen bg-white" data-testid="page-portfolio">
      <Header />
      <main>
        {/* Hero Section */}
        <section
          className="gradient-bg text-white py-20"
          data-testid="portfolio-hero"
        >
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1
                ref={titleRef as any}
                className="text-4xl lg:text-6xl font-bold mb-6"
                data-testid="text-portfolio-title"
              >
                Our Portfolio
              </h1>
              <p
                className="text-xl lg:text-2xl text-gray-300"
                data-testid="text-portfolio-subtitle"
              >
                Showcasing our best work and successful client projects across
                various industries
              </p>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-12 bg-light-gray" data-testid="portfolio-filter">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                    activeCategory === category
                      ? "bg-orange text-white"
                      : "bg-white text-dark-gray hover:bg-orange hover:text-white"
                  }`}
                  data-testid={`filter-${category
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-20 bg-white" data-testid="featured-projects">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2
                className="text-3xl lg:text-4xl font-bold text-dark-gray mb-6"
                data-testid="text-featured-title"
              >
                Featured Projects
              </h2>
            </div>

            <div className="grid gap-12 max-w-6xl mx-auto">
              {filteredItems
                .filter((item) => item.featured)
                .map((item, index) => (
                  <div
                    key={item.id}
                    className={`grid lg:grid-cols-2 gap-8 items-center ${
                      index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                    }`}
                    data-testid={`featured-project-${index}`}
                  >
                    <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-80 object-cover rounded-xl shadow-lg"
                        data-testid={`featured-project-image-${index}`}
                      />
                    </div>
                    <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                      <span
                        className="inline-block bg-orange/10 text-orange px-3 py-1 rounded-full text-sm font-medium mb-4"
                        data-testid={`featured-project-category-${index}`}
                      >
                        {item.category}
                      </span>
                      <h3
                        className="text-2xl font-bold text-dark-gray mb-4"
                        data-testid={`featured-project-title-${index}`}
                      >
                        {item.title}
                      </h3>
                      <p
                        className="text-text-gray text-lg mb-6"
                        data-testid={`featured-project-description-${index}`}
                      >
                        {item.description}
                      </p>
                      <div className="mb-6">
                        <h4 className="font-semibold text-dark-gray mb-2">
                          Technologies Used:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {item.technologies.map((tech, techIndex) => (
                            <span
                              key={tech}
                              className="bg-light-gray text-dark-gray px-3 py-1 rounded-lg text-sm"
                              data-testid={`featured-project-tech-${index}-${techIndex}`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <blockquote
                        className="border-l-4 border-orange pl-4 italic text-text-gray mb-6"
                        data-testid={`featured-project-feedback-${index}`}
                      >
                        "{item.clientFeedback}"
                      </blockquote>
                      <a
                        href={item.projectUrl}
                        className="inline-block bg-orange hover:bg-orange/90 text-white px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
                        data-testid={`featured-project-link-${index}`}
                      >
                        View Project Details
                      </a>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>

        {/* All Projects Grid */}
        <section className="py-20 bg-light-gray" data-testid="all-projects">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2
                className="text-3xl lg:text-4xl font-bold text-dark-gray mb-6"
                data-testid="text-all-projects-title"
              >
                All Projects
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item, index) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                  data-testid={`project-card-${index}`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                    data-testid={`project-image-${index}`}
                  />
                  <div className="p-6">
                    <span
                      className="inline-block bg-orange/10 text-orange px-3 py-1 rounded-full text-sm font-medium mb-3"
                      data-testid={`project-category-${index}`}
                    >
                      {item.category}
                    </span>
                    <h3
                      className="text-xl font-bold text-dark-gray mb-3"
                      data-testid={`project-title-${index}`}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-text-gray mb-4"
                      data-testid={`project-description-${index}`}
                    >
                      {item.description.length > 100
                        ? `${item.description.substring(0, 100)}...`
                        : item.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={tech}
                          className="bg-light-gray text-dark-gray px-2 py-1 rounded text-xs"
                          data-testid={`project-tech-${index}-${techIndex}`}
                        >
                          {tech}
                        </span>
                      ))}
                      {item.technologies.length > 3 && (
                        <span className="text-text-gray text-xs px-2 py-1">
                          +{item.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                    <a
                      href={item.projectUrl}
                      className="text-orange font-semibold hover:underline"
                      data-testid={`project-link-${index}`}
                    >
                      View Details →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          className="py-20 bg-navy text-white"
          data-testid="portfolio-cta"
        >
          <div className="container mx-auto px-6 text-center">
            <h2
              className="text-3xl lg:text-4xl font-bold mb-6"
              data-testid="text-portfolio-cta-title"
            >
              Ready to Start Your Project?
            </h2>
            <p
              className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
              data-testid="text-portfolio-cta-subtitle"
            >
              Join our satisfied clients and let us help you achieve your
              business goals with innovative technology solutions.
            </p>
            <a
              href="/contact"
              className="bg-orange hover:bg-orange/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105"
              data-testid="button-start-your-project"
            >
              Start Your Project
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
