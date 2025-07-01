"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import {
  Menu,
  X,
  ArrowLeft,
  MapPin,
  CreditCard,
  Users,
  Calendar,
  ChevronRight,
  BookOpen,
  Briefcase,
  Lock,
  Wallet,
  CheckCircle,
  ExternalLink,
  Download,
  Search,
  Clock,
  Euro,
  Shield,
  Smartphone,
  Building,
  FileText,
  Home,
  Zap,
} from "lucide-react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import Breadcrumbs from "@/components/breadcrumbs"
import Navigation from "@/components/navigation"

// Hero Section Component
function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Open Your{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Student Bank Account
            </span>{" "}
            in Germany
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Whether you are new to Germany or already living here, choose the right bank account easily — Blocked
            Account for visa or Giro Account for everyday life.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={() => scrollToSection("blocked-account")}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              How to Open a Blocked Account
              <Lock className="ml-2 w-5 h-5" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("giro-account")}
              className="border-2 border-gray-300 hover:border-blue-500 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 bg-transparent"
            >
              How to Open a Giro Account
              <Wallet className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Account Type Selector Component
function AccountTypeSelector() {
  const [selectedAccount, setSelectedAccount] = useState<"blocked" | "giro">("blocked")

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Choose Your Account Type</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Select the account type that matches your current situation in Germany.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="cursor-pointer"
            onClick={() => {
              setSelectedAccount("blocked")
              scrollToSection("blocked-account")
            }}
          >
            <Card
              className={`h-full border-2 transition-all duration-300 rounded-2xl overflow-hidden ${
                selectedAccount === "blocked"
                  ? "border-blue-500 bg-blue-50 shadow-xl"
                  : "border-gray-200 hover:border-blue-300 hover:shadow-lg"
              }`}
            >
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                  <Lock className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Blocked Account (Sperrkonto)</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Required for visa applications. Proves financial stability to German authorities before arrival.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>For visa applications</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>€11,208 minimum deposit</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Monthly withdrawal limit</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="cursor-pointer"
            onClick={() => {
              setSelectedAccount("giro")
              scrollToSection("giro-account")
            }}
          >
            <Card
              className={`h-full border-2 transition-all duration-300 rounded-2xl overflow-hidden ${
                selectedAccount === "giro"
                  ? "border-blue-500 bg-blue-50 shadow-xl"
                  : "border-gray-200 hover:border-blue-300 hover:shadow-lg"
              }`}
            >
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                  <Wallet className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Giro Account (Current Account)</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Essential for daily life — rent, shopping, salary, and all your everyday banking needs.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>For daily transactions</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Debit card included</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Online banking access</span>
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

// Blocked Account Section Component
function BlockedAccountSection() {
  const blockedAccountProviders = [
    {
      name: "Expatrio",
      openingFee: "€49",
      monthlyFee: "€5",
      processingTime: "3-5 days",
      badge: "Most Popular",
      badgeColor: "bg-green-500",
      features: ["Fast processing", "English support", "Visa guarantee"],
      link: "https://expatrio.com",
    },
    {
      name: "Fintiba",
      openingFee: "€89",
      monthlyFee: "€4.90",
      processingTime: "Instant",
      badge: "Fastest",
      badgeColor: "bg-blue-500",
      features: ["Instant approval", "24/7 support", "Mobile app"],
      link: "https://fintiba.com",
    },
    {
      name: "Deutsche Bank",
      openingFee: "€150",
      monthlyFee: "€0",
      processingTime: "2 weeks",
      badge: "No Monthly Fee",
      badgeColor: "bg-purple-500",
      features: ["Traditional bank", "Physical branches", "No monthly fee"],
      link: "https://deutsche-bank.de",
    },
  ]

  const steps = [
    {
      number: 1,
      title: "Choose a provider",
      description: "Compare providers below and select the best option for your needs.",
      icon: <Building className="w-6 h-6" />,
    },
    {
      number: 2,
      title: "Apply online",
      description: "Fill out the application form with your personal information.",
      icon: <FileText className="w-6 h-6" />,
    },
    {
      number: 3,
      title: "Deposit funds",
      description: "Transfer €11,208 for 12 months or €934/month to your blocked account.",
      icon: <Euro className="w-6 h-6" />,
    },
    {
      number: 4,
      title: "Receive confirmation",
      description: "Get your confirmation letter for embassy/visa application.",
      icon: <CheckCircle className="w-6 h-6" />,
    },
    {
      number: 5,
      title: "Access funds monthly",
      description: "After arrival in Germany, withdraw your monthly allowance.",
      icon: <CreditCard className="w-6 h-6" />,
    },
  ]

  return (
    <section id="blocked-account" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
            <Lock className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Blocked Account (Sperrkonto)</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            For international students who need a visa to enter Germany. A blocked account is mandatory to prove your
            financial stability.
          </p>
        </motion.div>

        {/* What is a Blocked Account */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="border-0 shadow-lg rounded-2xl overflow-hidden bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">What is a Blocked Account?</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    A blocked account (Sperrkonto) is a special type of bank account required for visa applications to
                    Germany. The money is "blocked" and can only be withdrawn in monthly installments after you arrive
                    in Germany.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Shield className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700">Proves financial stability to German authorities</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Euro className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700">Minimum €11,208 for 12 months (€934/month)</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700">Required before visa application</span>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="w-48 h-48 mx-auto bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
                    <Lock className="w-24 h-24 text-blue-600" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Step-by-Step Guide */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Step-by-Step Guide</h3>
          <div className="space-y-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                  {step.number}
                </div>
                <div className="flex-1">
                  <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300 rounded-xl">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="text-blue-600">{step.icon}</div>
                        <h4 className="text-xl font-semibold text-gray-900">{step.title}</h4>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{step.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Provider Comparison</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blockedAccountProviders.map((provider, index) => (
              <motion.div
                key={provider.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="relative"
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden">
                  {provider.badge && (
                    <div className="absolute top-4 right-4 z-10">
                      <Badge className={`${provider.badgeColor} text-white px-3 py-1 text-xs font-semibold`}>
                        {provider.badge}
                      </Badge>
                    </div>
                  )}
                  <CardContent className="p-6">
                    <div className="text-center mb-6">
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{provider.name}</h4>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex justify-between">
                          <span>Opening Fee:</span>
                          <span className="font-semibold">{provider.openingFee}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Monthly Fee:</span>
                          <span className="font-semibold">{provider.monthlyFee}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Processing:</span>
                          <span className="font-semibold">{provider.processingTime}</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2 mb-6">
                      {provider.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full"
                      asChild
                    >
                      <a href={provider.link} target="_blank" rel="noopener noreferrer">
                        Open Now
                        <ExternalLink className="ml-2 w-4 h-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 rounded-full text-xl font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
            asChild
          >
            <a href="https://expatrio.com" target="_blank" rel="noopener noreferrer">
              Open a Blocked Account Now
              <ExternalLink className="ml-3 w-6 h-6" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

// Giro Account Section Component
function GiroAccountSection() {
  const giroAccountProviders = [
    {
      name: "N26 (Digital)",
      accountFee: "€0",
      onlineBanking: true,
      englishSupport: true,
      badge: "Best for Digital",
      badgeColor: "bg-green-500",
      features: ["100% mobile banking", "English app", "Free worldwide payments"],
      link: "https://n26.com",
    },
    {
      name: "DKB",
      accountFee: "€0",
      onlineBanking: true,
      englishSupport: true,
      badge: "Best Overall",
      badgeColor: "bg-blue-500",
      features: ["Free worldwide ATM", "English support", "Student-friendly"],
      link: "https://dkb.de",
    },
    {
      name: "Commerzbank",
      accountFee: "€0 (students)",
      onlineBanking: true,
      englishSupport: false,
      badge: "Physical Branches",
      badgeColor: "bg-purple-500",
      features: ["Many branches", "Student accounts", "Traditional banking"],
      link: "https://commerzbank.de",
    },
    {
      name: "Sparkasse",
      accountFee: "€3-5",
      onlineBanking: true,
      englishSupport: false,
      badge: "Most Branches",
      badgeColor: "bg-orange-500",
      features: ["Largest network", "Local presence", "Regional focus"],
      link: "https://sparkasse.de",
    },
  ]

  const giroSteps = [
    {
      number: 1,
      title: "Choose a bank",
      description: "Compare banks below and select based on your needs (digital vs. traditional).",
      icon: <Building className="w-6 h-6" />,
    },
    {
      number: 2,
      title: "Book an appointment or apply online",
      description: "Most banks offer online applications, some require in-person visits.",
      icon: <Calendar className="w-6 h-6" />,
    },
    {
      number: 3,
      title: "Prepare your documents",
      description: "Gather all required documents before your appointment or application.",
      icon: <FileText className="w-6 h-6" />,
    },
    {
      number: 4,
      title: "Open the account",
      description: "Complete the application process and verify your identity.",
      icon: <CheckCircle className="w-6 h-6" />,
    },
    {
      number: 5,
      title: "Activate online banking",
      description: "Set up your online banking and mobile app for easy account management.",
      icon: <Smartphone className="w-6 h-6" />,
    },
  ]

  return (
    <section id="giro-account" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
            <Wallet className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Giro Account (Current Account)</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A Giro account is essential for daily life — for rent, shopping, salary, or paying the Rundfunkbeitrag.
          </p>
        </motion.div>

        {/* What is a Giro Account */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="border-0 shadow-lg rounded-2xl overflow-hidden bg-gradient-to-br from-green-50 to-blue-50">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">What is a Giro Account?</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    A Giro account is a regular checking account used for daily financial transactions. It's your main
                    account for receiving salary, paying rent, and managing everyday expenses in Germany.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <CreditCard className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700">Debit card (EC-Karte) included</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Smartphone className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700">Online and mobile banking access</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Euro className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700">Direct debits and transfers</span>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="w-48 h-48 mx-auto bg-gradient-to-br from-green-100 to-blue-100 rounded-full flex items-center justify-center">
                    <Wallet className="w-24 h-24 text-green-600" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* When Do You Need It */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="border-0 shadow-lg rounded-2xl overflow-hidden bg-blue-50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">When Do You Need It?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-900">Immediately upon arrival:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">After completing Anmeldung</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">For paying rent and utilities</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">Setting up direct debits</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-900">If already in Germany:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">Receiving salary or Werkstudent pay</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">Managing subscriptions</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">Daily shopping and expenses</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Step-by-Step Guide */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Step-by-Step Guide</h3>
          <div className="space-y-6">
            {giroSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                  {step.number}
                </div>
                <div className="flex-1">
                  <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300 rounded-xl">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="text-green-600">{step.icon}</div>
                        <h4 className="text-xl font-semibold text-gray-900">{step.title}</h4>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{step.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bank Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Bank Comparison</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {giroAccountProviders.map((bank, index) => (
              <motion.div
                key={bank.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="relative"
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden">
                  {bank.badge && (
                    <div className="absolute top-4 right-4 z-10">
                      <Badge className={`${bank.badgeColor} text-white px-2 py-1 text-xs font-semibold`}>
                        {bank.badge}
                      </Badge>
                    </div>
                  )}
                  <CardContent className="p-6">
                    <div className="text-center mb-6">
                      <h4 className="text-lg font-bold text-gray-900 mb-4">{bank.name}</h4>
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Account Fee:</span>
                          <span className="font-semibold text-gray-900">{bank.accountFee}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Online Banking:</span>
                          {bank.onlineBanking ? (
                            <CheckCircle className="w-5 h-5 text-green-500" />
                          ) : (
                            <X className="w-5 h-5 text-red-500" />
                          )}
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">English Support:</span>
                          {bank.englishSupport ? (
                            <CheckCircle className="w-5 h-5 text-green-500" />
                          ) : (
                            <X className="w-5 h-5 text-red-500" />
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2 mb-6">
                      {bank.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button
                      className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white rounded-full"
                      asChild
                    >
                      <a href={bank.link} target="_blank" rel="noopener noreferrer">
                        Open Now
                        <ExternalLink className="ml-2 w-4 h-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-10 py-4 rounded-full text-xl font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
            asChild
          >
            <a href="https://n26.com" target="_blank" rel="noopener noreferrer">
              Open a Giro Account Now
              <ExternalLink className="ml-3 w-6 h-6" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

// Document Checklist Component
function DocumentChecklist() {
  const [isOpen, setIsOpen] = useState(false)

  const documents = [
    { name: "Passport/ID", required: true, description: "Valid passport or German ID card" },
    {
      name: "Proof of Address (Anmeldung)",
      required: true,
      description: "Registration certificate from local authorities",
    },
    { name: "Proof of Enrollment", required: true, description: "Immatrikulationsbescheinigung from your university" },
    { name: "Visa (if applicable)", required: false, description: "Student visa or residence permit" },
    { name: "Income Proof", required: false, description: "Salary slip or scholarship confirmation" },
  ]

  return (
    <>
      {/* Floating Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed bottom-6 right-6 z-40"
      >
        <Button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full p-4 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110"
        >
          <FileText className="w-6 h-6" />
        </Button>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md mx-4 z-50"
            >
              <Card className="border-0 shadow-2xl rounded-2xl overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-gray-900">Document Checklist</h3>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setIsOpen(false)}
                      className="rounded-full hover:bg-gray-100"
                    >
                      <X className="w-5 h-5" />
                    </Button>
                  </div>

                  <div className="space-y-4 mb-6">
                    {documents.map((doc, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle
                          className={`w-5 h-5 mt-0.5 ${doc.required ? "text-green-500" : "text-gray-400"}`}
                        />
                        <div className="flex-1">
                          <div className="flex items-center space-x-2">
                            <span className="font-medium text-gray-900">{doc.name}</span>
                            {doc.required && (
                              <Badge className="bg-red-100 text-red-800 text-xs px-2 py-0.5">Required</Badge>
                            )}
                          </div>
                          <p className="text-sm text-gray-600 mt-1">{doc.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Button
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full"
                    onClick={() => {
                      // In a real app, this would trigger a PDF download
                      alert("PDF download would start here")
                    }}
                  >
                    Download Checklist (PDF)
                    <Download className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

// Bank Locator Section Component
function BankLocatorSection() {
  const [searchLocation, setSearchLocation] = useState("")

  const bankLocations = [
    { name: "Sparkasse Duisburg", address: "Königstraße 20, 47051 Duisburg", type: "Sparkasse" },
    { name: "Commerzbank Essen", address: "Kettwiger Str. 2-10, 45127 Essen", type: "Commerzbank" },
    { name: "Deutsche Bank Duisburg", address: "Düsseldorfer Str. 9, 47051 Duisburg", type: "Deutsche Bank" },
    { name: "Sparkasse Essen", address: "Am Hauptbahnhof 2, 45127 Essen", type: "Sparkasse" },
  ]

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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Find Bank Branches Near You</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Locate the nearest bank branches in Duisburg and Essen for in-person banking services.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Enter your address or postal code..."
                value={searchLocation}
                onChange={(e) => setSearchLocation(e.target.value)}
                className="pl-12 pr-4 py-3 text-lg rounded-full border-2 border-gray-200 focus:border-blue-500 transition-colors duration-300"
              />
            </div>
          </motion.div>

          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <Card className="border-0 shadow-lg rounded-2xl overflow-hidden">
              <CardContent className="p-0">
                <div className="h-64 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                    <p className="text-gray-600">Interactive map would be displayed here</p>
                    <p className="text-sm text-gray-500 mt-2">
                      In a real implementation, this would show Google Maps or similar
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Bank Locations List */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {bankLocations.map((location, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -2 }}
                >
                  <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300 rounded-xl">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <Building className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 mb-1">{location.name}</h4>
                          <p className="text-sm text-gray-600 mb-2">{location.address}</p>
                          <Badge className="bg-blue-100 text-blue-800 text-xs px-2 py-1">{location.type}</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// FAQ Section Component
function FAQSection() {
  const faqs = [
    {
      question: "Can I open a Giro account without Anmeldung?",
      answer:
        "No, Anmeldung (address registration) is usually required by German banks to open a Giro account. This proves your legal residence in Germany and is mandatory for most banking services.",
      icon: <Home className="w-5 h-5" />,
    },
    {
      question: "How long does a blocked account take to open?",
      answer:
        "Processing times vary by provider: Fintiba offers instant approval, Expatrio takes 3-5 days, while traditional banks like Deutsche Bank may take up to 2 weeks. Digital providers are generally faster.",
      icon: <Clock className="w-5 h-5" />,
    },
    {
      question: "Can I switch banks later?",
      answer:
        "Yes, you can switch banks anytime after opening your account. Many banks offer account switching services to help transfer your direct debits and standing orders automatically.",
      icon: <Zap className="w-5 h-5" />,
    },
    {
      question: "What happens if my visa is delayed?",
      answer:
        "Check the refund policies of blocked account providers. Most offer partial refunds if your visa is rejected, but terms vary. Expatrio and Fintiba typically have more flexible refund policies than traditional banks.",
      icon: <Shield className="w-5 h-5" />,
    },
    {
      question: "Do I need both a blocked account and a Giro account?",
      answer:
        "If you're applying for a visa, you need a blocked account first. Once in Germany, you'll want a Giro account for daily banking. Some providers allow you to convert your blocked account to a regular account later.",
      icon: <CreditCard className="w-5 h-5" />,
    },
    {
      question: "Which banks offer the best English support?",
      answer:
        "N26 and DKB offer excellent English support with English-language apps and customer service. Traditional banks like Sparkasse and Commerzbank primarily operate in German.",
      icon: <Users className="w-5 h-5" />,
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
            Get answers to the most common questions about banking in Germany as an international student.
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
                    <div className="flex items-center space-x-3 text-left">
                      <div className="text-blue-600">{faq.icon}</div>
                      <span className="font-semibold text-gray-900">{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">{faq.answer}</AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}

// Main Banking Page Component
export default function BankingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-20">
        <Breadcrumbs />
        <HeroSection />
        <AccountTypeSelector />
        <BlockedAccountSection />
        <GiroAccountSection />
        <BankLocatorSection />
        <FAQSection />
        <DocumentChecklist />
      </div>
    </div>
  )
}
