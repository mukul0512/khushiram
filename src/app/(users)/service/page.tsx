"use client";
import style from "./service.module.css";
import Image from "next/image";
import mukul from "../../../../public/mukul.jpg";
import gsap from "gsap";
import { easeInOut, motion } from "motion/react";
import { useEffect, useRef } from "react";

// Variants: define animation styles once
const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeInOut } },
};

const Services = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const hoverTween = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const element = cardRef.current;

      if (!element) return;

      // set
      gsap.set(element, {
        opacity: 0,
        y: 50,
        scale: 1,
      });
      // to
      gsap.to(element, {
        duration: 0.8,
        opacity: 1,
        y: 0,
        scale: 1,
        ease: "power3.out",
      });
    });

    return () => ctx.revert();
  }, []);

  const handleMouseEnter = () => {
    if (!cardRef.current) return;

    if (hoverTween.current) {
      hoverTween.current.kill();
    }

    hoverTween.current = gsap.to(cardRef.current, {
      duration: 0.3,
      y: -50,
      scale: 1.05,
      boxShadow:
        "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;

    // Kill any existing hover animation
    if (hoverTween.current) {
      hoverTween.current.kill();
    }

    hoverTween.current = gsap.to(cardRef.current, {
      duration: 0.3,
      y: 0,
      scale: 1,
      boxShadow:
        "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
      ease: "power2.in",
    });
  };

  return (
    <section className="font-roboto">
      <h1 className={style.commonHeading}>Service Page</h1>

      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-khaki-800">
          Our Team
        </h2>

        <div className="grid grid-cols-3 gap-8">
          {/* <!-- Team Member 1 --> */}
          <motion.div
            variants={cardVariant}
            initial="hidden"
            animate="show"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-white rounded-lg shadow-md p-6 "
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5, ease: easeInOut }}
              className="w-24 h-24 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center"
            >
              <Image
                src="/mukul.jpg"
                width={500}
                height={500}
                alt="mukul"
                className="w-full h-full rounded-full"
              />
            </motion.div>
            <motion.h3
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: easeInOut, delay: 0.6 }}
              className="text-lg font-semibold text-center text-gray-800"
            >
              Mike Johnson
            </motion.h3>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: easeInOut, delay: 0.8 }}
            >
              <p className="text-sm text-gray-600 text-center mt-2">
                Backend Developer
              </p>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: easeInOut, delay: 1 }}
              className="text-xs text-gray-500 text-center mt-1"
            >
              Node.js & Python
            </motion.p>
          </motion.div>

          {/* <!-- Team Member 2 --> */}
          <div className="bg-white rounded-lg shadow-md hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
            <div className="w-full h-full relative bg-purple-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Image
                src={mukul}
                alt="mukul khushiram"
                fill={true}
                quality={100}
                priority={false}
                placeholder="blur"
                blurDataURL=""
              />
            </div>
          </div>

          {/* <!-- Team Member 3 --> */}
          <div
            ref={cardRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="bg-white rounded-lg shadow-md p-6 "
          >
            <div className="w-24 h-24 bg-purple-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl font-bold text-purple-600">MJ</span>
            </div>
            <h3 className="text-lg font-semibold text-center text-gray-800">
              Mike Johnson
            </h3>
            <p className="text-sm text-gray-600 text-center mt-2">
              Backend Developer
            </p>
            <p className="text-xs text-gray-500 text-center mt-1">
              Node.js & Python
            </p>
          </div>

          {/* <!-- Team Member 4 --> */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
            <div className="w-24 h-24 bg-pink-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl font-bold text-pink-600">EW</span>
            </div>
            <h3 className="text-lg font-semibold text-center text-gray-800">
              Emily Wilson
            </h3>
            <p className="text-sm text-gray-600 text-center mt-2">
              Product Manager
            </p>
            <p className="text-xs text-gray-500 text-center mt-1">
              Strategy & Analytics
            </p>
          </div>

          {/* <!-- Team Member 5 --> */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
            <div className="w-24 h-24 bg-orange-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl font-bold text-orange-600">DL</span>
            </div>
            <h3 className="text-lg font-semibold text-center text-gray-800">
              David Lee
            </h3>
            <p className="text-sm text-gray-600 text-center mt-2">
              DevOps Engineer
            </p>
            <p className="text-xs text-gray-500 text-center mt-1">
              AWS & Docker
            </p>
          </div>

          {/* <!-- Team Member 6 --> */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
            <div className="w-24 h-24 bg-teal-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl font-bold text-teal-600">AB</span>
            </div>
            <h3 className="text-lg font-semibold text-center text-gray-800">
              Anna Brown
            </h3>
            <p className="text-sm text-gray-600 text-center mt-2">
              QA Engineer
            </p>
            <p className="text-xs text-gray-500 text-center mt-1">
              Testing & Automation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
