import { memberOrganizations } from "@/lib/member-organizations"
import ClientPage from "./client-page"

export function generateStaticParams() {
  return memberOrganizations.map((org) => ({
    id: org.id,
  }))
}

export default function MembersPage() {
  return <ClientPage />
}
