"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Menu,
  X,
  ArrowLeft,
  MapPin,
  Briefcase,
  Users,
  Calendar,
  ChevronRight,
  BookOpen,
  Search,
  Filter,
  ExternalLink,
  Building,
  Clock,
  GraduationCap,
  FileText,
  DollarSign,
  Globe,
} from "lucide-react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import Breadcrumbs from "@/components/breadcrumbs"
import Footer from "@/components/footer"
import Navigation from "@/components/navigation"




// Hero Section Component
function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 to-purple-100/30" />
        <img
          src="/placeholder.svg?height=600&width=1200"
          alt="Student jobs at University of Duisburg-Essen"
          className="w-full h-full object-cover opacity-10"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Find Student Jobs
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Browse Werkstudent roles, HiWi positions, internships, and part-time jobs at UDE and beyond. Start building
            your career while studying in Germany.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              asChild
            >
              <a href="https://www.uni-due.de/stellenmarkt/" target="_blank" rel="noopener noreferrer">
                View All Jobs
                <ExternalLink className="ml-2 w-5 h-5" />
              </a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-2 border-blue-300 hover:border-blue-500 hover:bg-blue-50 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 bg-transparent"
              onClick={() => document.getElementById("job-tips")?.scrollIntoView({ behavior: "smooth" })}
            >
              Learn How to Apply
              <BookOpen className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Job Board Component
function JobBoard() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedJobTypes, setSelectedJobTypes] = useState<string[]>([])
  const [selectedLocations, setSelectedLocations] = useState<string[]>([])
  const [selectedFaculty, setSelectedFaculty] = useState("")
  const [sortBy, setSortBy] = useState("newest")
  const [showMobileFilters, setShowMobileFilters] = useState(false)

  const jobTypes = ["Werkstudent", "HiWi (SHK/WHK)", "Internship", "Other"]
  const locations = ["Duisburg", "Essen", "Remote"]
  const faculties = [
    "Faculty of Engineering",
    "Faculty of Business Administration",
    "Faculty of Medicine",
    "Faculty of Educational Sciences",
    "Faculty of Humanities",
    "Faculty of Mathematics",
    "Faculty of Physics",
    "Faculty of Chemistry",
    "Faculty of Biology",
    "Faculty of Social Sciences",
  ]

  // Sample job data
  const jobs = [
    {
      id: 1,
      title: "Studentische Hilfskraft (w/m/d) für das zdi-Zentrum",
      company: "University of Duisburg-Essen",
      location: "Campus Duisburg",
      type: "HiWi (SHK/WHK)",
      faculty: "Faculty of Engineering",
      jobCode: "Nr. 10073",
      description: "Supporting documentation for a new study program and assisting with administrative tasks.",
      isRemote: false,
      postedDate: "2024-01-15",
    },
    {
      id: 2,
      title: "Werkstudent Software Development (m/w/d)",
      company: "University of Duisburg-Essen - IT Services",
      location: "Campus Essen",
      type: "Werkstudent",
      faculty: "Faculty of Mathematics",
      jobCode: "Nr. 10074",
      description: "Development and maintenance of web applications for university administration systems.",
      isRemote: true,
      postedDate: "2024-01-12",
    },
    {
      id: 3,
      title: "Research Assistant - Machine Learning",
      company: "University of Duisburg-Essen",
      location: "Campus Duisburg",
      type: "Internship",
      faculty: "Faculty of Engineering",
      jobCode: "Nr. 10075",
      description: "Research support in machine learning projects and data analysis for ongoing research initiatives.",
      isRemote: false,
      postedDate: "2024-01-10",
    },
    {
      id: 4,
      title: "Student Assistant - Library Services",
      company: "University of Duisburg-Essen",
      location: "Campus Essen",
      type: "HiWi (SHK/WHK)",
      faculty: "Faculty of Humanities",
      jobCode: "Nr. 10076",
      description: "Assistance with library operations, cataloging, and student support services.",
      isRemote: false,
      postedDate: "2024-01-08",
    },
    {
      id: 5,
      title: "Marketing Werkstudent (m/w/d)",
      company: "University of Duisburg-Essen - Communications",
      location: "Remote",
      type: "Werkstudent",
      faculty: "Faculty of Business Administration",
      jobCode: "Nr. 10077",
      description: "Support marketing campaigns and social media management for university communications.",
      isRemote: true,
      postedDate: "2024-01-05",
    },
    {
      id: 6,
      title: "Lab Assistant - Chemistry Department",
      company: "University of Duisburg-Essen",
      location: "Campus Essen",
      type: "HiWi (SHK/WHK)",
      faculty: "Faculty of Chemistry",
      jobCode: "Nr. 10078",
      description: "Laboratory support, equipment maintenance, and assistance with student experiments.",
      isRemote: false,
      postedDate: "2024-01-03",
    },
  ]

  const handleJobTypeChange = (jobType: string, checked: boolean) => {
    if (checked) {
      setSelectedJobTypes([...selectedJobTypes, jobType])
    } else {
      setSelectedJobTypes(selectedJobTypes.filter((type) => type !== jobType))
    }
  }

  const handleLocationChange = (location: string, checked: boolean) => {
    if (checked) {
      setSelectedLocations([...selectedLocations, location])
    } else {
      setSelectedLocations(selectedLocations.filter((loc) => loc !== location))
    }
  }

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesJobType = selectedJobTypes.length === 0 || selectedJobTypes.includes(job.type)
    const matchesLocation =
      selectedLocations.length === 0 ||
      selectedLocations.includes(job.location.replace("Campus ", "")) ||
      (selectedLocations.includes("Remote") && job.isRemote)
    const matchesFaculty = !selectedFaculty || job.faculty === selectedFaculty

    return matchesSearch && matchesJobType && matchesLocation && matchesFaculty
  })

  const sortedJobs = [...filteredJobs].sort((a, b) => {
    switch (sortBy) {
      case "newest":
        return new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime()
      case "oldest":
        return new Date(a.postedDate).getTime() - new Date(b.postedDate).getTime()
      case "location":
        return a.location.localeCompare(b.location)
      case "type":
        return a.type.localeCompare(b.type)
      default:
        return 0
    }
  })

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Search and Filter Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search jobs by keyword, department, or company"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-3 text-lg border-2 border-gray-200 focus:border-blue-500 rounded-xl"
            />
          </div>

          {/* Filter Chips and Sort - Desktop */}
          <div className="hidden md:flex items-center justify-between mb-6">
            <div className="flex flex-wrap gap-3">
              {/* Job Type Filters */}
              {jobTypes.map((type) => (
                <Button
                  key={type}
                  variant={selectedJobTypes.includes(type) ? "default" : "outline"}
                  size="sm"
                  className={`rounded-full px-4 py-2 transition-all duration-200 ${
                    selectedJobTypes.includes(type)
                      ? "bg-blue-100 text-blue-700 border-blue-300 hover:bg-blue-200"
                      : "border-blue-200 text-blue-600 hover:bg-blue-50"
                  }`}
                  onClick={() => handleJobTypeChange(type, !selectedJobTypes.includes(type))}
                >
                  {type}
                </Button>
              ))}

              {/* Location Filters */}
              {locations.map((location) => (
                <Button
                  key={location}
                  variant={selectedLocations.includes(location) ? "default" : "outline"}
                  size="sm"
                  className={`rounded-full px-4 py-2 transition-all duration-200 ${
                    selectedLocations.includes(location)
                      ? "bg-blue-100 text-blue-700 border-blue-300 hover:bg-blue-200"
                      : "border-blue-200 text-blue-600 hover:bg-blue-50"
                  }`}
                  onClick={() => handleLocationChange(location, !selectedLocations.includes(location))}
                >
                  {location}
                </Button>
              ))}
            </div>

            {/* Sort Dropdown */}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-48 border-2 border-gray-200 rounded-xl">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="oldest">Oldest First</SelectItem>
                <SelectItem value="location">By Location</SelectItem>
                <SelectItem value="type">By Job Type</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Mobile Filter Button */}
          <div className="md:hidden mb-6">
            <Button
              variant="outline"
              className="w-full border-2 border-gray-200 rounded-xl py-3 bg-transparent"
              onClick={() => setShowMobileFilters(!showMobileFilters)}
            >
              <Filter className="w-5 h-5 mr-2" />
              Filters & Sort
              <ChevronRight
                className={`w-5 h-5 ml-auto transition-transform ${showMobileFilters ? "rotate-90" : ""}`}
              />
            </Button>
          </div>

          {/* Mobile Filters Panel */}
          <AnimatePresence>
            {showMobileFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden bg-gray-50 rounded-xl p-4 mb-6 space-y-4"
              >
                {/* Mobile Job Type Filters */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Job Type</h4>
                  <div className="flex flex-wrap gap-2">
                    {jobTypes.map((type) => (
                      <Button
                        key={type}
                        variant={selectedJobTypes.includes(type) ? "default" : "outline"}
                        size="sm"
                        className={`rounded-full px-3 py-1 text-sm ${
                          selectedJobTypes.includes(type)
                            ? "bg-blue-100 text-blue-700 border-blue-300"
                            : "border-blue-200 text-blue-600"
                        }`}
                        onClick={() => handleJobTypeChange(type, !selectedJobTypes.includes(type))}
                      >
                        {type}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Mobile Location Filters */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Location</h4>
                  <div className="flex flex-wrap gap-2">
                    {locations.map((location) => (
                      <Button
                        key={location}
                        variant={selectedLocations.includes(location) ? "default" : "outline"}
                        size="sm"
                        className={`rounded-full px-3 py-1 text-sm ${
                          selectedLocations.includes(location)
                            ? "bg-blue-100 text-blue-700 border-blue-300"
                            : "border-blue-200 text-blue-600"
                        }`}
                        onClick={() => handleLocationChange(location, !selectedLocations.includes(location))}
                      >
                        {location}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Mobile Sort */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Sort By</h4>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-full border-2 border-gray-200 rounded-xl">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="newest">Newest First</SelectItem>
                      <SelectItem value="oldest">Oldest First</SelectItem>
                      <SelectItem value="location">By Location</SelectItem>
                      <SelectItem value="type">By Job Type</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Job Listings */}
        <div className="flex gap-8">
          {/* Desktop Sidebar Filters */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="hidden lg:block w-80 flex-shrink-0"
          >
            <Card className="sticky top-24 border-2 border-gray-100 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 flex items-center">
                  <Filter className="w-5 h-5 mr-2 text-blue-600" />
                  Filters
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Job Type Filter */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <Briefcase className="w-4 h-4 mr-2 text-blue-600" />
                    Job Type
                  </h4>
                  <div className="space-y-2">
                    {jobTypes.map((type) => (
                      <div key={type} className="flex items-center space-x-2">
                        <Checkbox
                          id={`job-type-${type}`}
                          checked={selectedJobTypes.includes(type)}
                          onCheckedChange={(checked) => handleJobTypeChange(type, checked as boolean)}
                        />
                        <label
                          htmlFor={`job-type-${type}`}
                          className="text-sm font-medium text-gray-700 cursor-pointer"
                        >
                          {type}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Location Filter */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-blue-600" />
                    Location
                  </h4>
                  <div className="space-y-2">
                    {locations.map((location) => (
                      <div key={location} className="flex items-center space-x-2">
                        <Checkbox
                          id={`location-${location}`}
                          checked={selectedLocations.includes(location)}
                          onCheckedChange={(checked) => handleLocationChange(location, checked as boolean)}
                        />
                        <label
                          htmlFor={`location-${location}`}
                          className="text-sm font-medium text-gray-700 cursor-pointer"
                        >
                          {location}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Faculty Filter */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <Building className="w-4 h-4 mr-2 text-blue-600" />
                    Faculty/Department
                  </h4>
                  <Select value={selectedFaculty} onValueChange={setSelectedFaculty}>
                    <SelectTrigger className="w-full border-2 border-gray-200 rounded-lg">
                      <SelectValue placeholder="All Faculties" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Faculties</SelectItem>
                      {faculties.map((faculty) => (
                        <SelectItem key={faculty} value={faculty}>
                          {faculty}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Job Cards Grid */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <p className="text-gray-600">
                Showing {sortedJobs.length} of {jobs.length} jobs
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-6">
              {sortedJobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="border-2 border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 group cursor-pointer">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex-1">
                          <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200 mb-2">
                            {job.title}
                          </CardTitle>
                          <div className="flex items-center text-gray-600 mb-1">
                            <Building className="w-4 h-4 mr-2" />
                            <span className="font-medium">{job.company}</span>
                          </div>
                          <div className="flex items-center text-gray-600 mb-2">
                            <MapPin className="w-4 h-4 mr-2" />
                            <span>{job.location}</span>
                            {job.isRemote && (
                              <Badge variant="secondary" className="ml-2 bg-green-100 text-green-700">
                                <Globe className="w-3 h-3 mr-1" />
                                Remote
                              </Badge>
                            )}
                          </div>
                        </div>
                        <div className="flex flex-col items-end space-y-2">
                          <Badge
                            variant="secondary"
                            className="bg-blue-100 text-blue-700 font-medium px-3 py-1 rounded-full"
                          >
                            {job.type}
                          </Badge>
                          {job.jobCode && <span className="text-sm text-gray-500 font-mono">{job.jobCode}</span>}
                        </div>
                      </div>
                      <CardDescription className="text-gray-600 leading-relaxed">{job.description}</CardDescription>
                    </CardHeader>
                    <CardFooter className="flex justify-between items-center pt-4 border-t border-gray-100">
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        Posted {new Date(job.postedDate).toLocaleDateString()}
                      </div>
                      <Button
                        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                        asChild
                      >
                        <a href="https://www.uni-due.de/stellenmarkt/" target="_blank" rel="noopener noreferrer">
                          Apply
                          <ExternalLink className="ml-2 w-4 h-4" />
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>

            {sortedJobs.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center py-12"
              >
                <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                  <Search className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No jobs found</h3>
                <p className="text-gray-600 mb-4">Try adjusting your search criteria or filters.</p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchTerm("")
                    setSelectedJobTypes([])
                    setSelectedLocations([])
                    setSelectedFaculty("")
                  }}
                  className="border-2 border-blue-300 text-blue-600 hover:bg-blue-50"
                >
                  Clear All Filters
                </Button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

// Job Tips Section
function JobTipsSection() {
  const tips = [
    {
      icon: FileText,
      title: "Writing a German CV (Lebenslauf)",
      description:
        "Learn the specific format and requirements for German CVs, including personal information, education, and work experience.",
      link: "#",
    },
    {
      icon: BookOpen,
      title: "How to Write a Motivation Letter",
      description:
        "Craft compelling motivation letters that highlight your skills and explain why you're perfect for the position.",
      link: "#",
    },
    {
      icon: DollarSign,
      title: "Understanding Contracts and Taxes",
      description:
        "Navigate the legal aspects of Werkstudent and HiWi positions, including tax implications and contract terms.",
      link: "#",
    },
    {
      icon: GraduationCap,
      title: "University Career Services",
      description: "Access additional resources and support from UDE's career counseling and job placement services.",
      link: "https://www.uni-due.de/career-service/",
    },
  ]

  return (
    <section id="job-tips" className="py-20 bg-blue-50/50">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              How to Apply for Jobs in Germany
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get expert tips and guidance to improve your job application success rate
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tips.map((tip, index) => {
            const Icon = tip.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-2 border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 group cursor-pointer">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                      {tip.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-center leading-relaxed">
                      {tip.description}
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="pt-4">
                    <Button
                      variant="outline"
                      className="w-full border-2 border-blue-200 text-blue-600 hover:bg-blue-50 hover:border-blue-300 transition-all duration-200 bg-transparent"
                      asChild
                    >
                      <a href={tip.link} target="_blank" rel="noopener noreferrer">
                        Learn More
                        <ChevronRight className="ml-2 w-4 h-4" />
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default function JobsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Breadcrumbs />
      <HeroSection />
      <JobBoard />
      <JobTipsSection />
      
    </div>
  )
}
