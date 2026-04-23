'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import {
  Truck, Trash2, MapPin, Phone, Clock, ChevronRight, Menu, X,
  CheckCircle2, Calendar, ShieldCheck, ArrowRight, Star, Quote,
  MessageCircle, ThumbsUp,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import {
  DUMPSTER_SIZES, SERVICES, SERVICE_AREAS, TESTIMONIALS,
} from '@/lib/constants'

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-lrsd-paper selection:bg-lrsd-orange selection:text-white">
      {/* PHASE-9-NAVIGATION-START */}
      <nav className="absolute top-0 w-full z-50 bg-transparent">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-display text-3xl font-extrabold tracking-tight text-white">LRSD<span className="text-lrsd-orange">.</span></span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm font-semibold text-white/90 hover:text-white transition-colors">Services</a>
            <a href="#sizes" className="text-sm font-semibold text-white/90 hover:text-white transition-colors">Sizes</a>
            <a href="#areas" className="text-sm font-semibold text-white/90 hover:text-white transition-colors">Service Area</a>
            <a href="#about" className="text-sm font-semibold text-white/90 hover:text-white transition-colors">About</a>
            <a
              href="tel:8135550123"
              className="px-6 py-3 bg-lrsd-orange text-white rounded-full text-sm font-bold flex items-center gap-2 hover:bg-lrsd-orange/90 transition-all shadow-lg shadow-lrsd-orange/20"
            >
              <Phone size={16} />
              (813) 555-0123
            </a>
          </div>

          <button
            className="md:hidden p-2 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
      {/* PHASE-9-NAVIGATION-END */}

      {/* PHASE-10-MOBILE-MENU-START */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-lrsd-black pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-2xl font-display font-bold text-white">SERVICES</a>
              <a href="#sizes" onClick={() => setIsMenuOpen(false)} className="text-2xl font-display font-bold text-white">SIZES</a>
              <a href="#areas" onClick={() => setIsMenuOpen(false)} className="text-2xl font-display font-bold text-white">SERVICE AREA</a>
              <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-2xl font-display font-bold text-white">ABOUT</a>
              <a href="tel:8135550123" className="text-2xl font-display font-bold text-lrsd-orange">CALL NOW</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* PHASE-10-MOBILE-MENU-END */}

      {/* PHASE-11-HERO-START */}
      {/* Modern Hero Section with Brutalist Typography */}
      <section className="relative pt-40 pb-48 lg:pb-56 overflow-hidden bg-lrsd-black">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop"
            alt="Construction site"
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-lrsd-black via-lrsd-black/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-sm font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">
              <Star size={14} className="text-lrsd-orange fill-lrsd-orange" />
              #1 Local Dumpster Rental
            </div>

            <h1 className="font-display text-6xl md:text-8xl text-white leading-[0.9] mb-6">
              CLEAR THE CLUTTER WITH <span className="text-lrsd-orange">CONFIDENCE.</span>
            </h1>

            <p className="text-xl text-white/80 mb-10 leading-relaxed max-w-2xl font-medium">
              Professional dumpster rental and waste management services tailored to your project's unique needs across the Florida Gulf Coast.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a href="tel:8135550123" className="w-full sm:w-auto px-8 py-5 bg-lrsd-orange text-white rounded-2xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-white hover:text-lrsd-black transition-all shadow-lg shadow-lrsd-orange/20 uppercase tracking-wide">
                Get Your Free Quote
                <ChevronRight size={20} />
              </a>
              <a href="#sizes" className="w-full sm:w-auto px-8 py-5 bg-transparent border-2 border-white/30 text-white rounded-2xl font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center backdrop-blur-sm uppercase tracking-wide">
                View Our Sizes
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      {/* PHASE-11-HERO-END */}

      {/* PHASE-12-TRUST-BAR-START */}
      {/* Overlapping Trust Bar */}
      <section className="relative z-20 max-w-7xl mx-auto px-6 -mt-24 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-[32px] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] p-8 md:p-10 flex flex-col md:flex-row gap-8 md:gap-12 justify-between items-start md:items-center border border-lrsd-black/5"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-lrsd-orange/10 flex items-center justify-center shrink-0">
              <ShieldCheck size={24} className="text-lrsd-orange" />
            </div>
            <div>
              <h3 className="font-display text-2xl text-lrsd-black mb-1">LICENSED & INSURED</h3>
              <p className="text-sm text-lrsd-black/60 font-medium leading-relaxed">Full coverage for your peace of mind and property protection.</p>
            </div>
          </div>

          <div className="hidden md:block w-px h-16 bg-lrsd-black/10 shrink-0" />

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-lrsd-orange/10 flex items-center justify-center shrink-0">
              <Star size={24} className="text-lrsd-orange" />
            </div>
            <div>
              <h3 className="font-display text-2xl text-lrsd-black mb-1">EXPERT TEAM</h3>
              <p className="text-sm text-lrsd-black/60 font-medium leading-relaxed">Years of experience in local waste management and logistics.</p>
            </div>
          </div>

          <div className="hidden md:block w-px h-16 bg-lrsd-black/10 shrink-0" />

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-lrsd-orange/10 flex items-center justify-center shrink-0">
              <ThumbsUp size={24} className="text-lrsd-orange" />
            </div>
            <div>
              <h3 className="font-display text-2xl text-lrsd-black mb-1">100% SATISFACTION</h3>
              <p className="text-sm text-lrsd-black/60 font-medium leading-relaxed">We don't stop until your site is clear and you are happy.</p>
            </div>
          </div>
        </motion.div>
      </section>
      {/* PHASE-12-TRUST-BAR-END */}

      {/* PHASE-13-SERVICES-START */}
      {/* Services Section */}
      <section id="services" className="py-24 bg-lrsd-paper text-lrsd-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="font-display text-5xl md:text-7xl mb-6 uppercase">
              WASTE MANAGEMENT SOLUTIONS <br className="hidden md:block" /><span className="text-lrsd-orange">FOR EVERY PROJECT.</span>
            </h2>
            <p className="text-xl text-lrsd-black/60 max-w-3xl mx-auto font-medium">
              From weekend garage cleanouts to major construction sites, we have the right container and service for your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group flex flex-col bg-white rounded-[32px] overflow-hidden border border-lrsd-black/5 shadow-sm hover:shadow-2xl transition-all"
              >
                <div className="h-64 overflow-hidden relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="font-display text-3xl mb-4 uppercase">{service.title}</h3>
                  <p className="text-lrsd-black/60 font-medium leading-relaxed mb-8 flex-1">
                    {service.desc}
                  </p>
                  <a href="#" className="inline-flex items-center gap-2 text-lrsd-orange font-bold uppercase tracking-wide hover:text-lrsd-black transition-colors">
                    Learn more <ChevronRight size={18} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* PHASE-13-SERVICES-END */}

      {/* PHASE-14-SOCIAL-PROOF-START */}
      {/* Social Proof / Conversation Starters */}
      <section className="py-24 bg-white text-lrsd-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-24 items-center">
            <div className="relative">
              <div className="absolute -top-12 -left-12 opacity-10 text-lrsd-orange">
                <Quote size={160} />
              </div>
              <div className="space-y-8 relative z-10">
                {TESTIMONIALS.map((t, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 }}
                    className="p-8 rounded-[32px] bg-lrsd-paper border border-lrsd-black/5"
                  >
                    <div className="flex gap-1 mb-4">
                      {[...Array(t.rating)].map((_, i) => <Star key={i} size={16} fill="#F27D26" color="#F27D26" />)}
                    </div>
                    <p className="text-xl font-medium mb-6 leading-relaxed italic">"{t.quote}"</p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-lrsd-orange/20 flex items-center justify-center font-bold text-lrsd-orange">
                        {t.name[0]}
                      </div>
                      <div>
                        <div className="font-bold">{t.name}</div>
                        <div className="text-sm text-lrsd-black/40">{t.location}, FL</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-display text-5xl md:text-7xl mb-8 leading-[0.9]">WE'RE MORE THAN <br /><span className="text-lrsd-orange">JUST A TRUCK.</span></h2>
              <p className="text-xl text-lrsd-black/60 mb-10 leading-relaxed">
                When you call LRSD, you're talking to a neighbor. We know the Florida Gulf Coast because we live here.
                Our goal is to make your project successful, one load at a time.
              </p>
              <div className="space-y-6">
                {[
                  "Real people answer the phone",
                  "No automated runaround",
                  "Direct communication with drivers",
                  "Local expertise on permit requirements"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 font-bold text-lg">
                    <div className="w-6 h-6 rounded-full bg-lrsd-orange flex items-center justify-center text-white">
                      <CheckCircle2 size={14} />
                    </div>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* PHASE-14-SOCIAL-PROOF-END */}

      {/* PHASE-15-SIZES-START */}
      {/* Sizes Section - Redesigned to be more "Guided" */}
      <section id="sizes" className="py-24 bg-lrsd-paper text-lrsd-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="font-display text-6xl md:text-8xl mb-6">WHICH ONE <span className="text-lrsd-orange">FITS?</span></h2>
            <p className="text-xl text-lrsd-black/60 max-w-2xl mx-auto">
              Every project is unique. Here's a quick guide to help you decide which container is right for your conversation with us.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {DUMPSTER_SIZES.map((size, i) => (
              <motion.div
                key={size.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative p-10 rounded-[40px] bg-white border border-lrsd-black/5 hover:border-lrsd-orange/50 transition-all overflow-hidden shadow-sm hover:shadow-2xl"
              >
                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Trash2 size={100} />
                </div>

                <div className="mb-8">
                  <h3 className="font-display text-4xl mb-2">{size.name}</h3>
                  <div className="text-lrsd-orange font-display text-2xl">{size.price}</div>
                </div>

                <div className="space-y-6 mb-10">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 text-lrsd-orange"><MapPin size={20} /></div>
                    <div>
                      <div className="text-xs uppercase tracking-widest font-bold text-lrsd-black/30 mb-1">Dimensions</div>
                      <div className="font-bold">{size.dimensions}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="mt-1 text-lrsd-orange"><Truck size={20} /></div>
                    <div>
                      <div className="text-xs uppercase tracking-widest font-bold text-lrsd-black/30 mb-1">Capacity</div>
                      <div className="font-bold">{size.capacity}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="mt-1 text-lrsd-orange"><CheckCircle2 size={20} /></div>
                    <div>
                      <div className="text-xs uppercase tracking-widest font-bold text-lrsd-black/30 mb-1">Best For</div>
                      <div className="font-medium leading-relaxed text-lrsd-black/70">{size.ideal}</div>
                    </div>
                  </div>
                </div>

                <button className="w-full py-5 rounded-2xl bg-lrsd-black text-white font-bold text-lg hover:bg-lrsd-orange transition-all flex items-center justify-center gap-2">
                  Pick this size
                  <ChevronRight size={20} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* PHASE-15-SIZES-END */}

      {/* PHASE-16-SERVICE-AREA-START */}
      {/* Service Area */}
      <section id="areas" className="py-24 bg-white text-lrsd-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-5xl md:text-7xl mb-8">WE'RE IN YOUR <br /><span className="text-lrsd-orange">NEIGHBORHOOD.</span></h2>
              <p className="text-xl text-lrsd-black/60 mb-10 leading-relaxed">
                From the beaches of Clearwater to the streets of Tampa, we're serving the Florida Gulf Coast with pride.
                Check if we're in your area:
              </p>

              <div className="grid grid-cols-2 gap-6">
                {SERVICE_AREAS.map((area) => (
                  <div key={area} className="flex items-center gap-4 text-lrsd-black/80 group cursor-default">
                    <div className="w-2 h-2 rounded-full bg-lrsd-orange group-hover:scale-150 transition-transform" />
                    <span className="font-bold text-lg">{area}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-[48px] overflow-hidden border border-lrsd-black/10 bg-lrsd-black/5 flex items-center justify-center p-12">
                <div className="text-center relative z-10">
                  <MapPin size={80} className="text-lrsd-orange mx-auto mb-8 animate-bounce" />
                  <div className="font-display text-5xl mb-4 tracking-tighter">TAMPA BAY</div>
                  <div className="text-lrsd-black/40 uppercase tracking-[0.2em] font-bold text-sm">Local Hub</div>
                </div>
                {/* Abstract Map Lines */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                  <svg width="100%" height="100%" viewBox="0 0 400 400">
                    <path d="M0 100 Q 200 150 400 50" stroke="black" fill="none" strokeWidth="1" />
                    <path d="M0 250 Q 150 200 400 300" stroke="black" fill="none" strokeWidth="1" />
                    <path d="M100 0 Q 150 200 50 400" stroke="black" fill="none" strokeWidth="1" />
                    <path d="M300 0 Q 250 200 350 400" stroke="black" fill="none" strokeWidth="1" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* PHASE-16-SERVICE-AREA-END */}

      {/* PHASE-17-FOOTER-START */}
      {/* Footer */}
      <footer className="py-24 border-t border-white/5 bg-lrsd-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-16 mb-24">
            <div className="col-span-2">
              <div className="font-display text-5xl text-lrsd-orange mb-8">LRSD.</div>
              <p className="text-white/40 max-w-sm text-lg mb-10 leading-relaxed">
                The Florida Gulf Coast's most reliable dumpster rental service.
                Locally owned, human-operated, and project-focused.
              </p>
              <div className="flex gap-6">
                <a href="#" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-lrsd-orange transition-all hover:-translate-y-1">
                  <span className="sr-only">Facebook</span>
                  <div className="w-6 h-6 bg-white/20 rounded-md" />
                </a>
                <a href="#" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-lrsd-orange transition-all hover:-translate-y-1">
                  <span className="sr-only">Instagram</span>
                  <div className="w-6 h-6 bg-white/20 rounded-md" />
                </a>
              </div>
            </div>

            <div>
              <div className="font-bold text-xs uppercase tracking-[0.2em] text-white/30 mb-8">Navigation</div>
              <ul className="space-y-6 text-lg font-medium">
                <li><a href="#sizes" className="hover:text-lrsd-orange transition-colors">Dumpster Sizes</a></li>
                <li><a href="#areas" className="hover:text-lrsd-orange transition-colors">Service Area</a></li>
                <li><a href="#about" className="hover:text-lrsd-orange transition-colors">Our Story</a></li>
                <li><a href="#" className="hover:text-lrsd-orange transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <div className="font-bold text-xs uppercase tracking-[0.2em] text-white/30 mb-8">Get in touch</div>
              <ul className="space-y-6 text-lg font-medium">
                <li className="flex items-center gap-4">
                  <Phone size={20} className="text-lrsd-orange" />
                  <a href="tel:8135550123" className="hover:text-lrsd-orange transition-colors">(813) 555-0123</a>
                </li>
                <li className="flex items-center gap-4">
                  <MapPin size={20} className="text-lrsd-orange" />
                  <span>Tampa Bay Area, FL</span>
                </li>
                <li className="flex items-center gap-4">
                  <Clock size={20} className="text-lrsd-orange" />
                  <span>Mon-Sat: 7am - 6pm</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-white/20 font-medium">
            <div>© 2024 LRSD Dumpster Rentals. A Florida Gulf Coast Original.</div>
            <div className="flex gap-12">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
      {/* PHASE-17-FOOTER-END */}
    </div>
  )
}
