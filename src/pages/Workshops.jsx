import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Clock,
  Users,
  Check,
  Sparkles,
  Heart,
  UserPlus,
  GraduationCap,
  ArrowRight
} from 'lucide-react'
import PageTransition from '../components/ui/PageTransition'
import SectionHeading from '../components/ui/SectionHeading'
import FadeInWhenVisible from '../components/ui/FadeInWhenVisible'

const workshops = [
  {
    id: 'signature',
    title: 'Signature Scent Workshop',
    subtitle: 'Our Most Popular Experience',
    price: 'Rp 1.500.000',
    duration: '2 hours',
    groupSize: 'Private (1-2 people)',
    icon: Sparkles,
    featured: true,
    description: 'Private session untuk create 50ml personal fragrance. Sebuah journey untuk menemukan signature scent yang mencerminkan kepribadian Anda.',
    includes: [
      'Welcome refreshments',
      'Introduction to perfumery',
      'Scent profiling session',
      'Hands-on blending dengan 50+ notes',
      'Create your 50ml signature fragrance',
      'Personalized bottle dengan nama Anda',
      'Formula record (untuk reorder)',
      'Tote bag & care guide',
    ],
    timeline: [
      { time: '15 min', activity: 'Welcome & introduction' },
      { time: '30 min', activity: 'Scent discovery session' },
      { time: '15 min', activity: 'Your scent profile discussion' },
      { time: '45 min', activity: 'Blending & creation' },
      { time: '15 min', activity: 'Bottling & personalization' },
    ],
  },
  {
    id: 'couples',
    title: 'Couples Workshop',
    subtitle: 'Share the Experience',
    price: 'Rp 2.500.000',
    priceNote: 'for 2 people',
    duration: '2.5 hours',
    groupSize: '2 people',
    icon: Heart,
    description: 'Create matching atau complementary scents bersama partner Anda. Perfect untuk quality time yang bermakna dan memorable.',
    includes: [
      'Everything in Signature Scent x2',
      'Extended discovery session',
      'Create complementary scents',
      'Matching packaging',
      'Complimentary couple photo session',
    ],
    perfectFor: 'Date night, anniversary, engaged couples',
  },
  {
    id: 'group',
    title: 'Group Workshop',
    subtitle: 'Celebrate Together',
    price: 'Rp 1.200.000',
    priceNote: 'per person (min 4, max 8)',
    duration: '2.5 hours',
    groupSize: '4-8 people',
    icon: UserPlus,
    description: 'Experience fragrance creation bersama teman-teman Anda. Fun, interactive, dan memorable group activity.',
    includes: [
      'Group fragrance experience',
      'Each person creates 30ml perfume',
      'Guided group discovery session',
      'Personalized bottles',
      'Formula records',
    ],
    perfectFor: 'Birthday parties, bridal showers, team building',
  },
  {
    id: 'masterclass',
    title: 'Private Masterclass',
    subtitle: 'Deep Dive into Perfumery',
    price: 'Rp 3.500.000',
    duration: '3 hours',
    groupSize: 'Private (1-2 people)',
    icon: GraduationCap,
    description: 'Untuk Anda yang ingin lebih dalam memahami seni perfumery. A comprehensive journey into the world of fragrance.',
    includes: [
      'History & theory of fragrance',
      'Raw ingredient exploration',
      'Advanced blending techniques',
      'Create 2 custom fragrances',
      'Extended perfumer consultation',
      'Certificate of completion',
      'Premium packaging',
    ],
  },
]

function Workshops() {
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
              Our Workshops
            </p>
            <h1 className="heading-xl mb-6">
              Immersive Fragrance
              <br />
              <span className="text-gradient">Experiences</span>
            </h1>
            <p className="body-lg">
              Pilih workshop yang sesuai dengan kebutuhan Anda. Setiap experience dirancang untuk memberikan journey yang personal dan memorable.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Workshops Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-20">
            {workshops.map((workshop, index) => (
              <FadeInWhenVisible key={workshop.id}>
                <div className={`${workshop.featured ? 'bg-gradient-to-r from-orchid-50 to-cream' : 'bg-cream'} rounded-3xl overflow-hidden`}>
                  <div className="grid lg:grid-cols-2 gap-0">
                    {/* Image Side */}
                    <div className={`aspect-[4/3] lg:aspect-auto relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <div className="absolute inset-0 bg-gradient-to-br from-orchid-100 to-orchid-200 flex items-center justify-center">
                        <div className="text-center p-8">
                          <div className="w-24 h-24 mx-auto bg-white rounded-full flex items-center justify-center mb-6 shadow-lg">
                            <workshop.icon className="w-12 h-12 text-orchid-500" />
                          </div>
                          <p className="font-cormorant text-3xl text-gray-900 italic">
                            {workshop.subtitle}
                          </p>
                        </div>
                      </div>
                      {workshop.featured && (
                        <div className="absolute top-6 left-6">
                          <span className="bg-orchid-500 text-white text-xs font-medium px-4 py-2 rounded-full">
                            Most Popular
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Content Side */}
                    <div className="p-8 lg:p-12">
                      <h2 className="heading-lg mb-2">{workshop.title}</h2>
                      <p className="font-cormorant text-3xl text-orchid-500 font-medium mb-1">
                        {workshop.price}
                      </p>
                      {workshop.priceNote && (
                        <p className="text-gray-500 text-sm mb-4">{workshop.priceNote}</p>
                      )}

                      <div className="flex flex-wrap gap-4 mb-6">
                        <span className="inline-flex items-center gap-2 text-gray-600 text-sm">
                          <Clock className="w-4 h-4 text-orchid-400" />
                          {workshop.duration}
                        </span>
                        <span className="inline-flex items-center gap-2 text-gray-600 text-sm">
                          <Users className="w-4 h-4 text-orchid-400" />
                          {workshop.groupSize}
                        </span>
                      </div>

                      <p className="body-md mb-6">{workshop.description}</p>

                      {/* What's Included */}
                      <div className="mb-6">
                        <h4 className="font-cormorant text-xl font-medium mb-4">What's Included</h4>
                        <ul className="grid sm:grid-cols-2 gap-2">
                          {workshop.includes.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                              <Check className="w-4 h-4 text-orchid-500 mt-0.5 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Timeline for signature workshop */}
                      {workshop.timeline && (
                        <div className="mb-6">
                          <h4 className="font-cormorant text-xl font-medium mb-4">What to Expect</h4>
                          <div className="space-y-3">
                            {workshop.timeline.map((item, i) => (
                              <div key={i} className="flex items-center gap-4">
                                <span className="w-16 text-sm text-orchid-500 font-medium">{item.time}</span>
                                <span className="text-gray-600 text-sm">{item.activity}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Perfect For */}
                      {workshop.perfectFor && (
                        <div className="bg-white rounded-xl p-4 mb-6">
                          <p className="text-sm text-gray-500 mb-1">Perfect for</p>
                          <p className="text-gray-700 font-medium">{workshop.perfectFor}</p>
                        </div>
                      )}

                      <Link to="/contact" className="btn-primary">
                        Book This Workshop
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="section-padding bg-gradient-cream">
        <div className="container-custom">
          <SectionHeading
            subtitle="Ready to Book?"
            title="Book Your Experience"
            description="Hubungi kami untuk booking atau tanya lebih lanjut tentang workshops kami"
          />

          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
              <div className="text-center mb-8">
                <p className="body-lg">
                  Untuk booking dan informasi lebih lanjut, silakan hubungi kami melalui WhatsApp atau form di halaman Contact.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <a
                  href="https://wa.me/628123456789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary justify-center"
                >
                  WhatsApp Us
                </a>
                <Link to="/contact" className="btn-secondary justify-center">
                  Contact Form
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          <SectionHeading
            subtitle="FAQ"
            title="Frequently Asked Questions"
          />

          <div className="space-y-6">
            {[
              {
                q: 'Apakah saya perlu pengalaman sebelumnya?',
                a: 'Tidak perlu sama sekali! Workshop kami dirancang untuk semua level, dari beginner hingga yang sudah berpengalaman. Perfumer kami akan guide Anda sepanjang proses.',
              },
              {
                q: 'Berapa lama sebelumnya harus booking?',
                a: 'Kami recommend booking minimal 3-5 hari sebelumnya untuk memastikan slot tersedia. Untuk weekend, sebaiknya 1-2 minggu sebelumnya.',
              },
              {
                q: 'Apakah bisa reschedule?',
                a: 'Tentu! Anda bisa reschedule dengan menghubungi kami minimal 24 jam sebelum jadwal booking.',
              },
              {
                q: 'Apakah ada gift card?',
                a: 'Ada! Kami menyediakan gift card untuk semua jenis workshop. Perfect untuk hadiah ulang tahun, anniversary, atau special occasions.',
              },
            ].map((faq, index) => (
              <FadeInWhenVisible key={index} delay={index * 0.05}>
                <div className="bg-cream rounded-2xl p-6">
                  <h3 className="font-cormorant text-xl font-medium text-gray-900 mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  )
}

export default Workshops
