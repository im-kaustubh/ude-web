"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Footer from "@/components/footer"
import {
  Menu,
  X,
  ArrowLeft,
  MapPin,
  Home,
  Users,
  Calendar,
  ChevronRight,
  BookOpen,
  Briefcase,
  Building,
  Key,
  FileText,
  Filter,
  Search,
  CheckCircle,
  AlertCircle,
  ExternalLink,
  Phone,
  Mail,
  HelpCircle,
} from "lucide-react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import Breadcrumbs from "@/components/breadcrumbs"
import Navigation from "@/components/navigation"



// Hero Section Component
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-blue-50 pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-100/30 to-blue-100/30" />

        {/* Floating 3D-style Elements */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 2,
              }}
            >
              {i % 3 === 0 && <Home className="w-8 h-8 text-green-400" />}
              {i % 3 === 1 && <Key className="w-6 h-6 text-blue-400" />}
              {i % 3 === 2 && <Building className="w-7 h-7 text-purple-400" />}
            </motion.div>
          ))}
        </div>

        {/* Static Background Image */}
        <img
          src="/placeholder.svg?height=800&width=1200"
          alt="Student accommodation in Germany"
          className="w-full h-full object-cover opacity-10"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Find{" "}
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Student Accommodation
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover dormitories, shared flats, and private rentals — plus everything you need to know about Anmeldung
            in Germany.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Find Housing
              <Home className="ml-2 w-5 h-5" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-2 border-gray-300 hover:border-green-500 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 bg-white/80 backdrop-blur-sm"
            >
              Start Anmeldung Process
              <FileText className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Accommodation Types Section
function AccommodationTypesSection() {
  const accommodationTypes = [
    {
      id: "dormitories",
      title: "Dormitories (Student Housing)",
      icon: Building,
      description: "Affordable, furnished rooms managed by Studentenwerk. Perfect for new international students.",
      features: ["Furnished rooms", "All utilities included", "International community", "Affordable rates"],
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      buttonText: "Explore Dorms",
    },
    {
      id: "shared-flats",
      title: "Shared Flats (WG)",
      icon: Users,
      description: "Experience German WG culture by sharing an apartment with other students or young professionals.",
      features: ["Cultural immersion", "Shared living costs", "Built-in social network", "Flexible contracts"],
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      buttonText: "Find WGs",
    },
    {
      id: "private-rentals",
      title: "Private Rentals",
      icon: Key,
      description: "Your own apartment for complete privacy and independence during your studies.",
      features: ["Complete privacy", "Own space", "No roommate conflicts", "Long-term stability"],
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      buttonText: "View Private Rentals",
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Choose Your Accommodation Type</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Each option offers unique benefits for international students in Germany.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {accommodationTypes.map((type, index) => {
            const Icon = type.icon
            return (
              <motion.div
                key={type.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group cursor-pointer"
              >
                <Card
                  className={`h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300 rounded-2xl overflow-hidden ${type.bgColor}/30`}
                >
                  <CardContent className="p-8">
                    <div
                      className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${type.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-8 h-8" />
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-4 text-center group-hover:text-blue-600 transition-colors duration-300">
                      {type.title}
                    </h3>

                    <p className="text-gray-600 text-center mb-6 leading-relaxed">{type.description}</p>

                    <ul className="space-y-2 mb-6">
                      {type.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Button
                      className={`w-full bg-gradient-to-r ${type.color} hover:shadow-lg text-white rounded-full font-semibold transition-all duration-300`}
                    >
                      {type.buttonText}
                      <ChevronRight className="ml-2 w-4 h-4" />
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

// Room Availability Section
function RoomAvailabilitySection() {
  const [selectedCity, setSelectedCity] = useState("All")
  const [selectedType, setSelectedType] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")

  const roomData = [
    {
      id: 1,
      name: "Wohnheim Campus Nord",
      city: "Duisburg",
      type: "Single",
      available: 5,
      total: 120,
      status: "available",
      link: "#",
    },
    {
      id: 2,
      name: "Studentenwohnheim Essen",
      city: "Essen",
      type: "Apartment",
      available: 2,
      total: 80,
      status: "few",
      link: "#",
    },
    {
      id: 3,
      name: "Campus Residence",
      city: "Duisburg",
      type: "WG",
      available: 8,
      total: 150,
      status: "available",
      link: "#",
    },
    {
      id: 4,
      name: "International House",
      city: "Essen",
      type: "Single",
      available: 0,
      total: 60,
      status: "full",
      link: "#",
    },
    {
      id: 5,
      name: "Wohnheim Süd",
      city: "Duisburg",
      type: "Apartment",
      available: 1,
      total: 90,
      status: "few",
      link: "#",
    },
    {
      id: 6,
      name: "Student Village",
      city: "Essen",
      type: "WG",
      available: 12,
      total: 200,
      status: "available",
      link: "#",
    },
  ]

  const cities = ["All", "Duisburg", "Essen"]
  const types = ["All", "Single", "WG", "Apartment"]

  const filteredRooms = roomData.filter((room) => {
    const cityMatch = selectedCity === "All" || room.city === selectedCity
    const typeMatch = selectedType === "All" || room.type === selectedType
    const searchMatch = room.name.toLowerCase().includes(searchTerm.toLowerCase())
    return cityMatch && typeMatch && searchMatch
  })

  const getStatusBadge = (status: string, available: number) => {
    switch (status) {
      case "available":
        return (
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-1"></div>
            Available
          </span>
        )
      case "few":
        return (
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
            <div className="w-2 h-2 bg-yellow-400 rounded-full mr-1"></div>
            Few Left
          </span>
        )
      case "full":
        return (
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
            <div className="w-2 h-2 bg-red-400 rounded-full mr-1"></div>
            Full
          </span>
        )
      default:
        return null
    }
  }

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Real-Time Room Availability</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Check current availability in student dormitories across Duisburg and Essen.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex items-center space-x-2 flex-1">
              <Search className="w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search dormitories..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1 border-0 focus:ring-0 focus:outline-none text-gray-700 placeholder-gray-400"
              />
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Filter className="w-4 h-4 text-gray-500" />
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {cities.map((city) => (
                    <option key={city} value={city}>
                      {city === "All" ? "All Cities" : city}
                    </option>
                  ))}
                </select>
              </div>

              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {types.map((type) => (
                  <option key={type} value={type}>
                    {type === "All" ? "All Types" : type}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Availability Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRooms.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden bg-white">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-semibold text-gray-900 text-lg">{room.name}</h3>
                    {getStatusBadge(room.status, room.available)}
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">City:</span>
                      <span className="font-medium text-gray-900">{room.city}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Type:</span>
                      <span className="font-medium text-gray-900">{room.type}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Available:</span>
                      <span className="font-medium text-gray-900">
                        {room.available}/{room.total} rooms
                      </span>
                    </div>
                  </div>

                  <Button
                    className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white rounded-full"
                    disabled={room.available === 0}
                  >
                    {room.available > 0 ? "Apply Now" : "Join Waitlist"}
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {filteredRooms.length === 0 && (
          <div className="text-center py-12">
            <AlertCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No rooms found</h3>
            <p className="text-gray-600">Try adjusting your filters or search terms.</p>
          </div>
        )}
      </div>
    </section>
  )
}

// Anmeldung Step-by-Step Section
function AnmeldungGuideSection() {
  const [currentStep, setCurrentStep] = useState(0)

  const steps = [
    {
      id: 1,
      title: "Find Accommodation",
      description: "Secure your housing and move in to your new place",
      icon: Home,
      details: "Choose from dormitories, WG, or private rentals. Make sure you have a signed rental contract.",
      tips: [
        "Keep all rental documents safe",
        "Take photos of your room condition",
        "Get contact details of your landlord",
      ],
    },
    {
      id: 2,
      title: "Get Wohnungsgeberbestätigung",
      description: "Obtain confirmation from your landlord",
      icon: FileText,
      details: "Your landlord must provide this document confirming you live at the address.",
      tips: ["Ask your landlord immediately after moving in", "This document is mandatory", "Keep the original safe"],
    },
    {
      id: 3,
      title: "Book Bürgeramt Appointment",
      description: "Schedule your registration appointment",
      icon: Calendar,
      details: "Book online or call your local Bürgeramt. Appointments can be scarce, so book early.",
      tips: ["Book as soon as possible", "Check multiple Bürgeramt locations", "Be flexible with timing"],
    },
    {
      id: 4,
      title: "Gather Required Documents",
      description: "Prepare all necessary paperwork",
      icon: FileText,
      details: "Bring passport, Wohnungsgeberbestätigung, rental contract, and completed Anmeldung form.",
      tips: ["Download the form online", "Fill it out completely", "Bring originals and copies"],
    },
    {
      id: 5,
      title: "Complete Registration",
      description: "Attend appointment and get Meldebescheinigung",
      icon: CheckCircle,
      details: "Submit documents, pay fee (usually free), and receive your registration certificate.",
      tips: ["Arrive 10 minutes early", "Bring exact change if fee required", "Keep Meldebescheinigung safe"],
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          steps.forEach((_, index) => {
            setTimeout(() => {
              setCurrentStep(index + 1)
            }, index * 800)
          })
        }
      },
      { threshold: 0.3 },
    )

    const section = document.getElementById("anmeldung-guide")
    if (section) {
      observer.observe(section)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="anmeldung-guide" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Anmeldung Step-by-Step Guide</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Complete your address registration in Germany with our comprehensive guide.
          </p>
        </motion.div>

        {/* Desktop Stepper */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Progress Line */}
            <div className="absolute top-12 left-0 right-0 h-1 bg-gray-200 rounded-full">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-600 to-green-600 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${(currentStep / steps.length) * 100}%` }}
                transition={{ duration: 0.8 }}
              />
            </div>

            <div className="grid grid-cols-5 gap-4">
              {steps.map((step, index) => {
                const Icon = step.icon
                const isActive = currentStep > index
                const isCurrent = currentStep === index + 1

                return (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: isActive || isCurrent ? 1 : 0.5,
                      y: 0,
                      scale: isCurrent ? 1.05 : 1,
                    }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative"
                  >
                    {/* Step Circle */}
                    <div
                      className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 ${
                        isActive
                          ? "bg-gradient-to-r from-blue-600 to-green-600 text-white shadow-lg"
                          : "bg-gray-200 text-gray-400"
                      }`}
                    >
                      <Icon className="w-8 h-8" />
                    </div>

                    {/* Step Content */}
                    <div className="text-center">
                      <h3
                        className={`font-semibold mb-2 transition-colors duration-300 ${
                          isActive ? "text-gray-900" : "text-gray-500"
                        }`}
                      >
                        {step.title}
                      </h3>
                      <p
                        className={`text-sm transition-colors duration-300 ${
                          isActive ? "text-gray-600" : "text-gray-400"
                        }`}
                      >
                        {step.description}
                      </p>
                    </div>

                    {/* Step Number */}
                    <div
                      className={`absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                        isActive ? "bg-white text-blue-600 shadow-md" : "bg-gray-300 text-gray-600"
                      }`}
                    >
                      {step.id}
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Step Details */}
          <AnimatePresence mode="wait">
            {currentStep > 0 && (
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="mt-12"
              >
                <Card className="border-0 shadow-lg rounded-2xl overflow-hidden bg-gradient-to-r from-blue-50 to-green-50">
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                          Step {currentStep}: {steps[currentStep - 1]?.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-6">{steps[currentStep - 1]?.details}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-4">💡 Pro Tips:</h4>
                        <ul className="space-y-2">
                          {steps[currentStep - 1]?.tips.map((tip, idx) => (
                            <li key={idx} className="flex items-start">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-gray-600">{tip}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Mobile Stepper */}
        <div className="md:hidden space-y-6">
          {steps.map((step, index) => {
            const Icon = step.icon
            const isActive = currentStep > index

            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: isActive ? 1 : 0.6,
                  x: 0,
                }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex items-start space-x-4"
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                    isActive ? "bg-gradient-to-r from-blue-600 to-green-600 text-white" : "bg-gray-200 text-gray-400"
                  }`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3
                    className={`font-semibold mb-1 transition-colors duration-300 ${
                      isActive ? "text-gray-900" : "text-gray-500"
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p
                    className={`text-sm transition-colors duration-300 ${isActive ? "text-gray-600" : "text-gray-400"}`}
                  >
                    {step.description}
                  </p>
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
function FAQSection() {
  const faqs = [
    {
      question: "What is Anmeldung and why is it mandatory?",
      answer:
        "Anmeldung is the mandatory address registration in Germany. You must register within 14 days of moving to a new address. It's required by law and needed for opening bank accounts, getting health insurance, and many other services.",
    },
    {
      question: "Can I apply for dormitories before arriving in Germany?",
      answer:
        "Yes, most Studentenwerk dormitories allow online applications before arrival. Apply as early as possible as demand is high. You'll typically need your university admission letter and passport information.",
    },
    {
      question: "What happens if I change apartments during my studies?",
      answer:
        "You must complete a new Anmeldung within 14 days of moving. This is called 'Ummeldung' (re-registration). You'll need the same documents plus your previous Meldebescheinigung.",
    },
    {
      question: "What's the usual deposit (Kaution) for private apartments?",
      answer:
        "The deposit is typically 2-3 months' rent for private apartments. For WG rooms, it's usually 1-2 months' rent. The deposit must be held in a separate account and returned when you move out (minus any damages).",
    },
    {
      question: "How do I avoid rental scams?",
      answer:
        "Never transfer money before viewing the property. Be suspicious of prices significantly below market rate. Always meet the landlord in person. Verify the landlord's identity and ownership. Use reputable platforms and trust your instincts.",
    },
    {
      question: "What documents do I need for Anmeldung?",
      answer:
        "You need: valid passport, Wohnungsgeberbestätigung (landlord confirmation), rental contract, and completed Anmeldung form. Some offices may require additional documents like your visa or university enrollment certificate.",
    },
    {
      question: "How long does it take to get an appointment at Bürgeramt?",
      answer:
        "Appointment availability varies by city and season. In busy cities like Berlin or Munich, it can take 2-4 weeks. In smaller cities, you might get an appointment within a few days. Book as early as possible.",
    },
    {
      question: "Can I live in a WG without being on the rental contract?",
      answer:
        "It's risky and not recommended. You should be on the rental contract (Mietvertrag) or have a proper subletting agreement (Untermietvertrag). This protects your rights and is often required for Anmeldung.",
    },
    {
      question: "What's included in German rental prices?",
      answer:
        "German rents are usually quoted as 'Kaltmiete' (cold rent) plus 'Nebenkosten' (additional costs). Nebenkosten typically include heating, water, garbage collection, and building maintenance. Electricity and internet are usually separate.",
    },
    {
      question: "Do I need a German bank account to rent an apartment?",
      answer:
        "While not always mandatory, having a German bank account makes renting much easier. Many landlords prefer tenants with German bank accounts for rent payments. Some may accept international accounts, but this varies.",
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get answers to the most common accommodation and registration questions.
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
                <AccordionItem
                  value={`faq-${index}`}
                  className="border-0 bg-white rounded-2xl shadow-lg overflow-hidden"
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
        </div>
      </div>
    </section>
  )
}

// Call-to-Action Banner
function CTABanner() {
  return (
    <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Found Your Accommodation?</h2>
          <p className="text-lg md:text-xl mb-8 text-green-100">
            Don't forget to complete your Anmeldung to stay legal in Germany. We're here to guide you through every
            step.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-white text-green-600 hover:bg-green-50 px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Check Room Availability
              <Home className="ml-2 w-5 h-5" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 bg-transparent"
            >
              Start Anmeldung Process
              <FileText className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}



export default function AccommodationPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Breadcrumbs />
      <HeroSection />
      <AccommodationTypesSection />
      <RoomAvailabilitySection />
      <AnmeldungGuideSection />
      <FAQSection />
      <CTABanner />
    </div>
  )
}
