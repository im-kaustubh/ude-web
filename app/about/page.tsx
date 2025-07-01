"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Breadcrumbs from "@/components/breadcrumbs"
import {
  Target,
  Users,
  Heart,
  CheckCircle,
  Rocket,
  Globe,
  BookOpen,
  MapPin,
  GraduationCap,
  FileText,
  CreditCard,
  Radio,
  Briefcase,
  Star,
  Quote,
  ArrowRight,
  ExternalLink,
  Menu,
  X,
  ChevronRight,
  Phone,
} from "lucide-react"
import { AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import Footer from "@/components/footer"

// Navigation Component (reused from other pages)
function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element
      if (isOpen && !target.closest(".mobile-nav-container")) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener("click", handleClickOutside)
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.removeEventListener("click", handleClickOutside)
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const scrollToServices = () => {
    const servicesSection = document.getElementById("services-section")
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  const navItems = [
    { name: "Home", href: "/", icon: MapPin },
    { name: "Services", href: "#services", icon: BookOpen, onClick: scrollToServices },
    { name: "About Us", href: "/about", icon: Users },
    { name: "Contact Us", href: "/contact", icon: Phone },
  ]

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white/90 backdrop-blur-sm"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <nav className="container mx-auto px-4 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3 group z-50">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                newInTown
              </span>
            </Link>

            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {item.onClick ? (
                      <button
                        onClick={item.onClick}
                        className="relative flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium text-lg group"
                      >
                        <Icon className="w-5 h-5" />
                        <span>{item.name}</span>
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        className="relative flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium text-lg group"
                      >
                        <Icon className="w-5 h-5" />
                        <span>{item.name}</span>
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
                      </Link>
                    )}
                  </motion.div>
                )
              })}

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Button
                  onClick={scrollToServices}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Get Started
                </Button>
              </motion.div>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden w-12 h-12 rounded-xl hover:bg-blue-50 mobile-nav-container"
              onClick={(e) => {
                e.stopPropagation()
                setIsOpen(!isOpen)
              }}
            >
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="relative w-6 h-6"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.div>
            </Button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50 lg:hidden mobile-nav-container"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-6 border-b border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xl font-bold text-gray-900">newInTown</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                    className="w-10 h-10 rounded-lg hover:bg-gray-100"
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>

                <div className="flex-1 overflow-y-auto py-6">
                  <div className="space-y-2 px-6">
                    {navItems.map((item, index) => {
                      const Icon = item.icon
                      return (
                        <motion.div
                          key={item.name}
                          initial={{ opacity: 0, x: 50 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                          {item.onClick ? (
                            <button
                              onClick={item.onClick}
                              className="w-full flex items-center space-x-4 px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-all duration-200 font-medium text-lg group"
                            >
                              <Icon className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
                              <span>{item.name}</span>
                              <ChevronRight className="w-5 h-5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                            </button>
                          ) : (
                            <Link
                              href={item.href}
                              className="flex items-center space-x-4 px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-all duration-200 font-medium text-lg group"
                              onClick={() => setIsOpen(false)}
                            >
                              <Icon className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
                              <span>{item.name}</span>
                              <ChevronRight className="w-5 h-5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                            </Link>
                          )}
                        </motion.div>
                      )
                    })}
                  </div>
                </div>

                <div className="p-6 border-t border-gray-100">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                  >
                    <Button
                      onClick={scrollToServices}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-semibold py-3 shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Get Started
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default function AboutPage() {

  const services = [
    {
      icon: GraduationCap,
      title: "Accommodation",
      description: "Find dorms, flats, and tips for Anmeldung.",
    },
    {
      icon: BookOpen,
      title: "Subject & Exam Registration",
      description: "Step-by-step guides for LSF and HISinOne.",
    },
    {
      icon: FileText,
      title: "Visa & Documents",
      description: "From Anmeldung to residence permits.",
    },
    {
      icon: CreditCard,
      title: "Banking & Insurance",
      description: "Open accounts, get health insurance.",
    },
    {
      icon: Radio,
      title: "Radio Tax (Rundfunkbeitrag)",
      description: "Understand Germany's mandatory fees.",
    },
    {
      icon: Briefcase,
      title: "Jobs & Career",
      description: "Find student jobs, internships, and HiWi roles.",
    },
  ]

  const teamMembers = [
    
    {
      name: "Kaustubh Barbudhe",
      role: "Developer",
      description: "Manages website, tools, and backend. Ensures everything runs smoothly.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
        name: "Naman Kumar",
        role: "Developer",
        description:
          "Manages website, tools, and backend. Ensures everything runs smoothly.",
        image: "/placeholder.svg?height=200&width=200",
      },
    {
      name: "Alex Mueller",
      role: "Tech & Support",
      description: "Manages website, tools, and backend. Ensures everything runs smoothly.",
      image: "/placeholder.svg?height=200&width=200",
    },
  ]

  const values = [
    {
      icon: Users,
      title: "Community-Driven",
      description: "Built by students, for students.",
    },
    {
      icon: CheckCircle,
      title: "Accuracy",
      description: "Information that's always reliable.",
    },
    {
      icon: Heart,
      title: "Empathy",
      description: "We've been through the same challenges.",
    },
    {
      icon: Rocket,
      title: "Simplicity",
      description: "We make complex processes simple.",
    },
  ]

  const testimonials = [
    {
      quote: "This site helped me so much with Anmeldung — it saved me hours!",
      name: "Priya S.",
      country: "India",
      rating: 5,
    },
    {
      quote: "Clear guides for health insurance — thanks!",
      name: "Carlos M.",
      country: "Mexico",
      rating: 5,
    },
    {
      quote: "Amazing support for job search and registration at UDE.",
      name: "Fatima A.",
      country: "Morocco",
      rating: 5,
    },
  ]

  const floatingIcons = [
    { icon: Globe, delay: 0, x: 20, y: 30 },
    { icon: BookOpen, delay: 0.5, x: -30, y: 20 },
    { icon: MapPin, delay: 1, x: 40, y: -20 },
    { icon: Users, delay: 1.5, x: -20, y: -30 },
  ]

  const scrollToServices = () => {
    const servicesSection = document.getElementById("services-section")
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Breadcrumbs />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            >
              Empowering{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                International Students
              </span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6"
            >
              at University of Duisburg-Essen
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto"
            >
              We help students navigate life, studies, and success in Germany — from enrollment to everyday essentials.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                onClick={scrollToServices}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <ArrowRight className="w-5 h-5 mr-2" />
                Explore Our Resources
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-2 border-gray-300 hover:border-blue-500 hover:bg-blue-50 px-8 py-3 rounded-full font-semibold transition-all duration-300 bg-transparent"
              >
                <Link href="/contact">
                  Contact Us
                  <ExternalLink className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Floating Icons */}
          {floatingIcons.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                className="absolute text-blue-600/20"
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  x: [0, item.x, 0],
                  y: [0, item.y, 0],
                }}
                transition={{
                  duration: 4,
                  delay: item.delay,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
                style={{
                  left: `${20 + index * 20}%`,
                  top: `${30 + (index % 2) * 40}%`,
                }}
              >
                <Icon className="w-12 h-12 md:w-16 md:h-16" />
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
              <Target className="w-10 h-10 text-white" />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Our Mission</h2>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Our mission is simple — to make the journey of international students in Germany smoother, clearer, and
              more successful. We provide accurate information, step-by-step guides, and community-driven resources on
              everything from Anmeldung and health insurance to job applications and student life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Students at University of Duisburg-Essen"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                We started as a small group of students helping friends figure out how to survive the complexities of
                studying in Germany. From WhatsApp chats to community meetups, this platform grew into a structured
                guide for students at UDE and beyond.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mt-4">
                What began as informal help between friends has evolved into a comprehensive resource that has assisted
                thousands of international students in their German academic journey.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section id="services-section" className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What We Help With</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive support for every aspect of your student life in Germany
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-0 shadow-md">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Who's Behind This?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the passionate team dedicated to helping international students succeed
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-0 shadow-md">
                  <CardContent className="p-6 text-center">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        width={96}
                        height={96}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-sm font-medium text-gray-500 mb-3">{member.role}</p>
                    <p className="text-gray-600 text-sm">{member.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">The principles that guide everything we do</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-0 shadow-md bg-white">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                      <p className="text-gray-600">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Students Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real feedback from international students we've helped
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-0 shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Quote className="w-8 h-8 text-blue-600 mr-2" />
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, starIndex) => (
                          <Star key={starIndex} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
                    <div className="flex items-center">
                      <div>
                        <p className="font-semibold text-gray-900">{testimonial.name}</p>
                        <p className="text-sm text-gray-500">{testimonial.country}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Help or Have Questions?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Contact us or explore our guides to get started on your journey in Germany.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={scrollToServices}
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#013B7A] px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 bg-transparent"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Explore Guides
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#013B7A] px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 bg-transparent"
              >
                <Link href="/contact">
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Contact Us
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
     
    </div>
  )
}
