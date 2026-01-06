import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Clock,
  Send,
  CheckCircle
} from 'lucide-react'
import PageTransition from '../components/ui/PageTransition'
import FadeInWhenVisible from '../components/ui/FadeInWhenVisible'

const workshopOptions = [
  'Signature Scent Workshop',
  'Couples Workshop',
  'Group Workshop',
  'Private Masterclass',
  'Gift Card Purchase',
  'Corporate Inquiry',
  'Other',
]

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    workshop: '',
    preferredDate: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real app, this would send the form data to a server
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
  }

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-soft">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="font-lato text-sm tracking-[0.2em] text-orchid-500 uppercase mb-4">
              Get in Touch
            </p>
            <h1 className="heading-xl mb-6">
              Book Your
              <br />
              <span className="text-gradient">Experience</span>
            </h1>
            <p className="body-lg">
              Ready untuk create signature scent Anda? Hubungi kami untuk booking workshop atau tanya lebih lanjut.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <FadeInWhenVisible>
              <div>
                <h2 className="heading-lg mb-8">Visit Our Studio</h2>

                <div className="space-y-8 mb-10">
                  {/* Address */}
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-orchid-50 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-orchid-500" />
                    </div>
                    <div>
                      <h3 className="font-cormorant text-xl font-medium text-gray-900 mb-1">
                        The Studio
                      </h3>
                      <p className="text-gray-600">
                        Jl. Senopati No. 88<br />
                        Jakarta Selatan 12110
                      </p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-orchid-50 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-orchid-500" />
                    </div>
                    <div>
                      <h3 className="font-cormorant text-xl font-medium text-gray-900 mb-1">
                        Studio Hours
                      </h3>
                      <p className="text-gray-600">
                        Tuesday - Sunday: 10:00 - 19:00<br />
                        <span className="text-gray-400">Closed Monday</span>
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-orchid-50 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-orchid-500" />
                    </div>
                    <div>
                      <h3 className="font-cormorant text-xl font-medium text-gray-900 mb-1">
                        WhatsApp
                      </h3>
                      <a
                        href="https://wa.me/628123456789"
                        className="text-orchid-500 hover:text-orchid-600 transition-colors"
                      >
                        +62 812-SCENT-88
                      </a>
                      <p className="text-gray-500 text-sm mt-1">
                        Fastest way to reach us
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-orchid-50 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-orchid-500" />
                    </div>
                    <div>
                      <h3 className="font-cormorant text-xl font-medium text-gray-900 mb-1">
                        Email
                      </h3>
                      <a
                        href="mailto:hello@scentory.id"
                        className="text-orchid-500 hover:text-orchid-600 transition-colors"
                      >
                        hello@scentory.id
                      </a>
                    </div>
                  </div>

                  {/* Instagram */}
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-orchid-50 rounded-full flex items-center justify-center flex-shrink-0">
                      <Instagram className="w-5 h-5 text-orchid-500" />
                    </div>
                    <div>
                      <h3 className="font-cormorant text-xl font-medium text-gray-900 mb-1">
                        Instagram
                      </h3>
                      <a
                        href="https://instagram.com/scentory.id"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orchid-500 hover:text-orchid-600 transition-colors"
                      >
                        @scentory.id
                      </a>
                    </div>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="bg-gradient-to-br from-cream to-orchid-50 rounded-2xl aspect-video flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-orchid-300 mx-auto mb-4" />
                    <p className="font-cormorant text-xl text-gray-600">
                      Senopati, Jakarta Selatan
                    </p>
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orchid-500 text-sm hover:underline mt-2 inline-block"
                    >
                      Open in Google Maps
                    </a>
                  </div>
                </div>
              </div>
            </FadeInWhenVisible>

            {/* Booking Form */}
            <FadeInWhenVisible delay={0.2}>
              <div className="bg-cream rounded-3xl p-8 md:p-10">
                <h2 className="heading-lg mb-2">Book a Workshop</h2>
                <p className="text-gray-600 mb-8">
                  Isi form di bawah dan kami akan segera menghubungi Anda.
                </p>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-green-500" />
                    </div>
                    <h3 className="heading-md mb-2">Thank You!</h3>
                    <p className="text-gray-600 mb-6">
                      Pesan Anda sudah kami terima. Tim kami akan menghubungi Anda dalam 1x24 jam.
                    </p>
                    <button
                      onClick={() => {
                        setIsSubmitted(false)
                        setFormData({
                          name: '',
                          email: '',
                          phone: '',
                          workshop: '',
                          preferredDate: '',
                          message: '',
                        })
                      }}
                      className="btn-secondary"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orchid-500 focus:ring-2 focus:ring-orchid-500/20 outline-none transition-all"
                        placeholder="Your name"
                      />
                    </div>

                    {/* Email & Phone */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orchid-500 focus:ring-2 focus:ring-orchid-500/20 outline-none transition-all"
                          placeholder="your@email.com"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Phone / WhatsApp *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orchid-500 focus:ring-2 focus:ring-orchid-500/20 outline-none transition-all"
                          placeholder="08xx-xxxx-xxxx"
                        />
                      </div>
                    </div>

                    {/* Workshop Selection */}
                    <div>
                      <label
                        htmlFor="workshop"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Workshop Interest *
                      </label>
                      <select
                        id="workshop"
                        name="workshop"
                        required
                        value={formData.workshop}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orchid-500 focus:ring-2 focus:ring-orchid-500/20 outline-none transition-all bg-white"
                      >
                        <option value="">Select a workshop</option>
                        {workshopOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Preferred Date */}
                    <div>
                      <label
                        htmlFor="preferredDate"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        id="preferredDate"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orchid-500 focus:ring-2 focus:ring-orchid-500/20 outline-none transition-all"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orchid-500 focus:ring-2 focus:ring-orchid-500/20 outline-none transition-all resize-none"
                        placeholder="Tell us more about what you're looking for..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn-primary w-full justify-center"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </button>

                    <p className="text-gray-500 text-sm text-center">
                      Or contact us directly via{' '}
                      <a
                        href="https://wa.me/628123456789"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orchid-500 hover:underline"
                      >
                        WhatsApp
                      </a>
                    </p>
                  </form>
                )}
              </div>
            </FadeInWhenVisible>
          </div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="py-16 bg-orchid-500">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h2 className="font-cormorant text-2xl md:text-3xl font-light text-white mb-2">
                Prefer to Chat?
              </h2>
              <p className="text-orchid-100">
                Reach us directly on WhatsApp for faster response
              </p>
            </div>
            <a
              href="https://wa.me/628123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-orchid-500 font-medium rounded-full hover:bg-cream transition-colors"
            >
              <Phone className="w-4 h-4 mr-2" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}

export default Contact
