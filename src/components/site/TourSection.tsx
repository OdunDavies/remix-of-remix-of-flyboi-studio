import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const dates = [
  { date: "Jun 13, 2026", venue: "O2 Academy Brixton", city: "London, United Kingdom" },
  { date: "Jun 27, 2026", venue: "Hammerstein Ballroom", city: "New York, USA" },
  { date: "Jul 11, 2026", venue: "The Novo", city: "Los Angeles, USA" },
  { date: "Jul 18, 2026", venue: "Afro Nation", city: "Portimão, Portugal" },
  { date: "Aug 08, 2026", venue: "Accor Arena", city: "Paris, France" },
  { date: "Sep 05, 2026", venue: "Eko Convention Centre", city: "Lagos, Nigeria" },
  { date: "Sep 26, 2026", venue: "Accra Sports Stadium", city: "Accra, Ghana" },
  { date: "Oct 17, 2026", venue: "Coca-Cola Arena", city: "Dubai, UAE" },
];

export function TourSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="tour" ref={ref} className="bg-[#060606] py-20 md:py-24 flex justify-center">
      <div className="w-full max-w-[900px] px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="font-condensed text-[11px] tracking-[4px] uppercase text-brand-gold mb-3">
            On Tour
          </p>
          <h2
            className="font-display text-white leading-none"
            style={{ fontSize: "clamp(40px, 7vw, 90px)" }}
          >
            Live Dates
          </h2>
        </motion.div>
        <div>
          {dates.map((d, i) => (
            <motion.div
              key={d.date}
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.07 }}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-5 border-b border-white/10 hover:bg-white/[0.02] transition-colors cursor-pointer gap-3 sm:gap-4"
            >
              <span className="font-condensed text-[12px] tracking-[3px] uppercase text-brand-gold sm:min-w-[110px]">
                {d.date}
              </span>
              <div className="flex-1 min-w-0">
                <div className="font-condensed text-[16px] md:text-[18px] tracking-wider text-white">
                  {d.venue}
                </div>
                <div className="font-body font-light text-[13px] text-white/40">{d.city}</div>
              </div>
              <a
                href="#"
                className="font-condensed text-[11px] tracking-[2px] uppercase border border-white/15 px-4 py-2 text-white/60 hover:text-white hover:border-white/45 transition-all whitespace-nowrap self-start sm:self-auto"
              >
                Tickets
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}