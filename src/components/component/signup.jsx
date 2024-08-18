'use client'
import { useState } from 'react'
import { useRouter } from "next/navigation"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function SignUp() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('CITIZEN')
    const [error, setError] = useState('')
    const router = useRouter()

    async function handleSubmit(e) {
        e.preventDefault()
        setError('')

        const response = await fetch('/api/auth/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, password, role }),
        })

        if (response.ok) {
            router.push('/login')
        } else {
            const data = await response.json()
            setError(data.error || 'An error occurred during signup')
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="mx-auto max-w-md space-y-6">
                <div className="space-y-2 text-center">
                    <h1 className="text-3xl font-bold">Join the Movement🎉</h1>
                    <p className="text-muted-foreground">Sign up and start participating today!</p>
                </div>
                <div className="space-y-4 rounded-lg bg-background p-6 shadow-lg">
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        {error && <p className="text-red-500 text-center">{error}</p>}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="name" className="flex items-center gap-2">
                                    <span>Name</span>
                                    <span className="text-2xl">🙂</span>
                                </Label>
                                <Input
                                    id="name"
                                    placeholder="Enter your name"
                                    className="animate-[expand_0.3s_ease-out]"
                                    required
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email" className="flex items-center gap-2">
                                    <span>Email</span>
                                    <span className="text-2xl">✨</span>
                                </Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    className="animate-[expand_0.3s_ease-out]"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password" className="flex items-center gap-2">
                                <span>Password</span>
                                <span className="text-2xl">🔒</span>
                            </Label>
                            <Input
                                id="password"
                                type="password"
                                placeholder="Enter your password"
                                className="animate-[expand_0.3s_ease-out]"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="role" className="flex items-center gap-2">
                                <span>Role</span>
                                <span className="text-2xl">👤</span>
                            </Label>
                            <Select onValueChange={(value) => setRole(value)} defaultValue="CITIZEN">
                                <SelectTrigger>
                                    <SelectValue placeholder="Select your role" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="CITIZEN">Citizen</SelectItem>
                                    <SelectItem value="GOVERNMENT_OFFICIAL">Government Official</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <Button type="submit" className="w-full animate-[bounce_0.5s_ease-in-out_infinite]">
                            Sign Up 🚀
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    )
}