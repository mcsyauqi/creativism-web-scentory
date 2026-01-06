import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Leaf, Heart, Globe, Recycle, MapPin, ArrowRight } from 'lucide-react'
import PageTransition from '../components/ui/PageTransition'
import SectionHeading from '../components/ui/SectionHeading'
import FadeInWhenVisible from '../components/ui/FadeInWhenVisible'

const philosophies = [
  {
    icon: Heart,
    title: 'Personal, Not Mass',
    description: 'Setiap scent adalah unique creation. Kami percaya fragrance adalah bentuk ekspresi diri yang paling intimate.',
  },
  {
    icon: Globe,
    title: 'Quality Ingredients',
    description: 'Premium materials dari seluruh dunia. Kami hanya menggunakan bahan-bahan berkualitas tinggi untuk hasil terbaik.',
  },
  {
    icon: Leaf,
    title: 'Indonesian Soul',
    description: 'Celebrating local ingredients dan stories. Kami bangga mengangkat kekayaan aroma nusantara ke dunia.',
  },
  {
    icon: Recycle,
    title: 'Sustainable',
    description: 'Eco-conscious packaging dan practices. Kami berkomitmen untuk menjaga kelestarian lingkungan.',
  },
]

function About() {
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
              Our Story
            </p>
            <h1 className="heading-xl mb-6">
              The Scentory
              <br />
              <span className="text-gradient">Story</span>
            </h1>
            <p className="body-lg">
              Di balik setiap aroma, ada cerita. Di balik Scentory, ada passion untuk membuat perfumery lebih personal dan accessible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeInWhenVisible>
              <div className="relative">
                <div className="aspect-[4/5] bg-gradient-to-br from-orchid-100 to-cream rounded-3xl overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-32 h-32 mx-auto bg-white rounded-full shadow-lg flex items-center justify-center mb-6">
                        <span className="font-cormorant text-5xl text-orchid-500">S</span>
                      </div>
                      <p className="font-cormorant text-2xl text-gray-700 italic">Est. 2020</p>
                    </div>
                  </div>
                </div>
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl"
                >
                  <p className="font-cormorant text-3xl text-orchid-500">500+</p>
                  <p className="text-gray-600 text-sm">Signature Scents Created</p>
                </motion.div>
              </div>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.2}>
              <div>
                <h2 className="heading-lg mb-6">Our Beginning</h2>
                <div className="space-y-4 body-md">
                  <p>
                    Scentory lahir dari kepercayaan bahwa fragrance adalah bentuk ekspresi diri yang paling intimate. Bukan sekadar wangi, tapi sebuah cerita yang melekat di kulit Anda.
                  </p>
                  <p>
                    Founded by Maya Andini, a perfumer trained in Grasse, France - the perfume capital of the world, Scentory membawa art of perfumery ke Jakarta dengan approach yang personal dan accessible.
                  </p>
                  <p>
                    Kami percaya bahwa everyone deserves a signature scent - bukan yang dipilih dari rak toko, tapi yang diciptakan khusus untuk mencerminkan kepribadian unik Anda.
                  </p>
                  <p className="font-cormorant text-xl text-orchid-500 italic pt-4">
                    "Your scent should tell your story, not someone else's."
                  </p>
                </div>
              </div>
            </FadeInWhenVisible>
          </div>
        </div>
      </section>

      {/* The Founder */}
      <section className="section-padding bg-gradient-cream">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeInWhenVisible className="lg:order-2">
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-orchid-200 to-orchid-100 rounded-3xl overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-48 h-48 bg-white rounded-full shadow-xl flex items-center justify-center">
                      <div className="text-center">
                        <span className="font-cormorant text-6xl text-orchid-400">M</span>
                        <p className="font-cormorant text-sm text-gray-500 mt-2">Maya Andini</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -left-4 bg-gold text-white px-4 py-2 rounded-full text-sm font-medium">
                  Founder & Perfumer
                </div>
              </div>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.2} className="lg:order-1">
              <div>
                <p className="font-lato text-sm tracking-[0.2em] text-orchid-500 uppercase mb-4">
                  The Perfumer
                </p>
                <h2 className="heading-lg mb-6">Maya Andini</h2>
                <p className="font-cormorant text-xl text-gray-600 italic mb-6">
                  Founder & Head Perfumer
                </p>
                <div className="space-y-4 body-md mb-8">
                  <p>
                    Maya memulai journey-nya di dunia fragrance sejak kecil, terinspirasi oleh nenek yang selalu membuat ramuan wangi dari bunga-bunga di kebun.
                  </p>
                  <p>
                    Setelah menyelesaikan pendidikan formal di Grasse, Prancis, dan bekerja dengan beberapa perfume houses ternama di Eropa, Maya memutuskan untuk kembali ke Indonesia dan mendirikan Scentory.
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orchid-500 rounded-full" />
                    <span className="text-gray-700">Trained in Grasse, France</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orchid-500 rounded-full" />
                    <span className="text-gray-700">10+ years in fragrance industry</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orchid-500 rounded-full" />
                    <span className="text-gray-700">Worked with renowned perfume houses</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orchid-500 rounded-full" />
                    <span className="text-gray-700">Passionate about Indonesian ingredients</span>
                  </div>
                </div>
              </div>
            </FadeInWhenVisible>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            subtitle="Our Values"
            title="Our Philosophy"
            description="Prinsip-prinsip yang memandu setiap langkah kami"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {philosophies.map((item, index) => (
              <FadeInWhenVisible key={item.title} delay={index * 0.1}>
                <div className="text-center p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orchid-50 mb-6">
                    <item.icon className="w-7 h-7 text-orchid-500" />
                  </div>
                  <h3 className="heading-sm mb-3">{item.title}</h3>
                  <p className="body-md">{item.description}</p>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      {/* The Studio */}
      <section className="section-padding bg-gradient-cream">
        <div className="container-custom">
          <SectionHeading
            subtitle="Visit Us"
            title="The Studio"
            description="Temukan kami di jantung Jakarta Selatan"
          />

          <div className="grid lg:grid-cols-2 gap-12">
            <FadeInWhenVisible>
              <div className="space-y-6">
                <div className="bg-white rounded-2xl overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-orchid-100 to-cream flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-orchid-500 mx-auto mb-4" />
                      <p className="font-cormorant text-2xl text-gray-700">Our Cozy Studio</p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-square bg-gradient-to-br from-cream to-orchid-50 rounded-2xl flex items-center justify-center">
                    <p className="font-cormorant text-lg text-gray-600 text-center px-4">Intimate Workshop Space</p>
                  </div>
                  <div className="aspect-square bg-gradient-to-br from-orchid-50 to-cream rounded-2xl flex items-center justify-center">
                    <p className="font-cormorant text-lg text-gray-600 text-center px-4">Fragrance Library</p>
                  </div>
                </div>
              </div>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.2}>
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm h-full">
                <h3 className="heading-md mb-6">The Studio @ Senopati</h3>
                <div className="space-y-6">
                  <div>
                    <p className="text-gray-500 text-sm mb-1">Address</p>
                    <p className="text-gray-800">
                      Jl. Senopati No. 88<br />
                      Jakarta Selatan 12110
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm mb-1">Hours</p>
                    <p className="text-gray-800">
                      Tuesday - Sunday: 10:00 - 19:00<br />
                      <span className="text-gray-500">Closed Monday</span>
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm mb-1">Contact</p>
                    <p className="text-gray-800">
                      +62 812-SCENT-88<br />
                      hello@scentory.id
                    </p>
                  </div>
                  <div className="pt-4">
                    <p className="text-gray-600 text-sm mb-4">
                      Studio kami dirancang untuk memberikan pengalaman yang intimate dan personal. Dengan kapasitas terbatas, setiap workshop terasa eksklusif dan spesial.
                    </p>
                    <Link to="/contact" className="btn-primary">
                      Book a Visit
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </FadeInWhenVisible>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-orchid-500">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-cormorant text-3xl md:text-4xl lg:text-5xl font-light text-white mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-orchid-100 text-lg mb-8 max-w-2xl mx-auto">
              Temukan signature scent Anda bersama kami. Book workshop atau kunjungi studio kami.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/workshops"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-orchid-500 font-medium rounded-full hover:bg-cream transition-colors"
              >
                Explore Workshops
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-medium rounded-full hover:bg-white/10 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  )
}

export default About
