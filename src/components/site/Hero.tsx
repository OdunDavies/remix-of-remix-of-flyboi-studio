import { motion } from "framer-motion";
import kizz from "@/assets/kizz-2.jpg";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

export function Hero() {
  return (
    <section id="top" className="relative w-full h-screen overflow-hidden bg-black">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${kizz})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/95" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 h-full flex flex-col justify-end px-6 md:px-12 pb-16 md:pb-24 max-w-[1200px]"
      >
        <motion.p
          variants={item}
          className="font-condensed text-[11px] tracking-[5px] uppercase text-brand-gold mb-3"
        >
          Independent Record Label · Est. 2018
        </motion.p>
        <motion.h1
          variants={item}
          className="font-display text-white leading-[0.88] tracking-wide"
          style={{ fontSize: "clamp(60px, 11vw, 160px)" }}
        >
          FLYBOI
          <br />
          INC.
        </motion.h1>
        <motion.p
          variants={item}
          className="font-body text-[15px] md:text-[17px] leading-[1.6] text-white/70 mt-5 max-w-[560px]"
        >
          Founded by Grammy-nominated Afropop superstar <span className="text-white">Kizz Daniel</span>,
          FLYBOI INC is the independent label behind some of Africa's biggest global exports —
          from the diamond-certified <em className="not-italic text-white">BUGA</em> to the
          chart-topping <em className="not-italic text-white">Maverick</em> album.
        </motion.p>
        <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
          <a
            href="#releases"
            className="bg-white text-black px-6 py-3 font-condensed text-[12px] tracking-[3px] uppercase hover:bg-white/85 transition-colors"
          >
            Explore Releases
          </a>
          <a
            href="#roster"
            className="border border-white/30 text-white px-6 py-3 font-condensed text-[12px] tracking-[3px] uppercase hover:border-white/70 transition-colors"
          >
            Meet The Roster
          </a>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-7 right-10 hidden md:flex flex-col items-center gap-3">
        <motion.div
          animate={{ scaleY: [1, 1.1, 1], opacity: [0.35, 0.7, 0.35] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-px h-16 bg-white origin-top"
        />
        <span className="font-condensed text-[10px] tracking-[3px] uppercase text-white/50">
          Scroll
        </span>
      </div>
    </section>
  );
}
