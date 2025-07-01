"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbsProps {
  items?: BreadcrumbItem[]
  className?: string
  showHome?: boolean
}

// Page title mapping
const pageTitles: Record<string, string> = {
  "/": "Home",
  "/about": "About Us",
  "/contact": "Contact Us",
  "/accommodation": "Accommodation",
  "/banking": "Banking",
  "/campus-map": "Campus & City Map",
  "/events": "Events",
  "/exam-process": "Exam Process",
  "/insurance": "Health Insurance",
  "/jobs": "Job Board",
  "/language-courses": "Learn German",
  "/radio-bills": "Radio Bills",
  "/subject-registration": "Subject Registration",
  "/visa-guidance": "Visa & Residence",
  "/credits": "Credits",
}

// Category mapping for breadcrumb hierarchy
const pageCategories: Record<string, string> = {
  "/accommodation": "Guides",
  "/banking": "Guides",
  "/exam-process": "Guides",
  "/insurance": "Guides",
  "/radio-bills": "Guides",
  "/visa-guidance": "Guides",
  "/events": "Campus Life",
  "/campus-map": "Campus Life",
  "/language-courses": "Campus Life",
  "/jobs": "Student Services",
  "/subject-registration": "Academic",
}

export default function Breadcrumbs({ items, className = "", showHome = true }: BreadcrumbsProps) {
  const pathname = usePathname()

  // Generate breadcrumb items if not provided
  const generateBreadcrumbItems = (): BreadcrumbItem[] => {
    const breadcrumbItems: BreadcrumbItem[] = []

    // Add home if enabled
    if (showHome) {
      breadcrumbItems.push({
        label: "Home",
        href: "/",
      })
    }

    // Add category if exists
    const category = pageCategories[pathname]
    if (category) {
      breadcrumbItems.push({
        label: category,
        href: `#${category.toLowerCase().replace(/\s+/g, "-")}`,
      })
    }

    // Add current page
    const currentPageTitle = pageTitles[pathname] || "Page"
    breadcrumbItems.push({
      label: currentPageTitle,
    })

    return breadcrumbItems
  }

  const breadcrumbItems = items || generateBreadcrumbItems()

  // Create a flat array of items and separators
  const breadcrumbElements: React.ReactNode[] = []
  
  breadcrumbItems.forEach((item, index) => {
    // Add the breadcrumb item
    breadcrumbElements.push(
      <BreadcrumbItem key={`item-${index}`}>
        {index < breadcrumbItems.length - 1 ? (
          <BreadcrumbLink 
            href={item.href || "#"} 
            className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
          >
            {item.label}
          </BreadcrumbLink>
        ) : (
          <BreadcrumbPage className="text-gray-900 font-medium">
            {item.label}
          </BreadcrumbPage>
        )}
      </BreadcrumbItem>
    )
    
    // Add separator if not the last item
    if (index < breadcrumbItems.length - 1) {
      breadcrumbElements.push(
        <BreadcrumbSeparator key={`separator-${index}`} />
      )
    }
  })

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={`bg-white border-b border-gray-100 pt-20 ${className}`}
    >
      <div className="container mx-auto px-4 py-4">
        <Breadcrumb>
          <BreadcrumbList>
            {breadcrumbElements}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </motion.div>
  )
} 