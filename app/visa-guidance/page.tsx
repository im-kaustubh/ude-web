"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import {
  FileText,
  MapPin,
  Clock,
  CheckCircle,
  AlertCircle,
  Download,
  ExternalLink,
  Home,
  Building,
  CreditCard,
  Shield,
  GraduationCap,
  Plane,
  Calendar,
  Phone,
  Mail,
  ChevronRight,
  User,
  School,
  RefreshCw,
  HelpCircle,
  Globe,
  Stamp,
  ClipboardCheck,
  Users,
} from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import Breadcrumbs from "@/components/breadcrumbs"

export default function VisaGuidancePage() {
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({})
  const [activeSection, setActiveSection] = useState("anmeldung")

  const handleCheckboxChange = (id: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  // Hero Section
  const HeroSection = () => (
    <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23e2e8f0' fillOpacity='0.2'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-40 h-40 bg-purple-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-36 h-36 bg-indigo-200/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Background Icons */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-32 left-20">
          <Stamp className="w-12 h-12 text-blue-600" />
        </div>
        <div className="absolute top-48 right-32">
          <FileText className="w-10 h-10 text-purple-600" />
        </div>
        <div className="absolute bottom-40 left-32">
          <Building className="w-11 h-11 text-green-600" />
        </div>
        <div className="absolute bottom-32 right-20">
          <User className="w-10 h-10 text-orange-600" />
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >


          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Visa & Residence{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Guidance</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Your trusted guide to Anmeldung, Residence Permit, and Visa Extension for international students at
            University of Duisburg-Essen.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center max-w-lg mx-auto sm:max-w-none">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              onClick={() => {
                const stepsSection = document.getElementById("steps-section")
                if (stepsSection) {
                  stepsSection.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              🧾 Start Step 1
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-2 border-gray-300 hover:border-blue-500 hover:bg-blue-50 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 bg-white/80 backdrop-blur-sm"
              onClick={() => {
                const checklistSection = document.getElementById("checklist-section")
                if (checklistSection) {
                  checklistSection.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              📥 Download Checklist
              <Download className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )

  // Quick Overview Section
  const QuickOverviewSection = () => {
    const overviewCards = [
      {
        id: "anmeldung",
        title: "Anmeldung",
        subtitle: "City Registration",
        description: "Register your address with the city - required within 14 days of arrival",
        icon: Building,
        color: "from-blue-500 to-blue-600",
        duration: "15-30 mins",
        priority: "High Priority",
      },
      {
        id: "residence",
        title: "Aufenthaltstitel",
        subtitle: "Residence Permit",
        description: "Official permit to stay in Germany for studies - apply within 90 days",
        icon: FileText,
        color: "from-green-500 to-green-600",
        duration: "4-8 weeks",
        priority: "Essential",
      },
      {
        id: "extension",
        title: "Visa Extension",
        subtitle: "Renewals & FAQs",
        description: "Extend your stay, change address, or handle special situations",
        icon: RefreshCw,
        color: "from-purple-500 to-purple-600",
        duration: "Varies",
        priority: "As Needed",
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Quick Overview</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Three essential processes every international student must complete in Germany.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {overviewCards.map((card, index) => {
              const IconComponent = card.icon
              return (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group cursor-pointer"
                  onClick={() => {
                    setActiveSection(card.id)
                    const stepsSection = document.getElementById("steps-section")
                    if (stepsSection) {
                      stepsSection.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                >
                  <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden">
                    <CardContent className="p-8 text-center">
                      <div
                        className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${card.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        <IconComponent className="w-10 h-10 text-white" />
                      </div>

                      <div className="mb-4">
                        <Badge variant="secondary" className="mb-2">
                          {card.priority}
                        </Badge>
                        <h3 className="text-2xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                          {card.title}
                        </h3>
                        <p className="text-blue-600 font-medium">{card.subtitle}</p>
                      </div>

                      <p className="text-gray-600 mb-6 leading-relaxed">{card.description}</p>

                      <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                        <Clock className="w-4 h-4" />
                        <span>{card.duration}</span>
                      </div>
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
  const StepByStepSection = () => {
    const steps = [
      {
        id: "anmeldung",
        title: "Step 1: Anmeldung (City Registration)",
        icon: Building,
        color: "from-blue-500 to-blue-600",
        content: {
          purpose:
            "Register your address with the city authorities. This is legally required within 14 days of moving to Germany and is needed for almost everything else.",
          where: "Bürgeramt (City Office) - Duisburg",
          documents: [
            "Valid Passport",
            "Wohnungsgeberbestätigung (Landlord Confirmation Form)",
            "Rental Contract (Mietvertrag)",
            "Completed Anmeldung Form",
          ],
          process: [
            "Book appointment online via QTermin",
            "Gather all required documents",
            "Arrive 10 minutes early with originals + copies",
            "Complete the registration process",
            "Receive Anmeldebescheinigung (Registration Certificate)",
          ],
          tips: [
            "Book appointment as early as possible - slots fill up quickly",
            "Bring both original documents and photocopies",
            "The process usually takes 15-30 minutes",
            "You'll receive confirmation immediately",
          ],
          links: [
            {
              title: "Book Anmeldung Appointment",
              url: "https://termine.duisburg.de/",
              description: "Official QTermin booking system for Duisburg",
            },
          ],
        },
      },
      {
        id: "residence",
        title: "Step 2: Aufenthaltstitel (Residence Permit)",
        icon: FileText,
        color: "from-green-500 to-green-600",
        content: {
          purpose:
            "Official permit allowing you to stay in Germany for studies. Required for non-EU students staying longer than 90 days.",
          where: "Ausländerbehörde (Immigration Office) - Duisburg",
          documents: [
            "Valid Passport",
            "Biometric Photos (35mm x 45mm)",
            "Proof of Financial Means (€11,208/year or blocked account)",
            "Health Insurance Confirmation",
            "Enrollment Certificate (Immatrikulationsbescheinigung)",
            "Anmeldebescheinigung (from Step 1)",
            "Application Form (filled out)",
          ],
          process: [
            "Apply 6-8 weeks before your current visa expires",
            "Book appointment online",
            "Submit application with all documents",
            "Pay processing fee (€100-110)",
            "Wait for processing (4-8 weeks)",
            "Collect your residence permit card",
          ],
          tips: [
            "Start the process early - don't wait until the last minute",
            "Processing time is typically 4-8 weeks",
            "Validity is usually 1-2 years (renewable)",
            "Keep your receipt - it serves as temporary permission to stay",
          ],
          links: [
            {
              title: "Ausländerbehörde Duisburg",
              url: "https://www.duisburg.de/microsites/buergerservice/dienstleistungen_a_z/auslaenderwesen.php",
              description: "Official immigration office information",
            },
          ],
        },
      },
      {
        id: "extension",
        title: "Step 3: Visa Extension & Special Cases",
        icon: RefreshCw,
        color: "from-purple-500 to-purple-600",
        content: {
          purpose: "Handle renewals, address changes, and special situations during your stay in Germany.",
          where: "Ausländerbehörde (Immigration Office) - Duisburg",
          documents: [
            "Current residence permit",
            "Updated enrollment certificate",
            "Proof of academic progress",
            "Updated financial proof",
            "New Anmeldung (if address changed)",
          ],
          process: [
            "Apply 6-8 weeks before expiration",
            "Book renewal appointment",
            "Submit updated documents",
            "Pay renewal fee",
            "Receive extended permit",
          ],
          tips: [
            "Notify Ausländerbehörde of address changes within 1 week",
            "Keep academic records up to date",
            "Job-seeking visa available after graduation",
            "Late applications may result in penalties",
          ],
          links: [
            {
              title: "Visa Extension Information",
              url: "https://www.duisburg.de/microsites/buergerservice/dienstleistungen_a_z/auslaenderwesen.php",
              description: "Detailed extension procedures",
            },
          ],
        },
      },
    ]

    return (
      <section id="steps-section" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Step-by-Step Guide</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Follow these detailed instructions to complete your visa and residence requirements.
            </p>
          </motion.div>

          <Accordion
            type="single"
            collapsible
            value={activeSection}
            onValueChange={setActiveSection}
            className="space-y-6"
          >
            {steps.map((step, index) => {
              const IconComponent = step.icon
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <AccordionItem value={step.id} className="border-0">
                    <Card className="shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden">
                      <AccordionTrigger className="hover:no-underline p-0">
                        <CardHeader className="w-full p-8">
                          <div className="flex items-center space-x-6">
                            <div
                              className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center shadow-lg`}
                            >
                              <IconComponent className="w-8 h-8 text-white" />
                            </div>
                            <div className="text-left">
                              <CardTitle className="text-2xl font-bold text-gray-900">{step.title}</CardTitle>
                            </div>
                          </div>
                        </CardHeader>
                      </AccordionTrigger>

                      <AccordionContent className="p-0">
                        <CardContent className="px-8 pb-8">
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Left Column */}
                            <div className="space-y-6">
                              {/* Purpose */}
                              <div>
                                <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                                  <HelpCircle className="w-5 h-5 mr-2 text-blue-600" />
                                  Purpose & Importance
                                </h4>
                                <p className="text-gray-600 leading-relaxed">{step.content.purpose}</p>
                              </div>

                              {/* Where */}
                              <div>
                                <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                                  <MapPin className="w-5 h-5 mr-2 text-green-600" />
                                  Where to Go
                                </h4>
                                <p className="text-gray-600">{step.content.where}</p>
                              </div>

                              {/* Required Documents */}
                              <div>
                                <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                                  <FileText className="w-5 h-5 mr-2 text-orange-600" />
                                  Required Documents
                                </h4>
                                <ul className="space-y-2">
                                  {step.content.documents.map((doc, idx) => (
                                    <li key={idx} className="flex items-start space-x-3">
                                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                      <span className="text-gray-600">{doc}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>

                            {/* Right Column */}
                            <div className="space-y-6">
                              {/* Process */}
                              <div>
                                <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                                  <ClipboardCheck className="w-5 h-5 mr-2 text-purple-600" />
                                  Process Steps
                                </h4>
                                <ol className="space-y-3">
                                  {step.content.process.map((processStep, idx) => (
                                    <li key={idx} className="flex items-start space-x-3">
                                      <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">
                                        {idx + 1}
                                      </div>
                                      <span className="text-gray-600">{processStep}</span>
                                    </li>
                                  ))}
                                </ol>
                              </div>

                              {/* Tips */}
                              <div>
                                <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                                  <AlertCircle className="w-5 h-5 mr-2 text-yellow-600" />
                                  Important Tips
                                </h4>
                                <ul className="space-y-2">
                                  {step.content.tips.map((tip, idx) => (
                                    <li key={idx} className="flex items-start space-x-3">
                                      <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                                      <span className="text-gray-600 text-sm">{tip}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {/* Links */}
                              <div>
                                <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                                  <ExternalLink className="w-5 h-5 mr-2 text-blue-600" />
                                  Official Links
                                </h4>
                                <div className="space-y-3">
                                  {step.content.links.map((link, idx) => (
                                    <a
                                      key={idx}
                                      href={link.url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="block p-4 bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors duration-200 group"
                                    >
                                      <div className="flex items-center justify-between">
                                        <div>
                                          <h5 className="font-semibold text-blue-900 group-hover:text-blue-700">
                                            {link.title}
                                          </h5>
                                          <p className="text-sm text-blue-600">{link.description}</p>
                                        </div>
                                        <ExternalLink className="w-5 h-5 text-blue-600" />
                                      </div>
                                    </a>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </AccordionContent>
                    </Card>
                  </AccordionItem>
                </motion.div>
              )
            })}
          </Accordion>
        </div>
      </section>
    )
  }

  // Interactive Checklist Section
  const InteractiveChecklistSection = () => {
    const checklistItems = [
      { id: "arrival", label: "Arrived in Germany", category: "arrival" },
      { id: "accommodation", label: "Found accommodation", category: "arrival" },
      { id: "landlord-form", label: "Got Wohnungsgeberbestätigung from landlord", category: "anmeldung" },
      { id: "anmeldung-appointment", label: "Booked Anmeldung appointment", category: "anmeldung" },
      { id: "anmeldung-done", label: "Completed Anmeldung", category: "anmeldung" },
      { id: "bank-account", label: "Opened German bank account", category: "essentials" },
      { id: "health-insurance", label: "Obtained health insurance", category: "essentials" },
      { id: "enrollment", label: "Got enrollment certificate from UDE", category: "university" },
      { id: "residence-appointment", label: "Booked residence permit appointment", category: "residence" },
      { id: "residence-documents", label: "Gathered all residence permit documents", category: "residence" },
      { id: "residence-applied", label: "Applied for residence permit", category: "residence" },
      { id: "residence-received", label: "Received residence permit", category: "residence" },
    ]

    const categories = [
      { id: "arrival", label: "Arrival", color: "bg-blue-100 text-blue-800" },
      { id: "anmeldung", label: "Anmeldung", color: "bg-green-100 text-green-800" },
      { id: "essentials", label: "Essentials", color: "bg-orange-100 text-orange-800" },
      { id: "university", label: "University", color: "bg-purple-100 text-purple-800" },
      { id: "residence", label: "Residence Permit", color: "bg-red-100 text-red-800" },
    ]

    const completedCount = Object.values(checkedItems).filter(Boolean).length
    const totalCount = checklistItems.length
    const progressPercentage = (completedCount / totalCount) * 100

    return (
      <section id="checklist-section" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Interactive Checklist</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Track your progress through the visa and residence permit process.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {/* Progress Bar */}
            <Card className="mb-8 shadow-lg rounded-2xl overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">Overall Progress</h3>
                  <span className="text-2xl font-bold text-blue-600">
                    {completedCount}/{totalCount}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
                  <motion.div
                    className="bg-gradient-to-r from-blue-600 to-purple-600 h-4 rounded-full transition-all duration-500"
                    style={{ width: `${progressPercentage}%` }}
                    initial={{ width: 0 }}
                    animate={{ width: `${progressPercentage}%` }}
                  ></motion.div>
                </div>
                <p className="text-gray-600">
                  {progressPercentage === 100
                    ? "🎉 Congratulations! You've completed all steps!"
                    : `${Math.round(progressPercentage)}% complete - Keep going!`}
                </p>
              </CardContent>
            </Card>

            {/* Checklist by Category */}
            <div className="space-y-6">
              {categories.map((category) => {
                const categoryItems = checklistItems.filter((item) => item.category === category.id)
                const categoryCompleted = categoryItems.filter((item) => checkedItems[item.id]).length

                return (
                  <Card key={category.id} className="shadow-lg rounded-2xl overflow-hidden">
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Badge className={category.color}>{category.label}</Badge>
                          <span className="text-sm text-gray-600">
                            {categoryCompleted}/{categoryItems.length} completed
                          </span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="space-y-4">
                        {categoryItems.map((item) => (
                          <motion.div
                            key={item.id}
                            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.99 }}
                          >
                            <Checkbox
                              id={item.id}
                              checked={checkedItems[item.id] || false}
                              onCheckedChange={() => handleCheckboxChange(item.id)}
                              className="w-5 h-5"
                            />
                            <label
                              htmlFor={item.id}
                              className={`flex-1 cursor-pointer transition-all duration-200 ${
                                checkedItems[item.id]
                                  ? "text-gray-500 line-through"
                                  : "text-gray-900 hover:text-blue-600"
                              }`}
                            >
                              {item.label}
                            </label>
                            {checkedItems[item.id] && <CheckCircle className="w-5 h-5 text-green-500" />}
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
              <Button
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full px-8 py-3"
                onClick={() => {
                  // Create a simple text checklist for download
                  const checklistText = checklistItems.map((item) => `☐ ${item.label}`).join("\n")

                  const blob = new Blob([`Visa & Residence Checklist\n\n${checklistText}`], {
                    type: "text/plain",
                  })
                  const url = URL.createObjectURL(blob)
                  const a = document.createElement("a")
                  a.href = url
                  a.download = "visa-residence-checklist.txt"
                  a.click()
                  URL.revokeObjectURL(url)
                }}
              >
                <Download className="w-5 h-5 mr-2" />
                Download Checklist
              </Button>

              <Button
                variant="outline"
                className="border-2 border-gray-300 hover:border-blue-500 hover:bg-blue-50 rounded-full px-8 py-3 bg-transparent"
                onClick={() => {
                  const progress = `Progress: ${completedCount}/${totalCount} completed (${Math.round(progressPercentage)}%)`
                  const completedItems = checklistItems
                    .filter((item) => checkedItems[item.id])
                    .map((item) => `✅ ${item.label}`)
                    .join("\n")

                  const emailBody = `My Visa & Residence Progress:\n\n${progress}\n\nCompleted Items:\n${completedItems}`
                  window.location.href = `mailto:?subject=My Visa Progress&body=${encodeURIComponent(emailBody)}`
                }}
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Progress
              </Button>
            </div>
          </div>
        </div>
      </section>
    )
  }

  // Visual Process Flow Section
  const VisualProcessFlowSection = () => {
    const processSteps = [
      { icon: Plane, label: "Arrival", description: "Land in Germany" },
      { icon: Home, label: "Accommodation", description: "Find housing" },
      { icon: Building, label: "Anmeldung", description: "Register address" },
      { icon: CreditCard, label: "Bank Account", description: "Open account" },
      { icon: Shield, label: "Insurance", description: "Get coverage" },
      { icon: FileText, label: "Residence Permit", description: "Apply for permit" },
      { icon: GraduationCap, label: "Study", description: "Begin studies" },
    ]

    return (
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Your Journey Timeline</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Visual overview of the complete process from arrival to starting your studies.
            </p>
          </motion.div>

          {/* Desktop Timeline */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 transform -translate-y-1/2"></div>

              <div className="flex justify-between items-center relative">
                {processSteps.map((step, index) => {
                  const IconComponent = step.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex flex-col items-center group"
                    >
                      <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border-4 border-blue-100">
                        <IconComponent className="w-8 h-8 text-blue-600" />
                      </div>
                      <div className="text-center">
                        <h4 className="font-semibold text-gray-900 mb-1">{step.label}</h4>
                        <p className="text-sm text-gray-600">{step.description}</p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="lg:hidden space-y-6">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4"
                >
                  <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center border-4 border-blue-100 flex-shrink-0">
                    <IconComponent className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{step.label}</h4>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    )
  }

  // FAQ Section
  const FAQSection = () => {
    const faqs = [
      {
        question: "Can I skip Anmeldung?",
        answer:
          "No, Anmeldung is legally required within 14 days of arrival in Germany. It's needed for opening bank accounts, getting health insurance, and applying for residence permits. Skipping it can result in fines up to €1,000.",
      },
      {
        question: "What if I miss my appointment?",
        answer:
          "Contact the office immediately to reschedule. For Anmeldung, you may face penalties if you're significantly late. For residence permits, missing appointments can delay your application and potentially affect your legal status.",
      },
      {
        question: "Can I apply for a residence permit before Anmeldung?",
        answer:
          "No, you need the Anmeldebescheinigung (registration certificate) to apply for a residence permit. Anmeldung must be completed first as it's a required document for the residence permit application.",
      },
      {
        question: "Do I need to reapply if I change address?",
        answer:
          "You need to do a new Anmeldung within 1 week of moving. For your residence permit, you must notify the Ausländerbehörde of your address change. The permit itself doesn't need to be reissued unless it's expiring.",
      },
      {
        question: "How long does the residence permit process take?",
        answer:
          "Processing typically takes 4-8 weeks after submitting your complete application. During this time, your receipt serves as temporary permission to stay in Germany. Apply 6-8 weeks before your current visa expires.",
      },
      {
        question: "What if my documents are not in German?",
        answer:
          "Documents in foreign languages must be officially translated by a certified translator. Some offices accept English documents, but it's safer to have German translations. Check with the specific office beforehand.",
      },
      {
        question: "Can I work while waiting for my residence permit?",
        answer:
          "If you're on a student visa and have applied for a residence permit, you can usually continue working under the same conditions. Your receipt from the Ausländerbehörde serves as proof of your legal status during processing.",
      },
      {
        question: "What happens if I don't get health insurance in time?",
        answer:
          "Health insurance is mandatory in Germany. Without it, you cannot get a residence permit, and you may face legal consequences. Get insurance immediately upon arrival - many providers offer same-day coverage.",
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
              Get answers to the most common questions about visa and residence processes.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <AccordionItem value={`faq-${index}`} className="border-0">
                    <Card className="shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden">
                      <AccordionTrigger className="hover:no-underline p-0">
                        <CardHeader className="w-full p-6 text-left">
                          <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                              <HelpCircle className="w-5 h-5 text-white" />
                            </div>
                            <CardTitle className="text-lg font-semibold text-gray-900">{faq.question}</CardTitle>
                          </div>
                        </CardHeader>
                      </AccordionTrigger>
                      <AccordionContent className="p-0">
                        <CardContent className="px-6 pb-6">
                          <p className="text-gray-600 leading-relaxed pl-14">{faq.answer}</p>
                        </CardContent>
                      </AccordionContent>
                    </Card>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    )
  }

  // Helpful Resources Section
  const HelpfulResourcesSection = () => {
    const resources = [
      {
        title: "Official Booking Portals",
        items: [
          {
            name: "QTermin Duisburg - Anmeldung",
            url: "https://termine.duisburg.de/",
            description: "Book your city registration appointment",
            icon: Calendar,
          },
          {
            name: "City of Duisburg Website",
            url: "https://www.duisburg.de/",
            description: "Official city information and services",
            icon: Globe,
          },
          {
            name: "Ausländerbehörde Duisburg",
            url: "https://www.duisburg.de/microsites/buergerservice/dienstleistungen_a_z/auslaenderwesen.php",
            description: "Immigration office services and information",
            icon: Building,
          },
        ],
      },
      {
        title: "University Resources",
        items: [
          {
            name: "UDE Student Portal",
            url: "https://www.uni-due.de/international/",
            description: "International student services and support",
            icon: School,
          },
          {
            name: "UDE International Office",
            url: "https://www.uni-due.de/international/",
            description: "Direct support for international students",
            icon: Users,
          },
        ],
      },
      {
        title: "Essential Guides",
        items: [
          {
            name: "Health Insurance Guide",
            url: "/insurance",
            description: "Complete guide to German health insurance",
            icon: Shield,
          },
          {
            name: "Banking Guide",
            url: "/banking",
            description: "How to open a German bank account",
            icon: CreditCard,
          },
          {
            name: "Accommodation Guide",
            url: "/accommodation",
            description: "Find student housing in Germany",
            icon: Home,
          },
        ],
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Helpful Resources</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Official links and additional resources to support your journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {resources.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl font-bold text-gray-900">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {category.items.map((item, itemIndex) => {
                      const IconComponent = item.icon
                      return (
                        <motion.div key={itemIndex} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                          {item.url.startsWith('/') ? (
                            <Link
                              href={item.url}
                              className="block p-4 bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors duration-200 group"
                            >
                              <div className="flex items-start space-x-3">
                                <IconComponent className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                                <div className="flex-1">
                                  <h4 className="font-semibold text-blue-900 group-hover:text-blue-700 mb-1">
                                    {item.name}
                                  </h4>
                                  <p className="text-sm text-blue-600">{item.description}</p>
                                </div>
                                <ChevronRight className="w-5 h-5 text-blue-600" />
                              </div>
                            </Link>
                          ) : (
                            <a
                              href={item.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block p-4 bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors duration-200 group"
                            >
                              <div className="flex items-start space-x-3">
                                <IconComponent className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                                <div className="flex-1">
                                  <h4 className="font-semibold text-blue-900 group-hover:text-blue-700 mb-1">
                                    {item.name}
                                  </h4>
                                  <p className="text-sm text-blue-600">{item.description}</p>
                                </div>
                                <ExternalLink className="w-5 h-5 text-blue-600" />
                              </div>
                            </a>
                          )}
                        </motion.div>
                      )
                    })}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Emergency Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <Card className="bg-gradient-to-r from-red-50 to-orange-50 border-red-200 shadow-lg rounded-2xl overflow-hidden">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Need Immediate Help?</h3>
                <p className="text-gray-600 mb-4">
                  If you're facing urgent visa or residence permit issues, contact the UDE International Office.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    variant="outline"
                    className="border-red-300 text-red-700 hover:bg-red-50 bg-transparent"
                    asChild
                  >
                    <a href="tel:+49203379">
                      <Phone className="w-4 h-4 mr-2" />
                      Call: +49 203 379-0
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    className="border-red-300 text-red-700 hover:bg-red-50 bg-transparent"
                    asChild
                  >
                    <a href="mailto:international.office@uni-due.de">
                      <Mail className="w-4 h-4 mr-2" />
                      Email Support
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

  return (
    <div className="min-h-screen">
      <Breadcrumbs />
      <HeroSection />
      <QuickOverviewSection />
      <StepByStepSection />
      <InteractiveChecklistSection />
      <VisualProcessFlowSection />
      <FAQSection />
      <HelpfulResourcesSection />
    </div>
  )
}
