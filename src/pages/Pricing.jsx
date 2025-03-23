import React, { useState } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Check } from "lucide-react"

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState("monthly")
  
  const plans = [
    {
      name: "Growth Accelerator",
      description: "Perfect for early-stage startups looking to establish product-market fit and initial traction.",
      monthly: 2999,
      annual: 28790, // 10% discount applied
      features: [
        "Weekly growth strategy sessions",
        "Growth model development",
        "Marketing channel selection",
        "Custom metrics dashboard",
        "Bi-weekly check-ins",
        "Email support"
      ],
      cta: "Start Growing"
    },
    {
      name: "Scale Engine",
      description: "Ideal for startups that have found initial traction and want to accelerate growth.",
      monthly: 4999,
      annual: 47990, // 10% discount applied
      features: [
        "Everything in Growth Accelerator",
        "Twice-weekly strategy sessions",
        "Hands-on execution support",
        "A/B testing framework",
        "Growth experiment design",
        "Priority email & chat support"
      ],
      featured: true,
      cta: "Scale Faster"
    },
    {
      name: "Enterprise",
      description: "For established companies looking to optimize growth across multiple channels and products.",
      monthly: "Custom",
      annual: "Custom",
      features: [
        "Everything in Scale Engine",
        "Dedicated growth team",
        "Cross-functional workshops",
        "Custom reporting & analytics",
        "Executive reviews",
        "24/7 priority support"
      ],
      cta: "Contact Us"
    }
  ]

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
              Simple, Transparent <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Pricing</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that best fits your company's growth stage and needs.
              All plans include our proven growth methodology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Toggle */}
      <section className="py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center bg-gray-100 p-1 rounded-full">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                billingCycle === "monthly"
                  ? "bg-white shadow text-purple-600"
                  : "text-gray-700 hover:text-gray-900"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("annual")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                billingCycle === "annual"
                  ? "bg-white shadow text-purple-600"
                  : "text-gray-700 hover:text-gray-900"
              }`}
            >
              Annual <span className="text-green-500 font-normal">Save 10%</span>
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-10 pb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow ${
                  plan.featured ? "border-2 border-purple-500 relative" : ""
                }`}
              >
                {plan.featured && (
                  <div className="absolute top-0 right-0 bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                    POPULAR
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6 h-16">{plan.description}</p>
                  <div className="mb-6">
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold">
                        {typeof plan[billingCycle] === "number"
                          ? `$${plan[billingCycle].toLocaleString()}`
                          : plan[billingCycle]}
                      </span>
                      {typeof plan[billingCycle] === "number" && (
                        <span className="text-gray-600 ml-2">
                          /{billingCycle === "monthly" ? "mo" : "yr"}
                        </span>
                      )}
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8 min-h-[240px]">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact">
                    <button
                      className={`w-full py-3 px-4 rounded-md font-medium text-white ${
                        plan.featured
                          ? "bg-purple-600 hover:bg-purple-700"
                          : "bg-gray-700 hover:bg-gray-800"
                      }`}
                    >
                      {plan.cta}
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about our pricing and services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "How long are the contracts?",
                answer: "Our standard contracts are month-to-month for monthly plans and annual for yearly plans. We don't believe in locking you into long-term contracts if you're not seeing results."
              },
              {
                question: "Can I switch plans later?",
                answer: "Absolutely! You can upgrade or downgrade your plan at any time. If you upgrade during an annual plan, we'll prorate the difference."
              },
              {
                question: "What happens after I sign up?",
                answer: "After signing up, you'll be assigned a dedicated growth strategist who will schedule a kickoff call. During this call, we'll learn about your business, establish goals, and outline our initial growth plan."
              },
              {
                question: "How is the Enterprise plan customized?",
                answer: "The Enterprise plan is tailored to your specific needs, team size, and growth objectives. Pricing depends on the scope of work, resources required, and level of hands-on support needed."
              },
              {
                question: "Do you offer refunds?",
                answer: "We don't offer refunds, but we do have a 30-day satisfaction guarantee. If you're not happy with our service in the first 30 days, we'll work with you to make it right or let you cancel without any further obligation."
              },
              {
                question: "Can I pause my subscription?",
                answer: "Yes, annual plans can be paused for up to 3 months per year if needed. Monthly plans cannot be paused but can be canceled and restarted at any time."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-md"
              >
                <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Our team is happy to help you choose the right plan for your business needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-md text-lg">
                Contact Sales
              </button>
            </Link>
            <button className="border border-gray-300 hover:border-gray-400 text-gray-700 px-6 py-3 rounded-md text-lg">
              Schedule a Demo
            </button>
          </div>
        </div>
      </section>
    </>
  )
} 