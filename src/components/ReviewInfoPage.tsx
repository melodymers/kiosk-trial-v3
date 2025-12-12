export {};
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

      {/* Main Content */}
      <main className="flex-1 flex justify-center items-center px-8 py-10">
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
          className="w-full max-w-6xl bg-white rounded-2xl shadow-lg overflow-hidden"
            >
          <div className="grid md:grid-cols-[320px,1fr] gap-0">
            {/* Left Sidebar */}
            <motion.div
            className="bg-white p-10 flex flex-col items-center border-r border-gray-100"
            >
            {/* Logo */}
            <div className="mb-10 text-center">
                <div className="w-42 h-30 mx-auto mb-4">
                <img
                    src="/valace-logo.png"
                    alt="ValACE Logo"
                    className="w-full h-full object-contain"
                />
                </div>
            </div>

            {/* Avatar */}
            <motion.div
                /* ...same motion props... */
                className="w-56 h-56 rounded-full bg-blue-50 flex items-center justify-center mb-6"
            >
                <UserIcon className="w-28 h-28 text-blue-300 stroke-[1.5]" />
            </motion.div>

            {/* Pass ID */}
            <motion.div /* ... */ className="text-center mt-2">
                <p className="text-xl font-semibold text-blue-600">
                ValACE Pass ID: {userInfo.passId}
                </p>
            </motion.div>
            </motion.div>


            {/* Right Content */}
            <div className="p-8 md:p-12">
              <div className="space-y-2">
                {/* Full Name */}
                <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="rounded-2xl bg-gray-50 p-2"
                >
                <div className="flex items-center gap-4 bg-white rounded-xl px-5 py-4 shadow-sm">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <UserIcon className="w-5 h-5 text-blue-500" />
                    </div>
                    <div className="flex-1">
                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                        Full Name
                    </p>
                    <p className="text-lg font-semibold text-gray-900">
                        {userInfo.name}
                    </p>
                    </div>
                </div>
                </motion.div>

                {/* Age */}
                <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="rounded-2xl bg-gray-50 p-2"
                >
                <div className="flex items-center gap-4 bg-white rounded-xl px-5 py-4 shadow-sm">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <CakeIcon className="w-5 h-5 text-blue-500" />
                    </div>
                    <div className="flex-1">
                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                        Age
                    </p>
                    <p className="text-lg font-semibold text-gray-900">
                        {userInfo.age}
                    </p>
                    </div>
                </div>
                </motion.div>


                {/* Gender */}
                <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="rounded-2xl bg-gray-50 p-2"
                >
                <div className="flex items-center gap-4 bg-white rounded-xl px-5 py-4 shadow-sm">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <UserCircleIcon className="w-5 h-5 text-blue-500" />
                    </div>
                    <div className="flex-1">
                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                        Gender
                    </p>
                    <p className="text-lg font-semibold text-gray-900">
                        {userInfo.gender}
                    </p>
                    </div>
                </div>
                </motion.div>


                {/* Email */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    className="rounded-2xl bg-gray-50 p-2"
                    >
                    <div className="flex items-center gap-4 bg-white rounded-xl px-5 py-4 shadow-sm">
                        <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                        <MailIcon className="w-5 h-5 text-blue-500" />
                        </div>
                        <div className="flex-1">
                        <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                            Email
                        </p>
                        <p className="text-lg font-semibold text-gray-900">
                            {userInfo.email}
                        </p>
                        </div>
                    </div>
                    </motion.div>

                {/* Address */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    className="rounded-2xl bg-gray-50 p-2"
                    >
                    <div className="flex items-center gap-4 bg-white rounded-xl px-5 py-4 shadow-sm">
                        <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                        <MapPinIcon className="w-5 h-5 text-blue-500" />
                        </div>
                        <div className="flex-1">
                        <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                            Address
                        </p>
                        <p className="text-lg font-semibold text-gray-900">
                            {userInfo.address}
                        </p>
                        </div>
                    </div>
                    </motion.div>

                {/* Authorized Staff */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    className="rounded-2xl bg-gray-50 p-2"
                    >
                    <div className="flex items-center gap-4 bg-white rounded-xl px-5 py-4 shadow-sm">
                        <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                        <ShieldCheckIcon className="w-5 h-5 text-blue-500" />
                        </div>
                        <div className="flex-1">
                        <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                            Authorized Staff
                        </p>
                        <p className="text-lg font-semibold text-gray-900">
                            {userInfo.authorizedStaff}
                        </p>
                        </div>
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
                className="mt-3 p-4 bg-green-50 border border-green-200 rounded-lg"
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
                className="mt-3"
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
