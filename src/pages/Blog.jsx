import React, { useState } from "react"
import { motion } from "framer-motion"

export default function Blog() {
  const [filter, setFilter] = useState("all")
  
  const blogPosts = [
    {
      title: "5 Growth Strategies That Actually Work for Early-Stage Startups",
      excerpt: "Learn which growth tactics deliver the best ROI for companies at the earliest stages of development.",
      category: "strategy",
      date: "May 15, 2023",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80",
      featured: true
    },
    {
      title: "How to Build a Growth Model That Predicts Your Future",
      excerpt: "A step-by-step guide to creating a growth model that helps you understand what drives your business.",
      category: "analytics",
      date: "April 23, 2023",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
      featured: true
    },
    {
      title: "The Chicken-and-Egg Problem: Solving Marketplace Liquidity",
      excerpt: "Strategies for bootstrapping both sides of your marketplace to achieve critical mass.",
      category: "marketplace",
      date: "June 7, 2023",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80",
      featured: false
    },
    {
      title: "Customer Acquisition Cost: The Metric That Can Make or Break Your Startup",
      excerpt: "Understanding, measuring, and optimizing CAC across different channels and stages.",
      category: "metrics",
      date: "March 12, 2023",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80",
      featured: false
    },
    {
      title: "How to Design Growth Experiments That Generate Real Insights",
      excerpt: "A framework for creating, running, and analyzing growth experiments that drive meaningful results.",
      category: "strategy",
      date: "May 29, 2023",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80",
      featured: false
    },
    {
      title: "The Psychology of Viral Growth: Why Some Products Spread Like Wildfire",
      excerpt: "Understanding the psychological triggers that make products spread through word of mouth.",
      category: "psychology",
      date: "February 8, 2023",
      readTime: "11 min read",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80",
      featured: false
    },
    {
      title: "SaaS Retention: Strategies to Reduce Churn and Increase LTV",
      excerpt: "Proven tactics to keep your customers engaged and reduce churn in subscription businesses.",
      category: "saas",
      date: "April 5, 2023",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&q=80",
      featured: false
    },
    {
      title: "Growth Team Structure: How to Organize for Maximum Impact",
      excerpt: "Different models for structuring your growth team and the pros and cons of each approach.",
      category: "teams",
      date: "March 22, 2023",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80",
      featured: false
    }
  ]

  const categories = [
    { label: "All", value: "all" },
    { label: "Strategy", value: "strategy" },
    { label: "Analytics", value: "analytics" },
    { label: "Metrics", value: "metrics" },
    { label: "SaaS", value: "saas" },
    { label: "Marketplaces", value: "marketplace" },
    { label: "Teams", value: "teams" },
    { label: "Psychology", value: "psychology" }
  ]

  const filteredPosts = filter === "all"
    ? blogPosts
    : blogPosts.filter(post => post.category === filter)

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-purple-50 to-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Growth <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Insights</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Practical advice, case studies, and strategies to help your startup grow faster.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts */}
      {filter === "all" && (
        <section className="py-10">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Featured Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts
                .filter(post => post.featured)
                .map((post, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow h-full flex flex-col"
                  >
                    <div className="h-56 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="mb-2">
                        <span className="text-xs font-semibold uppercase tracking-wider text-purple-600 bg-purple-100 rounded-full px-2 py-1">
                          {post.category}
                        </span>
                        <span className="text-gray-500 text-sm ml-2">
                          {post.date} • {post.readTime}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                      <p className="text-gray-600 mb-4 flex-grow">{post.excerpt}</p>
                      <button className="text-purple-600 font-medium hover:text-purple-800 transition-colors mt-auto">
                        Read more
                      </button>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
        </section>
      )}

      {/* Category Filters */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setFilter(category.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === category.value
                    ? "bg-purple-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col"
              >
                <div className="h-40 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-purple-600 bg-purple-100 rounded-full px-2 py-1">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm ml-2">
                      {post.date} • {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{post.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 flex-grow">{post.excerpt}</p>
                  <button className="text-purple-600 font-medium hover:text-purple-800 transition-colors mt-auto">
                    Read more
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Sign-up */}
      <section className="py-20 bg-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
            Get the latest growth strategies and insights delivered straight to your inbox
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-md text-gray-900 focus:outline-none"
              />
              <button className="bg-white text-purple-600 hover:bg-gray-100 px-6 py-3 rounded-md font-medium">
                Subscribe
              </button>
            </div>
            <p className="text-sm opacity-75 mt-3">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </>
  )
} 