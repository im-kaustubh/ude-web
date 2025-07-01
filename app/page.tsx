"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Plane,
  MapPin,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Star,
  Clock,
  Building,
  ExternalLink,
  Instagram,
  Linkedin,
  MessageCircle,
  Youtube,
  Briefcase,
  Users,
  FileText,
  Home,
  Shield,
  CreditCard,
  GraduationCap,
  PartyPopper,
  Map,
  Languages,
  Radio,
  ClipboardCheck,
} from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

// Modern Hero Section Component with Clean Design
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-20">
      {/* Modern Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle dot pattern */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23e2e8f0' fillOpacity='0.3'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>

        {/* Modern floating elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-40 h-40 bg-purple-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-36 h-36 bg-indigo-200/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Modern Icons Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-32 left-20">
          <GraduationCap className="w-12 h-12 text-blue-600" />
        </div>
        <div className="absolute top-48 right-32">
          <FileText className="w-10 h-10 text-purple-600" />
        </div>
        <div className="absolute bottom-40 left-32">
          <Home className="w-11 h-11 text-green-600" />
        </div>
        <div className="absolute bottom-32 right-20">
          <Briefcase className="w-10 h-10 text-orange-600" />
        </div>
        <div className="absolute top-60 left-1/2">
          <Shield className="w-9 h-9 text-red-600" />
        </div>
        <div className="absolute bottom-60 right-1/3">
          <CreditCard className="w-10 h-10 text-teal-600" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Start Your{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Student Life
            </span>{" "}
            at UDE
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Navigate your journey as an international student with comprehensive guides for Visa, Jobs, Banking,
            Insurance, and everything you need to thrive at UDE.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center max-w-lg mx-auto sm:max-w-none">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              onClick={() => {
                const servicesSection = document.getElementById("services-section")
                if (servicesSection) {
                  servicesSection.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              Get Started
              <Plane className="ml-2 w-5 h-5" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-2 border-gray-300 hover:border-blue-500 hover:bg-blue-50 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 bg-white/80 backdrop-blur-sm"
              asChild
            >
              <Link href="/visa-guidance" target="_blank" rel="noopener noreferrer">
                Visa Guide
                <FileText className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 flex flex-wrap justify-center items-center gap-8 text-gray-500"
          >
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5" />
              <span className="text-sm font-medium">10,000+ Students Helped</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span className="text-sm font-medium">4.9/5 Rating</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5" />
              <span className="text-sm font-medium">Trusted Resource</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// Quick Links Section Component
function QuickLinksSection() {
  const quickLinks = [
    {
      title: "Visa & Residence",
      description: "Complete guide for visa applications and residence permits",
      icon: FileText,
      color: "from-blue-500 to-blue-600",
      href: "/visa-guidance",
    },
    {
      title: "Accommodation",
      description: "Find student housing and understand rental processes",
      icon: Home,
      color: "from-green-500 to-green-600",
      href: "/accommodation",
    },
    {
      title: "Jobs",
      description: "Student job opportunities and work regulations",
      icon: Briefcase,
      color: "from-purple-500 to-purple-600",
      href: "/jobs",
    },
    {
      title: "Banking",
      description: "Open bank accounts and manage finances in Germany",
      icon: CreditCard,
      color: "from-orange-500 to-orange-600",
      href: "/banking",
    },
    {
      title: "Insurance",
      description: "Health insurance and other essential coverage",
      icon: Shield,
      color: "from-red-500 to-red-600",
      href: "/insurance",
    },
    {
      title: "Events",
      description: "Student events, meetups, and networking opportunities",
      icon: PartyPopper,
      color: "from-pink-500 to-pink-600",
      href: "/events",
    },
    {
      title: "Campus Map",
      description: "Navigate universities and important locations",
      icon: Map,
      color: "from-teal-500 to-teal-600",
      href: "/campus-map",
    },
    {
      title: "Language Courses",
      description: "German language learning resources and courses",
      icon: Languages,
      color: "from-indigo-500 to-indigo-600",
      href: "/language-courses",
    },
    {
      title: "Radio Bills",
      description: "Understand GEZ/ARD ZDF fees and payment process",
      icon: Radio,
      color: "from-cyan-500 to-cyan-600",
      href: "/radio-bills",
    },
    {
      title: "Credits",
      description: "ECTS system and university module requirements",
      icon: GraduationCap,
      color: "from-amber-500 to-amber-600",
      href: "/credits",
    },
    {
      title: "Subject Registration",
      description: "Course enrollment and semester planning guide",
      icon: BookOpen,
      color: "from-emerald-500 to-emerald-600",
      href: "/subject-registration",
    },
    {
      title: "Exam Process",
      description: "Exam rules, schedules, and grading system",
      icon: ClipboardCheck,
      color: "from-violet-500 to-violet-600",
      href: "/exam-process",
    },
  ]

  return (
    <section id="services-section" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Everything You Need to Get Started</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive resources and guides to help you navigate student life in Germany with confidence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {quickLinks.map((link, index) => {
            const IconComponent = link.icon
            return (
              <Link
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group cursor-pointer"
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden">
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${link.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {link.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{link.description}</p>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// Upcoming Events Section Component
function UpcomingEventsSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const events = [
    {
      id: 1,
      title: "International Student Welcome Day",
      date: "March 15, 2025",
      time: "14:00 - 18:00",
      location: "TU Berlin Campus",
      description:
        "Join fellow international students for orientation, networking, and essential information sessions.",
      image: "🎉",
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 2,
      title: "German Language Exchange",
      date: "March 20, 2025",
      time: "19:00 - 21:00",
      location: "Café Einstein, Mitte",
      description: "Practice German with native speakers in a relaxed, friendly environment.",
      image: "🗣️",
      color: "from-green-500 to-green-600",
    },
    {
      id: 3,
      title: "Job Fair for International Students",
      date: "March 25, 2025",
      time: "10:00 - 16:00",
      location: "ICC Berlin",
      description: "Meet top employers offering Werkstudent positions and internships.",
      image: "💼",
      color: "from-purple-500 to-purple-600",
    },
    {
      id: 4,
      title: "Banking & Finance Workshop",
      date: "April 2, 2025",
      time: "16:00 - 18:00",
      location: "Online Event",
      description: "Learn about opening bank accounts, taxes, and financial planning in Germany.",
      image: "🏦",
      color: "from-orange-500 to-orange-600",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(events.length / 2))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(events.length / 2)) % Math.ceil(events.length / 2))
  }

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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Connect with fellow students and expand your network through our carefully curated events.
          </p>
        </motion.div>

        <div className="relative">
          {/* Desktop Grid View */}
          <div className="hidden md:grid md:grid-cols-2 gap-6">
            {events.slice(currentSlide * 2, currentSlide * 2 + 2).map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group cursor-pointer"
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${event.color} flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        {event.image}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                          {event.title}
                        </h3>
                        <div className="flex items-center text-gray-600 mb-2">
                          <Clock className="w-4 h-4 mr-2" />
                          <span className="text-sm">
                            {event.date} • {event.time}
                          </span>
                        </div>
                        <div className="flex items-center text-gray-600 mb-3">
                          <MapPin className="w-4 h-4 mr-2" />
                          <span className="text-sm">{event.location}</span>
                        </div>
                        <p className="text-gray-600 text-sm mb-4 leading-relaxed">{event.description}</p>
                        <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full">
                          Learn More
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Mobile Slider View */}
          <div className="md:hidden">
            <div className="overflow-hidden">
              <motion.div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {events.map((event, index) => (
                  <div key={event.id} className="w-full flex-shrink-0 px-2">
                    <Card className="border-0 shadow-lg rounded-2xl overflow-hidden">
                      <CardContent className="p-6">
                        <div className="text-center">
                          <div
                            className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${event.color} flex items-center justify-center text-2xl shadow-lg`}
                          >
                            {event.image}
                          </div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
                          <div className="flex items-center justify-center text-gray-600 mb-2">
                            <Clock className="w-4 h-4 mr-2" />
                            <span className="text-sm">
                              {event.date} • {event.time}
                            </span>
                          </div>
                          <div className="flex items-center justify-center text-gray-600 mb-3">
                            <MapPin className="w-4 h-4 mr-2" />
                            <span className="text-sm">{event.location}</span>
                          </div>
                          <p className="text-gray-600 text-sm mb-4 leading-relaxed">{event.description}</p>
                          <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full">
                            Learn More
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full border-2 hover:bg-blue-50 bg-transparent"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full border-2 hover:bg-blue-50 bg-transparent"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

// Job Opportunities Section Component
function JobOpportunitiesSection() {
  const [selectedFilter, setSelectedFilter] = useState("All")

  const jobs = [
    {
      id: 1,
      title: "Frontend Developer Werkstudent",
      company: "TechStart GmbH",
      location: "Berlin",
      type: "Werkstudent",
      description: "Join our dynamic team building modern web applications with React and TypeScript.",
      logo: "💻",
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 2,
      title: "Marketing Intern",
      company: "Digital Agency",
      location: "Munich",
      type: "Internship",
      description: "Gain hands-on experience in digital marketing and social media management.",
      logo: "📱",
      color: "from-pink-500 to-pink-600",
    },
    {
      id: 3,
      title: "Data Science Werkstudent",
      company: "Analytics Pro",
      location: "Hamburg",
      type: "Werkstudent",
      description: "Work with big data and machine learning projects in a collaborative environment.",
      logo: "📊",
      color: "from-green-500 to-green-600",
    },
    {
      id: 4,
      title: "Customer Support",
      company: "SaaS Solutions",
      location: "Remote",
      type: "Part-time",
      description: "Provide excellent customer service and technical support to international clients.",
      logo: "🎧",
      color: "from-purple-500 to-purple-600",
    },
    {
      id: 5,
      title: "UX Design Intern",
      company: "Creative Studio",
      location: "Berlin",
      type: "Internship",
      description: "Design user-centered experiences for mobile and web applications.",
      logo: "🎨",
      color: "from-orange-500 to-orange-600",
    },
    {
      id: 6,
      title: "Software Engineer",
      company: "FinTech Startup",
      location: "Frankfurt",
      type: "Werkstudent",
      description: "Develop scalable backend systems for financial technology solutions.",
      logo: "⚡",
      color: "from-yellow-500 to-yellow-600",
    },
  ]

  const filters = ["All", "Werkstudent", "Internship", "Part-time"]

  const filteredJobs = selectedFilter === "All" ? jobs : jobs.filter((job) => job.type === selectedFilter)

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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Job Opportunities</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover exciting career opportunities designed for international students in Germany.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={selectedFilter === filter ? "default" : "outline"}
              onClick={() => setSelectedFilter(filter)}
              className={`rounded-full px-6 py-2 transition-all duration-300 ${
                selectedFilter === filter
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                  : "hover:bg-blue-50"
              }`}
            >
              {filter}
            </Button>
          ))}
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group cursor-pointer"
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${job.color} flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      {job.logo}
                    </div>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
                      {job.type}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {job.title}
                  </h3>

                  <div className="flex items-center text-gray-600 mb-2">
                    <Building className="w-4 h-4 mr-2" />
                    <span className="text-sm font-medium">{job.company}</span>
                  </div>

                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">{job.location}</span>
                  </div>

                  <p className="text-gray-600 text-sm mb-6 leading-relaxed line-clamp-3">{job.description}</p>

                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full group-hover:shadow-lg transition-all duration-300">
                    Apply Now
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Testimonials Section Component
function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Maria Rodriguez",
      country: "Spain",
      quote:
        "newInTown made my transition to Germany so much easier. The visa guide was incredibly detailed and helped me avoid common mistakes.",
      avatar: "👩‍🎓",
      rating: 5,
    },
    {
      id: 2,
      name: "Ahmed Hassan",
      country: "Egypt",
      quote:
        "Finding a Werkstudent job seemed impossible until I used their job portal. Now I'm working at a great tech company in Berlin!",
      avatar: "👨‍💻",
      rating: 5,
    },
    {
      id: 3,
      name: "Priya Sharma",
      country: "India",
      quote:
        "The banking guide saved me hours of confusion. I opened my account in just one visit thanks to their step-by-step instructions.",
      avatar: "👩‍💼",
      rating: 5,
    },
    {
      id: 4,
      name: "Chen Wei",
      country: "China",
      quote: "The community events helped me make friends and practice German. I felt welcomed from day one in Munich.",
      avatar: "👨‍🎓",
      rating: 5,
    },
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Students Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from international students who successfully navigated their German journey with newInTown.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 text-4xl bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {testimonial.avatar}
                  </div>

                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  <p className="text-gray-600 text-sm mb-4 leading-relaxed italic">"{testimonial.quote}"</p>

                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">From {testimonial.country}</p>
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

// Add this new section component
function VisaGuidePreview() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Help with Visa & Residence?</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Get step-by-step guidance for Anmeldung, residence permits, and visa applications with our comprehensive
            guide.
          </p>
          <Button
            size="lg"
            className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-3 rounded-full text-lg font-semibold"
            asChild
          >
            <Link href="/visa-guidance" target="_blank" rel="noopener noreferrer">
              Explore Visa Guide
              <ChevronRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

// Footer Component
function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "Guides", href: "#guides" },
    { name: "Jobs", href: "#jobs" },
    { name: "Events", href: "#events" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ]

  const legalLinks = [
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Terms of Service", href: "#terms" },
    { name: "Imprint", href: "#imprint" },
  ]

  const socialLinks = [
    { name: "Instagram", icon: Instagram, href: "#", color: "hover:text-pink-500" },
    { name: "LinkedIn", icon: Linkedin, href: "#", color: "hover:text-blue-600" },
    { name: "WhatsApp", icon: MessageCircle, href: "#", color: "hover:text-green-500" },
    { name: "YouTube", icon: Youtube, href: "#", color: "hover:text-red-500" },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">newInTown</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Your trusted companion for navigating student life in Germany. Find jobs, accommodation, and essential
              services all in one place.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Jobs
                </Link>
              </li>
              <li>
                <Link
                  href="/accommodation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Accommodation
                </Link>
              </li>
              <li>
                <Link
                  href="/visa-guidance"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Visa Guidance
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.uni-due.de/stellenmarkt/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  UDE Job Portal
                </a>
              </li>
              <li>
                <a
                  href="https://www.uni-due.de/career-service/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Career Services
                </a>
              </li>
              <li>
                <Link
                  href="/banking"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Banking Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/insurance"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Insurance Info
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">© {currentYear} newInTown. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

// Main HomePage Component
export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <QuickLinksSection />
      <UpcomingEventsSection />
      <JobOpportunitiesSection />
      <TestimonialsSection />
      <VisaGuidePreview />
    </div>
  )
}
