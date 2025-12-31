import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { Phone } from "lucide-react"

export default function AboutPage() {
  const leadership = [
    { name: "Mr. Suresh Baral", position: "President", phone: "9851040296" },
    { name: "Bhavishwar Dubey", position: "Senior Vice President", phone: "9841505124" },
    { name: "Mr. Jitendra Giri", position: "Vice President", phone: "9841222185" },
    { name: "Mr. Manohari Kandel", position: "Vice President", phone: "9851061883" },
    { name: "Mr. Vishnu Prasad Ghimire", position: "Vice President", phone: "9857030807" },
    { name: "Mr. Mahendra Rai", position: "Vice President", phone: "9849451826" },
    { name: "Mr. Kumar Shrestha", position: "Vice President", phone: "9851113741" },
    { name: "Mr. Vishnu Prasad Upadhyay", position: "Vice President", phone: "9851060656" },
    { name: "Mr. Sailendra Bikram Thapa", position: "General Secretary", phone: "9766868845" },
    { name: "Mr. Shivalal Giri", position: "Deputy General Secretary", phone: "9851069163" },
    { name: "Mr. Hari Prasad Aryal", position: "Secretary", phone: "9851217148" },
    { name: "Ms. Devaki Bhandari", position: "Secretary", phone: "9843108533" },
    { name: "Mr. Jayalal Shrestha", position: "Secretary", phone: "9841072094" },
    { name: "Mr. Lal Bahadur Bania (Anish)", position: "Secretary", phone: "9851108710" },
    { name: "Mr. Shalikram Thapa", position: "Treasurer", phone: "9841416176" },
    { name: "Mr. Lekhanath Kharal", position: "Assistant Treasurer", phone: "9851018353" },
  ]

  const members = [
    { name: "Mr. Numakant Pathak", phone: "9860571964" },
    { name: "Mr. Captain Adhikari", phone: "9766433991" },
    { name: "Mr. Nabin Adhikari", phone: "9846704805" },
    { name: "Mr. Santosh Paudel", phone: "9823513561" },
    { name: "Mr. Khemraj Upreti", phone: "9841814655" },
    { name: "Mr. Madhav Prasad Gautam", phone: "9855068315" },
    { name: "Mr. Sher Bahadur Bista", phone: "9844904684" },
    { name: "Ms. Sharada Khadka", phone: "9849425774" },
    { name: "Mr. Dil Bahadur Kshetri", phone: "9851082116" },
    { name: "Mr. Lalit Bahadur Shrestha", phone: "9841185560" },
    { name: "Ms. Renuka Yasko Limbu", phone: "9849384428" },
    { name: "Ms. Sujata Maya Tamang", phone: "9849492825" },
    { name: "Ms. Apsara Thapa", phone: "9840835193" },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "About" }]} />

        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 to-accent/10 border-b border-border">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-6">About UHGPA Nepal</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              United Hotel and Guesthouse Professionals Association, Nepal is a dedicated organization representing the
              hospitality sector in Nepal. Established in 2061 B.S., UHGPA serves as the umbrella organization for
              hotel and guesthouse businesses operating in key areas of Nepal.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Our service areas include Kalanki, Sundhara, Bagbazar, Koteshwor, Airport, Chabahil, New Bus Park, and
              Balaju. We are committed to advocating for hotel owners' rights, upholding service standards, and
              collaborating with tourism authorities to enhance the industry's overall development.
            </p>
            <div className="flex gap-4 mt-6">
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="text-lg font-semibold text-foreground">+977 01-4981882</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="text-lg font-semibold text-foreground">Kathmandu, Nepal</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/20 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Message from the President</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Dear Members, Partners, and Valued Stakeholders,
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                As President of United Hotel and Guesthouse Professionals Association, I am honored to lead an organization
                committed to the growth and excellence of our hospitality industry. Nepal, as a tourism hub,
                is home to a diverse range of hotels catering to global travelers.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our association advocates for hotel owners' rights, upholds service standards, and collaborates with
                tourism authorities to enhance the industry's overall development.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I encourage all hoteliers to actively engage with UHGPA's initiatives and utilize our resources to
                strengthen their businesses. Through unity, professionalism, and innovation, we can elevate Nepal's
                reputation as a world-class destination while contributing to Nepal's tourism growth.
              </p>
              <div>
                <p className="font-semibold text-foreground">Mr. Saroj Ale</p>
                <p className="text-muted-foreground">President, UHGPA Nepal</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  United Hotel and Guesthouse Professionals Association is dedicated to fostering excellence in the hospitality
                  industry. We unite hotel owners and managers to promote professional standards, sustainable practices,
                  and collaborative growth.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Our Vision</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To establish Kathmandu as the premier hospitality destination in South Asia through innovation,
                  quality service, and community engagement.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">What We Do</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Represent member interests to government and tourism organizations</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Organize training and professional development programs</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Facilitate networking and collaboration among members</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Promote sustainable tourism and community development</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Maintain and enhance quality standards in the industry</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-2">Central Community Leadership</h2>
              <p className="text-muted-foreground">Meet the dedicated leaders driving UHGPA forward</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {leadership.map((member, index) => (
                <div key={index} className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition">
                  <h3 className="font-bold text-foreground mb-1">{member.name}</h3>
                  <p className="text-primary font-semibold text-sm mb-3">{member.position}</p>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Phone size={16} />
                    <p>{member.phone}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-2">General Members</h2>
              <p className="text-muted-foreground">Valued contributors to our association</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {members.map((member, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-primary/5 to-accent/5 border border-border rounded-lg p-4"
                >
                  <p className="font-semibold text-foreground mb-2">{member.name}</p>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Phone size={14} />
                    <p>{member.phone}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
