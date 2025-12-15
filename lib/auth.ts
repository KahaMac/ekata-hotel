import { jwtDecode } from "jwt-decode"

export type UserRole = "admin" | "association_manager" | "member_hotel" | "user"

export interface AuthUser {
  id: string
  email: string
  role: UserRole
  name?: string
}

export async function loginUser(email: string, password: string): Promise<{ user: AuthUser; token: string }> {
  const response = await fetch("/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  })

  if (!response.ok) {
    throw new Error("Login failed")
  }

  return response.json()
}

export async function signupUser(
  email: string,
  password: string,
  name: string,
  role: UserRole = "user",
): Promise<{ user: AuthUser; token: string }> {
  const response = await fetch("/api/auth/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password, name, role }),
  })

  if (!response.ok) {
    throw new Error("Signup failed")
  }

  return response.json()
}

export function saveToken(token: string): void {
  if (typeof window !== "undefined") {
    localStorage.setItem("auth_token", token)
  }
}

export function getToken(): string | null {
  if (typeof window !== "undefined") {
    return localStorage.getItem("auth_token")
  }
  return null
}

export function removeToken(): void {
  if (typeof window !== "undefined") {
    localStorage.removeItem("auth_token")
  }
}

export function getCurrentUser(): AuthUser | null {
  const token = getToken()
  if (!token) return null

  try {
    const decoded = jwtDecode<AuthUser>(token)
    return decoded
  } catch {
    removeToken()
    return null
  }
}

export function isAuthenticated(): boolean {
  return getCurrentUser() !== null
}

export function hasRole(requiredRole: UserRole): boolean {
  const user = getCurrentUser()
  return user?.role === requiredRole
}

export function hasAnyRole(requiredRoles: UserRole[]): boolean {
  const user = getCurrentUser()
  return user ? requiredRoles.includes(user.role) : false
}
