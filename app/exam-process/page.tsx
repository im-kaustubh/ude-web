"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
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
  Clock,
  Mail,
  CheckCircle,
  AlertTriangle,
  Info,
  Monitor,
  ClipboardCheck,
  CalendarDays,
  Building,
} from "lucide-react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import Breadcrumbs from "@/components/breadcrumbs"
import Navigation from "@/components/navigation"

// Navigation Component (reused from other pages)


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
          🖥️
        </motion.div>
        <motion.div
          className="absolute top-32 right-20 text-3xl"
          animate={{ y: [0, -15, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5 }}
        >
          📜
        </motion.div>
        <motion.div
          className="absolute bottom-32 left-20 text-3xl"
          animate={{ y: [0, -10, 0], rotate: [0, 3, 0] }}
          transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
        >
          ✅
        </motion.div>
        <motion.div
          className="absolute bottom-20 right-10 text-4xl"
          animate={{ y: [0, -25, 0], rotate: [0, -3, 0] }}
          transition={{ duration: 3.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1.5 }}
        >
          ⏰
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
            How to Register for{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Exams</span> at
            University of Duisburg-Essen
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Follow these steps to register for exams at UDE using HISinOne or LSF — don't miss your deadlines!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              asChild
            >
              <a href="https://hisinone.uni-due.de" target="_blank" rel="noopener noreferrer">
                Go to HISinOne
                <ExternalLink className="ml-2 w-5 h-5" />
              </a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-2 border-gray-300 hover:border-blue-500 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 bg-transparent"
              asChild
            >
              <a href="https://www.uni-due.de/pruefungswesen" target="_blank" rel="noopener noreferrer">
                Check Exam Dates
                <Calendar className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Step-by-Step Guide Section
function StepGuideSection() {
  const steps = [
    {
      step: "1",
      title: "Login to HISinOne (or LSF)",
      description: "Go to https://hisinone.uni-due.de and log in with your UDE credentials.",
      icon: Monitor,
      color: "from-blue-500 to-blue-600",
    },
    {
      step: "2",
      title: "Navigate to Exam Registration",
      description: 'Click "My Studies" → "Planner of Studies with Module Plan" to view your program structure.',
      icon: BookOpen,
      color: "from-green-500 to-green-600",
    },
    {
      step: "3",
      title: "Select Module & Register",
      description:
        'Click on the specific module/course, then click "Register for Exam". Registration button appears only during the exam registration window.',
      icon: ClipboardCheck,
      color: "from-purple-500 to-purple-600",
    },
    {
      step: "4",
      title: "Check Registration Period",
      description:
        "🕒 Mid-November → Mid-January (WiSe) \n🕒 Mid-May → Mid-July (SoSe) \nCheck official dates at https://www.uni-due.de/pruefungswesen.",
      icon: CalendarDays,
      color: "from-orange-500 to-orange-600",
    },
    {
      step: "5",
      title: "Get Confirmation Email",
      description: "✅ After registering, you'll receive a confirmation email. Save it as proof.",
      icon: Mail,
      color: "from-teal-500 to-teal-600",
    },
    {
      step: "6",
      title: "Important Rules",
      description:
        '🚨 No registration = No exam! \nYou can withdraw ("Abmelden") before the withdrawal deadline — check dates carefully.',
      icon: AlertTriangle,
      color: "from-red-500 to-red-600",
    },
    {
      step: "7",
      title: "Check Your Exams Anytime",
      description: 'Navigate to "My Studies → My Exams" to view your registered exams and check status.',
      icon: CheckCircle,
      color: "from-indigo-500 to-indigo-600",
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Step-by-Step Registration Guide</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Follow these 7 steps to successfully register for your exams at UDE.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-r ${step.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        <span className="text-lg font-bold text-white">{step.step}</span>
                      </div>
                      <Icon className="w-6 h-6 text-gray-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">{step.description}</p>
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

// Important Rules Section
function ImportantRulesSection() {
  const rules = [
    {
      icon: AlertTriangle,
      title: "You must register online",
      description: "Verbal registration is not valid.",
      color: "text-red-600",
    },
    {
      icon: Clock,
      title: "You can withdraw (Abmelden)",
      description: "Before the deadline without penalty.",
      color: "text-orange-600",
    },
    {
      icon: X,
      title: "Miss the registration window",
      description: "You cannot take the exam.",
      color: "text-red-600",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <AlertTriangle className="w-8 h-8 text-red-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Important to Know</h2>
          </div>
          <p className="text-xl text-red-700 font-semibold">No Registration = No Exam!</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {rules.map((rule, index) => {
            const Icon = rule.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl bg-white">
                  <CardContent className="p-6 text-center">
                    <Icon className={`w-12 h-12 mx-auto mb-4 ${rule.color}`} />
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{rule.title}</h3>
                    <p className="text-gray-600">{rule.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            asChild
          >
            <a href="https://www.uni-due.de/pruefungswesen" target="_blank" rel="noopener noreferrer">
              Check registration periods here
              <ExternalLink className="ml-2 w-5 h-5" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

// Exam Periods Section
function ExamPeriodsSection() {
  const periods = [
    {
      semester: "Winter Semester (WiSe)",
      period: "Mid-November → Mid-January",
      icon: "❄️",
      color: "from-blue-500 to-cyan-500",
    },
    {
      semester: "Summer Semester (SoSe)",
      period: "Mid-May → Mid-July",
      icon: "☀️",
      color: "from-orange-500 to-yellow-500",
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
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Registration Periods</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Mark these dates in your calendar to never miss a registration deadline.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {periods.map((period, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden">
                <CardContent className="p-8 text-center">
                  <div
                    className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${period.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <span className="text-3xl">{period.icon}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {period.semester}
                  </h3>
                  <p className="text-lg text-gray-600 font-semibold">{period.period}</p>
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
          className="mt-12 text-center"
        >
          <Card className="border-0 shadow-lg rounded-2xl bg-gradient-to-r from-blue-50 to-purple-50 max-w-2xl mx-auto">
            <CardContent className="p-6">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <Calendar className="w-6 h-6 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-900">Pro Tip</h3>
              </div>
              <p className="text-gray-600">
                Exact dates are published every semester at{" "}
                <a
                  href="https://www.uni-due.de/pruefungswesen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline font-semibold"
                >
                  uni-due.de/pruefungswesen
                </a>
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

// Quick Links Section
function QuickLinksSection() {
  const links = [
    {
      title: "Go to HISinOne",
      description: "Register for exams online.",
      url: "https://hisinone.uni-due.de",
      icon: Monitor,
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Check Exam Dates",
      description: "Check current registration periods.",
      url: "https://www.uni-due.de/pruefungswesen",
      icon: Calendar,
      color: "from-green-500 to-green-600",
    },
    {
      title: "Contact Exam Office",
      description: "For questions about exams.",
      url: "mailto:pruefungswesen@uni-due.de",
      icon: Building,
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "Withdrawing Guide",
      description: "Learn how to cancel a registration.",
      url: "#faq",
      icon: Info,
      color: "from-orange-500 to-orange-600",
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Quick Links</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Essential resources for exam registration at UDE.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {links.map((link, index) => {
            const Icon = link.icon
            return (
              <motion.div
                key={index}
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
                      className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${link.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {link.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm">{link.description}</p>
                    <Button
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full text-sm"
                      asChild
                    >
                      <a
                        href={link.url}
                        target={link.url.startsWith("http") ? "_blank" : "_self"}
                        rel={link.url.startsWith("http") ? "noopener noreferrer" : ""}
                      >
                        {link.url.startsWith("http") ? "Visit" : "Learn More"}
                        {link.url.startsWith("http") && <ExternalLink className="ml-2 w-4 h-4" />}
                      </a>
                    </Button>
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

// FAQ Section
function FAQSection() {
  const faqs = [
    {
      question: "Do I have to register for every exam?",
      answer:
        "Yes — No registration means no exam participation. You must register for each exam individually through HISinOne during the registration period.",
    },
    {
      question: "What if I miss the deadline?",
      answer:
        "You cannot take the exam that semester. You'll have to wait for the next exam period and register again during the next registration window.",
    },
    {
      question: "Can I withdraw from an exam?",
      answer:
        'Yes — but only before the withdrawal deadline. Look for the "Abmelden" button in HISinOne and check the specific withdrawal dates for each exam.',
    },
    {
      question: "How do I know if I am registered?",
      answer:
        'Check under "My Studies → My Exams" in HISinOne. You should also receive a confirmation email after successful registration.',
    },
  ]

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Common questions about exam registration at UDE.</p>
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
                  className="border-0 bg-white rounded-2xl shadow-lg overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-blue-50 transition-colors duration-200">
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
    <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Clock className="w-8 h-8" />
            <h2 className="text-3xl md:text-4xl font-bold">Ready to register for exams?</h2>
          </div>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Don't wait — check dates and register now. Missing the deadline means missing your exam!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              asChild
            >
              <a href="https://hisinone.uni-due.de" target="_blank" rel="noopener noreferrer">
                Go to HISinOne
                <ExternalLink className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-full text-lg font-semibold bg-transparent"
              asChild
            >
              <a href="https://www.uni-due.de/pruefungswesen" target="_blank" rel="noopener noreferrer">
                Check Exam Dates
                <Calendar className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </div>
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

// Main Exam Process Page Component
export default function ExamProcessPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Breadcrumbs />
      <HeroSection />
      <StepGuideSection />
      <ImportantRulesSection />
      <ExamPeriodsSection />
      <QuickLinksSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  )
}
