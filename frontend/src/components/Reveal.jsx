import { motion } from "framer-motion";

export function Reveal({ children, delay = 0, y = 40, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function MaskLine({ children, delay = 0, className = "", onLoad = false }) {
  const anim = onLoad
    ? { initial: { y: "110%" }, animate: { y: "0%" } }
    : { initial: { y: "110%" }, whileInView: { y: "0%" }, viewport: { once: true, margin: "0px 0px -10% 0px" } };
  return (
    <span className={`mask-line ${className}`}>
      <motion.span
        {...anim}
        transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1], delay }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export function StaggerContainer({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.08, delayChildren: delay } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = "" }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
