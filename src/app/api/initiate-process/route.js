import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import Process from '@/models/Process';

export async function POST(request) {
    try {
        await connectToDatabase();
        const data = await request.json();
        const newProcess = new Process(data);
        await newProcess.save();
        return NextResponse.json({ message: 'Process initiated successfully' }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: 'Error initiating process', error: error.message }, { status: 500 });
    }
}