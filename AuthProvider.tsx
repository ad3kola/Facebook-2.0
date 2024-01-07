'use client'
import { SessionProvider } from 'next-auth/react'
import React from 'react'

interface SessionProps {
    name: string,
    image: string,
    email: string,
}

function AuthProvider({children}: {children: React.ReactNode}) {
  return (
    <SessionProvider>{children}</SessionProvider>
  )
}

export default AuthProvider