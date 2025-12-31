import { Phone, MapPin, Mail, Facebook } from "lucide-react"

export function ContactInfoSection() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-primary/5 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Get In Touch</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-start gap-4">
            <Phone className="text-primary mt-1 flex-shrink-0" size={24} />
            <div>
              <p className="font-semibold text-foreground mb-1">Phone</p>
              <p className="text-muted-foreground">+977 01-4981882</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <MapPin className="text-primary mt-1 flex-shrink-0" size={24} />
            <div>
              <p className="font-semibold text-foreground mb-1">Location</p>
              <p className="text-muted-foreground">Tilganga, Kathmandu, Nepal</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Facebook className="text-primary mt-1 flex-shrink-0" size={24} />
            <div>
              <p className="font-semibold text-foreground mb-1">Social Media</p>
              <p className="text-muted-foreground">Follow us on Facebook for updates</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Mail className="text-primary mt-1 flex-shrink-0" size={24} />
            <div>
              <p className="font-semibold text-foreground mb-1">Email</p>
              <p className="text-muted-foreground">contact@uhgpa.org.np</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
