"use client"

import type React from "react"
import { useEffect, useState } from "react"
import Link from "next/link"
import {
  ChefHat,
  ChevronDown,
  BarChart3,
  Users,
  ShoppingCart,
  MenuIcon,
  ArrowRight,
  Check,
  Zap,
  Shield,
  Star,
  Mail,
  Phone,
  MapPin,
  Send,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function SozaynLanding() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white text-black overflow-hidden">
      {/* Floating Background Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="blob bg-pink-300 w-[300px] h-[300px] -left-20 -top-20 animate-pulse-subtle"></div>
        <div className="blob bg-blue-300 w-[250px] h-[250px] right-10 top-1/4 animate-float"></div>
        <div className="blob bg-purple-300 w-[200px] h-[200px] left-1/3 bottom-10 animate-pulse-subtle animate-delay-500"></div>
        <div className="blob bg-orange-300 w-[350px] h-[350px] -right-32 bottom-1/4 animate-pulse-subtle animate-delay-700"></div>
      </div>

      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled ? "glass-nav shadow-md" : "bg-gradient-to-r from-[#ff7e5f]/90 to-[#feb47b]/90 backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link href="/" className="flex items-center space-x-2 transition-colors duration-300">
              <ChefHat className="h-8 w-8 text-white logo-glow" />
              <span className="text-xl font-bold text-white">Sozayn</span>
            </Link>
            <div className="hidden md:flex space-x-6">
              <NavLink href="#features" scrolled={scrolled}>
                Features
              </NavLink>
              <NavLink href="#analytics" scrolled={scrolled}>
                Analytics
              </NavLink>
              <NavLink href="#pricing" scrolled={scrolled}>
                Pricing
              </NavLink>
              <NavLink href="#contact" scrolled={scrolled}>
                Contact
              </NavLink>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              href="/sign-in"
              className={`text-sm font-medium transition-colors duration-300 ${
                scrolled ? "text-gray-600 hover:text-gray-800" : "text-white hover:text-white/90"
              }`}
            >
              Sign In
            </Link>
            <Link
              href="/sign-up"
              className={`px-4 py-1.5 rounded-full ${
                scrolled
                  ? "bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] text-white"
                  : "bg-white text-[#ff7e5f] hover:bg-white/90"
              } text-sm font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5`}
            >
              Sign Up
            </Link>
            <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden glass-card absolute top-16 left-0 right-0 p-4 border-t border-white/10">
            <div className="flex flex-col space-y-3">
              <MobileNavLink href="#features" onClick={() => setMobileMenuOpen(false)}>
                Features
              </MobileNavLink>
              <MobileNavLink href="#analytics" onClick={() => setMobileMenuOpen(false)}>
                Analytics
              </MobileNavLink>
              <MobileNavLink href="#pricing" onClick={() => setMobileMenuOpen(false)}>
                Pricing
              </MobileNavLink>
              <MobileNavLink href="#contact" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </MobileNavLink>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#ff7e5f] to-[#feb47b] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 dot-pattern"></div>
        <div className="container mx-auto px-6 text-center z-10 pt-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in-up">
              Restaurant
              <span className="block text-white">Management</span>
              <span className="block">Reimagined</span>
            </h1>
            <p className="text-xl md:text-2xl font-light mb-8 text-white/90 animate-fade-in-up animate-delay-200 max-w-2xl mx-auto leading-relaxed">
              Transform your restaurant operations with AI-powered insights, seamless ordering, and intelligent
              analytics.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16 animate-fade-in-up animate-delay-400">
              <Link href="/sign-up" className="modern-button text-lg px-8 py-4 flex items-center justify-center">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link href="#demo" className="modern-button-secondary text-lg px-8 py-4 flex items-center justify-center">
                Watch Demo
              </Link>
            </div>

            {/* Statistics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto animate-fade-in-up animate-delay-700">
              <div className="glass-card rounded-xl p-6 hover-card">
                <div className="text-3xl font-bold mb-2">500+</div>
                <div className="text-white/80">Restaurants</div>
              </div>
              <div className="glass-card rounded-xl p-6 hover-card">
                <div className="text-3xl font-bold mb-2">99.9%</div>
                <div className="text-white/80">Uptime</div>
              </div>
              <div className="glass-card rounded-xl p-6 hover-card">
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-white/80">Support</div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
          <ChevronDown className="h-8 w-8 text-white/70" />
        </div>

        <div className="wave"></div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-gray-50 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 gradient-text">Everything You Need</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive tools designed to streamline every aspect of your restaurant operations.
            </p>
            <div className="fancy-divider"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<BarChart3 className="h-8 w-8 text-white" />}
              title="Advanced Analytics"
              description="Real-time insights into sales, customer behavior, and operational efficiency with AI-powered recommendations."
            />
            <FeatureCard
              icon={<ShoppingCart className="h-8 w-8 text-white" />}
              title="Smart Ordering"
              description="Seamless online ordering system with inventory management and automated kitchen workflows."
            />
            <FeatureCard
              icon={<Users className="h-8 w-8 text-white" />}
              title="Customer Management"
              description="Build lasting relationships with comprehensive customer profiles and loyalty programs."
            />
            <FeatureCard
              icon={<MenuIcon className="h-8 w-8 text-white" />}
              title="Dynamic Menu Builder"
              description="Create and update menus instantly with pricing optimization and seasonal recommendations."
            />
            <FeatureCard
              icon={<Zap className="h-8 w-8 text-white" />}
              title="Lightning Fast"
              description="Optimized for speed with sub-second response times and real-time synchronization."
            />
            <FeatureCard
              icon={<Shield className="h-8 w-8 text-white" />}
              title="Enterprise Security"
              description="Bank-level security with end-to-end encryption and compliance with industry standards."
            />
          </div>
        </div>
      </section>

      {/* Analytics Section */}
      <section id="analytics" className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 animate-fade-in-up">
              <h2 className="text-4xl font-bold mb-6">
                <span className="gradient-text">AI-Powered</span> Analytics
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Gain deep insights into your restaurant's performance with our advanced analytics platform. Identify
                trends, optimize staffing, and make data-driven decisions to increase profitability.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] p-1 rounded-full mt-1">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Sales Forecasting</h3>
                    <p className="text-gray-600">
                      Predict busy periods and optimize inventory with AI-powered forecasting.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] p-1 rounded-full mt-1">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Menu Performance</h3>
                    <p className="text-gray-600">
                      Identify your best-selling items and optimize your menu for profitability.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] p-1 rounded-full mt-1">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Customer Insights</h3>
                    <p className="text-gray-600">
                      Understand customer preferences and behavior to enhance experiences.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="gradient-border p-1 rounded-2xl shadow-2xl card-3d">
                <img
                  src="/restaurant-analytics-dashboard.png"
                  alt="Sozayn Analytics Dashboard"
                  className="rounded-xl shadow-inner w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-gray-50 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 gradient-text">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the plan that works best for your restaurant. No hidden fees, no surprises.
            </p>
            <div className="fancy-divider"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Starter Plan */}
            <div className="feature-card p-8 rounded-2xl hover-card bg-white shadow-lg text-black">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Starter</h3>
                <div className="text-4xl font-bold mb-2">
                  $99<span className="text-lg text-gray-500">/mo</span>
                </div>
                <p className="text-gray-600">Perfect for new restaurants</p>
              </div>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-2">
                  <div className="bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] p-1 rounded-full">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-gray-800">Up to 500 orders/month</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] p-1 rounded-full">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-gray-800">Basic analytics</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] p-1 rounded-full">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-gray-800">Menu management</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] p-1 rounded-full">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-gray-800">Email support</span>
                </div>
              </div>
              <Link
                href="/sign-up"
                className="block w-full py-3 text-center rounded-full border border-gray-300 hover:border-gray-400 transition-all hover:-translate-y-1 hover:shadow-md font-medium text-gray-800"
              >
                Get Started
              </Link>
            </div>

            {/* Pro Plan */}
            <div className="feature-card p-8 rounded-2xl relative hover-card border-2 border-[#ff7e5f] transform scale-105 shadow-xl bg-white text-black">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] text-white px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Professional</h3>
                <div className="text-4xl font-bold mb-2">
                  $199<span className="text-lg text-gray-500">/mo</span>
                </div>
                <p className="text-gray-600">For growing restaurants</p>
              </div>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-2">
                  <div className="bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] p-1 rounded-full">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-gray-800">Unlimited orders</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] p-1 rounded-full">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-gray-800">Advanced analytics</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] p-1 rounded-full">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-gray-800">Customer management</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] p-1 rounded-full">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-gray-800">Priority support</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] p-1 rounded-full">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-gray-800">Loyalty program</span>
                </div>
              </div>
              <Link
                href="/sign-up"
                className="block w-full py-3 text-center rounded-full bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] text-white font-medium transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                Get Started
              </Link>
            </div>

            {/* Enterprise Plan */}
            <div className="feature-card p-8 rounded-2xl hover-card bg-white shadow-lg text-black">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
                <div className="text-4xl font-bold mb-2">
                  $399<span className="text-lg text-gray-500">/mo</span>
                </div>
                <p className="text-gray-600">For restaurant chains</p>
              </div>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-2">
                  <div className="bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] p-1 rounded-full">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-gray-800">Everything in Professional</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] p-1 rounded-full">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-gray-800">Multi-location support</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] p-1 rounded-full">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-gray-800">Custom integrations</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] p-1 rounded-full">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-gray-800">Dedicated account manager</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] p-1 rounded-full">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-gray-800">24/7 phone support</span>
                </div>
              </div>
              <Link
                href="/contact"
                className="block w-full py-3 text-center rounded-full border border-gray-300 hover:border-gray-400 transition-all hover:-translate-y-1 hover:shadow-md font-medium text-gray-800"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 gradient-text">Loved by Restaurant Owners</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">See what our customers have to say about Sozayn.</p>
            <div className="fancy-divider"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <TestimonialCard
              quote="Sozayn has completely transformed how we manage our restaurant. The analytics alone have increased our profits by 20%."
              author="Sarah Johnson"
              role="Owner, The Rustic Table"
              rating={5}
            />
            <TestimonialCard
              quote="The customer management features have helped us build a loyal customer base. Our repeat business is up 35% since implementing Sozayn."
              author="Michael Chen"
              role="Manager, Fusion Bistro"
              rating={5}
            />
            <TestimonialCard
              quote="As a multi-location restaurant group, Sozayn has made it easy to manage all our locations from one dashboard. Highly recommended!"
              author="David Rodriguez"
              role="CEO, Taste Enterprises"
              rating={5}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#ff7e5f] to-[#feb47b] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 dot-pattern"></div>
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold mb-6">Ready to Transform Your Restaurant?</h2>
            <p className="text-xl mb-12 text-white/90 max-w-2xl mx-auto">
              Join thousands of restaurants already using Sozayn to increase efficiency, boost sales, and delight
              customers.
            </p>

            {/* Feature Comparison Card */}
            <div className="glass-card rounded-3xl p-8 mb-12 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-6">What's Included</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-400" />
                  <span>Unlimited Orders</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-400" />
                  <span>Real-time Analytics</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-400" />
                  <span>24/7 Support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-400" />
                  <span>Mobile App</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-400" />
                  <span>Menu Management</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-400" />
                  <span>Customer Insights</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/sign-up" className="modern-button text-lg px-8 py-4 flex items-center justify-center">
                Start Your Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/contact"
                className="modern-button-secondary text-lg px-8 py-4 flex items-center justify-center"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
        <div className="wave"></div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 gradient-text">Get in Touch</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have questions? Our team is here to help you find the perfect solution for your restaurant.
            </p>
            <div className="fancy-divider"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] p-3 rounded-full text-white">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Email Us</h3>
                  <p className="text-gray-600 mb-1">For general inquiries:</p>
                  <a href="mailto:info@sozayn.com" className="text-[#ff7e5f] hover:underline">
                    info@sozayn.com
                  </a>
                  <p className="text-gray-600 mb-1 mt-2">For support:</p>
                  <a href="mailto:support@sozayn.com" className="text-[#ff7e5f] hover:underline">
                    support@sozayn.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] p-3 rounded-full text-white">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Call Us</h3>
                  <p className="text-gray-600 mb-1">Sales:</p>
                  <a href="tel:+18001234567" className="text-[#ff7e5f] hover:underline">
                    +1 (800) 123-4567
                  </a>
                  <p className="text-gray-600 mb-1 mt-2">Support:</p>
                  <a href="tel:+18009876543" className="text-[#ff7e5f] hover:underline">
                    +1 (800) 987-6543
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] p-3 rounded-full text-white">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Visit Us</h3>
                  <p className="text-gray-600">
                    123 Restaurant Tech Plaza
                    <br />
                    Suite 400
                    <br />
                    San Francisco, CA 94103
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      className="w-full rounded-xl border-gray-300 focus:border-[#ff7e5f] focus:ring focus:ring-[#ff7e5f] focus:ring-opacity-50"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Your email"
                      className="w-full rounded-xl border-gray-300 focus:border-[#ff7e5f] focus:ring focus:ring-[#ff7e5f] focus:ring-opacity-50"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="How can we help?"
                    className="w-full rounded-xl border-gray-300 focus:border-[#ff7e5f] focus:ring focus:ring-[#ff7e5f] focus:ring-opacity-50"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message"
                    rows={5}
                    className="w-full rounded-xl border-gray-300 focus:border-[#ff7e5f] focus:ring focus:ring-[#ff7e5f] focus:ring-opacity-50"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] text-white font-medium hover:shadow-lg transition-all hover:-translate-y-1 flex items-center justify-center"
                >
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <ChefHat className="h-8 w-8 text-[#ff7e5f] logo-glow" />
                <span className="text-2xl font-bold gradient-text">Sozayn</span>
              </div>
              <p className="text-gray-400 mb-4">Empowering restaurants with intelligent management solutions.</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#features" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    API
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Status
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 mb-4 md:mb-0">
                © {new Date().getFullYear()} Sozayn. All rights reserved.
              </div>
              <div className="flex space-x-6 text-gray-400">
                <a href="#" className="hover:text-white transition-colors">
                  Privacy
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Terms
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Cookies
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function NavLink({ href, scrolled, children }: { href: string; scrolled: boolean; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className={`text-sm font-medium transition-colors duration-300 ${
        scrolled ? "text-gray-600 hover:text-gray-800" : "text-white hover:text-white/90"
      }`}
    >
      {children}
    </a>
  )
}

function MobileNavLink({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="text-gray-800 font-medium py-2 block hover:text-[#ff7e5f] transition-colors"
    >
      {children}
    </a>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="feature-card p-8 text-center bg-white shadow-lg rounded-2xl hover-card">
      <div className="bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] p-4 rounded-2xl inline-block mb-4">{icon}</div>
      <h3 className="text-2xl font-bold mb-4 text-gray-800">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  )
}

function TestimonialCard({
  quote,
  author,
  role,
  rating,
}: {
  quote: string
  author: string
  role: string
  rating: number
}) {
  return (
    <div className="glass-card p-8 rounded-2xl hover-card bg-white shadow-lg">
      <div className="flex mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
        ))}
      </div>
      <p className="text-gray-700 mb-6 italic">"{quote}"</p>
      <div>
        <p className="font-bold text-gray-800">{author}</p>
        <p className="text-gray-500 text-sm">{role}</p>
      </div>
    </div>
  )
}
