import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Gift, Heart, Users, Building, Check, ArrowRight, Sparkles } from 'lucide-react'
import PageTransition from '../components/ui/PageTransition'
import SectionHeading from '../components/ui/SectionHeading'
import FadeInWhenVisible from '../components/ui/FadeInWhenVisible'

const giftOptions = [
  {
    id: 'signature',
    title: 'Signature Scent Workshop',
    price: 'Rp 1.500.000',
    validity: '6 months',
    description: 'Gift card untuk private workshop dimana penerima bisa create 50ml signature fragrance mereka sendiri.',
    includes: [
      '2-hour private workshop',
      '50ml custom perfume',
      'Personalized bottle',
      'Formula record',
    ],
    icon: Sparkles,
    popular: true,
  },
  {
    id: 'couples',
    title: 'Couples Workshop',
    price: 'Rp 2.500.000',
    validity: '6 months',
    description: 'Perfect gift untuk pasangan. Create matching atau complementary scents bersama.',
    includes: [
      '2.5-hour couples session',
      '2 x 50ml custom perfumes',
      'Matching packaging',
      'Couple photo session',
    ],
    icon: Heart,
  },
  {
    id: 'discovery-combo',
    title: 'Discovery Set + Workshop Credit',
    price: 'Rp 1.800.000',
    validity: '6 months',
    description: 'Kombinasi Discovery Set dan workshop credit. Penerima bisa explore collection dulu sebelum create signature scent.',
    includes: [
      'Discovery Set (4 x 5ml)',
      'Rp 1.500.000 workshop credit',
      'Premium gift packaging',
    ],
    icon: Gift,
  },
]

const corporateServices = [
  {
    title: 'Custom Fragrance for Your Brand',
    description: 'Ciptakan signature scent eksklusif untuk brand Anda. Perfect untuk hotel, spa, retail, atau corporate offices.',
  },
  {
    title: 'Team Building Workshops',
    description: 'Unique team building experience yang memorable. Cocok untuk corporate events, departmental bonding, atau client appreciation.',
  },
  {
    title: 'Bulk Gift Cards',
    description: 'Special pricing untuk pembelian gift cards dalam jumlah besar. Ideal untuk client gifts, employee rewards, atau event giveaways.',
  },
]

function GiftPage() {
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
              Gift an Experience
            </p>
            <h1 className="heading-xl mb-6">
              The Most
              <br />
              <span className="text-gradient">Thoughtful Gift</span>
            </h1>
            <p className="body-lg">
              Berikan pengalaman membuat signature scent. Hadiah yang personal, memorable, dan truly unique untuk orang tersayang.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gift Options */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            subtitle="Gift Cards"
            title="Choose Your Gift"
            description="Pilih gift card yang sesuai untuk orang tersayang"
          />

          <div className="grid md:grid-cols-3 gap-8">
            {giftOptions.map((gift, index) => (
              <FadeInWhenVisible key={gift.id} delay={index * 0.1}>
                <div className={`card-luxury p-8 h-full flex flex-col ${gift.popular ? 'ring-2 ring-orchid-500' : ''}`}>
                  {gift.popular && (
                    <span className="inline-block bg-orchid-500 text-white text-xs font-medium px-3 py-1 rounded-full mb-4 self-start">
                      Most Popular
                    </span>
                  )}
                  <div className="w-14 h-14 bg-orchid-50 rounded-full flex items-center justify-center mb-6">
                    <gift.icon className="w-7 h-7 text-orchid-500" />
                  </div>
                  <h3 className="heading-md mb-2">{gift.title}</h3>
                  <p className="font-cormorant text-3xl text-orchid-500 font-medium mb-1">
                    {gift.price}
                  </p>
                  <p className="text-gray-500 text-sm mb-4">Valid for {gift.validity}</p>
                  <p className="body-md mb-6">{gift.description}</p>

                  <div className="mb-6 flex-grow">
                    <p className="text-sm font-medium text-gray-700 mb-3">Includes:</p>
                    <ul className="space-y-2">
                      {gift.includes.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                          <Check className="w-4 h-4 text-orchid-500 mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href="https://wa.me/628123456789"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary justify-center mt-auto"
                  >
                    Purchase Gift Card
                  </a>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      {/* Gift Packaging */}
      <section className="section-padding bg-gradient-cream">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeInWhenVisible>
              <div>
                <p className="font-lato text-sm tracking-[0.2em] text-orchid-500 uppercase mb-4">
                  Premium Packaging
                </p>
                <h2 className="heading-lg mb-6">Beautifully Packaged for Gifting</h2>
                <p className="body-lg mb-6">
                  Setiap gift card datang dalam kemasan premium yang siap diberikan. Dengan sentuhan personal, hadiah Anda akan terasa lebih istimewa.
                </p>
                <ul className="space-y-4">
                  {[
                    'Elegant gift box dengan ribbon',
                    'Personalized message card',
                    'Beautifully designed gift certificate',
                    'Optional handwritten note',
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700">
                      <div className="w-2 h-2 bg-gold rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.2}>
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-orchid-100 to-cream rounded-3xl p-12 flex items-center justify-center">
                  <motion.div
                    animate={{ rotate: [0, 2, 0, -2, 0] }}
                    transition={{ duration: 6, repeat: Infinity }}
                    className="w-full max-w-xs"
                  >
                    <div className="bg-white rounded-2xl shadow-2xl p-8 text-center">
                      <div className="w-20 h-20 mx-auto bg-gradient-to-br from-orchid-100 to-orchid-200 rounded-xl flex items-center justify-center mb-4">
                        <Gift className="w-10 h-10 text-orchid-500" />
                      </div>
                      <p className="font-cormorant text-2xl text-gray-900 mb-1">Scentory</p>
                      <p className="text-gray-500 text-sm mb-4">Gift Certificate</p>
                      <div className="h-px bg-gradient-to-r from-transparent via-orchid-200 to-transparent" />
                      <p className="font-cormorant text-lg text-gray-600 mt-4 italic">
                        "Create Your Signature Scent"
                      </p>
                    </div>
                  </motion.div>
                </div>
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-4 -right-4 bg-gold text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2"
                >
                  <Gift className="w-4 h-4" />
                  Gift Ready
                </motion.div>
              </div>
            </FadeInWhenVisible>
          </div>
        </div>
      </section>

      {/* Occasions */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            subtitle="Perfect For"
            title="For Every Occasion"
            description="Hadiah yang cocok untuk berbagai momen spesial"
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Birthday', emoji: '🎂' },
              { name: 'Anniversary', emoji: '💝' },
              { name: 'Wedding Gift', emoji: '💒' },
              { name: "Valentine's Day", emoji: '💕' },
              { name: "Mother's Day", emoji: '🌸' },
              { name: 'Graduation', emoji: '🎓' },
              { name: 'Thank You', emoji: '🙏' },
              { name: 'Just Because', emoji: '✨' },
            ].map((occasion, index) => (
              <FadeInWhenVisible key={occasion.name} delay={index * 0.05}>
                <div className="bg-cream rounded-2xl p-6 text-center hover:shadow-md transition-shadow cursor-pointer">
                  <span className="text-4xl mb-3 block">{occasion.emoji}</span>
                  <p className="font-cormorant text-lg text-gray-800">{occasion.name}</p>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Gifts */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeInWhenVisible>
              <div>
                <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6">
                  <Building className="w-5 h-5 text-gold" />
                  <span className="text-sm font-medium">For Businesses</span>
                </div>
                <h2 className="font-cormorant text-4xl md:text-5xl font-light text-white mb-6">
                  Corporate Gifts & Services
                </h2>
                <p className="text-gray-300 text-lg mb-8">
                  Bespoke corporate gifting solutions untuk brand Anda. Dari custom fragrance development hingga team building workshops.
                </p>
                <Link
                  to="/contact"
                  className="btn-gold inline-flex items-center"
                >
                  Inquire for Corporate
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.2}>
              <div className="space-y-6">
                {corporateServices.map((service, index) => (
                  <div key={index} className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm">
                    <h3 className="font-cormorant text-xl font-medium text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{service.description}</p>
                  </div>
                ))}
              </div>
            </FadeInWhenVisible>
          </div>
        </div>
      </section>

      {/* How to Purchase */}
      <section className="section-padding bg-gradient-soft">
        <div className="container-custom">
          <SectionHeading
            subtitle="Easy Process"
            title="How to Purchase"
            description="Proses mudah untuk memberikan hadiah istimewa"
          />

          <div className="max-w-3xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: '01',
                  title: 'Choose',
                  description: 'Pilih gift card yang sesuai dengan budget dan kebutuhan',
                },
                {
                  step: '02',
                  title: 'Order',
                  description: 'Hubungi kami via WhatsApp atau form untuk pemesanan',
                },
                {
                  step: '03',
                  title: 'Gift',
                  description: 'Terima gift card dalam kemasan cantik siap diberikan',
                },
              ].map((item, index) => (
                <FadeInWhenVisible key={item.step} delay={index * 0.1}>
                  <div className="text-center">
                    <p className="font-cormorant text-5xl font-light text-orchid-200 mb-4">
                      {item.step}
                    </p>
                    <h3 className="heading-md mb-2">{item.title}</h3>
                    <p className="body-md">{item.description}</p>
                  </div>
                </FadeInWhenVisible>
              ))}
            </div>

            <FadeInWhenVisible delay={0.3}>
              <div className="text-center mt-12">
                <a
                  href="https://wa.me/628123456789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Purchase via WhatsApp
                </a>
              </div>
            </FadeInWhenVisible>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}

export default GiftPage
