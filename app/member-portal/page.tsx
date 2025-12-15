"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Users, Mail, Lock, Eye, EyeOff, Building2 } from "lucide-react"
import Link from "next/link"

export default function MemberPortalPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    organization: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Mock authentication - in real app, validate credentials
    router.push("/member-portal/dashboard")
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex items-center justify-center px-4 py-12 bg-gradient-to-br from-accent/5 via-background to-primary/5">
        <div className="w-full max-w-md">
          {/* Card */}
          <div className="bg-card border-2 border-border rounded-2xl p-8 shadow-2xl">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-foreground mb-2">
                Member Portal
              </h1>
              <p className="text-muted-foreground">
                Sign in to access your member dashboard
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Organization */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Organization
                </label>
                <div className="relative">
                  <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                  <select
                    required
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    className="w-full pl-11 pr-4 py-3 border-2 border-border rounded-xl focus:border-primary focus:outline-none transition-colors appearance-none cursor-pointer"
                  >
                    <option value="">Select your organization</option>
                    <option value="kalanki">Kalanki Hotel Business Association</option>
                    <option value="sundhara">Sundhara Hotel Business Association</option>
                    <option value="bagbazar">Bagbazar Hotel Business Association</option>
                    <option value="koteshwor">Koteshwor Hotel Business Association</option>
                    <option value="airport">Airport Hotel Business Association</option>
                    <option value="chabahil">Chabahil Hotel Business Association</option>
                    <option value="balaju">Balaju Hotel Business Association</option>
                  </select>
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-11 pr-4 py-3 border-2 border-border rounded-xl focus:border-primary focus:outline-none transition-colors"
                    placeholder="member@hotel.com"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="w-full pl-11 pr-12 py-3 border-2 border-border rounded-xl focus:border-primary focus:outline-none transition-colors"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* Remember & Forgot */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded border-border" />
                  <span className="text-sm text-muted-foreground">Remember me</span>
                </label>
                <Link href="/forgot-password" className="text-sm text-primary hover:underline font-semibold">
                  Forgot password?
                </Link>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-accent to-primary text-white py-4 rounded-xl font-bold hover:shadow-xl transition-all"
              >
                Sign In to Portal
              </button>
            </form>

            {/* Demo Credentials */}
            <div className="mt-6 p-4 bg-muted/50 rounded-xl">
              <p className="text-xs text-muted-foreground text-center mb-2">Demo Credentials:</p>
              <p className="text-xs text-center font-mono">
                <strong>Email:</strong> member@hotel.com<br />
                <strong>Password:</strong> member123
              </p>
            </div>

            {/* Registration Link */}
            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Not a member yet?{" "}
                <Link href="/membership" className="text-primary hover:underline font-semibold">
                  Apply for Membership →
                </Link>
              </p>
            </div>

            {/* Admin Link */}
            <div className="mt-4 text-center">
              <p className="text-sm text-muted-foreground">
                Are you an admin?{" "}
                <Link href="/login" className="text-primary hover:underline font-semibold">
                  Admin Login →
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
