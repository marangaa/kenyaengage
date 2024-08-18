import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const GovernmentDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

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
            title="Welcome to Public Participation"
            description="Overview of ongoing and upcoming processes"
          >
            <p className="mb-4">Welcome to the Kenya Public Participation Dashboard. Here you can view and manage all public participation processes.</p>
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
              <Input placeholder="Process Title" />
              <Textarea placeholder="Description" />
              <Input placeholder="Objectives" />
              <Input type="date" placeholder="Timeline" />
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select Stakeholders" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="government">Government Agencies</SelectItem>
                  <SelectItem value="ngos">NGOs</SelectItem>
                  <SelectItem value="citizens">Citizens</SelectItem>
                </SelectContent>
              </Select>
              <Button>Upload Documents</Button>
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
            <div className="space-y-4">
              <Textarea placeholder="Public Notice Content" />
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select Notification Channels" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sms">SMS</SelectItem>
                  <SelectItem value="email">Email</SelectItem>
                  <SelectItem value="social">Social Media</SelectItem>
                </SelectContent>
              </Select>
              <Input type="datetime-local" placeholder="Schedule Notification" />
              <Button>Send Notifications</Button>
            </div>
            <Button className="mt-4" onClick={() => setActiveTab(getNextSection("notifications"))}>
              Next: Set Up Engagement
            </Button>
          </SectionCard>
        </TabsContent>

        <TabsContent value="engagement">
          <SectionCard
            title="Engagement"
            description="Manage forums, surveys, and live sessions"
          >
            <div className="space-y-4">
              <Button>Create Forum</Button>
              <Button>Create Survey</Button>
              <Button>Schedule Live Q&A</Button>
              <Textarea placeholder="Submission Portal Instructions" />
            </div>
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
            <div className="space-y-4">
              <Button>View Analytics Dashboard</Button>
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
              <Button>Generate Report</Button>
            </div>
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
            <div className="space-y-4">
              <Button>Open Collaborative Editor</Button>
              <Button>View Change History</Button>
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
            </div>
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
            <div className="space-y-4">
              <Button>Publish Final Draft</Button>
              <Textarea placeholder="Feedback Summary" />
              <Button>Generate Final Report</Button>
            </div>
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