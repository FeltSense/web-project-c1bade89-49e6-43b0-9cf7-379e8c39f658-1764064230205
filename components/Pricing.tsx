'use client';

import { Check } from 'lucide-react';

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Pre-order now and lock in our exclusive early-bird pricing. Limited time offer.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-lg mx-auto">
          <div className="rounded-2xl bg-white shadow-lg border border-slate-100 p-8 md:p-10 hover:shadow-2xl transition-all duration-500">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 mb-6">
              <span className="text-sm font-semibold text-emerald-600">🎉 Early Bird Special</span>
            </div>

            {/* Price */}
            <div className="mb-8">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl md:text-6xl font-bold tracking-tight text-slate-900">$29</span>
                <span className="text-lg text-slate-500 line-through">$49</span>
              </div>
              <p className="text-slate-600 font-normal leading-relaxed">
                One-time payment. Lifetime access.
              </p>
            </div>

            {/* Stripe Button */}
            <button
              onClick={() => window.location.href = 'https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00'}
              className="w-full py-4 bg-slate-600 hover:bg-slate-700 text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl mb-8"
            >
              Pre-Order Now - $29
            </button>

            {/* Features */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-50 flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-emerald-500" />
                </div>
                <span className="text-slate-600 font-normal leading-relaxed">
                  Lifetime access to all features
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-50 flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-emerald-500" />
                </div>
                <span className="text-slate-600 font-normal leading-relaxed">
                  Priority customer support
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-50 flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-emerald-500" />
                </div>
                <span className="text-slate-600 font-normal leading-relaxed">
                  Free updates forever
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-50 flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-emerald-500" />
                </div>
                <span className="text-slate-600 font-normal leading-relaxed">
                  30-day money-back guarantee
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-50 flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-emerald-500" />
                </div>
                <span className="text-slate-600 font-normal leading-relaxed">
                  Exclusive early-bird bonuses
                </span>
              </div>
            </div>

            {/* Trust Badge */}
            <div className="mt-8 pt-8 border-t border-slate-100 text-center">
              <p className="text-sm text-slate-500">
                🔒 Secure payment powered by Stripe
              </p>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-slate-600 font-normal leading-relaxed">
            Have questions? <a href="#contact" className="text-slate-600 hover:text-slate-700 font-semibold underline transition-colors duration-300">Contact us</a> for more information.
          </p>
        </div>
      </div>
    </section>
  );
}
