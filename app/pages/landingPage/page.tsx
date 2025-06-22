"use client";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { HiArrowRight, HiAcademicCap } from "react-icons/hi";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const Components_LandingPage = () => {
  return (
    <div className="w-full overflow-hidden bg-white relative">
      {/* Glitch Background */}

      <section className="relative min-h-screen flex items-center justify-center">
        {/* Additional decorative elements on top of glitch */}

        {/* Main Content - Centered */}
        <motion.div
          className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-violet-50 border border-violet-100 mb-10"
            variants={itemVariants}
          >
            <HiAcademicCap className="w-5 h-5 text-violet-600" />
            <span className="text-sm font-medium text-violet-700">
              Educational Excellence
            </span>
          </motion.div>

          {/* Main Heading - Two Lines */}
          <motion.div className="mb-8 space-y-2" variants={itemVariants}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white tracking-tight text-gray-900 leading-[0.9]">
              Empowering Academic
            </h1>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-transparent bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text leading-[0.9] pb-5">
              Success Together
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            className="min-w-full text-white text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto font-light mb-12"
            variants={itemVariants}
          >
            Streamline your educational journey with our comprehensive college
            portal. Connect students, faculty, and administration through{" "}
            <span className="text-violet-600 font-medium">
              intelligent solutions
            </span>{" "}
            designed for modern academic institutions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            variants={itemVariants}
          >
            <Link
              href="/register"
              className="group relative px-10 py-5 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-2xl 
                       hover:from-violet-500 hover:to-purple-500 transition-all duration-300 
                       hover:scale-105 hover:-translate-y-2 text-lg font-semibold 
                       shadow-2xl shadow-violet-500/30 hover:shadow-violet-500/50 
                       flex items-center justify-center gap-4 w-full sm:w-auto"
            >
              <span>Get Started</span>
              <HiArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>

            <Link
              href="/about"
              className="px-10 py-5 border-2 border-violet-200 text-white hover:text-black rounded-2xl 
                       hover:bg-violet-50 hover:border-violet-300 transition-all duration-300 
                       text-lg font-medium hover:scale-105 hover:-translate-y-2
                       shadow-xl shadow-violet-100/50 w-full sm:w-auto text-center"
            >
              Learn More
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="flex flex-wrap justify-center items-center gap-12 text-gray-500"
            variants={itemVariants}
          >
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-violet-500 rounded-full animate-pulse" />
              <span className="text-base font-medium">10K+ Students</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse" />
              <span className="text-base font-medium">500+ Faculty</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-indigo-500 rounded-full animate-pulse" />
              <span className="text-base font-medium">50+ Departments</span>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Components_LandingPage;
