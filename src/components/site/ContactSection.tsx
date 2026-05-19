import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const inquiries = [
  { label: "Bookings & Tour", email: "bookings@flyboiinc.com" },
  { label: "A&R / Demo Submissions", email: "ar@flyboiinc.com" },
  { label: "Sync & Licensing", email: "sync@flyboiinc.com" },
  { label: "Press & Media", email: "press@flyboiinc.com" },
  { label: "Management", email: "management@flyboiinc.com" },
];

export function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      ref={ref}
      className="bg-[#060606] py-28 px-6 md:px-12 border-t border-white/5"
    >
      <div className="max-w-[1100px] mx-auto grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="font-condensed text-[11px] tracking-[4px] uppercase text-brand-gold mb-3">
            Get In Touch
          </p>
          <h2
            className="font-display text-white leading-[0.9]"
            style={{ fontSize: "clamp(40px, 6vw, 72px)" }}
          >
            Work With
            <br />
            The Label.
          </h2>
          <p className="font-body text-[14px] text-white/50 mt-5 max-w-sm">
            FLYBOI INC HQ · Lekki Phase 1, Lagos, Nigeria. With representation in London and
            Los Angeles.
          </p>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="divide-y divide-white/10 border-t border-white/10"
        >
          {inquiries.map((i) => (
            <li key={i.label} className="py-4 flex items-center justify-between gap-4">
              <span className="font-condensed text-[12px] tracking-[3px] uppercase text-white/55">
                {i.label}
              </span>
              <a
                href={`mailto:${i.email}`}
                className="font-condensed text-[13px] tracking-[2px] text-white hover:text-brand-gold transition-colors"
              >
                {i.email}
              </a>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
