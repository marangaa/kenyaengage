'use client'
import { useState } from 'react'
import Link from "next/link"
import { useRouter } from "next/navigation"
import { signIn } from "next-auth/react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

export function SignIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const router = useRouter()

    async function handleSubmit(e) {
        e.preventDefault()
        setError('')

        const result = await signIn('credentials', {
            redirect: false,
            email,
            password,
        })

        if (result.error) {
            setError('Invalid email or password')
        } else {
            router.push('/dashboard')
        }
    }

    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
                <div>
                    <Link href="/" className="flex justify-center animate-bounce" prefetch={false}>
                        <MountainIcon className="h-12 w-12 text-primary" />
                    </Link>
                    <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-foreground">
                        Sign in to your account 🔐
                    </h2>
                </div>
                <form className="space-y-6" onSubmit={handleSubmit}>
                    {error && <p className="text-red-500 text-center">{error}</p>}
                    <div>
                        <Label htmlFor="email" className="sr-only">
                            Email address
                        </Label>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-foreground placeholder-gray-500 focus:z-10 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
                            placeholder="Email address 📧"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <Label htmlFor="password" className="sr-only">
                            Password
                        </Label>
                        <Input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            required
                            className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-foreground placeholder-gray-500 focus:z-10 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
                            placeholder="Password 🔑"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div>
                        <Button type="submit" className="w-full animate-bounce">
                            Sign in 🚀
                        </Button>
                    </div>
                </form>
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <Checkbox id="remember-me" name="remember-me" />
                        <Label htmlFor="remember-me" className="ml-2 block text-sm text-foreground">
                            Remember me 💾
                        </Label>
                    </div>
                    <div className="text-sm">
                        <Link
                            href="/signup"
                            className="font-medium text-primary hover:text-primary-foreground animate-bounce"
                            prefetch={false}
                        >
                            Don't have an account? Sign up 🎉
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

function MountainIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
        </svg>
    )
}