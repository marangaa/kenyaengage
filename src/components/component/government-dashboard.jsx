import React, { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion } from "framer-motion";
import axios from 'axios';

const GovernmentDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    objectives: '',
    timeline: '',
    stakeholders: '',
  });
  const [notificationData, setNotificationData] = useState({
    content: '',
    channels: '',
    schedule: '',
  });

  const [engagementData, setEngagementData] = useState({
    forumTopic: '',
    surveyQuestions: '',
    liveQADate: '',
  });
  const [feedbackData, setFeedbackData] = useState({
    summary: '',
    recommendations: '',
  });
  const [notes, setNotes] = useState('');


  const sections = [
    "overview",
    "initiate",
    "notifications",
    "engagement",
    "data-collection",
    "redrafting",
    "feedback"
  ];

  const getNextSection = (current) => {
    const currentIndex = sections.indexOf(current);
    return sections[(currentIndex + 1) % sections.length];
  };

  const SectionCard = ({ title, description, children }) => (
      <Card className="w-full">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>{children}</CardContent>
      </Card>
  );

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNotificationChange = (e) => {
    setNotificationData({ ...notificationData, [e.target.name]: e.target.value });
  };

  const submitFormData = async () => {
    try {
      await axios.post('/api/initiate-process', formData);
      alert('Process initiated successfully!');
    } catch (error) {
      console.error('Error submitting form data:', error);
      alert('Failed to initiate process. Please try again.');
    }
  };

  const submitNotificationData = async () => {
    try {
      await axios.post('/api/create-notification', notificationData);
      alert('Notification created successfully!');
    } catch (error) {
      console.error('Error submitting notification data:', error);
      alert('Failed to create notification. Please try again.');
    }
  };

  const submitEngagementData = async () => {
    try {
      await axios.post('/api/create-engagement', engagementData);
      alert('Engagement activities created successfully!');
    } catch (error) {
      console.error('Error submitting engagement data:', error);
      alert('Failed to create engagement activities. Please try again.');
    }
  };

  const submitFeedbackData = async () => {
    try {
      await axios.post('/api/submit-feedback', feedbackData);
      alert('Feedback submitted successfully!');
    } catch (error) {
      console.error('Error submitting feedback data:', error);
      alert('Failed to submit feedback. Please try again.');
    }
  };

  const saveNotes = async () => {
    try {
      await axios.post('/api/save-notes', { notes });
      alert('Notes saved successfully!');
    } catch (error) {
      console.error('Error saving notes:', error);
      alert('Failed to save notes. Please try again.');
    }
  };

  return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Public Participation Dashboard</h1>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-7">
            {sections.map((section) => (
                <TabsTrigger key={section} value={section} className="capitalize">
                  {section.replace("-", " ")}
                </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="overview">
            <SectionCard
                title="Welcome to Public Participation in Kenya 🇰🇪"
                description="Overview of ongoing and upcoming processes"
            >
              <p className="mb-4">Welcome to the Kenya Public Participation Dashboard. Here you can view and manage all public participation processes.</p>
              <div className="space-y-4 mb-4">
                <h3 className="text-lg font-semibold">Current Issues:</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Climate Change Adaptation Policy 🌍</li>
                  <li>Digital Economy Blueprint 💻</li>
                  <li>Universal Healthcare Coverage 🏥</li>
                  <li>Sustainable Urban Development Plan 🏙️</li>
                </ul>
              </div>
              <div className="bg-gray-100 p-4 rounded-md mb-4">
                <h3 className="text-lg font-semibold mb-2">Did you know?</h3>
                <p>Public participation is enshrined in Article 10 of the Kenyan Constitution as a national value and principle of governance.</p>
              </div>
              <Button onClick={() => setActiveTab(getNextSection("overview"))}>
                Start New Process
              </Button>
            </SectionCard>
          </TabsContent>


          <TabsContent value="initiate">
            <SectionCard
                title="Initiate Process"
                description="Create a new public participation process"
            >
              <div className="space-y-4">
                <Input
                    placeholder="Process Title"
                    name="title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                />
                <Textarea
                    placeholder="Description"
                    name="description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                />
                <Input
                    placeholder="Objectives"
                    name="objectives"
                    value={formData.objectives}
                    onChange={(e) => setFormData({ ...formData, objectives: e.target.value })}
                />
                <Input
                    type="date"
                    placeholder="Timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                />
                <Select
                    name="stakeholders"
                    value={formData.stakeholders}
                    onValueChange={(value) => setFormData({ ...formData, stakeholders: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Stakeholders" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="government">Government Agencies 🏛️</SelectItem>
                    <SelectItem value="ngos">NGOs 🤝</SelectItem>
                    <SelectItem value="citizens">Citizens 👥</SelectItem>
                  </SelectContent>
                </Select>
                <Button>Upload Documents 📄</Button>
                <Button onClick={submitFormData} className="w-full bg-green-500 hover:bg-green-600 text-white">
                  Submit Process 🚀
                </Button>
              </div>
              <Button className="mt-4" onClick={() => setActiveTab(getNextSection("initiate"))}>
                Next: Set Up Notifications
              </Button>
            </SectionCard>
          </TabsContent>



          <TabsContent value="notifications">
            <SectionCard
                title="Notifications"
                description="Create and manage public notices"
            >
              <motion.div
                  className="space-y-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
              >
                <Textarea placeholder="Public Notice Content" name="content" onChange={handleNotificationChange} />
                <Select name="channels" onValueChange={(value) => setNotificationData({ ...notificationData, channels: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Notification Channels" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sms">SMS 📱</SelectItem>
                    <SelectItem value="email">Email 📧</SelectItem>
                    <SelectItem value="social">Social Media 💬</SelectItem>
                  </SelectContent>
                </Select>
                <Input type="datetime-local" placeholder="Schedule Notification" name="schedule" onChange={handleNotificationChange} />
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                  <Button onClick={submitNotificationData} className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                    Send Notifications 📢
                  </Button>
                </motion.div>
              </motion.div>
              <Button className="mt-4" onClick={() => setActiveTab(getNextSection("notifications"))}>
                Next: Set Up Engagement
              </Button>
            </SectionCard>
          </TabsContent>

          <TabsContent value="engagement">
            <SectionCard
                title="Public Engagement"
                description="Organize forums, surveys, and public hearings"
            >
              <motion.div
                  className="space-y-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
              >
                <Input
                    placeholder="Forum Topic"
                    value={engagementData.forumTopic}
                    onChange={(e) => setEngagementData({...engagementData, forumTopic: e.target.value})}
                />
                <Textarea
                    placeholder="Survey Questions"
                    value={engagementData.surveyQuestions}
                    onChange={(e) => setEngagementData({...engagementData, surveyQuestions: e.target.value})}
                />
                <Input
                    type="datetime-local"
                    placeholder="Schedule Public Hearing"
                    value={engagementData.liveQADate}
                    onChange={(e) => setEngagementData({...engagementData, liveQADate: e.target.value})}
                />
                <Button onClick={submitEngagementData} className="w-full bg-purple-500 hover:bg-purple-600 text-white">
                  Create Engagement Activities 🤝
                </Button>
              </motion.div>
              <Button className="mt-4" onClick={() => setActiveTab(getNextSection("engagement"))}>
                Next: Data Collection
              </Button>
            </SectionCard>
          </TabsContent>

          <TabsContent value="data-collection">
            <SectionCard
                title="Data Collection and Analysis"
                description="View and analyze participation data"
            >
              <motion.div
                  className="space-y-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
              >
                <Button className="w-full">View Analytics Dashboard 📊</Button>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Export Data" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="csv">CSV</SelectItem>
                    <SelectItem value="pdf">PDF</SelectItem>
                    <SelectItem value="json">JSON</SelectItem>
                  </SelectContent>
                </Select>
                <Button className="w-full">Generate Participation Report 📑</Button>
              </motion.div>
              <Button className="mt-4" onClick={() => setActiveTab(getNextSection("data-collection"))}>
                Next: Redrafting Process
              </Button>
            </SectionCard>
          </TabsContent>

          <TabsContent value="redrafting">
            <SectionCard
                title="Redrafting Process"
                description="Incorporate feedback and collaborate on drafts"
            >
              <motion.div
                  className="space-y-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
              >
                <Button className="w-full">Open Collaborative Editor 📝</Button>
                <Button className="w-full">View Change History 🕒</Button>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Review Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="in-progress">In Progress</SelectItem>
                    <SelectItem value="review">Under Review</SelectItem>
                    <SelectItem value="approved">Approved</SelectItem>
                  </SelectContent>
                </Select>
                <Textarea
                    placeholder="Process Notes"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                />
                <Button onClick={saveNotes} className="w-full bg-yellow-500 hover:bg-yellow-600 text-white">
                  Save Notes 📌
                </Button>
              </motion.div>
              <Button className="mt-4" onClick={() => setActiveTab(getNextSection("redrafting"))}>
                Next: Final Feedback
              </Button>
            </SectionCard>
          </TabsContent>

          <TabsContent value="feedback">
            <SectionCard
                title="Final Feedback and Reporting"
                description="Publish final draft and gather last round of feedback"
            >
              <motion.div
                  className="space-y-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
              >
                <Button className="w-full">Publish Final Draft for Public Review 📢</Button>
                <Textarea
                    placeholder="Feedback Summary"
                    value={feedbackData.summary}
                    onChange={(e) => setFeedbackData({...feedbackData, summary: e.target.value})}
                />
                <Textarea
                    placeholder="Recommendations"
                    value={feedbackData.recommendations}
                    onChange={(e) => setFeedbackData({...feedbackData, recommendations: e.target.value})}
                />
                <Button onClick={submitFeedbackData} className="w-full bg-green-500 hover:bg-green-600 text-white">
                  Submit Final Feedback 📨
                </Button>
                <Button className="w-full">Generate Comprehensive Report 📊</Button>
              </motion.div>
              <Button className="mt-4" onClick={() => setActiveTab(getNextSection("feedback"))}>
                Complete Process
              </Button>
            </SectionCard>
          </TabsContent>
        </Tabs>
      </div>
  );
};

export default GovernmentDashboard;