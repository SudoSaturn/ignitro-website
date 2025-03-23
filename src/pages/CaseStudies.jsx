import React, { useState } from "react"
import { motion } from "framer-motion"

export default function CaseStudies() {
  const [filter, setFilter] = useState("all")
  
  const caseStudies = [
    {
      title: "TechStart: 3x User Growth in 6 Months",
      category: "saas",
      highlight: "3x user growth, 40% lower CAC",
      description: "How we helped a B2B SaaS startup triple their user base while reducing customer acquisition costs by 40%.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80",
      featured: true
    },
    {
      title: "FoodMarket: Marketplace Growth Strategy",
      category: "marketplace",
      highlight: "5x revenue in 12 months",
      description: "How a food delivery marketplace achieved exponential growth in a competitive market with our strategic guidance.",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80",
      featured: true
    },
    {
      title: "FinApp: Retention Optimization",
      category: "fintech",
      highlight: "75% improvement in retention",
      description: "How a fintech app dramatically improved their user retention through data-driven insights and product improvements.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80",
      featured: true
    },
    {
      title: "CloudSecure: Enterprise Sales Acceleration",
      category: "saas",
      highlight: "Sales cycle reduced by 35%",
      description: "How we helped a cybersecurity SaaS company optimize their enterprise sales process and close deals faster.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80",
      featured: false
    },
    {
      title: "FitApp: Viral Growth Strategy",
      category: "consumer",
      highlight: "200k new users in 3 months",
      description: "How a fitness app leveraged viral loops and referral mechanisms to achieve explosive user growth.",
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80",
      featured: false
    },
    {
      title: "TalentMatch: Marketplace Liquidity",
      category: "marketplace",
      highlight: "8x increase in transactions",
      description: "How a freelance marketplace solved their chicken-and-egg problem to dramatically increase platform activity.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80",
      featured: false
    },
  ]

  const filteredCaseStudies = filter === "all" 
    ? caseStudies 
    : caseStudies.filter(study => study.category === filter)

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
              Case <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Studies</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from real companies we've worked with. See how our growth strategies
              have helped startups across various industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { label: "All", value: "all" },
              { label: "SaaS", value: "saas" },
              { label: "Marketplace", value: "marketplace" },
              { label: "Fintech", value: "fintech" },
              { label: "Consumer", value: "consumer" }
            ].map((category) => (
              <button
                key={category.value}
                onClick={() => setFilter(category.value)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === category.value
                    ? "bg-purple-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      {filter === "all" && (
        <section className="py-10">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Featured Case Studies</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {caseStudies
                .filter(study => study.featured)
                .map((study, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                  >
                    <div className="h-48 overflow-hidden">
                      <img
                        src={study.image}
                        alt={study.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="mb-2 text-purple-600 font-semibold">{study.highlight}</div>
                      <h3 className="text-xl font-bold mb-2">{study.title}</h3>
                      <p className="text-gray-600 mb-4">{study.description}</p>
                      <button className="text-purple-600 font-medium hover:text-purple-800 transition-colors">
                        Read case study
                      </button>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
        </section>
      )}

      {/* All Case Studies */}
      <section className="py-10 pb-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">
            {filter === "all" ? "All Case Studies" : `${filter.charAt(0).toUpperCase() + filter.slice(1)} Case Studies`}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCaseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-2 text-purple-600 font-semibold">{study.highlight}</div>
                  <h3 className="text-xl font-bold mb-2">{study.title}</h3>
                  <p className="text-gray-600 mb-4">{study.description}</p>
                  <button className="text-purple-600 font-medium hover:text-purple-800 transition-colors">
                    Read case study
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Want Similar Results?</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
            Let's discuss how we can help your startup achieve its growth goals
          </p>
          <button className="bg-white text-purple-600 hover:bg-gray-100 px-6 py-3 rounded-md text-lg font-medium">
            Book a Free Strategy Call
          </button>
        </div>
      </section>
    </>
  )
} 