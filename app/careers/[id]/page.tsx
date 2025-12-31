import JobDetailClient from "./client-page"

export function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }]
}

export default async function JobDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  return <JobDetailClient id={id} />
}
