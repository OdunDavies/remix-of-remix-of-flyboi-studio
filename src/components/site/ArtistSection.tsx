import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import k1 from "@/assets/kizz-1.jpg";
import k3 from "@/assets/kizz-3.jpg";
import k4 from "@/assets/kizz-4.jpg";

export function ArtistSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="roster"
      ref={ref}
      className="relative bg-[#060606] py-28 px-6 md:px-12 overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-condensed text-[11px] tracking-[4px] uppercase text-brand-gold mb-3">
            The Roster · Flagship Artist
          </p>
          <h2
            className="font-display text-white leading-[0.9]"
            style={{ fontSize: "clamp(48px, 8vw, 100px)" }}
          >
            Kizz Daniel
          </h2>
          <p className="font-condensed text-[12px] tracking-[4px] uppercase text-white/40 mt-3">
            Founder · Recording Artist · Songwriter
          </p>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-6 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="md:col-span-5 aspect-[3/4] overflow-hidden"
          >
            <img src={k4} alt="Kizz Daniel portrait" className="w-full h-full object-cover" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-7 space-y-5 font-body text-[15px] leading-[1.8] text-white/65 md:pt-6"
          >
            <p>
              Oluwatobiloba Daniel Anidugbe, known professionally as
              <span className="text-white"> Kizz Daniel</span>, is a Nigerian singer, songwriter
              and the founder of FLYBOI INC. He first rose to fame in 2014 with the hit
              "Woju" and has since become one of Africa's most consistently charting artists.
            </p>
            <p>
              His 2022 single <span className="text-white">BUGA (Lo Lo Lo)</span> ft. Tekno
              became a worldwide phenomenon — racking up over a billion combined streams,
              topping charts across 15+ African nations and earning a 2023 Grammy nomination.
            </p>
            <div className="pt-4">
              <p className="font-condensed text-[10px] tracking-[4px] uppercase text-white/35 mb-3">
                Follow Kizz Daniel
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  { label: "Spotify", href: "https://open.spotify.com/artist/1X6cBGnXpEpN7CmflLKmLV" },
                  { label: "Apple Music", href: "https://music.apple.com/us/artist/kizz-daniel/1383857742" },
                  { label: "YouTube", href: "https://www.youtube.com/@KizzDanielchannel" },
                  { label: "Instagram", href: "https://instagram.com/kizzdaniel/?hl=en" },
                  { label: "Twitter / X", href: "https://twitter.com/KizzDaniel" },
                  { label: "Facebook", href: "https://facebook.com/iamkizzdaniel/?locale=rw_RW" },
                  { label: "kizzdaniel.com", href: "https://kizzdaniel.com" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-white/20 px-4 py-3 font-condensed text-[11px] tracking-[2px] uppercase text-white/80 hover:bg-white hover:text-black transition-colors text-center"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 gap-6 mt-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="aspect-[4/5] overflow-hidden"
          >
            <img src={k1} alt="Kizz Daniel editorial" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="aspect-[4/5] overflow-hidden"
          >
            <img src={k3} alt="Kizz Daniel editorial" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
