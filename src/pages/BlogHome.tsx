import { Calendar, User, ArrowRight } from "lucide-react";
import { Link } from "wouter";

const BlogHome = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Web Development: Trends to Watch in 2024",
      excerpt:
        "Explore the latest trends shaping web development, from AI integration to progressive web apps and the rise of serverless architecture.",
      content: "Web development continues to evolve at a rapid pace...",
      author: "Sarah Johnson",
      date: "2024-03-15",
      category: "Web Development",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      readTime: "5 min read",
      tags: ["Web Development", "Trends", "Technology"],
      featured: true,
    },
    {
      id: 2,
      title: "Mobile App Design Best Practices for Better User Experience",
      excerpt:
        "Learn essential mobile app design principles that lead to higher user engagement and better app store ratings.",
      content:
        "Creating a successful mobile app requires more than just good functionality...",
      author: "Mike Chen",
      date: "2024-03-10",
      category: "Mobile Development",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      readTime: "7 min read",
      tags: ["Mobile", "UX Design", "Best Practices"],
      featured: true,
    },
    {
      id: 3,
      title: "Brand Identity Design: Creating Memorable Visual Experiences",
      excerpt:
        "Discover how effective brand identity design can transform your business and create lasting connections with customers.",
      content: "A strong brand identity is more than just a logo...",
      author: "John Smith",
      date: "2024-03-05",
      category: "Design",
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      readTime: "6 min read",
      tags: ["Branding", "Design", "Marketing"],
      featured: true,
    },
    {
      id: 4,
      title: "Optimizing Website Performance: Speed Matters",
      excerpt:
        "Learn how to improve your website's loading speed and performance for better user experience and SEO rankings.",
      content: "Website performance directly impacts user experience...",
      author: "Sarah Johnson",
      date: "2024-02-28",
      category: "Web Development",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      readTime: "8 min read",
      tags: ["Performance", "SEO", "Optimization"],
      featured: false,
    },
    {
      id: 5,
      title: "The Rise of Cross-Platform Mobile Development",
      excerpt:
        "Why businesses are choosing cross-platform solutions and how to decide between React Native and Flutter.",
      content: "Cross-platform development has gained significant momentum...",
      author: "Mike Chen",
      date: "2024-02-20",
      category: "Mobile Development",
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      readTime: "6 min read",
      tags: ["Cross-Platform", "React Native", "Flutter"],
      featured: false,
    },
    {
      id: 6,
      title: "Color Psychology in Web Design: Choosing the Right Palette",
      excerpt:
        "Understanding how colors affect user behavior and emotions in digital design and marketing.",
      content: "Colors play a crucial role in user perception...",
      author: "John Smith",
      date: "2024-02-15",
      category: "Design",
      image:
        "https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      readTime: "5 min read",
      tags: ["Color Theory", "Psychology", "Web Design"],
      featured: false,
    },
  ];
  const featuredPosts = blogPosts.filter((post) => post.featured);

  return (
    <>
      {/* Featured Posts */}
      <section className="py-20 pt-0 bg-light-gray" data-testid="featured-posts">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2
              className="text-3xl lg:text-4xl font-bold text-dark-gray mb-6"
              data-testid="text-featured-title"
            >
              Featured Articles
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <article
                key={post.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                data-testid={`featured-post-${index}`}
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                  data-testid={`featured-post-image-${index}`}
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className="inline-block bg-orange/10 text-orange px-3 py-1 rounded-full text-sm font-medium"
                      data-testid={`featured-post-category-${index}`}
                    >
                      {post.category}
                    </span>
                    <span
                      className="text-text-gray text-sm"
                      data-testid={`featured-post-read-time-${index}`}
                    >
                      {post.readTime}
                    </span>
                  </div>
                  <h3
                    className="text-xl font-bold text-dark-gray mb-3"
                    data-testid={`featured-post-title-${index}`}
                  >
                    {post.title}
                  </h3>
                  <p
                    className="text-text-gray mb-4"
                    data-testid={`featured-post-excerpt-${index}`}
                  >
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-text-gray">
                      <User className="w-4 h-4 mr-2" />
                      <span data-testid={`featured-post-author-${index}`}>
                        {post.author}
                      </span>
                      <Calendar className="w-4 h-4 ml-4 mr-2" />
                      <span data-testid={`featured-post-date-${index}`}>
                        {new Date(post.date).toLocaleDateString()}
                      </span>
                    </div>
                    <Link
                      href={`/blog/${post.id}`}
                      className="text-orange font-semibold hover:underline flex items-center"
                      data-testid={`featured-post-link-${index}`}
                    >
                      Read More <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogHome;
