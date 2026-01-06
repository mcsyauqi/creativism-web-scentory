import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ShoppingBag, Droplets, ArrowRight } from 'lucide-react'
import PageTransition from '../components/ui/PageTransition'
import SectionHeading from '../components/ui/SectionHeading'
import FadeInWhenVisible from '../components/ui/FadeInWhenVisible'

const perfumes = [
  {
    id: 'pagi',
    name: 'PAGI',
    tagline: 'Fresh Floral',
    price: 'Rp 850.000',
    size: '50ml',
    story: 'Inspired by mornings in a Javanese garden. Kesegaran embun pagi berpadu dengan kelembutan bunga melati yang baru mekar.',
    notes: {
      top: ['Bergamot', 'Petitgrain', 'Lemon'],
      heart: ['Jasmine', 'White Tea', 'Neroli'],
      base: ['White Musk', 'Cedar', 'Skin accord'],
    },
    color: 'from-yellow-100 to-green-100',
    accent: 'text-green-600',
  },
  {
    id: 'malam',
    name: 'MALAM',
    tagline: 'Oriental',
    price: 'Rp 950.000',
    size: '50ml',
    story: 'The mystery of tropical nights. Kemewahan malam Jakarta berpadu dengan kedalaman rempah nusantara.',
    notes: {
      top: ['Saffron', 'Pink Pepper'],
      heart: ['Rose', 'Oud', 'Incense'],
      base: ['Amber', 'Sandalwood', 'Vanilla'],
    },
    color: 'from-purple-100 to-orchid-100',
    accent: 'text-purple-600',
  },
  {
    id: 'pantai',
    name: 'PANTAI',
    tagline: 'Aquatic Fresh',
    price: 'Rp 800.000',
    size: '50ml',
    story: 'Inspired by Indonesian coastal escapes. Hembusan angin laut dan kehangatan pasir pantai tropis.',
    notes: {
      top: ['Sea Salt', 'Bergamot'],
      heart: ['Coconut', 'Frangipani'],
      base: ['Driftwood', 'White Musk'],
    },
    color: 'from-cyan-100 to-blue-100',
    accent: 'text-cyan-600',
  },
  {
    id: 'hutan',
    name: 'HUTAN',
    tagline: 'Woody Aromatic',
    price: 'Rp 900.000',
    size: '50ml',
    story: 'The depth of Kalimantan rainforests. Kedalaman hutan hujan tropis dengan kekayaan aromanya.',
    notes: {
      top: ['Cardamom', 'Ginger'],
      heart: ['Vetiver', 'Patchouli'],
      base: ['Sandalwood', 'Moss', 'Earth'],
    },
    color: 'from-amber-100 to-green-100',
    accent: 'text-amber-700',
  },
]

function Collection() {
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
              Ready-to-Wear
            </p>
            <h1 className="heading-xl mb-6">
              Scentory
              <br />
              <span className="text-gradient">Collection</span>
            </h1>
            <p className="body-lg">
              Handcrafted perfumes inspired by Indonesian stories. Setiap aroma menceritakan kisah unik dari berbagai sudut nusantara.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-24">
            {perfumes.map((perfume, index) => (
              <FadeInWhenVisible key={perfume.id}>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Image */}
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className={`aspect-square bg-gradient-to-br ${perfume.color} rounded-3xl relative overflow-hidden`}>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                          className="relative"
                        >
                          {/* Perfume Bottle Illustration */}
                          <div className="w-40 h-56 bg-gradient-to-b from-white/90 to-white/70 rounded-2xl shadow-2xl relative backdrop-blur-sm">
                            {/* Cap */}
                            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-10 h-8 bg-gradient-to-b from-gold to-amber-600 rounded-t-lg" />
                            {/* Neck */}
                            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-6 h-4 bg-gradient-to-b from-gray-200 to-gray-300" />
                            {/* Body */}
                            <div className="absolute inset-x-4 top-8 bottom-4 bg-gradient-to-b from-orchid-200/60 to-orchid-400/40 rounded-xl" />
                            {/* Label */}
                            <div className="absolute inset-x-6 top-1/2 -translate-y-1/2 text-center">
                              <p className="font-cormorant text-xs text-gray-500 tracking-widest">SCENTORY</p>
                              <p className="font-cormorant text-lg font-semibold text-gray-800">{perfume.name}</p>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                      {/* Decorative elements */}
                      <div className="absolute top-8 right-8 w-20 h-20 bg-white/30 rounded-full blur-2xl" />
                      <div className="absolute bottom-8 left-8 w-32 h-32 bg-white/20 rounded-full blur-3xl" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <span className={`inline-block text-sm font-medium ${perfume.accent} mb-2`}>
                      {perfume.tagline}
                    </span>
                    <h2 className="font-cormorant text-5xl md:text-6xl font-light text-gray-900 mb-4">
                      {perfume.name}
                    </h2>
                    <p className="font-cormorant text-3xl text-orchid-500 font-medium mb-2">
                      {perfume.price}
                    </p>
                    <p className="text-gray-500 text-sm mb-6">{perfume.size}</p>

                    <p className="body-lg mb-8 italic">"{perfume.story}"</p>

                    {/* Notes */}
                    <div className="space-y-4 mb-8">
                      <div className="flex items-start gap-4">
                        <span className="w-16 text-sm font-medium text-gray-500 flex-shrink-0">Top</span>
                        <div className="flex flex-wrap gap-2">
                          {perfume.notes.top.map((note) => (
                            <span key={note} className="px-3 py-1 bg-cream rounded-full text-sm text-gray-700">
                              {note}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <span className="w-16 text-sm font-medium text-gray-500 flex-shrink-0">Heart</span>
                        <div className="flex flex-wrap gap-2">
                          {perfume.notes.heart.map((note) => (
                            <span key={note} className="px-3 py-1 bg-cream rounded-full text-sm text-gray-700">
                              {note}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <span className="w-16 text-sm font-medium text-gray-500 flex-shrink-0">Base</span>
                        <div className="flex flex-wrap gap-2">
                          {perfume.notes.base.map((note) => (
                            <span key={note} className="px-3 py-1 bg-cream rounded-full text-sm text-gray-700">
                              {note}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <a
                      href="https://wa.me/628123456789"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      <ShoppingBag className="w-4 h-4 mr-2" />
                      Order via WhatsApp
                    </a>
                  </div>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      {/* Discovery Set */}
      <section className="section-padding bg-gradient-cream">
        <div className="container-custom">
          <div className="bg-white rounded-3xl p-8 md:p-16 shadow-lg">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <FadeInWhenVisible>
                <div className="text-center md:text-left">
                  <div className="inline-flex items-center gap-2 bg-orchid-50 px-4 py-2 rounded-full mb-6">
                    <Droplets className="w-5 h-5 text-orchid-500" />
                    <span className="text-sm font-medium text-orchid-600">Best Value</span>
                  </div>
                  <h2 className="heading-lg mb-4">Can't Decide?</h2>
                  <h3 className="font-cormorant text-2xl text-gray-600 mb-4">Try Our Discovery Set</h3>
                  <p className="body-md mb-4">
                    Sample semua empat signature scents kami sebelum memilih favorit Anda. Set berisi 4 x 5ml travel-size bottles.
                  </p>
                  <p className="font-cormorant text-3xl text-orchid-500 font-medium mb-2">
                    Rp 350.000
                  </p>
                  <p className="text-gray-500 text-sm mb-8">
                    Dapat di-redeem untuk pembelian full bottle
                  </p>
                  <a
                    href="https://wa.me/628123456789"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    Order Discovery Set
                  </a>
                </div>
              </FadeInWhenVisible>

              <FadeInWhenVisible delay={0.2}>
                <div className="relative">
                  <div className="aspect-square bg-gradient-to-br from-orchid-50 to-cream rounded-3xl flex items-center justify-center">
                    <div className="flex gap-4">
                      {['P', 'M', 'P', 'H'].map((letter, i) => (
                        <motion.div
                          key={i}
                          initial={{ y: 0 }}
                          animate={{ y: [0, -10, 0] }}
                          transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
                          className="w-16 h-24 bg-white rounded-xl shadow-lg flex items-center justify-center"
                        >
                          <span className="font-cormorant text-2xl text-orchid-500">{letter}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-gold text-white px-4 py-2 rounded-full text-sm font-medium">
                    4 x 5ml
                  </div>
                </div>
              </FadeInWhenVisible>
            </div>
          </div>
        </div>
      </section>

      {/* Create Your Own CTA */}
      <section className="py-20 bg-orchid-500">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-cormorant text-3xl md:text-4xl lg:text-5xl font-light text-white mb-4">
              Want Something Truly Unique?
            </h2>
            <p className="text-orchid-100 text-lg mb-8 max-w-2xl mx-auto">
              Create your own signature scent dalam workshop kami. Sebuah fragrance yang dibuat khusus untuk Anda.
            </p>
            <Link
              to="/workshops"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-orchid-500 font-medium rounded-full hover:bg-cream transition-colors"
            >
              Explore Workshops
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  )
}

export default Collection
