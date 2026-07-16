import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useAnimationFrame,
  useSpring,
} from "framer-motion";

export default function PartnersMarquee({ partners }) {
  /* ===== Speed Control ===== */
  const BASE_SPEED = 55;
  const INTERACT_SPEED = 90;

  const x = useMotionValue(0);
  const speed = useSpring(BASE_SPEED, { damping: 40, stiffness: 200 });

  const [paused, setPaused] = useState(false);
  const containerRef = useRef(null);
  const loopWidthRef = useRef(0);

  /* ===== Setup loop ===== */
  useEffect(() => {
    if (!containerRef.current) return;
    const totalWidth = containerRef.current.scrollWidth;
    loopWidthRef.current = totalWidth / 3;
    x.set(-loopWidthRef.current);
  }, [partners, x]);

  /* ===== Auto scroll + wrap ===== */
  useAnimationFrame((_, delta) => {
    if (paused) return;

    const moveBy = (speed.get() * delta) / 1000;
    x.set(x.get() - moveBy);

    const loop = loopWidthRef.current;
    if (x.get() <= -loop * 2) x.set(x.get() + loop);
    if (x.get() >= 0) x.set(x.get() - loop);
  });

  const handleInteractStart = () => speed.set(INTERACT_SPEED);
  const handleInteractEnd = () => speed.set(BASE_SPEED);

  return (
    <div className="w-full overflow-hidden py-12 bg-white">
      <div className="relative overflow-hidden">
        <motion.div
          ref={containerRef}
          className="flex w-max cursor-grab active:cursor-grabbing"
          style={{ x }}
          drag="x"
          dragElastic={0.12}
          dragMomentum
          onDragStart={() => setPaused(true)}
          onDragEnd={() => setPaused(false)}
          onMouseEnter={handleInteractStart}
          onMouseLeave={handleInteractEnd}
          onTouchStart={handleInteractStart}
          onTouchEnd={handleInteractEnd}
        >
          {[...partners, ...partners, ...partners].map((item, index) => (
            <PartnerCard key={index} item={item} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

/* ===== Partner Card (isolated hover logic) ===== */
function PartnerCard({ item }) {
  const scale = useSpring(1, { stiffness: 300, damping: 25 });

  return (
    <motion.div
      className="
        mx-8 min-w-[180px]
        flex flex-col items-center justify-start
        pt-6 pb-4
        rounded-xl
      "
      style={{ scale }}
      onHoverStart={() => scale.set(1.15)}
      onHoverEnd={() => scale.set(1)}
      onTapStart={() => scale.set(1.12)}
      onTapCancel={() => scale.set(1)}
      onTap={() => scale.set(1)}
    >
      {/* Logo Holder (bigger, no clipping) */}
      <div className="h-24 sm:h-28 md:h-32 flex items-center justify-center mb-2">
        <img
          src={item.logo}
          alt={item.name}
          className="max-h-full object-contain select-none"
          draggable={false}
        />
      </div>

      {/* Name */}
      <p className="text-sm font-semibold text-gray-900 text-center">
        {item.name}
      </p>

      {/* Contact */}
      {item.contact && item.location && (
        <p className="text-xs text-gray-600 text-center mt-1">
          {item.contact} – {item.location}
        </p>
      )}
    </motion.div>
  );
}
