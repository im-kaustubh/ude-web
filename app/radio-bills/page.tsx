"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Menu,
  X,
  ArrowLeft,
  MapPin,
  BookOpen,
  Users,
  Calendar,
  ChevronRight,
  Briefcase,
  ExternalLink,
  MessageCircle,
  Mail,
  CheckCircle,
  UserCheck,
  Home,
  Euro,
  AlertTriangle,
  Info,
  DollarSign,
  FileText,
} from "lucide-react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import Breadcrumbs from "@/components/breadcrumbs"
import Navigation from "@/components/navigation"


// Hero Section Component
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20">
      {/* Floating Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 text-4xl"
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          📺
        </motion.div>
        <motion.div
          className="absolute top-32 right-20 text-3xl"
          animate={{ y: [0, -15, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5 }}
        >
          📻
        </motion.div>
        <motion.div
          className="absolute bottom-32 left-20 text-3xl"
          animate={{ y: [0, -10, 0], rotate: [0, 3, 0] }}
          transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
        >
          💶
        </motion.div>
        <motion.div
          className="absolute bottom-20 right-10 text-4xl"
          animate={{ y: [0, -25, 0], rotate: [0, -3, 0] }}
          transition={{ duration: 3.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1.5 }}
        >
          🏠
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
            What is{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Rundfunkbeitrag
            </span>{" "}
            (Broadcast Fee) in Germany?
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Understand the mandatory €18.36/month radio & TV fee — even if you don't own a TV.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => {
                const overviewSection = document.getElementById("overview-section")
                if (overviewSection) {
                  overviewSection.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              Learn How It Works
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-2 border-gray-300 hover:border-blue-500 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 bg-transparent"
              asChild
            >
              <a href="https://www.rundfunkbeitrag.de" target="_blank" rel="noopener noreferrer">
                Register at Rundfunkbeitrag.de
                <ExternalLink className="ml-2 w-5 h-5" />
              </a>
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
    <section id="overview-section" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">The Broadcast Fee — Explained</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Understanding Germany's mandatory media contribution system.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="h-full border-0 shadow-lg rounded-2xl">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                    <Euro className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">€18.36/month</h3>
                    <p className="text-gray-600">Per household</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Everyone in Germany must pay €18.36 per household for public TV, radio, and online services. It funds
                  ARD, ZDF, and Deutschlandradio — even if you don't use them.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="h-full border-0 shadow-lg rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center">
                    <Info className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Important</h3>
                    <p className="text-gray-600">No exceptions</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  💡 It doesn't matter if you have no TV or radio — it's still mandatory. The fee applies to every
                  household in Germany.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// WG Section
function WGSection() {
  const wgInfo = [
    {
      title: "One Fee Per Apartment",
      description: "Only one person per apartment pays €18.36/month.",
      icon: Home,
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Split the Cost",
      description: "Split it however you like — e.g., 3 roommates → €6.12 each.",
      icon: DollarSign,
      color: "from-green-500 to-green-600",
    },
    {
      title: "How It Works",
      description: "The letter comes to your address → one person registers & pays.",
      icon: FileText,
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "The Rest Do This",
      description: "Others send their share directly to the person paying.",
      icon: Users,
      color: "from-orange-500 to-orange-600",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Living in a WG? Don't Worry!</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Shared flats only need one registration per apartment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {wgInfo.map((info, index) => {
            const Icon = info.icon
            return (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl">
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${info.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {info.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{info.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// Step-by-Step Guide Section
function StepGuideSection() {
  const steps = [
    {
      step: "1",
      title: "Receive a Letter",
      description: "The Rundfunkbeitrag office sends a letter to the address.",
      icon: Mail,
    },
    {
      step: "2",
      title: "Register Someone",
      description: "One roommate registers online at rundfunkbeitrag.de.",
      icon: UserCheck,
    },
    {
      step: "3",
      title: "Pay the Fee",
      description: "€18.36 per month per household.",
      icon: Euro,
    },
    {
      step: "4",
      title: "Share the Cost",
      description: "Others transfer their share to the payer.",
      icon: Users,
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Simple 4-step process for handling the broadcast fee in shared accommodation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl font-bold text-white">{step.step}</span>
                    </div>
                    <Icon className="w-8 h-8 mx-auto mb-4 text-blue-600" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Card className="border-0 shadow-lg rounded-2xl bg-gradient-to-r from-blue-50 to-purple-50 max-w-2xl mx-auto">
            <CardContent className="p-6">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <Info className="w-6 h-6 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-900">Pro Tip</h3>
              </div>
              <p className="text-gray-600">
                It doesn't matter who registers — just agree among roommates beforehand to avoid confusion.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

// Student Exemptions Section
function StudentExemptionsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Can Students Be Exempt?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Limited exemptions available for specific circumstances.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="h-full border-0 shadow-lg rounded-2xl border-l-4 border-l-green-500">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-green-700">
                  <CheckCircle className="w-6 h-6" />
                  <span>✅ Eligible</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  If you receive BAföG with no parental support, you can apply for exemption.
                </p>
                <Button className="mt-4 bg-green-600 hover:bg-green-700 text-white rounded-full" asChild>
                  <a href="https://www.rundfunkbeitrag.de" target="_blank" rel="noopener noreferrer">
                    Check Exemption Rules
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="h-full border-0 shadow-lg rounded-2xl border-l-4 border-l-red-500">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-red-700">
                  <X className="w-6 h-6" />
                  <span>❌ Not Eligible</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">Being a student alone is not a reason for exemption.</p>
                <div className="mt-4 p-4 bg-red-50 rounded-xl">
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                    <p className="text-red-700 text-sm">
                      If you're not on BAföG, you must pay — even if you're broke or don't use TV/radio.
                    </p>
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

// TL;DR Section
function TLDRSection() {
  const facts = [
    "€18.36 per household — not per person.",
    "One person registers, others share the cost.",
    "No TV? Doesn't matter — still pay.",
    "Exemptions possible only with BAföG without parental support.",
    "Register or learn more at www.rundfunkbeitrag.de.",
  ]

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Quick Facts — Rundfunkbeitrag</h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">Everything you need to know in 30 seconds.</p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {facts.map((fact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-2xl p-4"
              >
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <p className="text-lg">{fact}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// FAQ Section
function FAQSection() {
  const faqs = [
    {
      question: "Do I pay if I have no TV?",
      answer:
        "Yes — it's for TV, radio, and online services — mandatory. The fee applies regardless of whether you own any devices.",
    },
    {
      question: "Who should register in my WG?",
      answer:
        "Anyone — roommates decide together. It doesn't matter who registers as long as one person takes responsibility for the payment.",
    },
    {
      question: "Do we each pay €18.36?",
      answer: "No — €18.36 per apartment. You can split this cost among all roommates however you agree.",
    },
    {
      question: "What happens if no one registers?",
      answer: "You may receive fines or retroactive bills. It's better to register proactively to avoid penalties.",
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
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Common questions about the German broadcast fee.</p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="border-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl shadow-lg overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-blue-100/50 transition-colors duration-200">
                    <span className="text-left font-semibold text-gray-900">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

// CTA Section
function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="border-0 shadow-xl rounded-2xl overflow-hidden">
            <CardContent className="p-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <AlertTriangle className="w-8 h-8" />
                <h2 className="text-3xl font-bold">Ready to register?</h2>
              </div>
              <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
                Don't wait — avoid fines and register now. The process is simple and takes just a few minutes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full text-lg font-semibold"
                  asChild
                >
                  <a href="https://www.rundfunkbeitrag.de" target="_blank" rel="noopener noreferrer">
                    Register Now
                    <ExternalLink className="ml-2 w-5 h-5" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-full text-lg font-semibold bg-transparent"
                  asChild
                >
                  <a href="https://www.rundfunkbeitrag.de/faq" target="_blank" rel="noopener noreferrer">
                    FAQ on Broadcast Fee
                    <MessageCircle className="ml-2 w-5 h-5" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

// Footer Component
function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold">newInTown</span>
          </div>
          <p className="text-gray-400 mb-6">Your trusted companion for navigating student life in Germany.</p>
          <p className="text-gray-400 text-sm">© {currentYear} newInTown. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

// Main Radio Bills Page Component
export default function RadioBillsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Breadcrumbs />
      <HeroSection />
      <OverviewSection />
      <WGSection />
      <StepGuideSection />
      <StudentExemptionsSection />
      <TLDRSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  )
}
