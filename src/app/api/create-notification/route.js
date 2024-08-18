import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import Notification from '@/models/Notification';

export async function POST(request) {
    try {
        await connectToDatabase();
        const data = await request.json();
        const newNotification = new Notification(data);
        await newNotification.save();
        return NextResponse.json({ message: 'Notification created successfully' }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: 'Error creating notification', error: error.message }, { status: 500 });
    }
}