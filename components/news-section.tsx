"use client"

import Link from "next/link"
import { Calendar, ArrowRight } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

interface NewsItem {
  id: number
  titleEn: string
  titleNe: string
  excerptEn: string
  excerptNe: string
  date: string
  categoryEn: string
  categoryNe: string
  image: string
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    titleEn: "Annual Hotel Summit 2024 Announced",
    titleNe: "वार्षिक होटेल शिखर सम्मेलन २०२४ की घोषणा",
    excerptEn: "Join us for an exclusive gathering of hotel industry leaders",
    excerptNe: "होटेल उद्योग नेताहरूको एक विशेष सभालाई हाम्रो साथ जोडिनुहोस्",
    date: "2024-11-15",
    categoryEn: "Events",
    categoryNe: "कार्यक्रमहरु",
    image: "/hotel-summit.jpg",
  },
  {
    id: 2,
    titleEn: "Tourism Recovery Initiative Launched",
    titleNe: "पर्यटन पुनः प्राप्ति पहल सुरु गरियो",
    excerptEn: "DHBA partners with government to boost tourism sector growth",
    excerptNe: "DHBA सरकारको साथ पर्यटन क्षेत्र वृद्धि बढाउन साझेदारी गरे",
    date: "2024-11-10",
    categoryEn: "News",
    categoryNe: "समाचार",
    image: "/tourism-initiative.jpg",
  },
  {
    id: 3,
    titleEn: "Member Spotlight: Excellence in Service",
    titleNe: "सदस्य स्पटलाइट: सेवामा उत्कृष्टता",
    excerptEn: "Meet the hotels leading by example in customer experience",
    excerptNe: "ग्राहक अनुभवमा उदाहरणको साथ नेतृत्व गर्ने होटलहरु भेट्नुहोस्",
    date: "2024-11-05",
    categoryEn: "News",
    categoryNe: "समाचार",
    image: "/hotel-excellence.jpg",
  },
]

export function NewsSection() {
  const { language, t } = useLanguage()

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">{t("home.news.title")}</h2>
            <p className="text-muted-foreground mt-2">{t("home.news.subtitle")}</p>
          </div>
          <Link
            href="/events"
            className="text-primary hover:text-primary/80 font-semibold flex items-center gap-2 transition"
          >
            {t("common.viewAll")}
            <ArrowRight size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {newsItems.map((item) => (
            <Link
              key={item.id}
              href={`/events/${item.id}`}
              className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition"
            >
              <div className="aspect-video bg-muted overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={language === "en" ? item.titleEn : item.titleNe}
                  className="w-full h-full object-cover group-hover:scale-105 transition"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {language === "en" ? item.categoryEn : item.categoryNe}
                  </span>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Calendar size={14} />
                    {new Date(item.date).toLocaleDateString(language === "en" ? "en-US" : "ne-NP")}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-card-foreground mb-2 group-hover:text-primary transition line-clamp-2">
                  {language === "en" ? item.titleEn : item.titleNe}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {language === "en" ? item.excerptEn : item.excerptNe}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
