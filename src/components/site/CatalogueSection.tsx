import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Cover art sourced from official Apple Music / iTunes artwork (600x600)
// Catalogue mirrors Kizz Daniel's official Spotify artist page (1X6cBGnXpEpN7CmflLKmLV)
const releases = [
  {
    year: "2025",
    title: "To Be A Man",
    type: "Single",
    artist: "Kizz Daniel",
    cover:
      "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/f0/1b/dc/f01bdc23-2071-e9a3-2383-cb58b0dd2d2e/199316236736_cover.jpg/600x600bb.jpg",
    spotify: "https://open.spotify.com/artist/1X6cBGnXpEpN7CmflLKmLV",
    apple: "https://music.apple.com/us/album/to-be-a-man-single/1834032705",
    youtube: "https://www.youtube.com/@KizzDanielVEVO",
  },
  {
    year: "2025",
    title: "Police",
    type: "Single ft. Angélique Kidjo & Johnny Drille",
    artist: "Kizz Daniel",
    cover:
      "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/7a/72/14/7a721430-1ab3-00f0-361e-496069342983/199316031485_cover.jpg/600x600bb.jpg",
    spotify: "https://open.spotify.com/artist/1X6cBGnXpEpN7CmflLKmLV",
    apple: "https://music.apple.com/us/album/police-single/1804719797",
    youtube: "https://www.youtube.com/@KizzDanielVEVO",
  },
  {
    year: "2024",
    title: "TZA",
    type: "EP",
    artist: "Kizz Daniel",
    cover:
      "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/90/6a/00/906a00ed-e947-8a99-c5f5-b8ecf5cdb98c/197342533546_cover.jpg/600x600bb.jpg",
    spotify: "https://open.spotify.com/artist/1X6cBGnXpEpN7CmflLKmLV",
    apple: "https://music.apple.com/us/album/tza-ep/1734308060",
    youtube: "https://www.youtube.com/@KizzDanielVEVO",
  },
  {
    year: "2024",
    title: "Twe Twe",
    type: "Single (Remix ft. Davido)",
    artist: "Kizz Daniel",
    cover:
      "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/24/2f/cd/242fcd2e-7a95-a306-f7e1-0504e1aba738/197342471053_cover.jpg/600x600bb.jpg",
    spotify: "https://open.spotify.com/artist/1X6cBGnXpEpN7CmflLKmLV",
    apple: "https://music.apple.com/us/album/twe-twe-single/1726078503",
    youtube: "https://www.youtube.com/watch?v=Im_VleEWPDQ",
  },
];
const _archived = [
  {
    year: "2023",
    title: "Cough (Odo)",
    type: "Single ft. Becky G",
    artist: "Kizz Daniel",
    cover:
      "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/db/9d/9a/db9d9a2b-0f0a-7ff5-8e47-dbde5a2895b7/197342259804_cover.jpg/600x600bb.jpg",
    spotify: "https://open.spotify.com/artist/1X6cBGnXpEpN7CmflLKmLV",
    apple: "https://music.apple.com/us/album/cough-single/1692865098",
    youtube: "https://www.youtube.com/@KizzDanielVEVO",
  },
  {
    year: "2023",
    title: "Shu-Peru",
    type: "Single",
    artist: "Kizz Daniel",
    cover:
      "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/fb/6d/f6/fb6df6c2-5544-4ef7-1824-df4e8c1ceb2e/197342121095_cover.jpg/600x600bb.jpg",
    spotify: "https://open.spotify.com/artist/1X6cBGnXpEpN7CmflLKmLV",
    apple: "https://music.apple.com/us/album/shu-peru-single/1681900665",
    youtube: "https://www.youtube.com/@KizzDanielVEVO",
  },
  {
    year: "2023",
    title: "RTID (Rich Till I Die)",
    type: "Single",
    artist: "Kizz Daniel",
    cover:
      "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/db/f4/8e/dbf48e21-9959-4e48-7a93-944b1c15e0d5/194690941917_cover.jpg/600x600bb.jpg",
    spotify: "https://open.spotify.com/artist/1X6cBGnXpEpN7CmflLKmLV",
    apple: "https://music.apple.com/us/album/rtid-rich-till-i-die-single/1644400554",
    youtube: "https://www.youtube.com/@KizzDanielVEVO",
  },
  {
    year: "2022",
    title: "Buga (Lo Lo Lo)",
    type: "Single ft. Tekno",
    artist: "Kizz Daniel",
    cover:
      "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/23/6c/be/236cbeb3-259c-9996-31a2-7bef8ca10bcd/194690837296_cover.jpg/600x600bb.jpg",
    spotify: "https://open.spotify.com/track/4OcQ0WMKxJTBvqv4PcuVAY",
    apple: "https://music.apple.com/us/album/buga-lo-lo-lo-feat-tekno-single/1621384030",
    youtube: "https://www.youtube.com/watch?v=Y3DLPYBSpYE",
  },
  {
    year: "2021",
    title: "Lie",
    type: "Single",
    artist: "Kizz Daniel",
    cover:
      "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/06/1d/2f/061d2fd5-4831-e669-d172-78a07eb4a4d5/194690571121_cover.jpg/600x600bb.jpg",
    spotify: "https://open.spotify.com/artist/1X6cBGnXpEpN7CmflLKmLV",
    apple: "https://music.apple.com/us/album/lie-single/1576263604",
    youtube: "https://www.youtube.com/@KizzDanielVEVO",
  },
  {
    year: "2018",
    title: "No Bad Songz",
    type: "Studio Album",
    artist: "Kizz Daniel",
    cover:
      "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/02/8e/d7/028ed72a-5d84-653e-790d-c550033a6e80/5050580700604.jpg/600x600bb.jpg",
    spotify: "https://open.spotify.com/artist/1X6cBGnXpEpN7CmflLKmLV",
    apple: "https://music.apple.com/us/album/no-bad-songz/6769689937",
    youtube: "https://www.youtube.com/@KizzDanielVEVO",
  },
  {
    year: "2018",
    title: "One Ticket",
    type: "Single with Davido",
    artist: "Kizz Daniel",
    cover:
      "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/3d/e9/ab/3de9ab98-feda-5740-fa64-633093042d6e/5050580695832.jpg/600x600bb.jpg",
    spotify: "https://open.spotify.com/artist/1X6cBGnXpEpN7CmflLKmLV",
    apple: "https://music.apple.com/us/album/one-ticket-single/6768917451",
    youtube: "https://www.youtube.com/@KizzDanielVEVO",
  },
  {
    year: "2016",
    title: "New Era",
    type: "Debut Album",
    artist: "Kizz Daniel",
    cover:
      "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/56/12/64/56126475-5a72-f262-f227-a8666dce10a7/739042.jpg/600x600bb.jpg",
    spotify: "https://open.spotify.com/artist/1X6cBGnXpEpN7CmflLKmLV",
    apple: "https://music.apple.com/us/album/new-era/1817530403",
    youtube: "https://www.youtube.com/@KizzDanielVEVO",
  },
];

export function CatalogueSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="releases" ref={ref} className="bg-black py-28 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <p className="font-condensed text-[11px] tracking-[4px] uppercase text-brand-gold mb-3">
              The Catalogue
            </p>
            <h2
              className="font-display text-white leading-[0.9]"
              style={{ fontSize: "clamp(44px, 7vw, 84px)" }}
            >
              Releases
            </h2>
          </div>
          <p className="font-body text-[14px] text-white/45 max-w-sm">
            The latest four drops from the FLYBOI INC catalogue — available on every major
            DSP worldwide.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {releases.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.07 }}
              className="group"
            >
              <a
                href={r.spotify}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative aspect-square overflow-hidden bg-[#0a0a0a]"
                style={{ boxShadow: "0 20px 50px rgba(0,0,0,0.5)" }}
              >
                <img
                  src={r.cover}
                  alt={`${r.title} cover art`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </a>
              <div className="pt-4">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-display text-white tracking-wider text-[20px] leading-tight">
                    {r.title}
                  </span>
                  <span className="font-condensed text-[11px] tracking-[3px] uppercase text-brand-gold">
                    {r.year}
                  </span>
                </div>
                <div className="font-condensed text-[11px] tracking-[3px] uppercase text-white/55 mb-3">
                  {r.type}
                </div>
                <div className="flex gap-3 text-[11px] font-condensed tracking-[2px] uppercase">
                  <a
                    href={r.spotify}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/55 hover:text-white transition-colors"
                  >
                    Spotify
                  </a>
                  <span className="text-white/15">·</span>
                  <a
                    href={r.apple}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/55 hover:text-white transition-colors"
                  >
                    Apple
                  </a>
                  <span className="text-white/15">·</span>
                  <a
                    href={r.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/55 hover:text-white transition-colors"
                  >
                    YouTube
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
