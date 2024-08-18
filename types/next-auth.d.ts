// File: types/next-auth.d.ts

import NextAuth, { DefaultSession } from "next-auth"

declare module "next-auth" {
    interface Session extends DefaultSession {
        user: {
            id: string
            role?: string
        } & DefaultSession["user"]
    }

    interface User {
        role?: string
    }
}