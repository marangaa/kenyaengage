import React from 'react';

const NextSteps = () => {
  const steps = [
    { title: 'Bill Analysis 📊', description: 'Coming soon...' },
    { title: 'Data collection automation 🤖', description: 'Coming soon...' },
    { title: 'Kiswahili Translation 🇹🇿', description: 'Coming soon...' },
    { title: 'Bill discussion forum 💬', description: 'Coming soon...' },
    { title: 'Learning Chatbot 🤓', description: 'Coming soon...' },
    { title: 'Notifications 📣', description: 'Coming soon...' },
    { title: 'USSD Participation 📞', description: 'Coming soon...' },
  ];

  return (
    <div className="next-steps">
      <h2>What&rsquo;s Next? 🤔</h2>
      <ul>
        {steps.map((step, index) => (
          <li key={index}>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NextSteps;