import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import {
  ArrowLeftIcon,
  UserIcon,
  FileTextIcon,
  SmartphoneIcon,
  IdCardIcon,
  ClipboardListIcon,
} from 'lucide-react'

// Custom image component for PNG icons
const ImageIcon = ({ src, alt }: { src: string; alt: string }) => (
  <img src={src} alt={alt} className="w-8 h-8 object-contain" />
)

// Inline ServiceCard component (no external import needed)
const ServiceCard = ({ service, index }: { service: any; index: number }) => {
  const renderIcon = () => {
    if (service.isImage) {
      return <img src={service.iconSrc} alt={service.title} className="w-25 h-25 object-contain" />
    }
    if (service.icon) {
      const IconComponent = service.icon
      return <IconComponent className="w-10 h-10" />
    }
    return null
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group"
    >
      <div className="w-full p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-1">
        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${service.color} text-white shadow-lg p-2`}>
          {renderIcon()}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {service.title}
        </h3>
        <p className="text-gray-600 leading-relaxed">{service.description}</p>
      </div>
    </motion.div>
  )
}


// User info
const userInfo = {
  name: 'John Anderson',
  authorizedStaff: 'Ms. Sarah Martinez',
  passId: '2509678',
}

// Services data
const services = [
  {
    id: 1,
    title: 'NBI Clearance',
    description: 'Apply for NBI clearance certificate',
    isImage: true,        
    iconSrc: '/NBI-CLEARANCE.png', 
    color: 'bg-blue-100',
  },
  {
    id: 2,
    title: 'PSA Appointment',
    description: 'Schedule PSA document request',
    icon: FileTextIcon,
    color: 'bg-green-500',
  },
  {
    id: 3,
    title: 'SIM Registration',
    description: 'Register your SIM card',
    icon: SmartphoneIcon,
    color: 'bg-purple-500',
  },
  {
    id: 4,
    title: "Passport Application",
    description: "Apply or renew your passport",
    icon: IdCardIcon,
    color: 'bg-orange-500',
  },
  {
    id: 5,
    title: 'PDS Creation',
    description: 'Create Personal Data Sheet',
    icon: ClipboardListIcon,
    color: 'bg-teal-500',
  },
]

export function Services() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen w-screen bg-gray-100 flex flex-col">
      
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white border-b border-gray-200 py-4 px-6"
      >
        <div className="container mx-auto">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors"
          >
            <ArrowLeftIcon className="w-5 h-5" />
            <span className="text-base font-medium">Back</span>
          </button>
        </div>
      </motion.header>

      {/* Main Layout */}
      <div className="flex-1 grid lg:grid-cols-[380px,1fr] grid-cols-1 gap-0 overflow-hidden">
        {/* Left Sidebar - User Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white border-r border-gray-100 p-10 flex flex-col items-center overflow-y-auto"
        >
          <div className="mb-10 text-center">
            <div className="w-42 h-30 mx-auto mb-4">
              <img src="/valace-logo.png" alt="ValACE Logo" className="w-full h-full object-contain" />
            </div>
          </div>

          <div className="w-56 h-56 rounded-full bg-blue-50 flex items-center justify-center mb-6">
            <UserIcon className="w-28 h-28 text-blue-300 stroke-[1.5]" />
          </div>

          <p className="text-xl font-semibold text-blue-600 text-center">
            ValACE Pass ID: {userInfo.passId}
          </p>
        </motion.div>

        {/* Right - Services */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 lg:p-12 overflow-y-auto"
        >
          <div className="text-center mb-12">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Welcome Back, {userInfo.name.split(' ')[0]}!
            </h1>
            <p className="text-lg text-gray-600 max-w-md mx-auto">
              Please select a service to continue
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>

          <div className="mt-12 p-6 bg-green-50 border border-green-200 rounded-xl text-center">
            <p className="text-sm text-gray-700">
              <strong className="text-gray-900">Need assistance?</strong> Contact{' '}
              <span className="font-semibold text-blue-600">{userInfo.authorizedStaff}</span>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
