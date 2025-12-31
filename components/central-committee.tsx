"use client"

import { motion } from "framer-motion"
import { Phone, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"

interface CommitteeMember {
  position: string
  name: string
  phone: string
  photo?: string
}

const members: CommitteeMember[] = [
  { position: "President", name: "Mr. Saroj Ale", phone: "9851170835", photo: "/placeholder-user.jpg" },
  { position: "Senior Vice President", name: "Bhavishwar Dubey", phone: "9841505124", photo: "/placeholder-user.jpg" },
  { position: "Vice President", name: "Mr. Jitendra Giri", phone: "9841222185", photo: "/placeholder-user.jpg" },
  { position: "General Secretary", name: "Mr. Sailendra Bikram Thapa", phone: "9766868845", photo: "/placeholder-user.jpg" },
  { position: "Treasurer", name: "Mr. Shalikram Thapa", phone: "9841416176", photo: "/placeholder-user.jpg" },
  { position: "Vice President", name: "Mr. Manohari Kandel", phone: "9851061883" },
  { position: "Vice President", name: "Mr. Vishnu Prasad Ghimire", phone: "9857030807" },
  { position: "Vice President", name: "Mr. Mahendra Rai", phone: "9849451826" },
  { position: "Vice President", name: "Mr. Kumar Shrestha", phone: "9851113741" },
  { position: "Vice President", name: "Mr. Vishnu Prasad Upadhyay", phone: "9851060656" },
  { position: "Deputy General Secretary", name: "Mr. Shivalal Giri", phone: "9851069163" },
  { position: "Secretary", name: "Mr. Hari Prasad Aryal", phone: "9851217148" },
  { position: "Secretary", name: "Ms. Devaki Bhandari", phone: "9843108533" },
  { position: "Secretary", name: "Mr. Jayalal Shrestha", phone: "9841072094" },
  { position: "Secretary", name: "Mr. Lal Bahadur Bania (Anish)", phone: "9851108710" },
  { position: "Assistant Treasurer", name: "Mr. Lekhanath Kharal", phone: "9851018353" },
  { position: "Member", name: "Mr. Numakant Pathak", phone: "9860571964" },
  { position: "Member", name: "Mr. Captain Adhikari", phone: "9766433991" },
  { position: "Member", name: "Mr. Nabin Adhikari", phone: "9846704805" },
  { position: "Member", name: "Mr. Santosh Paudel", phone: "9823513561" },
  { position: "Member", name: "Mr. Khemraj Upreti", phone: "9841814655" },
  { position: "Member", name: "Mr. Madhav Prasad Gautam", phone: "9855068315" },
  { position: "Member", name: "Mr. Sher Bahadur Bista", phone: "9844904684" },
  { position: "Member", name: "Ms. Sharada Khadka", phone: "9849425774" },
  { position: "Member", name: "Mr. Dil Bahadur Kshetri", phone: "9851082116" },
  { position: "Member", name: "Mr. Lalit Bahadur Shrestha", phone: "9841185560" },
  { position: "Member", name: "Ms. Renuka Yasko Limbu", phone: "9849384428" },
  { position: "Member", name: "Ms. Sujata Maya Tamang", phone: "9849492825" },
  { position: "Member", name: "Ms. Apsara Thapa", phone: "9840835193" },
]

// Top leadership positions to show on homepage
const topLeadership = members.slice(0, 5)

export function CentralCommittee() {
  const { t } = useLanguage()

  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-background to-secondary/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <span className="text-primary font-semibold text-sm tracking-widest uppercase">{t("members.title")}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{t("home.committee.title")}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("home.committee.subtitle")}</p>
        </motion.div>

        {/* Top Leadership - Show only 5 key positions */}
        <div className="mb-12">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-primary mb-8 flex items-center gap-3"
          >
            <div className="w-1 h-8 bg-gradient-to-b from-primary to-primary/50 rounded-full"></div>
            {t("home.committee.executive")}
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {topLeadership.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="p-6 relative z-10">
                  <div className="flex flex-col items-center text-center mb-4">
                    {/* Member Photo */}
                    <div className="relative w-24 h-24 mb-4 group-hover:scale-110 transition-transform duration-300">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent p-1">
                        <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-slate-900">
                          <Image
                            src={member.photo || "/placeholder-user.jpg"}
                            alt={member.name}
                            width={96}
                            height={96}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                      {member.position}
                    </p>
                    <h4 className="text-base font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {member.name}
                    </h4>
                  </div>

                  <div className="flex items-center justify-center gap-2 pt-4 border-t border-border/30">
                    <Phone className="w-4 h-4 text-primary/70 flex-shrink-0" />
                    <a
                      href={`tel:+977${member.phone}`}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 group-hover:font-medium"
                    >
                      +977 {member.phone}
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/about"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 group"
          >
            {t("common.viewAll")} {t("members.title")}
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
