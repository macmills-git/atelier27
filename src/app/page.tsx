import { HeroShowcase } from "@/components/home/HeroShowcase";
import { ClientLogoStrip } from "@/components/home/ClientLogoStrip";
import { StatsAndManifesto } from "@/components/home/StatsAndManifesto";
import { InteractiveDisciplineMatrix } from "@/components/home/InteractiveDisciplineMatrix";
import { DisciplinesCarousel } from "@/components/home/DisciplinesCarousel";
import { StudioSuiteGrid } from "@/components/home/StudioSuiteGrid";
import { EditorialTemplatesBand } from "@/components/home/EditorialTemplatesBand";
import { MethodologyGradientBand } from "@/components/home/MethodologyGradientBand";
import { QuickBriefAndTrust } from "@/components/home/QuickBriefAndTrust";
import { ParticleSphereCTA } from "@/components/home/ParticleSphereCTA";

export default function HomePage() {
  return (
    <>
      <HeroShowcase />
      <ClientLogoStrip />
      <StatsAndManifesto />
      <InteractiveDisciplineMatrix />
      <DisciplinesCarousel />
      <StudioSuiteGrid />
      <EditorialTemplatesBand />
      <MethodologyGradientBand />
      <QuickBriefAndTrust />
      <ParticleSphereCTA />
    </>
  );
}
