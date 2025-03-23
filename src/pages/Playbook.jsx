import React from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Download } from "lucide-react"

export default function Playbook() {
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
              The Growth <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Playbook</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven frameworks and methodologies for achieving sustainable growth at early-stage companies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {/* Playbook Introduction */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <h2 className="text-3xl font-bold mb-6">What Is The Growth Playbook?</h2>
                <p className="text-gray-600 mb-4">
                  The Ignitro Growth Playbook is our proprietary framework for scaling early-stage
                  companies efficiently and sustainably. It's based on our experience working with
                  100+ startups across different industries and growth stages.
                </p>
                <p className="text-gray-600 mb-4">
                  Unlike generic growth advice, our playbook provides a structured methodology that
                  combines strategic thinking with tactical execution. It guides you through the process
                  of identifying your most promising growth opportunities, designing experiments to test
                  them, and scaling the winners.
                </p>
                <p className="text-gray-600">
                  The playbook is constantly updated based on the latest market trends, technology
                  changes, and results from our client work.
                </p>
              </motion.div>

              {/* Key Components */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <h2 className="text-3xl font-bold mb-6">Key Components</h2>
                
                <div className="space-y-8">
                  {[
                    {
                      title: "Growth Model",
                      description: "A framework for understanding how your business acquires, retains, and monetizes customers.",
                      details: "We help you build a clear growth model that maps out your core metrics, conversion points, and growth levers."
                    },
                    {
                      title: "Channel Strategy",
                      description: "A systematic approach to evaluating and prioritizing acquisition channels.",
                      details: "Instead of trying everything at once, we help you identify the 2-3 channels most likely to work for your business and focus there."
                    },
                    {
                      title: "Experiment Framework",
                      description: "A structured process for designing, running, and evaluating growth experiments.",
                      details: "We provide templates and processes for running effective experiments that lead to actionable insights."
                    },
                    {
                      title: "Growth Meeting Structure",
                      description: "A proven format for running effective growth team meetings.",
                      details: "We help you implement a meeting structure that keeps your team focused on the highest-impact activities."
                    },
                    {
                      title: "Metrics Dashboard",
                      description: "A customized dashboard for tracking your most important growth metrics.",
                      details: "We help you set up tracking for your North Star metric and the key inputs that drive it."
                    }
                  ].map((component, index) => (
                    <div key={index} className="bg-white p-8 rounded-xl shadow-md">
                      <h3 className="text-xl font-bold mb-2">{component.title}</h3>
                      <p className="text-gray-800 font-medium mb-2">{component.description}</p>
                      <p className="text-gray-600">{component.details}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                {/* Download CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-xl shadow-lg mb-8"
                >
                  <h3 className="text-xl font-bold mb-4">Download Sample Playbook</h3>
                  <p className="text-gray-600 mb-6">
                    Get a taste of our methodology with this free sample from our Growth Playbook.
                  </p>
                  <button className="w-full bg-purple-600 hover:bg-purple-700 text-white px-4 py-3 rounded-md flex items-center justify-center">
                    <Download className="h-5 w-5 mr-2" />
                    Download PDF (2.4 MB)
                  </button>
                </motion.div>

                {/* Testimonial */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-xl shadow-lg"
                >
                  <p className="text-gray-600 italic mb-6">
                    "Implementing Ignitro's Growth Playbook was a game-changer for us. It gave our team a
                    shared language and methodology for approaching growth challenges."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                    <div>
                      <p className="font-semibold">Michael Chen</p>
                      <p className="text-gray-600">Founder, DataSync</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">The Playbook In Action</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See how other companies have implemented our methodology
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                company: "TechStart",
                result: "3x user growth in 6 months",
                description: "How a B2B SaaS startup tripled their user base while reducing CAC by 40%."
              },
              {
                company: "FoodMarket",
                result: "5x revenue in 12 months",
                description: "How a food delivery marketplace achieved exponential growth in a competitive market."
              },
              {
                company: "FinApp",
                result: "75% improvement in retention",
                description: "How a fintech app dramatically improved their user retention through data-driven insights."
              }
            ].map((casestudy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-md"
              >
                <p className="text-purple-600 font-semibold mb-2">{casestudy.company}</p>
                <h3 className="text-xl font-bold mb-2">{casestudy.result}</h3>
                <p className="text-gray-600 mb-4">{casestudy.description}</p>
                <Link to="/casestudies">
                  <button className="text-purple-600 font-medium hover:text-purple-800 transition-colors">
                    Read case study
                  </button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Want to Implement Our Playbook?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Learn how our team can help you implement the Growth Playbook in your company
          </p>
          <Link to="/contact">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-md text-lg">
              Talk to a Growth Strategist
            </button>
          </Link>
        </div>
      </section>
    </>
  )
} 