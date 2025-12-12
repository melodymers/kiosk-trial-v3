import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import {
  ArrowLeftIcon,
  UserIcon,
  CakeIcon,
  UserCircleIcon,
  MapPinIcon,
  ShieldCheckIcon,
  MailIcon,
} from 'lucide-react'
export function ReviewInfoPage() {
  const navigate = useNavigate()
  const userInfo = {
    name: 'John Anderson',
    age: '39 years old',
    gender: 'Male',
    email: 'john.anderson@email.com',
    address: '123 Main Street, Suite 100, New York, NY 10001',
    authorizedStaff: 'Ms. Sarah Martinez',
    passId: '2509678',
  }
  const handlePrint = () => {
    window.print()
  }
  return (
    <div className="min-h-screen w-full bg-gray-50">
      {/* Header */}
      <motion.header
        initial={{
          opacity: 0,
          y: -20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
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

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
          }}
          className="max-w-6xl mx-auto bg-white rounded-lg shadow-sm overflow-hidden"
        >
          <div className="grid md:grid-cols-[320px,1fr] gap-0">
            {/* Left Sidebar */}
            <motion.div
              initial={{
                opacity: 0,
                x: -20,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.5,
                delay: 0.2,
              }}
              className="bg-white p-8 flex flex-col items-center border-r border-gray-100"
            >
              {/* Logo */}
              <div className="mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-500 mb-1">
                    GOV
                  </div>
                  <div className="text-xl font-bold text-blue-500">
                    SERVICES
                  </div>
                  <div className="flex gap-1 justify-center mt-2">
                    <div className="w-8 h-1 bg-gradient-to-r from-purple-400 to-blue-500 rounded"></div>
                    <div className="w-8 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded"></div>
                  </div>
                </div>
              </div>

              {/* Avatar */}
              <motion.div
                initial={{
                  scale: 0,
                }}
                animate={{
                  scale: 1,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.4,
                  type: 'spring',
                }}
                className="w-48 h-48 rounded-full bg-blue-50 flex items-center justify-center mb-6"
              >
                <UserIcon className="w-24 h-24 text-blue-300 stroke-[1.5]" />
              </motion.div>

              {/* Pass ID */}
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  delay: 0.6,
                }}
                className="text-center"
              >
                <p className="text-lg font-semibold text-blue-600">
                  ValACE Pass ID: {userInfo.passId}
                </p>
              </motion.div>
            </motion.div>

            {/* Right Content */}
            <div className="p-8 md:p-12">
              <div className="space-y-6">
                {/* Full Name */}
                <motion.div
                  initial={{
                    opacity: 0,
                    x: 20,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: 0.3,
                  }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <UserIcon className="w-5 h-5 text-blue-500" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-500 mb-1">Full Name</p>
                    <p className="text-lg font-semibold text-gray-900">
                      {userInfo.name}
                    </p>
                  </div>
                </motion.div>

                {/* Age */}
                <motion.div
                  initial={{
                    opacity: 0,
                    x: 20,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: 0.4,
                  }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <CakeIcon className="w-5 h-5 text-blue-500" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-500 mb-1">Age</p>
                    <p className="text-lg font-semibold text-gray-900">
                      {userInfo.age}
                    </p>
                  </div>
                </motion.div>

                {/* Gender */}
                <motion.div
                  initial={{
                    opacity: 0,
                    x: 20,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: 0.5,
                  }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <UserCircleIcon className="w-5 h-5 text-blue-500" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-500 mb-1">Gender</p>
                    <p className="text-lg font-semibold text-gray-900">
                      {userInfo.gender}
                    </p>
                  </div>
                </motion.div>

                {/* Email */}
                <motion.div
                  initial={{
                    opacity: 0,
                    x: 20,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: 0.55,
                  }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <MailIcon className="w-5 h-5 text-blue-500" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-500 mb-1">Email</p>
                    <p className="text-lg font-semibold text-gray-900">
                      {userInfo.email}
                    </p>
                  </div>
                </motion.div>

                {/* Address */}
                <motion.div
                  initial={{
                    opacity: 0,
                    x: 20,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: 0.6,
                  }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <MapPinIcon className="w-5 h-5 text-blue-500" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-500 mb-1">Address</p>
                    <p className="text-lg font-semibold text-gray-900">
                      {userInfo.address}
                    </p>
                  </div>
                </motion.div>

                {/* Authorized Staff */}
                <motion.div
                  initial={{
                    opacity: 0,
                    x: 20,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: 0.7,
                  }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <ShieldCheckIcon className="w-5 h-5 text-blue-500" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-500 mb-1">
                      Authorized Staff
                    </p>
                    <p className="text-lg font-semibold text-gray-900">
                      {userInfo.authorizedStaff}
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Note */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.4,
                  delay: 0.8,
                }}
                className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg"
              >
                <p className="text-sm text-gray-700">
                  <strong className="text-gray-900">Note:</strong> If any
                  information is incorrect, please contact staff for assistance.
                </p>
              </motion.div>

              {/* Buttons */}
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  delay: 0.9,
                }}
                className="mt-8"
              >
                <button
                  onClick={handlePrint}
                  className="w-full px-6 py-4 bg-blue-600 text-white rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-sm"
                >
                  PROCEED
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  )
}
