import { Link } from 'react-router-dom'
import { Instagram, Mail, Phone, MapPin } from 'lucide-react'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="font-cormorant text-3xl font-semibold text-white">
                Scentory
              </span>
            </Link>
            <p className="font-cormorant text-lg text-gray-400 italic mb-6">
              Your Scent. Your Story.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Create your signature fragrance dalam private workshop dengan perfumer kami. Sebuah pengalaman yang menghasilkan parfum yang unik hanya untuk Anda.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-cormorant text-xl font-medium mb-6">Explore</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/workshops"
                  className="text-gray-400 hover:text-orchid-400 transition-colors text-sm"
                >
                  Workshops
                </Link>
              </li>
              <li>
                <Link
                  to="/collection"
                  className="text-gray-400 hover:text-orchid-400 transition-colors text-sm"
                >
                  Collection
                </Link>
              </li>
              <li>
                <Link
                  to="/gift"
                  className="text-gray-400 hover:text-orchid-400 transition-colors text-sm"
                >
                  Gift an Experience
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-orchid-400 transition-colors text-sm"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-orchid-400 transition-colors text-sm"
                >
                  Book Now
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-cormorant text-xl font-medium mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-orchid-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  Jl. Senopati No. 88<br />
                  Jakarta Selatan 12110
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-orchid-400 flex-shrink-0" />
                <a
                  href="https://wa.me/628123456789"
                  className="text-gray-400 hover:text-orchid-400 transition-colors text-sm"
                >
                  +62 812-SCENT-88
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-orchid-400 flex-shrink-0" />
                <a
                  href="mailto:hello@scentory.id"
                  className="text-gray-400 hover:text-orchid-400 transition-colors text-sm"
                >
                  hello@scentory.id
                </a>
              </li>
            </ul>
          </div>

          {/* Hours & Social */}
          <div>
            <h4 className="font-cormorant text-xl font-medium mb-6">Visit Us</h4>
            <p className="text-gray-400 text-sm mb-2">Tuesday - Sunday</p>
            <p className="text-white text-sm mb-4">10:00 - 19:00</p>
            <p className="text-gray-500 text-sm mb-6">Closed Monday</p>

            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com/scentory.id"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-orchid-500 transition-colors"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Scentory. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Created by{' '}
            <a
              href="https://creativism.id"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orchid-400 hover:text-orchid-300 transition-colors"
            >
              Creativism
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
