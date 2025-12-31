import Link from "next/link"

export function AboutPreview() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">About UHGPA</h2>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              United Hotel and Guesthouse Professionals Association, Nepal is a dedicated organization representing the
              hospitality sector in Nepal. Established in 2061 B.S., we serve as the umbrella organization for
              hotel and guesthouse businesses operating across key areas of Nepal.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Our service areas include Kalanki, Sundhara, Bagbazar, Koteshwor, Airport, Chabahil, New Bus Park, and
              Balaju. We are committed to advocating for hotel owners' rights, upholding service standards, and
              collaborating with tourism authorities to enhance the industry's overall development.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:opacity-90 transition"
            >
              Read Full Story
            </Link>
          </div>
          <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg p-8 border border-primary/20">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Leadership</h3>
              <p className="text-3xl font-bold text-primary mb-2">Mr. Saroj Ale</p>
              <p className="text-muted-foreground mb-4">President, UHGPA Nepal</p>
              <p className="text-muted-foreground">Phone: 9851170835</p>
              <p className="text-sm text-muted-foreground mt-6 italic">
                "Through unity, professionalism, and innovation, we can elevate Nepal's reputation as a world-class
                destination."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
