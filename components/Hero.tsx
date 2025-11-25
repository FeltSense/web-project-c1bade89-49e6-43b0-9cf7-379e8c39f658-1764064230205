'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-emerald-50">
      {/* Animated Background Video Effect (simulated with gradient overlay) */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/5 via-transparent to-emerald-500/5"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-slate-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80"
          alt="Technology background"
          fill
          className="object-cover opacity-5"
          priority
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-32 md:py-40">
        <div className="text-center space-y-8 md:space-y-12">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-full px-6 py-3 shadow-lg animate-fade-in">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-semibold text-slate-700">Trusted by 10,000+ companies worldwide</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 max-w-4xl mx-auto leading-tight">
            Transform Your Business with
            <span className="block mt-2 bg-gradient-to-r from-slate-600 via-slate-700 to-emerald-500 bg-clip-text text-transparent">
              Next-Generation Technology
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl leading-relaxed text-slate-600 max-w-2xl mx-auto">
            Empower your team with cutting-edge solutions designed for modern enterprises. 
            Experience seamless integration, powerful analytics, and unmatched reliability.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 pt-4">
            <Link
              href="#contact"
              className="w-full sm:w-auto bg-slate-600 hover:bg-slate-700 text-white font-semibold rounded-xl px-8 py-4 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center space-x-2"
            >
              <span>Get Started Free</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="#services"
              className="w-full sm:w-auto border-2 border-slate-600 text-slate-600 hover:bg-slate-600 hover:text-white rounded-xl px-8 py-4 font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Learn More</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 md:gap-12 max-w-3xl mx-auto pt-12 md:pt-16">
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-slate-900">99.9%</div>
              <div className="text-sm md:text-base text-slate-600">Uptime</div>
            </div>
            <div className="space-y-2 border-x border-slate-200">
              <div className="text-3xl md:text-4xl font-bold text-slate-900">50M+</div>
              <div className="text-sm md:text-base text-slate-600">API Calls Daily</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-slate-900">24/7</div>
              <div className="text-sm md:text-base text-slate-600">Support</div>
            </div>
          </div>

          {/* Feature Cards Preview */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto pt-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
              <div className="w-12 h-12 bg-gradient-to-br from-slate-600 to-emerald-500 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Lightning Fast</h3>
              <p className="text-slate-600">Optimized performance for instant results</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500" style={{ transitionDelay: '100ms' }}>
              <div className="w-12 h-12 bg-gradient-to-br from-slate-600 to-emerald-500 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Enterprise Security</h3>
              <p className="text-slate-600">Bank-level encryption and compliance</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500" style={{ transitionDelay: '200ms' }}>
              <div className="w-12 h-12 bg-gradient-to-br from-slate-600 to-emerald-500 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Real-Time Analytics</h3>
              <p className="text-slate-600">Actionable insights at your fingertips</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <Link href="#services" className="flex flex-col items-center space-y-2 text-slate-600 hover:text-slate-900 transition-colors duration-300">
          <span className="text-sm font-medium">Scroll to explore</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </Link>
      </div>
    </section>
  )
}
