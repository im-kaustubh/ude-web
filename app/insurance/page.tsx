"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import Footer from "@/components/footer"
import {
  Menu,
  X,
  ArrowLeft,
  MapPin,
  Shield,
  Users,
  Calendar,
  ChevronRight,
  BookOpen,
  Briefcase,
  Check,
  Download,
  ExternalLink,
  AlertCircle,
  Heart,
  Phone,
  Mail,
  Instagram,
  Linkedin,
  MessageCircle,
  Youtube,
} from "lucide-react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import Breadcrumbs from "@/components/breadcrumbs"
import Navigation from "@/components/navigation"


// Hero Section Component
function HeroSection() {
  const scrollToComparison = () => {
    document.getElementById("comparison")?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToSteps = () => {
    document.getElementById("steps")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      {/* Floating Healthcare Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 text-4xl opacity-20"
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
        >
          🏥
        </motion.div>
        <motion.div
          className="absolute top-1/3 right-1/4 text-3xl opacity-20"
          animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
        >
          🩺
        </motion.div>
        <motion.div
          className="absolute bottom-1/3 left-1/3 text-3xl opacity-20"
          animate={{ y: [0, -10, 0], rotate: [0, 3, 0] }}
          transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, delay: 2 }}
        >
          💊
        </motion.div>
        <motion.div
          className="absolute bottom-1/4 right-1/3 text-4xl opacity-20"
          animate={{ y: [0, 20, 0], rotate: [0, -3, 0] }}
          transition={{ duration: 4.5, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
        >
          🛡️
        </motion.div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Get Your{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Student Health Insurance
            </span>{" "}
            in Germany
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Health insurance is mandatory for all students in Germany. Choose a public insurance that fits your needs
            and get enrolled quickly.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={scrollToComparison}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Compare Public Health Insurances
              <Shield className="ml-2 w-5 h-5" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={scrollToSteps}
              className="border-2 border-gray-300 hover:border-blue-500 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 bg-transparent"
            >
              Start Registration
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Overview Section
function OverviewSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What is Public Health Insurance?</h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            If you're a student under 30 or enrolled in your first degree in Germany, public health insurance is
            mandatory. It's affordable, reliable, and accepted everywhere — including for university enrollment, medical
            care, and visa requirements.
          </p>

          <Card className="bg-blue-50 border-blue-200 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-gray-900 mb-2">Important Note</h3>
                  <p className="text-gray-700">
                    If you are over 30 or pursuing a second degree, you may require private insurance instead.
                    <Link href="#" className="text-blue-600 hover:underline ml-1">
                      Learn about private insurance options →
                    </Link>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

// Insurance Comparison Section
function InsuranceComparisonSection() {
  const insuranceProviders = [
    {
      name: "TK (Techniker Krankenkasse)",
      cost: "€124.00",
      englishSupport: true,
      popular: true,
      link: "https://www.tk.de",
      features: ["Digital services", "24/7 hotline", "Excellent app"],
    },
    {
      name: "AOK",
      cost: "€125.00",
      englishSupport: false,
      popular: false,
      link: "https://www.aok.de",
      features: ["Wide network", "Local offices", "Traditional service"],
    },
    {
      name: "Barmer",
      cost: "€125.00",
      englishSupport: true,
      popular: false,
      link: "https://www.barmer.de",
      features: ["Good online portal", "Student focus", "Health programs"],
    },
    {
      name: "DAK Gesundheit",
      cost: "€124.00",
      englishSupport: true,
      popular: false,
      link: "https://www.dak.de",
      features: ["Digital first", "Prevention focus", "Modern approach"],
    },
    {
      name: "SBK",
      cost: "€125.00",
      englishSupport: true,
      popular: false,
      link: "https://www.sbk.org",
      features: ["Personal service", "Health coaching", "Bonus programs"],
    },
  ]

  return (
    <section id="comparison" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Public Health Insurance Comparison</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Compare the top public health insurance providers in Germany and choose the one that best fits your needs.
          </p>
        </motion.div>

        {/* Desktop Table View */}
        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">
            <thead className="bg-gradient-to-r from-blue-50 to-purple-50">
              <tr>
                <th className="px-6 py-4 text-left font-semibold text-gray-900">Provider</th>
                <th className="px-6 py-4 text-center font-semibold text-gray-900">Monthly Cost</th>
                <th className="px-6 py-4 text-center font-semibold text-gray-900">English Support</th>
                <th className="px-6 py-4 text-center font-semibold text-gray-900">Features</th>
                <th className="px-6 py-4 text-center font-semibold text-gray-900">Apply Now</th>
              </tr>
            </thead>
            <tbody>
              {insuranceProviders.map((provider, index) => (
                <motion.tr
                  key={provider.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="border-b border-gray-100 hover:bg-blue-50/50 transition-colors duration-200"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <Heart className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 flex items-center space-x-2">
                          <span>{provider.name}</span>
                          {provider.popular && (
                            <Badge className="bg-orange-100 text-orange-800 text-xs">Most Popular</Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="font-semibold text-lg text-gray-900">{provider.cost}</span>
                    <div className="text-sm text-gray-500">per month</div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    {provider.englishSupport ? (
                      <div className="flex items-center justify-center space-x-1">
                        <Check className="w-5 h-5 text-green-500" />
                        <span className="text-2xl">🇬🇧</span>
                      </div>
                    ) : (
                      <span className="text-gray-400">❌</span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <div className="space-y-1">
                      {provider.features.map((feature, idx) => (
                        <div key={idx} className="text-sm text-gray-600 flex items-center">
                          <Check className="w-3 h-3 text-green-500 mr-1" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <Button
                      asChild
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full"
                    >
                      <a href={provider.link} target="_blank" rel="noopener noreferrer">
                        Open Account
                        <ExternalLink className="ml-2 w-4 h-4" />
                      </a>
                    </Button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Card View */}
        <div className="lg:hidden grid gap-6">
          {insuranceProviders.map((provider, index) => (
            <motion.div
              key={provider.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <Heart className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{provider.name}</CardTitle>
                        {provider.popular && (
                          <Badge className="bg-orange-100 text-orange-800 text-xs mt-1">Most Popular</Badge>
                        )}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-xl text-gray-900">{provider.cost}</div>
                      <div className="text-sm text-gray-500">per month</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">English Support:</span>
                      {provider.englishSupport ? (
                        <div className="flex items-center space-x-1">
                          <Check className="w-4 h-4 text-green-500" />
                          <span className="text-xl">🇬🇧</span>
                        </div>
                      ) : (
                        <span className="text-gray-400">❌</span>
                      )}
                    </div>

                    <div>
                      <span className="text-gray-600 font-medium">Features:</span>
                      <div className="mt-2 space-y-1">
                        {provider.features.map((feature, idx) => (
                          <div key={idx} className="text-sm text-gray-600 flex items-center">
                            <Check className="w-3 h-3 text-green-500 mr-2" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button
                      asChild
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full"
                    >
                      <a href={provider.link} target="_blank" rel="noopener noreferrer">
                        Open Account
                        <ExternalLink className="ml-2 w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Step-by-Step Registration Section
function RegistrationStepsSection() {
  const steps = [
    {
      number: 1,
      title: "Choose Provider",
      description: "Select from the comparison table above based on your preferences.",
      icon: "🏥",
    },
    {
      number: 2,
      title: "Visit Registration Link",
      description: "Click 'Open Account' to go to the provider's official website.",
      icon: "🔗",
    },
    {
      number: 3,
      title: "Fill Personal Details",
      description: "Enter your name, date of birth, address, university, and start date.",
      icon: "📝",
    },
    {
      number: 4,
      title: "Upload Documents",
      description: "Submit required documents including passport, admission letter, and visa.",
      icon: "📄",
    },
    {
      number: 5,
      title: "Submit Application",
      description: "Receive confirmation email and your insurance certificate for university enrollment.",
      icon: "✅",
    },
  ]

  return (
    <section id="steps" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How to Register for Public Health Insurance
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Follow these simple steps to get your health insurance sorted quickly and efficiently.
          </p>
        </motion.div>

        {/* Desktop Horizontal Stepper */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Progress Line */}
            <div className="absolute top-16 left-0 right-0 h-1 bg-gray-200 rounded-full">
              <div className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full w-full"></div>
            </div>

            <div className="grid grid-cols-5 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-2xl text-white font-bold shadow-lg mx-auto relative z-10">
                      {step.number}
                    </div>
                    <div className="absolute -top-2 -left-2 w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center text-3xl">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Vertical Stepper */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start space-x-4"
            >
              <div className="relative flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg relative z-10">
                  {step.number}
                </div>
                <div className="absolute -top-1 -left-1 w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center text-2xl">
                  {step.icon}
                </div>
                {index < steps.length - 1 && (
                  <div className="absolute top-12 left-6 w-0.5 h-16 bg-gradient-to-b from-blue-600 to-purple-600"></div>
                )}
              </div>
              <div className="flex-1 pt-2">
                <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => document.getElementById("comparison")?.scrollIntoView({ behavior: "smooth" })}
          >
            Start Registration Now
            <ChevronRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

// Document Checklist Section
function DocumentChecklistSection() {
  const documents = [
    { name: "Passport/ID", required: true, icon: "🛂" },
    { name: "University Admission Letter or Enrollment Certificate", required: true, icon: "🎓" },
    { name: "Address Registration (Anmeldung)", required: false, icon: "🏠" },
    { name: "Visa (if applicable)", required: false, icon: "📋" },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Documents You'll Need</h2>
            <p className="text-lg text-gray-600">
              Prepare these documents before starting your insurance application process.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {documents.map((doc, index) => (
              <motion.div
                key={doc.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="text-3xl">{doc.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <Check className="w-5 h-5 text-green-500" />
                          <span className="font-semibold text-gray-900">{doc.name}</span>
                          {doc.required ? (
                            <Badge className="bg-red-100 text-red-800 text-xs">Required</Badge>
                          ) : (
                            <Badge className="bg-blue-100 text-blue-800 text-xs">Optional</Badge>
                          )}
                        </div>
                        {!doc.required && doc.name.includes("Anmeldung") && (
                          <p className="text-sm text-gray-600">Can be submitted after arrival sometimes</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-blue-500 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 bg-transparent"
            >
              <Download className="mr-2 w-5 h-5" />
              Download Checklist (PDF)
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Info Boxes Section
function InfoBoxesSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="h-full shadow-lg bg-blue-50 border-blue-200">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-3">Is Public Health Insurance Mandatory?</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Yes, if you are under 30 or pursuing your first degree in Germany. It's required for university
                      enrollment and visa applications.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="h-full shadow-lg bg-purple-50 border-purple-200">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <AlertCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-3">Private Insurance Option</h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      If you are over 30 or pursuing your second degree, private insurance may be required.
                    </p>
                    <Link href="#" className="text-purple-600 hover:underline font-medium">
                      See Private Insurance Guide →
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// FAQ Section
function FAQSection() {
  const faqs = [
    {
      question: "Is health insurance mandatory for students?",
      answer:
        "Yes, health insurance is mandatory for all students in Germany. If you're under 30 or in your first degree, you must have public health insurance.",
    },
    {
      question: "Can I apply without Anmeldung (address registration)?",
      answer:
        "Often yes, you can apply with a temporary address. Many providers allow you to update your address later. Check with your chosen provider for their specific requirements.",
    },
    {
      question: "How long does it take to get my insurance?",
      answer:
        "Usually within 1-5 business days. You'll receive a confirmation email and your insurance certificate (Versicherungsbescheinigung) which you need for university enrollment.",
    },
    {
      question: "Can I switch insurance providers later?",
      answer:
        "Yes, but typically only after the first 12 months minimum. You can switch during specific periods or when your circumstances change significantly.",
    },
    {
      question: "What's the difference between public and private insurance?",
      answer:
        "Public insurance has fixed rates and is mandatory for most students under 30. Private insurance offers more flexibility but is typically more expensive and required for older students or those in second degrees.",
    },
    {
      question: "Do I need insurance before arriving in Germany?",
      answer:
        "It's recommended to have insurance arranged before arrival, especially for visa applications. However, you can also apply shortly after arriving in Germany.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get answers to the most common questions about student health insurance in Germany.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="border border-gray-200 rounded-lg px-6 shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-blue-600 transition-colors duration-200">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed pt-2">{faq.answer}</AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

// Sticky CTA Section
function StickyCTASection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const insuranceLinks = [
    { name: "TK", url: "https://www.tk.de" },
    { name: "AOK", url: "https://www.aok.de" },
    { name: "Barmer", url: "https://www.barmer.de" },
    { name: "DAK", url: "https://www.dak.de" },
    { name: "SBK", url: "https://www.sbk.org" },
  ]

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-2xl"
        >
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
              <div className="text-center sm:text-left">
                <h3 className="font-semibold text-gray-900">Ready to get insured?</h3>
                <p className="text-sm text-gray-600">Choose your provider and start your application</p>
              </div>
              <div className="flex flex-wrap gap-2 justify-center">
                <Button
                  size="sm"
                  onClick={() => document.getElementById("comparison")?.scrollIntoView({ behavior: "smooth" })}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full"
                >
                  Compare Providers
                </Button>
                {insuranceLinks.map((link) => (
                  <Button
                    key={link.name}
                    size="sm"
                    variant="outline"
                    asChild
                    className="rounded-full border-blue-200 hover:bg-blue-50 bg-transparent"
                  >
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                      {link.name}
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}


export default function InsurancePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Breadcrumbs />
      <HeroSection />
      <OverviewSection />
      <InsuranceComparisonSection />
      <RegistrationStepsSection />
      <DocumentChecklistSection />
      <InfoBoxesSection />
      <FAQSection />
      <StickyCTASection />
      
    </div>
  )
}
