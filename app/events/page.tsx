"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Menu,
  X,
  ArrowLeft,
  MapPin,
  Calendar,
  Users,
  ChevronRight,
  BookOpen,
  Briefcase,
  Clock,
  ExternalLink,
  ChevronLeft,
  PartyPopper,
  GraduationCap,
  Coffee,
  Music,
  Utensils,
  Camera,
  Gamepad2,
  Heart,
} from "lucide-react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import Breadcrumbs from "@/components/breadcrumbs"
import Footer from "@/components/footer"
import Navigation from "@/components/navigation"


// Hero Section Component
function HeroSection() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20">
      {/* Floating Event Icons */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 text-4xl"
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
        >
          📅
        </motion.div>
        <motion.div
          className="absolute top-32 right-20 text-3xl"
          animate={{ y: [0, -15, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
        >
          🎉
        </motion.div>
        <motion.div
          className="absolute bottom-32 left-20 text-3xl"
          animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, delay: 2 }}
        >
          🎓
        </motion.div>
        <motion.div
          className="absolute bottom-20 right-10 text-4xl"
          animate={{ y: [0, -25, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 3.5, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
        >
          🎪
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
            Discover Events at{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              University of Duisburg-Essen
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join exciting events organized by Fachschaft ISE, Studierendenwerk Duisburg-Essen, and the student
            community. Connect, learn, and have fun with fellow students!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => document.getElementById("upcoming-events")?.scrollIntoView({ behavior: "smooth" })}
            >
              View Upcoming Events
              <Calendar className="ml-2 w-5 h-5" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-2 border-gray-300 hover:border-blue-500 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 bg-transparent"
              onClick={() => document.getElementById("fachschaft-events")?.scrollIntoView({ behavior: "smooth" })}
            >
              Browse All Events
              <BookOpen className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}



// Event Card Component (reusable)
function EventCard({ event, index }: { event: any; index: number }) {
  const getEventIcon = (type: string) => {
    switch (type) {
      case "party":
        return <PartyPopper className="w-6 h-6" />
      case "workshop":
        return <GraduationCap className="w-6 h-6" />
      case "social":
        return <Coffee className="w-6 h-6" />
      case "cultural":
        return <Music className="w-6 h-6" />
      case "food":
        return <Utensils className="w-6 h-6" />
      case "sports":
        return <Gamepad2 className="w-6 h-6" />
      case "photography":
        return <Camera className="w-6 h-6" />
      default:
        return <Calendar className="w-6 h-6" />
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="group cursor-pointer h-full"
    >
      <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden bg-white">
        <CardContent className="p-6 h-full flex flex-col">
          <div className="flex items-start justify-between mb-4">
            <div
              className={`w-12 h-12 rounded-xl bg-gradient-to-r ${event.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
            >
              {getEventIcon(event.type)}
            </div>
            {event.featured && (
              <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-xs font-semibold rounded-full">
                Featured
              </span>
            )}
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
            {event.title}
          </h3>

          <div className="flex items-center text-gray-600 mb-2">
            <Clock className="w-4 h-4 mr-2 flex-shrink-0" />
            <span className="text-sm">
              {event.date} • {event.time}
            </span>
          </div>

          <div className="flex items-center text-gray-600 mb-4">
            <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
            <span className="text-sm">{event.location}</span>
          </div>

          <p className="text-gray-600 text-sm mb-6 leading-relaxed flex-grow line-clamp-3">{event.description}</p>

          <div className="flex items-center justify-between mt-auto">
            <div className="flex items-center text-gray-500 text-sm">
              <Users className="w-4 h-4 mr-1" />
              <span>{event.attendees} attending</span>
            </div>
            <Button
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full px-6 group-hover:shadow-lg transition-all duration-300"
              asChild
            >
              <Link href={event.link} target="_blank" rel="noopener noreferrer">
                Join
                <ExternalLink className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

// Upcoming Events Section
function UpcomingEventsSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const upcomingEvents = [
    {
      id: 1,
      title: "Welcome Party for New Students",
      date: "March 15, 2025",
      time: "19:00 - 23:00",
      location: "Campus Duisburg, Audimax",
      description:
        "Join us for an exciting welcome party! Meet fellow international students, enjoy music, food, and games. Perfect opportunity to make new friends and start your German adventure.",
      type: "party",
      color: "from-pink-500 to-pink-600",
      attendees: 150,
      featured: true,
      link: "https://www.uni-due.de/de/veranstaltungen/",
    },
    {
      id: 2,
      title: "German Language Exchange Café",
      date: "March 18, 2025",
      time: "16:00 - 18:00",
      location: "Campus Essen, Mensa",
      description:
        "Practice your German with native speakers in a relaxed café atmosphere. All levels welcome! Enjoy coffee, snacks, and meaningful conversations.",
      type: "social",
      color: "from-green-500 to-green-600",
      attendees: 45,
      featured: false,
      link: "https://www.stw-edu.de/events",
    },
    {
      id: 3,
      title: "Career Workshop: CV Writing",
      date: "March 22, 2025",
      time: "14:00 - 17:00",
      location: "Campus Duisburg, Room LC 137",
      description:
        "Learn how to write a compelling German CV and cover letter. Get tips from HR professionals and improve your job application skills.",
      type: "workshop",
      color: "from-blue-500 to-blue-600",
      attendees: 30,
      featured: true,
      link: "https://www.uni-due.de/de/veranstaltungen/",
    },
    {
      id: 4,
      title: "International Food Festival",
      date: "March 25, 2025",
      time: "12:00 - 16:00",
      location: "Campus Essen, Outdoor Area",
      description:
        "Taste delicious food from around the world! Students showcase their home country's cuisine. Bring your appetite and cultural curiosity.",
      type: "food",
      color: "from-orange-500 to-orange-600",
      attendees: 200,
      featured: false,
      link: "https://www.stw-edu.de/events",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(upcomingEvents.length / 3))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(upcomingEvents.length / 3)) % Math.ceil(upcomingEvents.length / 3))
  }

  return (
    <section id="upcoming-events" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
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
            Don't miss these exciting upcoming events! Join your fellow students for unforgettable experiences.
          </p>
        </motion.div>

        <div className="relative">
          {/* Desktop Carousel */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-3 gap-6">
              {upcomingEvents.slice(currentSlide * 3, currentSlide * 3 + 3).map((event, index) => (
                <EventCard key={event.id} event={event} index={index} />
              ))}
            </div>
          </div>

          {/* Tablet Grid */}
          <div className="hidden md:block lg:hidden">
            <div className="grid grid-cols-2 gap-6">
              {upcomingEvents.slice(0, 4).map((event, index) => (
                <EventCard key={event.id} event={event} index={index} />
              ))}
            </div>
          </div>

          {/* Mobile Stack */}
          <div className="md:hidden">
            <div className="space-y-6">
              {upcomingEvents.map((event, index) => (
                <EventCard key={event.id} event={event} index={index} />
              ))}
            </div>
          </div>

          {/* Navigation Buttons - Desktop Only */}
          <div className="hidden lg:flex justify-center mt-8 space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full border-2 hover:bg-blue-50 bg-white shadow-lg"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full border-2 hover:bg-blue-50 bg-white shadow-lg"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

// Fachschaft ISE Events Section
function FachschaftEventsSection() {
  const fachschaftEvents = [
    {
      id: 5,
      title: "ISE Study Group: Mathematics",
      date: "March 20, 2025",
      time: "15:00 - 17:00",
      location: "Campus Duisburg, Room LE 120",
      description:
        "Join our weekly mathematics study group. Get help with assignments, prepare for exams, and study together with your peers.",
      type: "workshop",
      color: "from-blue-500 to-blue-600",
      attendees: 25,
      featured: false,
      link: "https://www.uni-due.de/de/veranstaltungen/",
    },
    {
      id: 6,
      title: "Game Night: Board Games & Fun",
      date: "March 23, 2025",
      time: "18:00 - 22:00",
      location: "Fachschaft ISE Room",
      description:
        "Relax and have fun with board games, card games, and video games. Snacks and drinks provided. Great way to unwind after exams!",
      type: "social",
      color: "from-purple-500 to-purple-600",
      attendees: 40,
      featured: true,
      link: "https://www.uni-due.de/de/veranstaltungen/",
    },
    {
      id: 7,
      title: "Industry Talk: Engineering Careers",
      date: "March 28, 2025",
      time: "16:00 - 18:00",
      location: "Campus Duisburg, Audimax",
      description:
        "Hear from industry professionals about career opportunities in engineering. Network with potential employers and get career advice.",
      type: "workshop",
      color: "from-green-500 to-green-600",
      attendees: 80,
      featured: false,
      link: "https://www.uni-due.de/de/veranstaltungen/",
    },
    {
      id: 8,
      title: "ISE Spring BBQ",
      date: "April 5, 2025",
      time: "12:00 - 16:00",
      location: "Campus Duisburg, Garden Area",
      description:
        "Celebrate spring with a traditional German BBQ! Enjoy grilled food, music, and outdoor games with the ISE community.",
      type: "party",
      color: "from-orange-500 to-orange-600",
      attendees: 120,
      featured: true,
      link: "https://www.uni-due.de/de/veranstaltungen/",
    },
    {
      id: 9,
      title: "Photography Workshop",
      date: "April 8, 2025",
      time: "14:00 - 17:00",
      location: "Campus Essen, Media Center",
      description:
        "Learn photography basics and advanced techniques. Bring your camera or smartphone and explore the art of photography with fellow students.",
      type: "photography",
      color: "from-pink-500 to-pink-600",
      attendees: 20,
      featured: false,
      link: "https://www.uni-due.de/de/veranstaltungen/",
    },
    {
      id: 10,
      title: "Exam Preparation Workshop",
      date: "April 12, 2025",
      time: "10:00 - 14:00",
      location: "Campus Duisburg, Library",
      description:
        "Get ready for your exams with effective study techniques, time management tips, and stress reduction strategies.",
      type: "workshop",
      color: "from-teal-500 to-teal-600",
      attendees: 60,
      featured: false,
      link: "https://www.uni-due.de/de/veranstaltungen/",
    },
  ]

  return (
    <section id="fachschaft-events" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Fachschaft ISE Events</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Events organized by the student council of International Studies in Engineering (ISE) — workshops, parties,
            info sessions, and community gatherings designed specifically for ISE students.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {fachschaftEvents.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            asChild
          >
            <Link href="https://www.uni-due.de/de/veranstaltungen/" target="_blank" rel="noopener noreferrer">
              View All UDE Events
              <ExternalLink className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

// Studierendenwerk Events Section
function StudierendenwerkEventsSection() {
  const studierendenwerkEvents = [
    {
      id: 11,
      title: "Cooking Class: Italian Cuisine",
      date: "March 21, 2025",
      time: "17:00 - 20:00",
      location: "Student Dorm Essen, Kitchen",
      description:
        "Learn to cook authentic Italian dishes! From pasta to tiramisu, discover the secrets of Italian cuisine with our professional chef.",
      type: "food",
      color: "from-red-500 to-red-600",
      attendees: 16,
      featured: true,
      link: "https://www.stw-edu.de/events",
    },
    {
      id: 12,
      title: "Cultural Evening: Music Around the World",
      date: "March 26, 2025",
      time: "19:00 - 22:00",
      location: "Student Center Duisburg",
      description:
        "Experience music from different cultures! Students perform traditional songs and dances from their home countries.",
      type: "cultural",
      color: "from-purple-500 to-purple-600",
      attendees: 90,
      featured: false,
      link: "https://www.stw-edu.de/events",
    },
    {
      id: 13,
      title: "Fitness Workshop: Yoga for Students",
      date: "March 30, 2025",
      time: "10:00 - 11:30",
      location: "Sports Center Campus Essen",
      description:
        "Start your day with relaxing yoga! Perfect for reducing stress and improving flexibility. All levels welcome, mats provided.",
      type: "sports",
      color: "from-green-500 to-green-600",
      attendees: 25,
      featured: false,
      link: "https://www.stw-edu.de/events",
    },
    {
      id: 14,
      title: "Excursion: Cologne City Tour",
      date: "April 2, 2025",
      time: "09:00 - 18:00",
      location: "Departure: Campus Duisburg",
      description:
        "Explore beautiful Cologne! Visit the famous cathedral, museums, and enjoy the vibrant city life. Transportation and guide included.",
      type: "cultural",
      color: "from-blue-500 to-blue-600",
      attendees: 50,
      featured: true,
      link: "https://www.stw-edu.de/events",
    },
    {
      id: 15,
      title: "Mental Health Workshop",
      date: "April 6, 2025",
      time: "14:00 - 16:00",
      location: "Counseling Center Essen",
      description:
        "Learn about mental health resources and coping strategies. Professional counselors will share tips for managing student life stress.",
      type: "workshop",
      color: "from-teal-500 to-teal-600",
      attendees: 35,
      featured: false,
      link: "https://www.stw-edu.de/events",
    },
    {
      id: 16,
      title: "International Movie Night",
      date: "April 10, 2025",
      time: "20:00 - 23:00",
      location: "Student Cinema Duisburg",
      description:
        "Watch international films with subtitles! Popcorn and drinks included. Vote for next month's movie selection.",
      type: "cultural",
      color: "from-indigo-500 to-indigo-600",
      attendees: 70,
      featured: false,
      link: "https://www.stw-edu.de/events",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Events by Studierendenwerk</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Find workshops, cultural programs, excursions, and networking events organized by Studierendenwerk
            Duisburg-Essen. These events focus on student welfare, cultural exchange, and personal development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {studierendenwerkEvents.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            asChild
          >
            <Link href="https://www.stw-edu.de/events" target="_blank" rel="noopener noreferrer">
              View All Studierendenwerk Events
              <ExternalLink className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

// CTA Banner Section
function CTABannerSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center mb-6">
            <Heart className="w-8 h-8 text-white mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">Want to Organize Your Own Event?</h2>
          </div>

          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Have a great idea for a student event? Contact Fachschaft ISE or Studierendenwerk to feature your event here
            and reach hundreds of students!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              asChild
            >
              <Link href="https://www.uni-due.de/de/veranstaltungen/" target="_blank" rel="noopener noreferrer">
                Contact Fachschaft ISE
                <ExternalLink className="ml-2 w-5 h-5" />
              </Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 bg-transparent"
              asChild
            >
              <Link href="https://www.stw-edu.de/events" target="_blank" rel="noopener noreferrer">
                Contact Studierendenwerk
                <ExternalLink className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Footer Component (reusing existing structure)


// Main Events Page Component
export default function EventsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Breadcrumbs />
      <HeroSection />
      <UpcomingEventsSection />
      <FachschaftEventsSection />
      <StudierendenwerkEventsSection />
      <CTABannerSection />
      
    </div>
  )
}
