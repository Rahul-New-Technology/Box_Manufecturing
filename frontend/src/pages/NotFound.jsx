import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="min-h-screen bg-navy-dark flex items-center justify-center py-32 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-center"
      >
        <div className="font-display text-[20vw] md:text-[12rem] leading-none text-gold">404</div>
        <div className="text-white/70 font-editorial italic text-xl md:text-2xl mt-4">Looks like this box got mis-shipped.</div>
        <Link to="/" className="btn-gold mt-8 inline-flex">Back to Home</Link>
      </motion.div>
    </section>
  );
}
