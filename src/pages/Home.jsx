import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Sparkles,
  FlaskConical,
  Package,
  Clock,
  Users,
  ArrowRight,
  Star,
  Gift,
  Instagram
} from 'lucide-react'
import PageTransition from '../components/ui/PageTransition'
import SectionHeading from '../components/ui/SectionHeading'
import FadeInWhenVisible from '../components/ui/FadeInWhenVisible'

// Scent families data
const scentFamilies = [
  {
    name: 'Fresh & Citrus',
    emoji: '🍋',
    description: 'Energizing, clean, bright',
    color: 'from-yellow-100 to-orange-100',
  },
  {
    name: 'Floral',
    emoji: '🌸',
    description: 'Romantic, feminine, elegant',
    color: 'from-pink-100 to-rose-100',
  },
  {
    name: 'Woody',
    emoji: '🌲',
    description: 'Grounding, sophisticated, warm',
    color: 'from-amber-100 to-yellow-100',
  },
  {
    name: 'Oriental',
    emoji: '✨',
    description: 'Sensual, rich, mysterious',
    color: 'from-purple-100 to-orchid-100',
  },
  {
    name: 'Aquatic',
    emoji: '🌊',
    description: 'Clean, modern, refreshing',
    color: 'from-cyan-100 to-blue-100',
  },
  {
    name: 'Gourmand',
    emoji: '🍫',
    description: 'Sweet, comforting, indulgent',
    color: 'from-orange-100 to-red-100',
  },
]

// Experience steps
const experienceSteps = [
  {
    step: '01',
    title: 'Discover',
    description: 'Explore scent families dan temukan preference Anda melalui guided sensory journey',
    icon: Sparkles,
  },
  {
    step: '02',
    title: 'Create',
    description: 'Blend your unique formula dengan guidance perfumer menggunakan 50+ premium notes',
    icon: FlaskConical,
  },
  {
    step: '03',
    title: 'Own',
    description: 'Bawa pulang 50ml signature perfume + formula record untuk reorder',
    icon: Package,
  },
]

// Featured workshops
const workshops = [
  {
    title: 'Signature Scent Workshop',
    duration: '2 hours',
    price: 'Rp 1.500.000',
    description: 'Private session untuk create 50ml personal fragrance dengan guided perfumer experience',
    featured: true,
  },
  {
    title: 'Couples Workshop',
    duration: '2.5 hours',
    price: 'Rp 2.500.000',
    description: 'Create matching atau complementary scents bersama partner Anda',
    featured: false,
  },
]

// Featured perfumes
const featuredPerfumes = [
  {
    name: 'PAGI',
    tagline: 'Fresh Floral',
    price: 'Rp 850.000',
    description: 'Inspired by mornings in a Javanese garden',
  },
  {
    name: 'MALAM',
    tagline: 'Oriental',
    price: 'Rp 950.000',
    description: 'The mystery of tropical nights',
  },
  {
    name: 'PANTAI',
    tagline: 'Aquatic Fresh',
    price: 'Rp 800.000',
    description: 'Indonesian coastal escapes',
  },
]

// Testimonials
const testimonials = [
  {
    quote: 'The most unique gift I ever gave myself. Sekarang saya punya parfum yang benar-benar "me".',
    name: 'Sarah A.',
    title: 'Fashion Designer',
  },
  {
    quote: 'Pengalaman yang sangat personal dan memorable. Perfumer-nya sangat helpful dalam guiding the process.',
    name: 'Amanda R.',
    title: 'Entrepreneur',
  },
  {
    quote: 'Finally found my signature scent! Prosesnya fun dan hasilnya amazing.',
    name: 'Dian P.',
    title: 'Creative Director',
  },
]

function Home() {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-soft overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orchid-200/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-orchid-100/30 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10 pt-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="font-lato text-sm tracking-[0.2em] text-orchid-500 uppercase mb-4">
                Custom Fragrance Studio
              </p>
              <h1 className="heading-xl mb-6">
                Your Scent.
                <br />
                <span className="text-gradient">Your Story.</span>
              </h1>
              <p className="body-lg mb-8 max-w-lg">
                Create your signature fragrance dalam private workshop dengan perfumer kami.
                Sebuah pengalaman yang menghasilkan parfum yang unik hanya untuk Anda.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-primary">
                  Book Your Experience
                </Link>
                <Link to="/collection" className="btn-secondary">
                  Discover Our Scents
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square relative">
                {/* Placeholder for hero image - elegant perfume bottles */}
                <div className="absolute inset-0 bg-gradient-to-br from-orchid-100 to-cream rounded-3xl overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-48 h-64 mx-auto bg-gradient-to-b from-white to-cream rounded-2xl shadow-2xl relative">
                        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-8 h-12 bg-gold/80 rounded-t-full" />
                        <div className="absolute top-14 inset-x-8 bottom-8 bg-gradient-to-b from-orchid-200/50 to-orchid-400/30 rounded-xl" />
                      </div>
                      <p className="font-cormorant text-xl text-gray-600 mt-6 italic">Your signature awaits</p>
                    </div>
                  </div>
                </div>
                {/* Floating elements */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-4 right-8 bg-white p-4 rounded-2xl shadow-lg"
                >
                  <Sparkles className="text-gold w-6 h-6" />
                </motion.div>
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute bottom-8 -left-4 bg-white p-4 rounded-2xl shadow-lg"
                >
                  <FlaskConical className="text-orchid-500 w-6 h-6" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center pt-2"
          >
            <div className="w-1 h-2 bg-orchid-400 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            subtitle="The Experience"
            title="Create Your Signature Scent"
            description="Tiga langkah untuk menemukan aroma yang menceritakan kisah Anda"
          />

          <div className="grid md:grid-cols-3 gap-8">
            {experienceSteps.map((item, index) => (
              <FadeInWhenVisible key={item.step} delay={index * 0.1}>
                <div className="text-center p-8 group">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orchid-50 group-hover:bg-orchid-100 transition-colors mb-6">
                    <item.icon className="w-7 h-7 text-orchid-500" />
                  </div>
                  <p className="font-cormorant text-5xl font-light text-orchid-200 mb-2">
                    {item.step}
                  </p>
                  <h3 className="heading-md mb-3">{item.title}</h3>
                  <p className="body-md">{item.description}</p>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      {/* Scent Families Section */}
      <section className="section-padding bg-gradient-cream">
        <div className="container-custom">
          <SectionHeading
            subtitle="Scent Families"
            title="Explore the World of Fragrance"
            description="Temukan keluarga aroma yang resonates dengan kepribadian Anda"
          />

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {scentFamilies.map((family, index) => (
              <FadeInWhenVisible key={family.name} delay={index * 0.05}>
                <div className={`bg-gradient-to-br ${family.color} rounded-2xl p-6 md:p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer`}>
                  <span className="text-4xl md:text-5xl mb-4 block">{family.emoji}</span>
                  <h3 className="font-cormorant text-xl md:text-2xl font-medium text-gray-900 mb-2">
                    {family.name}
                  </h3>
                  <p className="text-gray-600 text-sm">{family.description}</p>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      {/* Workshops Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            subtitle="Workshops"
            title="Our Experiences"
            description="Pilih workshop yang sesuai dengan kebutuhan Anda"
          />

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {workshops.map((workshop, index) => (
              <FadeInWhenVisible key={workshop.title} delay={index * 0.1}>
                <div className={`card-luxury p-8 ${workshop.featured ? 'ring-2 ring-orchid-500' : ''}`}>
                  {workshop.featured && (
                    <span className="inline-block bg-orchid-500 text-white text-xs font-medium px-3 py-1 rounded-full mb-4">
                      Most Popular
                    </span>
                  )}
                  <h3 className="heading-md mb-2">{workshop.title}</h3>
                  <div className="flex items-center gap-4 text-gray-500 text-sm mb-4">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {workshop.duration}
                    </span>
                  </div>
                  <p className="font-cormorant text-2xl text-orchid-500 font-medium mb-4">
                    {workshop.price}
                  </p>
                  <p className="body-md mb-6">{workshop.description}</p>
                  <Link
                    to="/workshops"
                    className="inline-flex items-center text-orchid-500 font-medium hover:text-orchid-600 transition-colors group"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/workshops" className="btn-secondary">
              View All Workshops
            </Link>
          </div>
        </div>
      </section>

      {/* Collection Section */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="container-custom">
          <SectionHeading
            subtitle="Ready-to-Wear"
            title="Scentory Collection"
            description="Handcrafted perfumes inspired by Indonesian stories"
            light
          />

          <div className="grid md:grid-cols-3 gap-8">
            {featuredPerfumes.map((perfume, index) => (
              <FadeInWhenVisible key={perfume.name} delay={index * 0.1}>
                <div className="group cursor-pointer">
                  <div className="aspect-[3/4] bg-gradient-to-b from-gray-800 to-gray-700 rounded-2xl mb-6 overflow-hidden relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-24 h-36 bg-gradient-to-b from-gray-600 to-gray-700 rounded-xl shadow-2xl relative group-hover:scale-105 transition-transform duration-300">
                        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-4 h-6 bg-gold/80 rounded-t-full" />
                        <div className="absolute inset-x-4 top-8 bottom-4 bg-gradient-to-b from-orchid-400/30 to-orchid-600/30 rounded-lg" />
                      </div>
                    </div>
                    <div className="absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-gray-900/80 to-transparent" />
                  </div>
                  <p className="text-orchid-400 text-sm mb-1">{perfume.tagline}</p>
                  <h3 className="font-cormorant text-2xl font-medium text-white mb-1">{perfume.name}</h3>
                  <p className="text-gray-400 text-sm mb-2">{perfume.description}</p>
                  <p className="text-white font-medium">{perfume.price}</p>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/collection" className="btn-gold">
              Shop Collection
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-gradient-soft">
        <div className="container-custom">
          <SectionHeading
            subtitle="Testimonials"
            title="What They Say"
            description="Stories dari mereka yang sudah menemukan signature scent-nya"
          />

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <FadeInWhenVisible key={index} delay={index * 0.1}>
                <div className="bg-white rounded-2xl p-8 shadow-sm">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className="font-cormorant text-lg font-medium text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-gray-500 text-sm">{testimonial.title}</p>
                  </div>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      {/* Gift Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-orchid-50 to-cream rounded-3xl p-8 md:p-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <FadeInWhenVisible>
                <div>
                  <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm mb-6">
                    <Gift className="w-5 h-5 text-orchid-500" />
                    <span className="font-medium text-gray-700">Perfect Gift</span>
                  </div>
                  <h2 className="heading-lg mb-4">The Perfect Gift</h2>
                  <p className="body-lg mb-8">
                    Give the experience of creating a signature scent.
                    Hadiah yang personal, memorable, dan truly unique.
                  </p>
                  <Link to="/gift" className="btn-primary">
                    Gift a Workshop
                  </Link>
                </div>
              </FadeInWhenVisible>

              <FadeInWhenVisible delay={0.2}>
                <div className="relative">
                  <div className="aspect-square bg-white rounded-3xl shadow-xl p-8 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-32 h-32 mx-auto bg-gradient-to-br from-orchid-100 to-orchid-200 rounded-2xl flex items-center justify-center mb-4">
                        <Gift className="w-16 h-16 text-orchid-500" />
                      </div>
                      <p className="font-cormorant text-2xl text-gray-900">Scentory</p>
                      <p className="text-gray-500 text-sm">Gift Card</p>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: [0, 5, 0, -5, 0] }}
                    transition={{ duration: 5, repeat: Infinity }}
                    className="absolute -top-4 -right-4 bg-gold text-white px-4 py-2 rounded-full text-sm font-medium"
                  >
                    🎁 Special Gift
                  </motion.div>
                </div>
              </FadeInWhenVisible>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <SectionHeading
            subtitle="Follow Us"
            title="#MyScentory"
            description="Share your Scentory journey with us"
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((item) => (
              <FadeInWhenVisible key={item} delay={item * 0.05}>
                <a
                  href="https://instagram.com/scentory.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="aspect-square bg-gradient-to-br from-orchid-100 to-cream rounded-2xl overflow-hidden group relative"
                >
                  <div className="absolute inset-0 bg-orchid-500/0 group-hover:bg-orchid-500/20 transition-colors flex items-center justify-center">
                    <Instagram className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </a>
              </FadeInWhenVisible>
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href="https://instagram.com/scentory.id"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-orchid-500 font-medium hover:text-orchid-600 transition-colors"
            >
              <Instagram className="w-5 h-5" />
              @scentory.id
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orchid-500">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-cormorant text-3xl md:text-4xl lg:text-5xl font-light text-white mb-4">
              Ready to Create Your Signature Scent?
            </h2>
            <p className="text-orchid-100 text-lg mb-8 max-w-2xl mx-auto">
              Book your private workshop experience dan mulai journey untuk menemukan aroma yang uniquely yours.
            </p>
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-3 bg-white text-orchid-500 font-medium rounded-full hover:bg-cream transition-colors">
              Book Your Experience
            </Link>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  )
}

export default Home
