// File: src/app/api/process/route.ts

import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
import prisma from '../../../lib/prisma'
import { Session } from 'next-auth'

export async function POST(req: Request) {
    const session = await getServerSession() as Session | null
    if (!session || session.user.role !== 'GOVERNMENT_OFFICIAL') {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await req.json()
    const { title, description, objectives, timeline, stakeholders, documents } = body

    try {
        const newProcess = await prisma.publicParticipationProcess.create({
            data: {
                title,
                description,
                objectives,
                timeline,
                stakeholders,
                documents,
                createdBy: { connect: { email: session.user.email } },
            }
        })
        return NextResponse.json(newProcess)
    } catch (error) {
        return NextResponse.json({ error: 'Failed to create process' }, { status: 500 })
    }
}

export async function GET() {
    try {
        const processes = await prisma.publicParticipationProcess.findMany()
        return NextResponse.json(processes)
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch processes' }, { status: 500 })
    }
}