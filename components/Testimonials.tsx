'use client'

import Image from 'next/image'

export default function Testimonials() {
  const testimonials = [
    {
      quote: "The level of professionalism and attention to detail exceeded our expectations. Our project was delivered on time and the results speak for themselves.",
      author: "Sarah Chen",
      role: "CEO, TechVision",
      avatar: "https://i.pravatar.cc/150?img=5",
      rating: 5
    },
    {
      quote: "Working with this team transformed our business. Their innovative approach and clear communication made the entire process seamless and enjoyable.",
      author: "Michael Rodriguez",
      role: "Founder, GrowthLab",
      avatar: "https://i.pravatar.cc/150?img=12",
      rating: 5
    },
    {
      quote: "Exceptional quality and outstanding support. They truly understand what it takes to build something remarkable that drives real business value.",
      author: "Emily Watson",
      role: "Director, Innovate Co",
      avatar: "https://i.pravatar.cc/150?img=9",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-emerald-50 rounded-full mb-6">
            <span className="text-emerald-500 font-semibold text-sm">Testimonials</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg leading-relaxed text-slate-600">
            Don't just take our word for it. Here's what our clients have to say about their experience working with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white shadow-lg border border-slate-100 p-8 md:p-10 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-emerald-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-slate-600 leading-relaxed mb-8 text-base">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">{testimonial.author}</p>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
