import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
<h1 style={{ color: "red" }}>HERO SCROLL IS LOADED</h1>

export default function HeroScroll() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // PARALLAX + SCALE
  const scale = useTransform(scrollYProgress, [0, 1], [0.88, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [60, 0]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], ["36px", "16px"]);

  return (
    <section ref={ref} className="bg-white pt-6 pb-12">
      <div className="max-w-7xl mx-auto px-4 text-center">

        {/* TITLE */}
        <motion.h1
          initial={{ y: -16, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-3xl md:text-4xl font-semibold text-gray-900"
        >
          Kuwait Gorkhali Samaj
        </motion.h1>

        {/* SHORT INTRO */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-0 mb-3 text-gray-700 text-base md:text-lg leading-relaxed max-w-4xl mx-auto"
        >
          A voluntary, non-profit Indian Gorkha community organization in Kuwait, 
          serving the community with unity, responsibility, and shared purpose since 2011.
        </motion.p>

        {/* PARALLAX IMAGE */}
        <motion.div
          style={{ scale, y, borderRadius }}
          className="mt-3 overflow-hidden will-change-transform"
        >
          <img
            src="https://ianepgfuevjadgydaudv.supabase.co/storage/v1/object/public/New%20Data%20Base/Hero.webp"
            alt="Kuwait Gorkhali Samaj"
            className="w-full h-[300px] md:h-[420px] object-cover"
          />
        </motion.div>

        {/* LONG DESCRIPTION */}
        <motion.p
          initial={{ y: 12, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-10 mb-0 text-gray-700 text-base md:text-lg leading-relaxed max-w-4xl mx-auto"
        >
          Kuwait Gorkhali Samaj works to promote unity, preserve Indian Gorkha cultural identity, 
          and support the social and welfare needs of the community. Rooted in shared values and mutual respect, 
          every initiative is guided by dignity, responsibility, 
          and collective commitment to the people we represent.
        </motion.p>

      </div>
    </section>
  );
}
