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
    <div
      className="w-full overflow-hidden relative"
      style={{ background: "var(--background)" }}
    >
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
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full border mb-10"
            style={{
              background: "var(--hover)",
              borderColor: "var(--border)",
            }}
            variants={itemVariants}
          >
            <HiAcademicCap
              className="w-5 h-5"
              style={{ color: "var(--text-secondary)" }}
            />
            <span
              className="text-sm font-medium"
              style={{ color: "var(--text-secondary)" }}
            >
              Educational Excellence
            </span>
          </motion.div>

          {/* Main Heading - Two Lines */}
          <motion.div className="mb-8 space-y-2" variants={itemVariants}>
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[0.9]"
              style={{ color: "var(--headline)" }}
            >
              Empowering Academic
            </h1>
            <h2
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.9] pb-5"
              style={{
                background:
                  "linear-gradient(to right, var(--secondary), var(--tertiary))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Success Together
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            className="min-w-full text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-4xl mx-auto font-light mb-12"
            style={{ color: "var(--paragraph)" }}
            variants={itemVariants}
          >
            Streamline your educational journey with our comprehensive college
            portal. Connect students, faculty, and administration through{" "}
            <span
              style={{ color: "var(--text-secondary)" }}
              className="font-medium"
            >
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
              className="group relative px-10 py-5 text-white rounded-2xl 
                       transition-all duration-300 
                       hover:scale-105 hover:-translate-y-2 text-lg font-semibold 
                       flex items-center justify-center gap-4 w-full sm:w-auto"
              style={{
                background:
                  "linear-gradient(to right, var(--secondary), var(--tertiary))",
                boxShadow: "0 20px 40px var(--hover)",
              }}
            >
              <span>Get Started</span>
              <HiArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>

            <Link
              href="/about"
              className="px-10 py-5 border-2 rounded-2xl 
                       transition-all duration-300 
                       text-lg font-medium hover:scale-105 hover:-translate-y-2
                       w-full sm:w-auto text-center"
              style={{
                borderColor: "var(--border)",
                color: "var(--text)",
              }}
            >
              Learn More
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="flex flex-wrap justify-center items-center gap-12"
            style={{ color: "var(--paragraph)" }}
            variants={itemVariants}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-3 h-3 rounded-full animate-pulse"
                style={{ background: "var(--secondary)" }}
              />
              <span className="text-base font-medium">10K+ Students</span>
            </div>
            <div className="flex items-center gap-3">
              <div
                className="w-3 h-3 rounded-full animate-pulse"
                style={{ background: "var(--tertiary)" }}
              />
              <span className="text-base font-medium">500+ Faculty</span>
            </div>
            <div className="flex items-center gap-3">
              <div
                className="w-3 h-3 rounded-full animate-pulse"
                style={{ background: "var(--headline)" }}
              />
              <span className="text-base font-medium">50+ Departments</span>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Components_LandingPage;
