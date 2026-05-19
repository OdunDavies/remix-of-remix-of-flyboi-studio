import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "2018", label: "Founded" },
  { value: "1B+", label: "Streams" },
  { value: "180+", label: "Countries" },
  { value: "5", label: "Studio Albums" },
];

export function LabelSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="label" ref={ref} className="bg-black py-28 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-[1100px] mx-auto grid md:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="font-condensed text-[11px] tracking-[4px] uppercase text-brand-gold mb-4">
            About The Label
          </p>
          <h2
            className="font-display text-white leading-[0.9]"
            style={{ fontSize: "clamp(40px, 6vw, 72px)" }}
          >
            Built By An Artist.
            <br />
            Run For Artists.
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-body text-[15px] leading-[1.8] text-white/65 space-y-5"
        >
          <p>
            FLYBOI INC was founded in 2018 by Nigerian Afropop sensation Oluwatobiloba
            Daniel Anidugbe — known to the world as <span className="text-white">Kizz Daniel</span> —
            following his departure from his previous label.
          </p>
          <p>
            What started as a vehicle for one artist's independence has grown into one of West
            Africa's most influential indie record companies, behind the global anthem
            <span className="text-white"> BUGA (Lo Lo Lo)</span>, the Maverick LP, and a catalogue
            streamed over a billion times across Spotify, Apple Music, Audiomack, YouTube Music
            and Boomplay.
          </p>
          <p>
            Based in Lagos with partners in London and Los Angeles, FLYBOI is committed to
            developing the next generation of African pop, dancehall and R&amp;B talent.
          </p>
        </motion.div>
      </div>

      <div className="max-w-[1100px] mx-auto mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 + i * 0.08 }}
            className="border-t border-white/15 pt-5"
          >
            <div
              className="font-display text-white"
              style={{ fontSize: "clamp(36px, 5vw, 56px)" }}
            >
              {s.value}
            </div>
            <div className="font-condensed text-[11px] tracking-[3px] uppercase text-white/45 mt-1">
              {s.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
