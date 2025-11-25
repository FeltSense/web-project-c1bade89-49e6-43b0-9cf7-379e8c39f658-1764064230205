'use client';

import { Calendar, Users, Award, TrendingUp } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Calendar,
      title: 'Smart Scheduling',
      description: 'Real-time class availability with instant booking. Never miss your favorite workout with our intelligent scheduling system.',
      gradient: 'from-emerald-500 to-emerald-600'
    },
    {
      icon: Users,
      title: 'Expert Trainers',
      description: 'Browse certified trainer profiles with detailed specialties. Find the perfect match for your fitness goals and training style.',
      gradient: 'from-slate-600 to-slate-700'
    },
    {
      icon: Award,
      title: 'Flexible Memberships',
      description: 'Compare membership tiers designed for every lifestyle. From casual fitness enthusiasts to dedicated athletes.',
      gradient: 'from-emerald-600 to-slate-600'
    },
    {
      icon: TrendingUp,
      title: 'Proven Results',
      description: 'Real transformation stories from our community. See documented success journeys and get inspired to start yours.',
      gradient: 'from-slate-700 to-slate-900'
    }
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-6">
            Everything You Need to Succeed
          </h2>
          <p className="text-lg leading-relaxed text-slate-600">
            Comprehensive tools and support designed to help you achieve your fitness goals with confidence and clarity.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group rounded-2xl bg-white shadow-lg border border-slate-100 p-8 md:p-10 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              {/* Icon with Gradient */}
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} mb-6 group-hover:scale-110 transition-transform duration-500`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl md:text-2xl font-semibold text-slate-900 mb-4">
                {service.title}
              </h3>
              <p className="font-normal leading-relaxed text-slate-600 mb-6">
                {service.description}
              </p>

              {/* CTA Link */}
              <a
                href="#contact"
                className="inline-flex items-center text-slate-600 font-semibold hover:text-slate-700 transition-colors duration-300 group/link"
              >
                Get Started
                <svg
                  className="w-5 h-5 ml-2 group-hover/link:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <a
            href="#pricing"
            className="inline-block bg-slate-600 hover:bg-slate-700 text-white font-semibold rounded-xl px-8 py-4 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View Membership Options
          </a>
        </div>
      </div>
    </section>
  );
}
