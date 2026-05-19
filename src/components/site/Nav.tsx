import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const links = ["Label", "Roster", "Releases", "Videos", "Tour", "Contact"];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/85 to-transparent"
    >
      <div className="flex items-center justify-between px-5 md:px-10 py-4 md:py-5">
        <a href="#top" className="flex items-center gap-2">
          <img src="/flyboi-logo.png" alt="FLYBOI INC" className="h-9 md:h-10 w-auto" />
          <span className="sr-only">FLYBOI INC</span>
        </a>
        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="font-condensed text-[11px] tracking-[2px] uppercase text-white/80 hover:text-white transition-colors"
            >
              {l}
            </a>
          ))}
        </div>
        <a
          href="https://open.spotify.com/artist/1X6cBGnXpEpN7CmflLKmLV"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex font-condensed text-[11px] tracking-[2px] uppercase border border-white/25 px-4 py-2 text-white hover:bg-white hover:text-black transition-colors"
        >
          Listen on Spotify
        </a>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex flex-col gap-[5px] p-2 -mr-2"
        >
          <span
            className={`block w-6 h-px bg-white transition-transform ${open ? "translate-y-[6px] rotate-45" : ""}`}
          />
          <span className={`block w-6 h-px bg-white transition-opacity ${open ? "opacity-0" : ""}`} />
          <span
            className={`block w-6 h-px bg-white transition-transform ${open ? "-translate-y-[6px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-black/95 backdrop-blur-sm border-t border-white/10 overflow-hidden"
          >
            <div className="flex flex-col px-5 py-4">
              {links.map((l) => (
                <a
                  key={l}
                  href={`#${l.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="font-condensed text-[14px] tracking-[3px] uppercase text-white/85 py-3 border-b border-white/5"
                >
                  {l}
                </a>
              ))}
              <a
                href="https://open.spotify.com/artist/1X6cBGnXpEpN7CmflLKmLV"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-4 text-center font-condensed text-[12px] tracking-[3px] uppercase border border-white/30 px-4 py-3 text-white hover:bg-white hover:text-black transition-colors"
              >
                Listen on Spotify
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
