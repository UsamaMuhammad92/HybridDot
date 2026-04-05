import { Hero, AboutPreview } from "@/sections/home";
import { Services } from "@/sections/Services";
import { Stats } from "@/sections/Stats";
import { CTA } from "@/sections/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Stats />
      <AboutPreview />
      <CTA />
    </>
  );
}
