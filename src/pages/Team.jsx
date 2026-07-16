import React from "react";
import { motion, useReducedMotion } from "framer-motion";

/* =========================
   Animation Helpers
========================= */
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = (direction = "up", reduceMotion = false) => {
  if (reduceMotion) {
    return {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    };
  }

  const directions = {
    left: { x: -30, y: 0 },
    right: { x: 30, y: 0 },
    up: { x: 0, y: 30 },
  };

  return {
    hidden: {
      opacity: 0,
      ...directions[direction],
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.45, ease: "easeOut" },
    },
  };
};

/* =========================
   Person Card
========================= */
const PersonCard = ({ image, name, role, size = "md", direction }) => {
  const reduceMotion = useReducedMotion();

  const sizeClasses =
    size === "lg"
      ? "w-44 h-44 md:w-48 md:h-48"
      : "w-32 h-32 md:w-36 md:h-36";

  return (
    <motion.div
      variants={cardVariants(direction, reduceMotion)}
      className="
        w-56
      bg-white rounded-2xl p-5 text-center
        border border-gray-200
        shadow-sm md:shadow-md
        transition-all duration-300
        md:hover:-translate-y-2
        md:hover:shadow-lg
      "
    >
      <div className={`${sizeClasses} mx-auto mb-4 rounded-xl overflow-hidden border border-gray-100`}>
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>

      <p className="font-semibold text-gray-900">{name}</p>
      <p className="text-sm text-gray-600">{role}</p>
    </motion.div>
  );
};

/* =========================
   Section Layout
========================= */
const Section = ({ title, head, members, footerText }) => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="mb-16 text-center last:mb-6">
      <motion.h2
        initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="text-2xl font-bold mb-12"
      >
        {title}
      </motion.h2>

      {/* Head */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="flex justify-center mb-10"
      >
        <PersonCard {...head} size="lg" direction="up" />
      </motion.div>

      {/* Divider + Paragraph (WEB & MEDIA only) */}
      {footerText && (
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="max-w-3xl mx-auto"
        >
          <div className="w-24 h-px bg-gray-300 mx-auto mb-6" />
          <p className="text-gray-600 text-sm leading-relaxed">
            {footerText}
          </p>
        </motion.div>
      )}

      {/* Members */}
      {members.length > 0 && (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="
          flex
          flex-wrap
          justify-center
          gap-8
          mt-12
          max-w-4xl
          mx-auto
          "
        >
          {members.map((m, i) => (
            <PersonCard
              key={i}
              {...m}
              direction={i % 2 === 0 ? "left" : "right"}
            />
          ))}
        </motion.div>
      )}
    </section>
  );
};

/* =========================
   Team Page
========================= */
export default function Team() {
  return (
    <div className="max-w-6xl mx-auto px-4 pt-16 pb-6">

      {/* COMMITTEE BODY */}
      <Section
        title="COMMITTEE BODY"
        head={{
          image: "https://ianepgfuevjadgydaudv.supabase.co/storage/v1/object/public/New%20Data%20Base/Ajay%20Da.webp",
          name: "Ajay Gurung",
          role: "President",
        }}
        members={[
          { image: "https://ianepgfuevjadgydaudv.supabase.co/storage/v1/object/public/New%20Data%20Base/VP.webp", name: "Nayan Pradhan", role: "Vice President" },
          { image: "https://ianepgfuevjadgydaudv.supabase.co/storage/v1/object/public/New%20Data%20Base/Allina%20D.webp", name: "Allina Gurung", role: "Secretary" },
        ]}
      />

      {/* ARTS & CULTURE */}
      <Section
        title="ARTS & CULTURE"
        head={{
          image: "https://ianepgfuevjadgydaudv.supabase.co/storage/v1/object/public/Samaj%20Data/Safal.jpg",
          name: "Safal Sharma",
          role: "Head of Arts & Culture",
        }}
        members={[
          { image: "https://ianepgfuevjadgydaudv.supabase.co/storage/v1/object/public/New%20Data%20Base/Himal%20Rai.webp", name: "Himal Rai", role: "Arts & Culture" },
          { image: "https://ianepgfuevjadgydaudv.supabase.co/storage/v1/object/public/New%20Data%20Base/Krishika.webp", name: "Krishika Lamgaday", role: "Arts & Culture" },
        ]}
      />

      {/* SOCIAL MEDIA */}
      <Section
        title="SOCIAL MEDIA"
        head={{
          image: "https://ianepgfuevjadgydaudv.supabase.co/storage/v1/object/public/New%20Data%20Base/Jyamin%20Lepcha.webp",
          name: "Jyamin Lepcha",
          role: "Head of Social Media",
        }}
        members={[
          { image: "https://ianepgfuevjadgydaudv.supabase.co/storage/v1/object/public/New%20Data%20Base/Barsha.webp", name: "Barsha Rasaily", role: "Social Media Coordinator" },
          { image: "https://ianepgfuevjadgydaudv.supabase.co/storage/v1/object/public/New%20Data%20Base/Archana.webp", name: "Archana Subba", role: "Social Media Coordinator" },
        ]}
      />

      {/* PUBLIC RELATIONS */}
      <Section
        title="PUBLIC RELATIONS"
        head={{
          image: "https://ianepgfuevjadgydaudv.supabase.co/storage/v1/object/public/New%20Data%20Base/Vijay%20Daaaa.webp",
          name: "Bijay Tamang",
          role: "Head of Public Relations",
        }}
        members={[
          { image: "https://ianepgfuevjadgydaudv.supabase.co/storage/v1/object/public/New%20Data%20Base/Darshan%20Bhai.webp", name: "Darshan Rai", role: "PR Coordinator" },
          { image: "https://ianepgfuevjadgydaudv.supabase.co/storage/v1/object/public/New%20Data%20Base/Rupesh%20Broo.webp", name: "Rupesh Rai", role: "PR Coordinator" },
        ]}
      />

      {/* ADMINISTRATION */}
      <Section
        title="ADMINISTRATION & RECORDS"
        head={{
          image: "https://ianepgfuevjadgydaudv.supabase.co/storage/v1/object/public/My%20Storage/Divakar%20Bro.jpeg",
          name: "Divakar Pradhan",
          role: "Head of Administration",
        }}
        members={[
          { image: "https://ianepgfuevjadgydaudv.supabase.co/storage/v1/object/public/New%20Data%20Base/Sibani%20Cheetri.webp", name: "Sibani Chettri", role: "Administration & Records" },
          { image: "https://ianepgfuevjadgydaudv.supabase.co/storage/v1/object/public/Samaj%20Data/Abhishek.jpeg", name: "Abhishek Chhetri", role: "Administration & Records" },
        ]}
      />

      {/* WEB & MEDIA */}
      <Section
        title="WEB & MEDIA"
        head={{
          image: "https://ianepgfuevjadgydaudv.supabase.co/storage/v1/object/public/New%20Data%20Base/Ashok.webp",
          name: "Ashok Thapa",
          role: "Head of Web & Media",
        }}
        members={[]}
        footerText="Our team is built on cooperation and shared responsibility. Together, we work to support community welfare, preserve cultural values, and promote unity among Indian Gorkhas living in Kuwait."
      />

    </div>
  );
}
