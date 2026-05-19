import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { LabelSection } from "@/components/site/LabelSection";
import { ArtistSection } from "@/components/site/ArtistSection";
import { CatalogueSection } from "@/components/site/CatalogueSection";
import { TourSection } from "@/components/site/TourSection";
import { YoutubeSection } from "@/components/site/YoutubeSection";
import { ContactSection } from "@/components/site/ContactSection";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "FLYBOI INC — Independent Record Label · Founded by Kizz Daniel" },
      {
        name: "description",
        content:
          "FLYBOI INC is the independent Afropop record label founded by Kizz Daniel in 2018. Home of Maverick, Barnabas, King of Love and the global hit BUGA.",
      },
      { property: "og:title", content: "FLYBOI INC — Independent Record Label" },
      {
        property: "og:description",
        content: "Independent Afropop label founded by Kizz Daniel. Catalogue, roster, tour dates and contact.",
      },
    ],
  }),
});

function Index() {
  return (
    <div className="bg-black text-white font-body min-h-screen">
      <Nav />
      <Hero />
      <LabelSection />
      <ArtistSection />
      <CatalogueSection />
      <YoutubeSection />
      <TourSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
