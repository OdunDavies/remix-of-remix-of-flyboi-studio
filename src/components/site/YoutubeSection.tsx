import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const videos = [
  { id: "zBtxPFAJZOU", title: "Eyo (Lyric Video)" },
  { id: "9HnSQVpK8AU", title: "Uncle K" },
  { id: "041PlAGNMsQ", title: "Twe Twe ft. Davido" },
  { id: "bLF90M96m2Q", title: "To Be A Man" },
];

function VideoCard({ id, title }: { id: string; title: string }) {
  const [active, setActive] = useState(false);
  return (
    <div className="group">
      <div className="relative p-3 md:p-4 bg-gradient-to-b from-white/[0.06] to-white/[0.015] border border-white/10 hover:border-brand-gold/50 transition-colors">
        <div className="absolute top-2 left-2 right-2 flex items-center justify-between px-1 z-10 pointer-events-none">
          <span className="font-condensed text-[9px] tracking-[3px] uppercase text-brand-gold/90">
            FLYBOI · MV
          </span>
          <span className="font-condensed text-[9px] tracking-[3px] uppercase text-white/40">
            HD
          </span>
        </div>
        <div
          className="relative w-full overflow-hidden bg-[#0a0a0a] mt-5 ring-1 ring-white/10"
          style={{ aspectRatio: "16 / 9", boxShadow: "0 20px 50px rgba(0,0,0,0.5)" }}
        >
          {active ? (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
              title={title}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 w-full h-full border-0"
            />
          ) : (
            <button
              type="button"
              onClick={() => setActive(true)}
              aria-label={`Play ${title}`}
              className="absolute inset-0 w-full h-full group/play"
            >
              <img
                src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
                alt={`${title} thumbnail`}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/play:scale-105"
              />
              <span className="absolute inset-0 bg-black/30 group-hover/play:bg-black/20 transition-colors" />
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="flex items-center justify-center w-16 h-16 rounded-full bg-black/70 border border-white/30 group-hover/play:bg-brand-gold group-hover/play:border-brand-gold transition-colors">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </span>
            </button>
          )}
        </div>
        <div className="mt-4 flex items-center justify-between gap-3">
          <div>
            <div className="font-display text-white text-[20px] md:text-[22px] tracking-wide leading-none">
              {title}
            </div>
            <div className="font-condensed text-[10px] tracking-[3px] uppercase text-white/45 mt-1.5">
              Kizz Daniel · Official Video
            </div>
          </div>
          <span className="font-condensed text-[10px] tracking-[3px] uppercase text-white/35 shrink-0">
            FLYBOI INC
          </span>
        </div>
      </div>
    </div>
  );
}

export function YoutubeSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="videos"
      ref={ref}
      className="bg-black py-20 md:py-28 px-5 md:px-12 border-t border-white/5"
    >
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-10 md:mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-5"
        >
          <div>
            <p className="font-condensed text-[11px] tracking-[4px] uppercase text-brand-gold mb-3">
              On YouTube
            </p>
            <h2
              className="font-display text-white leading-[0.9]"
              style={{ fontSize: "clamp(40px, 7vw, 84px)" }}
            >
              Watch
            </h2>
          </div>
          <a
            href="https://www.youtube.com/@KizzDanielchannel"
            target="_blank"
            rel="noopener noreferrer"
            className="font-condensed text-[11px] tracking-[3px] uppercase border border-white/25 px-5 py-3 text-white/85 hover:bg-white hover:text-black transition-colors self-start"
          >
            Subscribe on YouTube
          </a>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
          {videos.map((v, i) => (
            <motion.div
              key={v.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
            >
              <VideoCard id={v.id} title={v.title} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
