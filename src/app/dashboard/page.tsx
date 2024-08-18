// src/app/dashboard/page.tsx (Client Component)
'use client';

import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import GovernmentDashboard from '@/components/component/government-dashboard';
import CitizenDashboard from '@/components/component/citizen-dashboard';

export default function Dashboard() {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === 'unauthenticated') {
            router.push('/login');
        }
    }, [status, router]);

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {session?.user?.role === 'GOVERNMENT_OFFICIAL' ? (
                <GovernmentDashboard />
            ) : (
                <CitizenDashboard />
            )}
        </div>
    );
}
