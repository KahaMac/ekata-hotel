import { CentralCommittee } from "@/components/central-committee"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { FeaturedSection } from "@/components/featured-section"
import { NewsSection } from "@/components/news-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { AboutPreview } from "@/components/about-preview"
import { ContactInfoSection } from "@/components/contact-info-section"
import { ScrollProgress } from "@/components/scroll-progress"
import { FloatingActionButton } from "@/components/floating-action-button"
import { StatisticsSection } from "@/components/statistics-section"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollProgress />
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <StatisticsSection />
        <AboutPreview />
        <ContactInfoSection />
        <FeaturedSection />
        <CentralCommittee />
        <NewsSection />
        <NewsletterSection />
      </main>
      <Footer />
      <FloatingActionButton />
    </div>
  )
}
