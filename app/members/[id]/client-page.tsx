"use client"

import { getMemberOrganization, memberOrganizations } from "@/lib/member-organizations"
import { Breadcrumb } from "@/components/breadcrumb"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Phone } from "lucide-react"
import Link from "next/link"
import { notFound, useParams } from "next/navigation"

export default function ClientPage() {
  const { id } = useParams<{ id: string }>()
  const organization = getMemberOrganization(id)

  if (!organization) {
    notFound()
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-background to-muted">
        <Breadcrumb
          items={[{ label: "Home", href: "/" }, { label: "Members", href: "/members" }, { label: organization.name }]}
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Organization Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{organization.name}</h1>
            <p className="text-lg text-muted-foreground">
              Total Members: <span className="text-primary font-semibold">{organization.committee.length}</span>
            </p>
          </div>

          {/* Committee Members Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {organization.committee.map((member, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-smooth hover:border-primary/50 group"
              >
                {/* Role Badge */}
                <div className="inline-block bg-gradient-to-r from-primary/10 to-accent/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-4 group-hover:from-primary/20 group-hover:to-accent/20 transition-smooth">
                  {member.role}
                </div>

                {/* Name */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-smooth">
                  {member.name}
                </h3>

                {/* Contact */}
                <div className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-smooth">
                  <Phone size={18} className="text-primary" />
                  <a href={`tel:${member.phone}`} className="font-medium hover:underline">
                    {member.phone}
                  </a>
                </div>

                {/* WhatsApp Link */}
                <a
                  href={`https://wa.me/${member.phone.replace(/[^\d+]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm bg-green-50 text-green-700 px-3 py-2 rounded-lg hover:bg-green-100 transition-smooth"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-1.536.925-2.777 2.25-3.514 3.807-.779 1.869-1.024 3.945-.703 5.959.385 2.501 1.581 4.759 3.452 6.38 1.871 1.62 4.638 2.571 7.439 2.571h.006c5.455 0 9.9-4.445 9.9-9.9 0-1.326-.286-2.614-.831-3.856-.528-1.179-1.437-2.24-2.561-3.036-1.124-.797-2.505-1.235-3.937-1.235z" />
                  </svg>
                  WhatsApp
                </a>
              </div>
            ))}
          </div>

          {/* Related Organizations */}
          <div className="mt-16 pt-12 border-t border-border">
            <h2 className="text-2xl font-bold text-foreground mb-6">Other Member Organizations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {memberOrganizations
                .filter((org) => org.id !== organization.id)
                .map((org) => (
                  <Link
                    key={org.id}
                    href={`/members/${org.id}`}
                    className="p-4 bg-card border border-border rounded-lg hover:border-primary hover:shadow-lg transition-smooth group"
                  >
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-smooth mb-2">
                      {org.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{org.committee.length} members</p>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
