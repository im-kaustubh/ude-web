"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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
  GraduationCap,
  ExternalLink,
  Download,
  MessageCircle,
  Clock,
  Globe,
  Mail,
  CheckCircle,
  Coffee,
  Headphones,
  Tv,
  Target,
  UserCheck,
} from "lucide-react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import Breadcrumbs from "@/components/breadcrumbs"
import Navigation from "@/components/navigation"


// Hero Section Component
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20">
      {/* Floating Language Icons */}
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
          🇩🇪
        </motion.div>
        <motion.div
          className="absolute bottom-32 left-20 text-3xl"
          animate={{ y: [0, -10, 0], rotate: [0, 3, 0] }}
          transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
        >
          💬
        </motion.div>
        <motion.div
          className="absolute bottom-20 right-10 text-4xl"
          animate={{ y: [0, -25, 0], rotate: [0, -3, 0] }}
          transition={{ duration: 3.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1.5 }}
        >
          🎓
        </motion.div>
        <motion.div
          className="absolute top-1/2 left-1/4 text-2xl"
          animate={{ y: [0, -12, 0], rotate: [0, 2, 0] }}
          transition={{ duration: 4.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
        >
          📖
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
            Learn{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">German</span> –
            Language Courses & Learning Tips
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            UDE and local partners offer German courses and language programs tailored for students, researchers, and
            international guests. Whether you're starting from zero or aiming for professional fluency, find the right
            support here.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              asChild
            >
              <a href="https://www.uni-due.de/iwis/" target="_blank" rel="noopener noreferrer">
                View UDE Language Courses
                <ExternalLink className="ml-2 w-5 h-5" />
              </a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-2 border-gray-300 hover:border-blue-500 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 bg-transparent"
              asChild
            >
              <a
                href="https://www.uni-due.de/international/sprachtandem/start_en.php"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join a Language Tandem
                <Users className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// UDE Language Courses Section
function UDECoursesSection() {
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Language Courses at UDE</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The IwiS (Institute for Academic Key Competencies) at UDE offers comprehensive German language courses for
            all levels.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="h-full border-0 shadow-lg rounded-2xl">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <span>Course Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Levels Available</p>
                    <p className="text-gray-600">A1 to C1 - From beginner to advanced</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Standard Courses</p>
                    <p className="text-gray-600">Regular courses during the semester</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Intensive Courses</p>
                    <p className="text-gray-600">Accelerated learning during semester breaks</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Specialized Courses</p>
                    <p className="text-gray-600">German for workplace and academic communication</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="h-full border-0 shadow-lg rounded-2xl">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center">
                    <UserCheck className="w-6 h-6 text-white" />
                  </div>
                  <span>Who Can Register</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <GraduationCap className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">PhD Students</p>
                    <p className="text-gray-600">Register directly via the LSF system</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Researchers</p>
                    <p className="text-gray-600">Register by email to sprachkurse@uni-due.de</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Globe className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">International Students</p>
                    <p className="text-gray-600">Access via University Prospectus (LSF)</p>
                  </div>
                </div>
                <div className="mt-6">
                  <Button
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full"
                    asChild
                  >
                    <a href="https://www.uni-due.de/iwis/" target="_blank" rel="noopener noreferrer">
                      Register for UDE Language Courses
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Welcome Centre Basic Course */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="border-0 shadow-lg rounded-2xl bg-gradient-to-r from-blue-50 to-purple-50">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Basics of German - Welcome Centre</h3>
                  <p className="text-gray-600 mb-4">
                    A short monthly introductory German course, offered online via Zoom. Ideal for international
                    researchers and guests preparing for their stay or starting German from scratch.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                      Online via Zoom
                    </Badge>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      Monthly Course
                    </Badge>
                    <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                      For Beginners
                    </Badge>
                  </div>
                  <Button variant="outline" className="border-blue-500 text-blue-600 hover:bg-blue-50 bg-transparent">
                    Further Information on Basic Course
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

// Tandem Learning Section
function TandemSection() {
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Learn German with a Language Partner</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            UDE's International Office runs a Tandem Program, matching learners with native German speakers for
            conversational practice.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="border-0 shadow-xl rounded-2xl overflow-hidden">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="p-8 bg-white">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">How It Works</h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-blue-600 font-bold text-sm">1</span>
                        </div>
                        <div>
                          <p className="font-semibold">Get Matched</p>
                          <p className="text-gray-600 text-sm">We pair you with a native German speaker</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-blue-600 font-bold text-sm">2</span>
                        </div>
                        <div>
                          <p className="font-semibold">Meet Regularly</p>
                          <p className="text-gray-600 text-sm">Practice German and help with your native language</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-blue-600 font-bold text-sm">3</span>
                        </div>
                        <div>
                          <p className="font-semibold">Learn Together</p>
                          <p className="text-gray-600 text-sm">Focus on conversation, culture, and daily use</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-8 bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                    <h3 className="text-2xl font-bold mb-6">Benefits</h3>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <MessageCircle className="w-5 h-5 flex-shrink-0" />
                        <span>Practice real conversations</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Users className="w-5 h-5 flex-shrink-0" />
                        <span>Make German friends</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Globe className="w-5 h-5 flex-shrink-0" />
                        <span>Learn about German culture</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Coffee className="w-5 h-5 flex-shrink-0" />
                        <span>Relaxed, informal learning</span>
                      </div>
                    </div>
                    <Button className="w-full mt-8 bg-white text-blue-600 hover:bg-blue-50 font-semibold" asChild>
                      <a
                        href="https://www.uni-due.de/international/sprachtandem/start_en.php"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Join the Tandem Program
                        <ExternalLink className="ml-2 w-4 h-4" />
                      </a>
                    </Button>
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

// Private Language Schools Section
function PrivateSchoolsSection() {
  const schools = [
    {
      name: "Volkshochschule Duisburg",
      levels: "A1–B2",
      cost: "Low",
      location: "Duisburg",
      description: "Community college offering affordable German courses",
      link: "https://www.vhs-duisburg.de/",
      featured: true,
    },
    {
      name: "Volkshochschule Essen",
      levels: "A1–B2",
      cost: "Low",
      location: "Essen",
      description: "Community college with flexible scheduling options",
      link: "https://www.vhs.essen.de/",
      featured: true,
    },
    {
      name: "Goethe-Institut Düsseldorf",
      levels: "A1–C2",
      cost: "€€€",
      location: "Düsseldorf",
      description: "Premium German language institute with international recognition",
      link: "https://www.goethe.de/ins/de/de/sta/due.html",
    },
    {
      name: "DeutschAkademie Düsseldorf",
      levels: "A1–C1",
      cost: "€€",
      location: "Düsseldorf",
      description: "Intensive courses with small class sizes",
      link: "https://www.deutschakademie.de/duesseldorf/",
    },
    {
      name: "Berlitz Duisburg",
      levels: "A1–C1",
      cost: "€€€",
      location: "Duisburg",
      description: "Business-focused German courses and private lessons",
      link: "https://www.berlitz.com/de-de",
    },
    {
      name: "inlingua Essen",
      levels: "A1–C1",
      cost: "€€",
      location: "Essen",
      description: "Communicative method with native speakers",
      link: "https://www.inlingua-essen.de/",
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Recommended Private Language Schools</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional language schools in Duisburg, Essen, and nearby Düsseldorf offering structured German courses.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {schools.map((school, index) => (
            <motion.div
              key={school.name}
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
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    {school.featured && <Badge className="bg-green-100 text-green-800">Most Affordable</Badge>}
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {school.name}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{school.description}</p>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Levels:</span>
                      <Badge variant="secondary">{school.levels}</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Cost:</span>
                      <Badge variant="outline">{school.cost}</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Location:</span>
                      <span className="text-sm font-medium">{school.location}</span>
                    </div>
                  </div>

                  <Button
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full group-hover:shadow-lg transition-all duration-300"
                    asChild
                  >
                    <a href={school.link} target="_blank" rel="noopener noreferrer">
                      Visit Website
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </a>
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

// Café Lingua Section
function CafeLinguaSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="border-0 shadow-xl rounded-2xl overflow-hidden">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 bg-gradient-to-br from-purple-500 to-pink-500 text-white">
                  <div className="flex items-center space-x-3 mb-6">
                    <Coffee className="w-8 h-8" />
                    <h2 className="text-3xl font-bold">Café Lingua</h2>
                  </div>
                  <p className="text-lg mb-6 opacity-90">
                    Weekly language meet-up where students practice German and other languages in a relaxed, friendly
                    environment.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5" />
                      <span>Mondays, 7 PM – 9 PM</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Globe className="w-5 h-5" />
                      <span>Currently online format</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="w-5 h-5" />
                      <span>Open to all language levels</span>
                    </div>
                  </div>
                </div>
                <div className="p-8 bg-white">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">What to Expect</h3>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold">Casual Conversations</p>
                        <p className="text-gray-600 text-sm">Practice German in everyday situations</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold">Cultural Exchange</p>
                        <p className="text-gray-600 text-sm">Learn about German culture and share yours</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold">No Pressure</p>
                        <p className="text-gray-600 text-sm">Relaxed atmosphere for all skill levels</p>
                      </div>
                    </div>
                  </div>
                  <Button
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full"
                    asChild
                  >
                    <a href="https://www.studierendenwerk.de/" target="_blank" rel="noopener noreferrer">
                      Visit Café Lingua
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

// Learning Tips Section
function LearningTipsSection() {
  const tips = [
    {
      icon: Users,
      title: "Join Tandems",
      description: "Practice with native speakers without pressure",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: BookOpen,
      title: "Read German Books",
      description: "Start with kids' books, then graded readers",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Headphones,
      title: "Watch & Listen",
      description: "German TV (ARD/ZDF), podcasts, Netflix with subtitles",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: MessageCircle,
      title: "Use Campus German",
      description: "Speak with staff at Mensa, supermarket, and friends",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: Target,
      title: "Set Micro Goals",
      description: "5 new words/day, or 10 min of listening practice",
      color: "from-pink-500 to-pink-600",
    },
    {
      icon: Coffee,
      title: "Join Language Cafés",
      description: "Practice in relaxed social settings",
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Learning Tips for Success</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Practical strategies to accelerate your German learning journey and make it more enjoyable.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tips.map((tip, index) => {
            const Icon = tip.icon
            return (
              <motion.div
                key={tip.title}
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
                      className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${tip.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {tip.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{tip.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Free Online Tools */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="border-0 shadow-lg rounded-2xl bg-gradient-to-r from-blue-50 to-purple-50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Free Online Tools for Self-Study</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 bg-green-100 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">📱</span>
                  </div>
                  <h4 className="font-semibold mb-2">Apps</h4>
                  <p className="text-sm text-gray-600">Duolingo, Babbel, Busuu</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Globe className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="font-semibold mb-2">Websites</h4>
                  <p className="text-sm text-gray-600">Deutsche Welle, LingQ</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 bg-red-100 rounded-xl flex items-center justify-center">
                    <Tv className="w-6 h-6 text-red-600" />
                  </div>
                  <h4 className="font-semibold mb-2">YouTube</h4>
                  <p className="text-sm text-gray-600">Easy German, Learn German with Anja</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 bg-purple-100 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-purple-600" />
                  </div>
                  <h4 className="font-semibold mb-2">Meetups</h4>
                  <p className="text-sm text-gray-600">Language Exchange groups</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

// FAQ Section
function FAQSection() {
  const faqs = [
    {
      question: "How do I register for a UDE German course?",
      answer:
        "PhD students can register directly via the LSF system. Researchers should email sprachkurse@uni-due.de mentioning they are UDE researchers and specify the desired course/level. Other students can access courses through the University Prospectus (LSF).",
    },
    {
      question: "Do I need a placement test?",
      answer:
        "Yes, most courses require a placement test to determine your current German level. This ensures you're placed in the appropriate course level from A1 to C1.",
    },
    {
      question: "Are these courses free for PhD students?",
      answer:
        "UDE language courses are typically free or heavily subsidized for PhD students and researchers. Check with the IwiS institute for current pricing and eligibility.",
    },
    {
      question: "Can I join both university courses and a tandem?",
      answer:
        "Combining structured courses with tandem practice is highly recommended. The courses provide grammar and structure, while tandems offer conversational practice.",
    },
    {
      question: "How long does it take to reach B2 or C1?",
      answer:
        "This varies greatly depending on your starting level, study intensity, and language background. Generally, expect 6-12 months per level with regular study and practice.",
    },
    {
      question: "What's the difference between intensive and regular courses?",
      answer:
        "Regular courses run during the semester with 2-3 hours per week. Intensive courses are offered during semester breaks with daily classes for faster progress.",
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
            Common questions about German language learning at UDE and in the region.
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

// Contact Section
function ContactSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Need More Information?</h2>
            <p className="text-lg text-gray-600">Contact UDE's language support services for personalized guidance.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg rounded-2xl">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">UDE Welcome Centre</h3>
                <p className="text-gray-600 mb-4">General information and support for international students</p>
                <Button
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full"
                  asChild
                >
                  <a href="mailto:welcome@uni-due.de">
                    welcome@uni-due.de
                    <Mail className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg rounded-2xl">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Course Registration</h3>
                <p className="text-gray-600 mb-4">Specific questions about language course registration</p>
                <Button
                  className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white rounded-full"
                  asChild
                >
                  <a href="mailto:sprachkurse@uni-due.de">
                    sprachkurse@uni-due.de
                    <Mail className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Card className="border-0 shadow-lg rounded-2xl bg-gradient-to-r from-blue-50 to-purple-50">
              <CardContent className="p-8">
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <Download className="w-6 h-6 text-blue-600" />
                  <h3 className="text-xl font-bold text-gray-900">Download Resources</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Get our comprehensive guide to starting your German learning journey at UDE.
                </p>
                <Button variant="outline" className="border-blue-500 text-blue-600 hover:bg-blue-50 bg-transparent">
                  Download "How to Start Learning German at UDE" (PDF)
                  <Download className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Footer Component (reused from other pages)
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

// Main Language Courses Page Component
export default function LanguageCoursesPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Breadcrumbs />
      <HeroSection />
      <UDECoursesSection />
      <TandemSection />
      <PrivateSchoolsSection />
      <CafeLinguaSection />
      <LearningTipsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
