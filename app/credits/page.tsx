"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  GraduationCap,
  BookOpen,
  Award,
  CheckCircle,
  Download,
  ExternalLink,
  Mail,
  ArrowRight,
  Target,
  FileText,
  Calculator,
  ChevronDown,
  HelpCircle,
} from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import Breadcrumbs from "@/components/breadcrumbs"

// Floating Academic Icons Component
function FloatingIcons() {
  const icons = [
    { Icon: GraduationCap, delay: 0, x: "10%", y: "20%" },
    { Icon: BookOpen, delay: 0.5, x: "80%", y: "15%" },
    { Icon: Award, delay: 1, x: "15%", y: "70%" },
    { Icon: FileText, delay: 1.5, x: "85%", y: "75%" },
    { Icon: Calculator, delay: 2, x: "50%", y: "10%" },
    { Icon: Target, delay: 2.5, x: "70%", y: "60%" },
  ]

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map(({ Icon, delay, x, y }, index) => (
        <motion.div
          key={index}
          className="absolute opacity-10"
          style={{ left: x, top: y }}
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={{
            opacity: 0.1,
            scale: 1,
            rotate: 0,
            y: [0, -20, 0],
          }}
          transition={{
            duration: 2,
            delay,
            y: {
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            },
          }}
        >
          <Icon className="w-12 h-12 text-blue-600" />
        </motion.div>
      ))}
    </div>
  )
}

// Hero Section Component
function HeroSection() {
  const scrollToContent = () => {
    const contentSection = document.getElementById("content-section")
    if (contentSection) {
      contentSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23e2e8f0' fillOpacity='0.3'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-40 h-40 bg-purple-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-36 h-36 bg-indigo-200/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <FloatingIcons />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <div className="mb-6">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg"
            >
              <GraduationCap className="w-10 h-10 text-white" />
            </motion.div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Understand{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ECTS & Credits
            </span>{" "}
            at German Universities
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Learn how modules, credits, and grading work — and what you need to graduate from UDE.
          </p>

          <Button
            size="lg"
            onClick={scrollToContent}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Scroll Down to Learn
            <ChevronDown className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

// How Modules Work Section
function HowModulesWorkSection() {
  const steps = [
    {
      number: 1,
      title: "Attend Modules",
      description: "Join lectures and seminars",
      icon: BookOpen,
    },
    {
      number: 2,
      title: "Earn ECTS",
      description: "Complete assignments and exams",
      icon: Award,
    },
    {
      number: 3,
      title: "Complete Categories",
      description: "Fulfill all requirements",
      icon: Target,
    },
    {
      number: 4,
      title: "Graduate",
      description: "Receive your degree",
      icon: GraduationCap,
    },
  ]

  return (
    <section id="content-section" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">How Do Modules & ECTS Work?</h2>

          <div className="max-w-3xl mx-auto mb-12">
            <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-indigo-50">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  German university studies are split into different types of modules. Each module gives you a certain
                  number of ECTS credits. You must collect enough credits in each category to finish your degree.
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* Animated Timeline */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center relative"
              >
                {/* Step Circle */}
                <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
                  <step.icon className="w-10 h-10" />
                </div>

                {/* Step Content */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>

                {/* Arrow */}
                {index < steps.length - 1 && (
                  <ArrowRight className="hidden md:block absolute -right-4 top-10 w-6 h-6 text-gray-400" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Module Types Section
function ModuleTypesSection() {
  const moduleTypes = [
    {
      type: "Grundlagen (Basics)",
      icon: "📘",
      description: "Mandatory core subjects like Math, Programming. Mostly in 1st & 2nd semesters.",
      ects: "6–9 ECTS",
      color: "from-blue-500 to-blue-600",
    },
    {
      type: "Wahlpflicht (Elective Musts)",
      icon: "🧠",
      description: "Pick from a list, but must complete a set number. Example: Choose 3 from 10 advanced topics.",
      ects: "6–9 ECTS",
      color: "from-green-500 to-green-600",
    },
    {
      type: "Wahl (Free Electives)",
      icon: "🎲",
      description: "Choose anything you like — even from other faculties. Great for exploration.",
      ects: "3–6 ECTS",
      color: "from-purple-500 to-purple-600",
    },
    {
      type: "Seminar / Project / Internship",
      icon: "💬",
      description: "Practical modules with group work, presentations, or research projects.",
      ects: "6–12 ECTS",
      color: "from-orange-500 to-orange-600",
    },
    {
      type: "Thesis (Bachelor/Master)",
      icon: "🧪",
      description: "Your big final research project.",
      ects: "12–30 ECTS",
      color: "from-red-500 to-red-600",
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Types of Modules Explained</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Understanding different module types helps you plan your academic journey effectively.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {moduleTypes.map((module, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${module.color} flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      {module.icon}
                    </div>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
                      {module.ects}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {module.type}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed">{module.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Graduation Requirements Section
function GraduationRequirementsSection() {
  const [selectedDegree, setSelectedDegree] = useState("Bachelor")
  const [progressValues, setProgressValues] = useState({ basics: 0, electives: 0, seminars: 0, thesis: 0 })

  const degreeRequirements = {
    Bachelor: {
      total: 180,
      breakdown: [
        { category: "Basics (Grundlagen)", credits: 60, color: "bg-blue-500" },
        { category: "Electives (Wahlpflicht)", credits: 60, color: "bg-green-500" },
        { category: "Seminars/Internship", credits: 30, color: "bg-orange-500" },
        { category: "Thesis/Free Electives", credits: 30, color: "bg-purple-500" },
      ],
    },
    Master: {
      total: 120,
      breakdown: [
        { category: "Advanced Modules", credits: 45, color: "bg-blue-500" },
        { category: "Specialization", credits: 30, color: "bg-green-500" },
        { category: "Research Project", credits: 15, color: "bg-orange-500" },
        { category: "Master Thesis", credits: 30, color: "bg-purple-500" },
      ],
    },
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      const requirements = degreeRequirements[selectedDegree as keyof typeof degreeRequirements]
      setProgressValues({
        basics: (requirements.breakdown[0].credits / requirements.total) * 100,
        electives: (requirements.breakdown[1].credits / requirements.total) * 100,
        seminars: (requirements.breakdown[2].credits / requirements.total) * 100,
        thesis: (requirements.breakdown[3].credits / requirements.total) * 100,
      })
    }, 500)

    return () => clearTimeout(timer)
  }, [selectedDegree])

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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">How Many ECTS Do You Need?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            To graduate, you must collect the right number of ECTS in each category — not just the total number.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Degree Toggle */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-100 p-1 rounded-full">
              <Button
                variant={selectedDegree === "Bachelor" ? "default" : "ghost"}
                onClick={() => setSelectedDegree("Bachelor")}
                className="rounded-full px-6 py-2"
              >
                Bachelor
              </Button>
              <Button
                variant={selectedDegree === "Master" ? "default" : "ghost"}
                onClick={() => setSelectedDegree("Master")}
                className="rounded-full px-6 py-2"
              >
                Master
              </Button>
            </div>
          </div>

          {/* Requirements Display */}
          <motion.div
            key={selectedDegree}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <Card className="border-0 shadow-lg rounded-2xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {selectedDegree} Degree: {degreeRequirements[selectedDegree].total} ECTS
                </h3>
                {degreeRequirements[selectedDegree].breakdown.map((item, index) => (
                  <div key={index} className="flex items-center justify-between mb-3">
                    <span className="text-lg font-medium text-gray-700">{item.category}</span>
                    <span className="text-lg font-bold text-blue-600">{item.credits} ECTS</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Checklist Section
function ChecklistSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Checklist for Managing Your ECTS</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay organized and on track with these essential tips for managing your academic progress.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <ul className="list-none space-y-4">
                  <li className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
                    Track your modules in your university portal
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
                    Check ECTS per module before enrolling
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
                    Balance core subjects and electives each semester
                  </li>
                </ul>
                <Button className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full">
                  <Download className="w-5 h-5 mr-2" />
                  Download ECTS Guide (PDF)
                </Button>
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
      question: "What is ECTS?",
      answer:
        "ECTS (European Credit Transfer and Accumulation System) is a standard for comparing the study attainment and performance of students of higher education across the European Union and other collaborating countries.",
    },
    {
      question: "Can I take extra free electives?",
      answer:
        "Yes, you can take additional free electives beyond the required number. However, they may not count towards your degree requirements if you exceed the maximum allowed credits in that category. Check with your academic advisor for specific rules.",
    },
    {
      question: "Can I mix modules from other faculties?",
      answer:
        "Yes, for Wahl (Free Electives), you can often choose modules from other faculties or even other universities. This depends on your specific program requirements and university policies. Some programs encourage interdisciplinary learning.",
    },
    {
      question: "How is grading linked to ECTS?",
      answer:
        "ECTS credits measure workload and learning outcomes, not grades. You need to pass each module (usually with a grade of 4.0 or better in the German system) to earn the credits. The number of ECTS credits doesn't change based on your grade.",
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
            Get answers to the most common questions about ECTS credits and module requirements.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
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
                  className="border-0 shadow-md hover:shadow-lg transition-all duration-300 rounded-xl overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-blue-50 transition-colors duration-300">
                    <div className="flex items-center space-x-4 text-left">
                      <HelpCircle className="w-6 h-6 text-blue-600 flex-shrink-0" />
                      <span className="font-semibold text-gray-900">{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <div className="pl-10">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
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
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to plan your modules?</h2>
          <p className="text-lg text-blue-100 mb-8">
            Check the course catalog or contact your academic advisor to get started.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full text-lg font-semibold"
              asChild
            >
              <Link href="https://www.uni-due.de/studienangebote/" target="_blank" rel="noopener noreferrer">
                Open Course Catalog
                <ExternalLink className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-full text-lg font-semibold bg-transparent"
              asChild
            >
              <Link href="https://www.uni-due.de/studienberatung/" target="_blank" rel="noopener noreferrer">
                Contact Study Office
                <Mail className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Main Credits Page Component
export default function CreditsPage() {
  return (
    <div className="min-h-screen">
      <Breadcrumbs />
      <HeroSection />
      <HowModulesWorkSection />
      <ModuleTypesSection />
      <GraduationRequirementsSection />
      <ChecklistSection />
      <FAQSection />
      <CTASection />
    </div>
  )
}
