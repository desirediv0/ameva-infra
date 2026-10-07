import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { Intro } from "@/components/home/Intro";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { WhyUs } from "@/components/home/WhyUs";
import { StatsBand } from "@/components/home/StatsBand";
import { Process } from "@/components/home/Process";
import { Testimonials } from "@/components/home/Testimonials";
import { CtaBand } from "@/components/home/CtaBand";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Intro />
      <FeaturedProjects />
      <WhyUs />
      <StatsBand />
      <Process />
      <Testimonials />
      <CtaBand />
    </>
  );
}
