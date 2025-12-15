"use client"

import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"
import { usePathname } from "next/navigation"

export function BreadcrumbNav() {
  const pathname = usePathname()
  
  if (pathname === "/") return null

  const paths = pathname.split("/").filter(Boolean)
  
  const breadcrumbs = [
    { label: "Home", href: "/" },
    ...paths.map((path, index) => ({
      label: path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, " "),
      href: `/${paths.slice(0, index + 1).join("/")}`,
    })),
  ]

  return (
    <nav className="bg-muted/30 border-b border-border py-3 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <ol className="flex items-center gap-2 text-sm">
          {breadcrumbs.map((crumb, index) => (
            <li key={crumb.href} className="flex items-center gap-2">
              {index > 0 && <ChevronRight size={16} className="text-muted-foreground" />}
              {index === 0 ? (
                <Link
                  href={crumb.href}
                  className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Home size={16} />
                  <span>{crumb.label}</span>
                </Link>
              ) : index === breadcrumbs.length - 1 ? (
                <span className="text-foreground font-medium">{crumb.label}</span>
              ) : (
                <Link href={crumb.href} className="text-muted-foreground hover:text-primary transition-colors">
                  {crumb.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  )
}
