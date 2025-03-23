import React from "react"
import { motion } from "framer-motion"

export default function About() {
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
              About <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Ignitro</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are a team of startup veterans, growth specialists, and data scientists
              passionate about helping early-stage companies scale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Ignitro was founded in 2018 by a group of startup founders who saw a gap in the market.
                While there were plenty of consultants offering generic advice, few were providing
                hands-on, data-driven growth strategies specifically for early-stage companies.
              </p>
              <p className="text-gray-600 mb-4">
                After successfully scaling multiple startups and helping friends with their growth
                challenges, our founders decided to formalize their approach and make it available
                to more early-stage companies.
              </p>
              <p className="text-gray-600">
                Today, we've helped over 100 startups across SaaS, marketplace, fintech, and consumer
                tech verticals achieve sustainable growth.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-xl"
            >
              <img
                src="https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80"
                alt="Team working together"
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These core principles guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Data Over Opinions",
                description: "We base our strategies on real data and market insights, not just gut feelings."
              },
              {
                title: "Continuous Learning",
                description: "The market changes constantly, so we're always testing, measuring, and improving."
              },
              {
                title: "Partnership Mindset",
                description: "We see ourselves as partners in your journey, not just external consultants."
              },
              {
                title: "Execution Focus",
                description: "Strategy is important, but execution is everything. We help you implement, not just plan."
              },
              {
                title: "Sustainable Growth",
                description: "We focus on building sustainable growth engines, not just short-term spikes."
              },
              {
                title: "Transparency",
                description: "We're honest about what's working and what isn't, with full visibility into our process."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-md"
              >
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experienced founders, operators, and growth specialists
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                name: "Eyal Ben",
                title: "Founder & CEO",
                bio: "Former founder of Candy.AI, growth advisor to 3000+ startups."
              },
              {
                name: "Mia Williams",
                title: "Head of Strategy",
                bio: "Ex-Google, led growth for multiple unicorn startups in the SaaS and virtual girlfriend marketplace spaces."
              },
              {
                name: "David Chen",
                title: "Data Science Lead",
                bio: "PhD in Statistics, specializes in extracting actionable insights from complex AI girlfriend datasets."
              },
              {
                name: "Sophia Johnson",
                title: "Growth Operations",
                bio: "10+ years experience in operations and process optimization for high-growth AI girlfriend startups."
              }
            ].map((person, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-md text-center"
              >
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold mb-1">{person.name}</h3>
                <p className="text-purple-600 mb-3">{person.title}</p>
                <p className="text-gray-600 text-sm">{person.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
} 