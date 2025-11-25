'use client'

import { Dumbbell, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Testimonials', href: '#testimonials' }
  ]

  const services = [
    { name: 'Personal Training', href: '#services' },
    { name: 'Group Classes', href: '#services' },
    { name: 'Nutrition Plans', href: '#services' },
    { name: 'Online Coaching', href: '#services' }
  ]

  const contact = [
    { icon: Phone, text: '(555) 123-4567', href: 'tel:5551234567' },
    { icon: Mail, text: 'hello@fitforce.gym', href: 'mailto:hello@fitforce.gym' },
    { icon: MapPin, text: '123 Fitness Ave, Wellness City', href: '#contact' }
  ]

  const social = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ]

  return (
    <footer className="bg-slate-950 text-white relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 opacity-50" />
      
      {/* Accent line at top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Main Footer Content */}
        <div className="py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Brand Column - Spans 4 cols on large screens */}
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 p-2.5 rounded-xl shadow-lg">
                  <Dumbbell className="w-7 h-7 text-white" />
                </div>
                <span className="text-2xl font-bold tracking-tight">FitForce</span>
              </div>
              <p className="text-slate-400 leading-relaxed mb-8 max-w-sm">
                Transform your body, elevate your mind, and achieve your fitness goals with expert guidance and state-of-the-art facilities.
              </p>
              
              {/* Social Links */}
              <div className="flex items-center gap-3">
                {social.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    aria-label={item.label}
                    className="bg-slate-900 hover:bg-emerald-500 p-3 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-emerald-500/20"
                  >
                    <item.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-2">
              <h3 className="text-lg font-bold tracking-tight mb-6">Quick Links</h3>
              <ul className="space-y-4">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-slate-400 hover:text-emerald-500 transition-colors duration-300 inline-flex items-center group"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-emerald-500 transition-all duration-300 mr-0 group-hover:mr-2" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="lg:col-span-3">
              <h3 className="text-lg font-bold tracking-tight mb-6">Our Services</h3>
              <ul className="space-y-4">
                {services.map((service) => (
                  <li key={service.name}>
                    <a
                      href={service.href}
                      className="text-slate-400 hover:text-emerald-500 transition-colors duration-300 inline-flex items-center group"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-emerald-500 transition-all duration-300 mr-0 group-hover:mr-2" />
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-3">
              <h3 className="text-lg font-bold tracking-tight mb-6">Get In Touch</h3>
              <ul className="space-y-5">
                {contact.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      className="text-slate-400 hover:text-emerald-500 transition-colors duration-300 flex items-start gap-3 group"
                    >
                      <item.icon className="w-5 h-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                      <span className="leading-relaxed">{item.text}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-slate-800 py-12">
          <div className="max-w-2xl">
            <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-3">
              Stay Updated
            </h3>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Subscribe to our newsletter for fitness tips, exclusive offers, and updates.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-xl border-2 border-slate-800 bg-slate-900 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 py-4 px-5 text-white placeholder:text-slate-500 transition-all duration-300 outline-none"
              />
              <button
                type="submit"
                className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-xl px-8 py-4 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-emerald-500/20 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-400 text-sm">
              © {currentYear} FitForce Gym. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6">
              <a href="#" className="text-slate-400 hover:text-emerald-500 text-sm transition-colors duration-300">
                Privacy Policy
              </a>
              <span className="text-slate-700">•</span>
              <a href="#" className="text-slate-400 hover:text-emerald-500 text-sm transition-colors duration-300">
                Terms of Service
              </a>
              <span className="text-slate-700">•</span>
              <a href="#" className="text-slate-400 hover:text-emerald-500 text-sm transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div></div></span></span>)
}
