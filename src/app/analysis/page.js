"use client";
import "@/app/globals.css";

import React, { useState, useEffect } from 'react';

const NextSteps = () => {
    const [visibleSteps, setVisibleSteps] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setVisibleSteps((prev) => (prev < steps.length ? prev + 1 : prev));
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const steps = [
        { title: 'Bill Analysis 📊', description: 'Dive deep into the upcoming bill with comprehensive analysis and insights. Prepare to make informed decisions.' },
        { title: 'Data Collection Automation 🤖', description: 'Automate data gathering to streamline your workflow and save precious time.' },
        { title: 'Swahili Translation ', description: 'Bringing inclusivity by providing full Swahili translations of all documents and interactions.' },
        { title: 'Bill Discussion Forum 💬', description: 'Engage in meaningful conversations and debates in our new discussion forum.' },
        { title: 'Learning Chatbot 🤓', description: 'Meet our AI-powered chatbot, here to guide you through every step of the process.' },
        { title: 'Notifications 📣', description: 'Stay in the loop with real-time updates and notifications directly to your device.' },
        { title: 'USSD Participation 📞', description: 'Participate effortlessly using your mobile device, even without internet access.' },
    ];

    return (
        <div className="next-steps">
            <h2>What&rsquo;s Next? 🤔</h2>
            <p>
                Over the next 6 weeks, we have an exciting journey ahead. Each week, a new feature will be unlocked, enhancing your experience and making participation easier and more impactful. Here&rsquo;s what you can look forward to:
            </p>
            <ul>
                {steps.slice(0, visibleSteps).map((step, index) => (
                    <li key={index} className="step">
                        <h3>{step.title}</h3>
                        <p>{step.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NextSteps;
