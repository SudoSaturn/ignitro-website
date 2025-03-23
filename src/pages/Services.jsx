import React from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ArrowRight, CheckCircle } from "lucide-react"

export default function Services() {
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
              Our <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored growth strategies and execution support 
              for early-stage companies at every stage of development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Growth Strategy",
                description: "Comprehensive growth strategy tailored to your business model, market, and stage.",
                features: [
                  "Market & competitor analysis",
                  "Customer persona development",
                  "Acquisition channel strategy",
                  "Conversion optimization plan",
                  "Retention & engagement strategy"
                ]
              },
              {
                title: "Growth Implementation",
                description: "Hands-on execution support to implement your growth strategy effectively.",
                features: [
                  "Marketing campaign execution",
                  "Growth experiment design",
                  "A/B testing implementation",
                  "Analytics setup & tracking",
                  "Weekly growth meetings"
                ]
              },
              {
                title: "Growth Analytics",
                description: "Data-driven insights to measure, optimize, and improve your growth initiatives.",
                features: [
                  "Custom growth dashboard",
                  "Key metrics tracking",
                  "Experiment analysis",
                  "ROI calculations",
                  "Growth forecasting"
                ]
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact">
                  <button className="flex items-center text-purple-600 font-medium hover:text-purple-800 transition-colors">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">How We Work</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our structured process ensures consistent results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                title: "Discovery",
                description: "We start by deeply understanding your business, market, and growth challenges.",
                icon: "🔍"
              },
              {
                title: "Strategy",
                description: "We develop a tailored growth strategy based on data and market insights.",
                icon: "🧠"
              },
              {
                title: "Execution",
                description: "We help implement the strategy through focused growth initiatives.",
                icon: "🚀"
              },
              {
                title: "Optimization",
                description: "We continuously measure, learn, and improve to maximize results.",
                icon: "📈"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-md text-center relative"
              >
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 right-0 w-8 h-1 bg-purple-200 translate-x-4"></div>
                )}
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Specialties</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Industries and business models where we excel
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "SaaS",
                description: "Optimizing acquisition, activation, and monetization for software-as-a-service companies."
              },
              {
                title: "Marketplaces",
                description: "Solving the chicken-and-egg problem for two-sided marketplaces."
              },
              {
                title: "Consumer Apps",
                description: "Building viral loops and retention strategies for consumer applications."
              },
              {
                title: "Fintech",
                description: "Navigating complex regulation while driving growth for financial technology startups."
              }
            ].map((specialty, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-md border-l-4 border-purple-600"
              >
                <h3 className="text-xl font-bold mb-2">{specialty.title}</h3>
                <p className="text-gray-600">{specialty.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Accelerate Your Growth?</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
            Get in touch to discuss how we can help your startup reach its potential
          </p>
          <Link to="/contact">
            <button className="bg-white text-purple-600 hover:bg-gray-100 px-6 py-3 rounded-md text-lg font-medium">
              Schedule a Free Consultation
            </button>
          </Link>
        </div>
      </section>
    </>
  )
} 