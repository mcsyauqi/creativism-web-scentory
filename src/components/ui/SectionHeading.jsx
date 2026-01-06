import { motion } from 'framer-motion'

function SectionHeading({ subtitle, title, description, centered = true, light = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      className={`mb-12 md:mb-16 ${centered ? 'text-center' : ''}`}
    >
      {subtitle && (
        <p className={`font-lato text-sm tracking-[0.2em] uppercase mb-3 ${
          light ? 'text-orchid-300' : 'text-orchid-500'
        }`}>
          {subtitle}
        </p>
      )}
      <h2 className={`heading-lg mb-4 ${light ? 'text-white' : 'text-gray-900'}`}>
        {title}
      </h2>
      {description && (
        <p className={`body-lg max-w-2xl ${centered ? 'mx-auto' : ''} ${
          light ? 'text-gray-300' : 'text-gray-600'
        }`}>
          {description}
        </p>
      )}
    </motion.div>
  )
}

export default SectionHeading
