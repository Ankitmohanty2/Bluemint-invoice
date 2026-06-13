import Hero from "@/components/hero";
import { Features } from "@/components/features";
import { Solutions } from "@/components/solutions";
import { SocialProof } from "@/components/social-proof";
import { CtaSection } from "@/components/cta-section";

export default function Home() {
  return (
    <main>
      <Hero />
      <Solutions />
      <Features />
      <SocialProof />
      <CtaSection />
    </main>
  );
}
