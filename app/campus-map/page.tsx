"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Menu,
  X,
  ArrowLeft,
  MapPin,
  Users,
  Calendar,
  ChevronRight,
  BookOpen,
  Briefcase,
  Search,
  NavigationIcon,
  Clock,
  Phone,
  ExternalLink,
  Building,
  Home,
  ShoppingCart,
  Coffee,
  Bus,
  CreditCard,
  GraduationCap,
  MapIcon,
  List,
  Globe,
} from "lucide-react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import Breadcrumbs from "@/components/breadcrumbs"
import dynamic from "next/dynamic"
import Navigation from "@/components/navigation"

// Dynamically import map components to avoid SSR issues
const MapContainer = dynamic(() => import("react-leaflet").then((mod) => mod.MapContainer), { ssr: false })
const TileLayer = dynamic(() => import("react-leaflet").then((mod) => mod.TileLayer), { ssr: false })
const Marker = dynamic(() => import("react-leaflet").then((mod) => mod.Marker), { ssr: false })
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), { ssr: false })

// Types for locations
interface Location {
  id: string
  name: string
  category: string
  address: string
  lat: number
  lng: number
  description?: string
  phone?: string
  hours?: string
  website?: string
}

// Sample location data for Duisburg and Essen
const locations: Location[] = [
  // Campus Buildings - Duisburg
  {
    id: "1",
    name: "Fachbibliothek LK",
    category: "Campus",
    address: "Lotharstraße 65, 47057 Duisburg",
    lat: 51.4284,
    lng: 6.7945,
    description: "Main library for engineering and natural sciences with extensive study spaces",
    hours: "Mon-Fri: 8:00-24:00, Sat-Sun: 9:00-24:00",
    phone: "+49 203 379-2004",
  },
  {
    id: "2",
    name: "Mensa Duisburg",
    category: "Food & Cafes",
    address: "Forsthausweg 2, 47057 Duisburg",
    lat: 51.4275,
    lng: 6.7935,
    description: "Main cafeteria serving affordable meals for students with daily changing menu",
    hours: "Mon-Fri: 11:30-14:30",
    website: "https://www.stw-edu.de/essen-trinken/mensen-cafeterien/",
  },
  {
    id: "3",
    name: "LC Building (Lecture Center)",
    category: "Campus",
    address: "Lotharstraße 1, 47057 Duisburg",
    lat: 51.429,
    lng: 6.795,
    description: "Main lecture halls and seminar rooms for engineering courses",
  },
  {
    id: "4",
    name: "MC Building",
    category: "Campus",
    address: "Lotharstraße 63, 47057 Duisburg",
    lat: 51.4288,
    lng: 6.7942,
    description: "Mathematics and Computer Science building with labs and offices",
  },
  {
    id: "5",
    name: "Campus Duisburg Student Center",
    category: "Services",
    address: "Forsthausweg 2, 47057 Duisburg",
    lat: 51.4278,
    lng: 6.7938,
    description: "Student services, enrollment office, and administrative support",
    hours: "Mon-Thu: 9:00-16:00, Fri: 9:00-14:00",
    phone: "+49 203 379-2222",
  },

  // Campus Buildings - Essen
  {
    id: "6",
    name: "Universitätsbibliothek Essen",
    category: "Campus",
    address: "Universitätsstraße 9, 45141 Essen",
    lat: 51.4556,
    lng: 7.0103,
    description: "Central university library with extensive collections and study areas",
    hours: "Mon-Fri: 8:00-24:00, Sat-Sun: 10:00-24:00",
    phone: "+49 201 183-3003",
  },
  {
    id: "7",
    name: "Mensa Essen",
    category: "Food & Cafes",
    address: "Segerothstraße 100, 45141 Essen",
    lat: 51.4551,
    lng: 7.0108,
    description: "Main cafeteria at Essen campus with diverse food options",
    hours: "Mon-Fri: 11:30-14:30",
  },

  // Government Offices
  {
    id: "8",
    name: "Ausländerbehörde Duisburg",
    category: "Government",
    address: "Schifferstraße 196, 47059 Duisburg",
    lat: 51.4344,
    lng: 6.7623,
    description: "Immigration office for visa applications, residence permits, and work permits",
    phone: "+49 203 283-3521",
    hours: "Mon, Wed, Fri: 8:00-12:00, Thu: 8:00-18:00",
    website: "https://www.duisburg.de/microsites/buergerservice/dienstleistungen/auslaenderbehoerde.php",
  },
  {
    id: "9",
    name: "Bürgeramt Duisburg-Mitte",
    category: "Government",
    address: "Sonnenwall 73-75, 47051 Duisburg",
    lat: 51.4326,
    lng: 6.7764,
    description: "City registration office for Anmeldung, passport services, and certificates",
    phone: "+49 203 283-0",
    hours: "Mon-Wed: 8:00-16:00, Thu: 8:00-18:00, Fri: 8:00-12:00",
  },
  {
    id: "10",
    name: "Ausländerbehörde Essen",
    category: "Government",
    address: "Gildehof 5, 45127 Essen",
    lat: 51.4508,
    lng: 7.0131,
    description: "Immigration office for Essen residents - visa and residence permit services",
    phone: "+49 201 88-0",
    hours: "Mon-Wed: 8:00-15:00, Thu: 8:00-17:30, Fri: 8:00-12:00",
  },
  {
    id: "11",
    name: "Bürgeramt Essen-Stadtmitte",
    category: "Government",
    address: "Gildehof 5, 45127 Essen",
    lat: 51.4505,
    lng: 7.0128,
    description: "Central registration office for Essen - Anmeldung and civil services",
    phone: "+49 201 88-88888",
    hours: "Mon-Wed: 8:00-16:00, Thu: 8:00-18:00, Fri: 8:00-13:00",
  },

  // Student Housing
  {
    id: "12",
    name: "Studentenwohnheim Duisburg",
    category: "Dormitories",
    address: "Keetmanstraße 3-9, 47058 Duisburg",
    lat: 51.4195,
    lng: 6.7889,
    description: "Student housing complex managed by Studierendenwerk with affordable rooms",
    phone: "+49 203 379-3060",
    website: "https://www.stw-edu.de/wohnen/",
  },
  {
    id: "13",
    name: "Wohnheim Essen-Segeroth",
    category: "Dormitories",
    address: "Segerothstraße 100, 45141 Essen",
    lat: 51.4556,
    lng: 7.0103,
    description: "Modern student apartments near Essen campus with excellent facilities",
    phone: "+49 201 820-3060",
  },
  {
    id: "14",
    name: "Wohnheim Essen-Holsterhausen",
    category: "Dormitories",
    address: "Holsterhauser Straße 200, 45147 Essen",
    lat: 51.4389,
    lng: 6.9875,
    description: "Student residence with single and shared apartments",
  },

  // Supermarkets
  {
    id: "15",
    name: "REWE Duisburg Königstraße",
    category: "Supermarkets",
    address: "Königstraße 48, 47051 Duisburg",
    lat: 51.4318,
    lng: 6.7625,
    description: "Full-service supermarket with international products and fresh food",
    hours: "Mon-Sat: 7:00-22:00",
  },
  {
    id: "16",
    name: "Lidl Duisburg Campus",
    category: "Supermarkets",
    address: "Wanheimer Straße 195, 47053 Duisburg",
    lat: 51.4089,
    lng: 6.7456,
    description: "Discount supermarket with weekly specials and affordable groceries",
    hours: "Mon-Sat: 7:00-22:00",
  },
  {
    id: "17",
    name: "Edeka Essen Universitätsviertel",
    category: "Supermarkets",
    address: "Universitätsstraße 15, 45141 Essen",
    lat: 51.4545,
    lng: 7.0095,
    description: "Convenient supermarket near Essen campus with fresh products",
    hours: "Mon-Sat: 7:00-22:00",
  },

  // Banks
  {
    id: "18",
    name: "Sparkasse Duisburg",
    category: "Banks",
    address: "Königstraße 25, 47051 Duisburg",
    lat: 51.4325,
    lng: 6.7634,
    description: "Local savings bank offering student accounts and financial services",
    phone: "+49 203 283-0",
    hours: "Mon-Wed, Fri: 9:00-16:00, Thu: 9:00-18:00",
  },
  {
    id: "19",
    name: "Deutsche Bank Duisburg",
    category: "Banks",
    address: "Königstraße 40, 47051 Duisburg",
    lat: 51.4322,
    lng: 6.7628,
    description: "International bank with English-speaking staff and student services",
    hours: "Mon-Wed: 9:00-16:00, Thu: 9:00-18:00, Fri: 9:00-15:00",
  },
  {
    id: "20",
    name: "Commerzbank Essen",
    category: "Banks",
    address: "Kettwiger Straße 2-10, 45127 Essen",
    lat: 51.4515,
    lng: 7.0118,
    description: "Major German bank with comprehensive banking services",
    hours: "Mon-Wed: 9:00-16:00, Thu: 9:00-18:00, Fri: 9:00-15:00",
  },

  // Transport
  {
    id: "21",
    name: "Duisburg Hauptbahnhof",
    category: "Transport",
    address: "Portsmouthplatz 1, 47051 Duisburg",
    lat: 51.4292,
    lng: 6.7754,
    description: "Main train station with connections to major German cities and international destinations",
  },
  {
    id: "22",
    name: "Campus Duisburg Bus Stop",
    category: "Transport",
    address: "Forsthausweg, 47057 Duisburg",
    lat: 51.428,
    lng: 6.794,
    description: "Bus connections to city center and other parts of Duisburg",
  },
  {
    id: "23",
    name: "Essen Hauptbahnhof",
    category: "Transport",
    address: "Am Hauptbahnhof 1, 45127 Essen",
    lat: 51.4508,
    lng: 7.0131,
    description: "Central station with high-speed train connections and regional transport",
  },
  {
    id: "24",
    name: "Universität Essen U-Bahn",
    category: "Transport",
    address: "Universitätsstraße, 45141 Essen",
    lat: 51.4551,
    lng: 7.0105,
    description: "U-Bahn station directly at Essen campus for easy city access",
  },

  // Services
  {
    id: "25",
    name: "Copy Shop Campus Duisburg",
    category: "Services",
    address: "Lotharstraße 57, 47057 Duisburg",
    lat: 51.4286,
    lng: 6.7948,
    description: "Printing, copying, and binding services for students",
    hours: "Mon-Fri: 8:00-18:00, Sat: 9:00-14:00",
  },
  {
    id: "26",
    name: "Telekom Shop Duisburg",
    category: "Services",
    address: "Königstraße 35, 47051 Duisburg",
    lat: 51.4324,
    lng: 6.7631,
    description: "Mobile phone contracts, SIM cards, and internet services",
    hours: "Mon-Sat: 10:00-19:00",
  },
  {
    id: "27",
    name: "International Office UDE",
    category: "Services",
    address: "Geibelstraße 41, 47057 Duisburg",
    lat: 51.4298,
    lng: 6.7952,
    description: "Support for international students - visa help, orientation, and guidance",
    hours: "Mon-Thu: 9:00-16:00, Fri: 9:00-14:00",
    phone: "+49 203 379-4444",
  },
]

// Category configuration
const categories = [
  { id: "all", name: "All", icon: MapIcon, color: "bg-gray-100 text-gray-700 hover:bg-gray-200" },
  { id: "Campus", name: "Campus", icon: GraduationCap, color: "bg-blue-100 text-blue-700 hover:bg-blue-200" },
  { id: "Government", name: "Government", icon: Building, color: "bg-purple-100 text-purple-700 hover:bg-purple-200" },
  {
    id: "Supermarkets",
    name: "Supermarkets",
    icon: ShoppingCart,
    color: "bg-green-100 text-green-700 hover:bg-green-200",
  },
  { id: "Dormitories", name: "Dormitories", icon: Home, color: "bg-orange-100 text-orange-700 hover:bg-orange-200" },
  {
    id: "Food & Cafes",
    name: "Food & Cafes",
    icon: Coffee,
    color: "bg-yellow-100 text-yellow-700 hover:bg-yellow-200",
  },
  { id: "Services", name: "Services", icon: Globe, color: "bg-teal-100 text-teal-700 hover:bg-teal-200" },
  { id: "Banks", name: "Banks", icon: CreditCard, color: "bg-indigo-100 text-indigo-700 hover:bg-indigo-200" },
  { id: "Transport", name: "Transport", icon: Bus, color: "bg-red-100 text-red-700 hover:bg-red-200" },
]


// Hero Section Component
function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-24 pb-12">
      <div className="container mx-auto px-4">


        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              City & Campus
            </span>{" "}
            Navigation
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Find all important locations for your student life in Duisburg and Essen — campus buildings, government
            offices, dormitories, and more.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm">
              <MapPin className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-medium text-gray-700">Interactive Map</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm">
              <NavigationIcon className="w-5 h-5 text-purple-600" />
              <span className="text-sm font-medium text-gray-700">Get Directions</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm">
              <Search className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium text-gray-700">Search Places</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Interactive Map Component
function InteractiveMap({
  filteredLocations,
  selectedLocation,
  onLocationSelect,
}: {
  filteredLocations: Location[]
  selectedLocation: Location | null
  onLocationSelect: (location: Location) => void
}) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const getDirectionsUrl = (location: Location) => {
    return `https://www.google.com/maps/dir/?api=1&destination=${location.lat},${location.lng}`
  }

  if (!isClient) {
    return (
      <div className="w-full h-[500px] bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center">
        <div className="text-center">
          <MapIcon className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Loading Interactive Map...</h3>
          <p className="text-gray-600">Map will show {filteredLocations.length} locations</p>
        </div>
      </div>
    )
  }

  // Center map on Duisburg campus
  const center: [number, number] = [51.4284, 6.7945]

  return (
    <div className="w-full h-[500px] rounded-xl overflow-hidden shadow-lg">
      <MapContainer center={center} zoom={12} style={{ height: "100%", width: "100%" }} className="rounded-xl">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {filteredLocations.map((location) => (
          <Marker
            key={location.id}
            position={[location.lat, location.lng]}
            eventHandlers={{
              click: () => onLocationSelect(location),
            }}
          >
            <Popup>
              <div className="p-2 min-w-[250px]">
                <h3 className="font-semibold text-gray-900 mb-2">{location.name}</h3>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">{location.address}</span>
                  </div>
                  {location.description && <p className="text-sm text-gray-600">{location.description}</p>}
                  {location.hours && (
                    <div className="flex items-start space-x-2">
                      <Clock className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{location.hours}</span>
                    </div>
                  )}
                  <a
                    href={getDirectionsUrl(location)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-blue-600 text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                  >
                    <NavigationIcon className="w-4 h-4" />
                    <span>Get Directions</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}

// Location Card Component
function LocationCard({ location }: { location: Location }) {
  const category = categories.find((cat) => cat.id === location.category)
  const Icon = category?.icon || MapPin

  const getDirectionsUrl = (location: Location) => {
    return `https://www.google.com/maps/dir/?api=1&destination=${location.lat},${location.lng}`
  }

  return (
    <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <div className={`p-2 rounded-lg ${category?.color || "bg-gray-100 text-gray-700"}`}>
              <Icon className="w-5 h-5" />
            </div>
            <div>
              <CardTitle className="text-lg font-semibold text-gray-900 leading-tight">{location.name}</CardTitle>
              <Badge variant="secondary" className="mt-1 text-xs">
                {location.category}
              </Badge>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="space-y-3">
          <div className="flex items-start space-x-2">
            <MapPin className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
            <span className="text-sm text-gray-600 leading-relaxed">{location.address}</span>
          </div>

          {location.description && <p className="text-sm text-gray-600 leading-relaxed">{location.description}</p>}

          {location.hours && (
            <div className="flex items-start space-x-2">
              <Clock className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-gray-600">{location.hours}</span>
            </div>
          )}

          {location.phone && (
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-gray-500 flex-shrink-0" />
              <span className="text-sm text-gray-600">{location.phone}</span>
            </div>
          )}

          <Button
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
            asChild
          >
            <a
              href={getDirectionsUrl(location)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2"
            >
              <NavigationIcon className="w-4 h-4" />
              <span>Get Directions</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

// Footer Component

// Main Campus Map Page Component
export default function CampusMapPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategories, setSelectedCategories] = useState<string[]>(["all"])
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null)
  const [viewMode, setViewMode] = useState<"map" | "list">("map")

  // Filter locations based on search and categories
  const filteredLocations = locations.filter((location) => {
    const matchesSearch =
      location.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      location.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
      location.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (location.description && location.description.toLowerCase().includes(searchTerm.toLowerCase()))

    const matchesCategory = selectedCategories.includes("all") || selectedCategories.includes(location.category)

    return matchesSearch && matchesCategory
  })

  // Handle category filter toggle
  const toggleCategory = (categoryId: string) => {
    if (categoryId === "all") {
      setSelectedCategories(["all"])
    } else {
      setSelectedCategories((prev) => {
        const newCategories = prev.filter((id) => id !== "all")
        if (newCategories.includes(categoryId)) {
          const filtered = newCategories.filter((id) => id !== categoryId)
          return filtered.length === 0 ? ["all"] : filtered
        } else {
          return [...newCategories, categoryId]
        }
      })
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Breadcrumbs />
      <HeroSection />

      {/* Search and Filter Section */}
      <section className="py-8 bg-gray-50/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search places (e.g., Ausländerbehörde, Mensa, Library)"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 pr-4 py-3 text-lg border-2 border-gray-200 focus:border-blue-500 rounded-xl"
              />
            </div>

            {/* Filter Chips */}
            <div className="flex flex-wrap gap-3 mb-6">
              {categories.map((category) => {
                const Icon = category.icon
                const isSelected = selectedCategories.includes(category.id)

                return (
                  <button
                    key={category.id}
                    onClick={() => toggleCategory(category.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-full border-2 transition-all duration-200 ${
                      isSelected
                        ? "bg-blue-600 text-white border-blue-600 shadow-md"
                        : "bg-white text-gray-700 border-gray-200 hover:border-blue-300 hover:bg-blue-50"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="font-medium">{category.name}</span>
                  </button>
                )
              })}
            </div>

            {/* View Toggle */}
            <div className="flex items-center justify-between mb-6">
              <div className="text-sm text-gray-600">
                Showing {filteredLocations.length} of {locations.length} locations
              </div>

              <Tabs value={viewMode} onValueChange={(value) => setViewMode(value as "map" | "list")}>
                <TabsList className="grid w-full grid-cols-2 max-w-[200px]">
                  <TabsTrigger value="map" className="flex items-center space-x-2">
                    <MapIcon className="w-4 h-4" />
                    <span>Map</span>
                  </TabsTrigger>
                  <TabsTrigger value="list" className="flex items-center space-x-2">
                    <List className="w-4 h-4" />
                    <span>List</span>
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>
        </div>
      </section>

      {/* Map/List Content Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Tabs value={viewMode} className="w-full">
              <TabsContent value="map" className="mt-0">
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Map */}
                  <div className="lg:col-span-2">
                    <InteractiveMap
                      filteredLocations={filteredLocations}
                      selectedLocation={selectedLocation}
                      onLocationSelect={setSelectedLocation}
                    />
                  </div>

                  {/* Location Details Sidebar */}
                  <div className="space-y-6">
                    {selectedLocation ? (
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center space-x-2">
                            <MapPin className="w-5 h-5 text-blue-600" />
                            <span>Selected Location</span>
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <LocationCard location={selectedLocation} />
                        </CardContent>
                      </Card>
                    ) : (
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-center text-gray-500">Click on a map pin to see details</CardTitle>
                        </CardHeader>
                      </Card>
                    )}

                    {/* Quick Stats */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Quick Stats</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {categories.slice(1).map((category) => {
                            const count = locations.filter((loc) => loc.category === category.id).length
                            const Icon = category.icon

                            return (
                              <div key={category.id} className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                  <Icon className="w-4 h-4 text-gray-500" />
                                  <span className="text-sm text-gray-700">{category.name}</span>
                                </div>
                                <Badge variant="secondary">{count}</Badge>
                              </div>
                            )
                          })}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="list" className="mt-0">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredLocations.map((location) => (
                    <LocationCard key={location.id} location={location} />
                  ))}
                </div>

                {filteredLocations.length === 0 && (
                  <div className="text-center py-12">
                    <MapPin className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-500 mb-2">No locations found</h3>
                    <p className="text-gray-400">Try adjusting your search or filters</p>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

     
    </div>
  )
}
