"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  BookOpen,
  Calendar,
  GraduationCap,
  ExternalLink,
  Mail,
  CheckCircle,
  AlertTriangle,
  Info,
  Monitor,
  Building,
  Search,
  Settings,
  MousePointer,
} from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import Breadcrumbs from "@/components/breadcrumbs"

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
          📚
        </motion.div>
        <motion.div
          className="absolute top-32 right-20 text-3xl"
          animate={{ y: [0, -15, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5 }}
        >
          🖥️
        </motion.div>
        <motion.div
          className="absolute bottom-32 left-20 text-3xl"
          animate={{ y: [0, -10, 0], rotate: [0, 3, 0] }}
          transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
        >
          🗓️
        </motion.div>
        <motion.div
          className="absolute bottom-20 right-10 text-4xl"
          animate={{ y: [0, -25, 0], rotate: [0, -3, 0] }}
          transition={{ duration: 3.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1.5 }}
        >
          ✅
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
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Courses</span>{" "}
            at UDE
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Your step-by-step guide to subject registration using the LSF portal — for lectures, labs, and seminars.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              asChild
            >
              <Link href="https://lsf.uni-due.de" target="_blank" rel="noopener noreferrer">
                Go to LSF Portal
                <ExternalLink className="ml-2 w-5 h-5" />
              </Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-2 border-gray-300 hover:border-blue-500 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 bg-transparent"
              asChild
            >
              <Link href="https://www.uni-due.de/isc" target="_blank" rel="noopener noreferrer">
                Check Registration Deadlines
                <Calendar className="ml-2 w-5 h-5" />
              </Link>
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
      title: "Go to LSF Portal",
      description: "Use the correct portal: LSF (Lehre, Studium, Forschung).",
      icon: Monitor,
      color: "from-blue-500 to-blue-600",
    },
    {
      step: "2",
      title: "Find Your Courses",
      description:
        'Navigate to "Vorlesungsverzeichnis" (Course Catalog). Select your program and semester, then browse lectures, seminars, tutorials, labs, etc.',
      icon: Search,
      color: "from-green-500 to-green-600",
    },
    {
      step: "3",
      title: "Register for Courses",
      description:
        'Look for the "belegen/abmelden" (register/unregister) button. Click it during the registration phase. Dates are usually set before the semester starts or in the first 2 weeks of lectures.',
      icon: MousePointer,
      color: "from-purple-500 to-purple-600",
    },
    {
      step: "4",
      title: "Watch the Deadlines",
      description: "Deadlines vary by faculty/ISC. Check on your faculty's webpage or course module descriptions.",
      icon: Calendar,
      color: "from-orange-500 to-orange-600",
    },
    {
      step: "5",
      title: "Check for Confirmation or Lottery",
      description:
        "Some courses have limited seats with lottery selection. Check your email or the LSF status (zugelassen = accepted) to confirm your spot.",
      icon: CheckCircle,
      color: "from-teal-500 to-teal-600",
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
            Follow these 5 steps to successfully register for your courses at UDE.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
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
                    <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
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

// Important Notes Section
function ImportantNotesSection() {
  const notes = [
    {
      icon: AlertTriangle,
      title: "Course Registration ≠ Exam Registration",
      description:
        "Registering for a subject is not the same as exam registration. You must register for exams separately in HISinOne.",
      color: "from-red-500 to-red-600",
    },
    {
      icon: Mail,
      title: "Manual Registration Sometimes Required",
      description:
        "Some seminars/projects require manual signup via email, Moodle, or direct communication with the lecturer.",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: Settings,
      title: "Moodle-based Registration",
      description:
        "For certain departments (especially non-ISC), registration happens via Moodle self-enrollment rather than LSF.",
      color: "from-blue-500 to-blue-600",
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
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Info className="w-8 h-8 text-blue-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Important Things to Know</h2>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Key information to keep in mind during course registration.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {notes.map((note, index) => (
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
                <CardContent className="p-6">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${note.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <note.icon className="w-8 h-8 text-white" /> {/* Use the icon function directly */}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {note.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{note.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Registration Deadlines Section
function RegistrationDeadlinesSection() {
  const periods = [
    {
      semester: "Winter Semester (WiSe)",
      period: "Before semester start or during first 2 weeks of lectures",
      icon: "❄️",
      color: "from-blue-500 to-cyan-500",
    },
    {
      semester: "Summer Semester (SoSe)",
      period: "Same — check specific module pages or ISC websites",
      icon: "☀️",
      color: "from-orange-500 to-yellow-500",
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Registration Deadlines</h2>
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
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl">
                <CardContent className="p-8 text-center">
                  <div
                    className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${period.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <span className="text-3xl">{period.icon}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {period.semester}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{period.period}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Quick Links Section
function QuickLinksSection() {
  const links = [
    {
      title: "Go to LSF Portal",
      description: "Official subject registration portal.",
      url: "https://lsf.uni-due.de",
      icon: ({ className }) => <Monitor className={className} />, // Use a function to return the icon
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Check Registration Deadlines",
      description: "Find the current registration windows (ISC/faculty).",
      url: "https://www.uni-due.de/isc",
      icon: ({ className }) => <Calendar className={className} />, // Use a function to return the icon
      color: "from-green-500 to-green-600",
    },
    {
      title: "Contact ISC / Study Office",
      description: "For help with course selection and registration.",
      url: "mailto:isc@uni-due.de",
      icon: ({ className }) => <Building className={className} />, // Use a function to return the icon
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "Guide to Exam Registration (HISinOne)",
      description: "Learn how to register for exams — separate from subjects.",
      url: "/exam-process",
      icon: ({ className }) => <GraduationCap className={className} />, // Use a function to return the icon
      color: "from-orange-500 to-orange-600",
    },
  ]

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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Quick Links</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Essential resources for course registration at UDE.</p>
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
                    <p className="text-gray-600 text-sm leading-relaxed">{link.description}</p>
                    <Button
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full"
                      asChild
                    >
                      <a
                        href={link.url}
                        target={link.url.startsWith("http") ? "_blank" : "_self"}
                        rel={link.url.startsWith("http") ? "noopener noreferrer" : ""}
                      >
                        {link.url.startsWith("http") ? "Visit" : "Learn More"}
                        <ExternalLink className="ml-2 w-4 h-4" />
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
      question: "Do I need to register for every course?",
      answer:
        "Yes — especially for labs, tutorials, and seminars that require registration. Some lectures may not require registration, but it's always safer to register.",
    },
    {
      question: "What if the course is full?",
      answer:
        'Some courses use lotteries. Check LSF for "zugelassen" (accepted) status. If you\'re not accepted, you may be put on a waiting list.',
    },
    {
      question: "What happens if I miss the registration window?",
      answer:
        "You may not be able to attend that course this semester. Contact the lecturer or ISC to see if late registration is possible.",
    },
    {
      question: "Is registering for a subject the same as for the exam?",
      answer:
        "No. Subject registration is via LSF, exam registration is via HISinOne. These are two separate processes that must both be completed.",
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
            Get answers to the most common questions about course registration at UDE.
          </p>
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
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center space-x-3 mb-6">
            <BookOpen className="w-8 h-8" />
            <h2 className="text-3xl md:text-4xl font-bold">Ready to register for courses?</h2>
          </div>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Check deadlines and register now on LSF. Don't miss out on the courses you need!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              asChild
            >
              <Link href="https://lsf.uni-due.de" target="_blank" rel="noopener noreferrer">
                Go to LSF Portal
                <ExternalLink className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 bg-transparent"
              asChild
            >
              <Link href="https://www.uni-due.de/isc" target="_blank" rel="noopener noreferrer">
                Check Deadlines
                <Calendar className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Main Subject Registration Page Component
export default function SubjectRegistrationPage() {
  return (
    <div className="min-h-screen">
      <Breadcrumbs />
      <HeroSection />
      <StepGuideSection />
      <ImportantNotesSection />
      <RegistrationDeadlinesSection />
      <QuickLinksSection />
      <FAQSection />
      <CTASection />
    </div>
  )
}
