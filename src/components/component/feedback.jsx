"use client"
import React, { useState, useMemo } from "react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"

export function Feedback() {
    const [feedback, setFeedback] = useState({
        name: "",
        email: "",
        type: "suggestion",
        description: "",
        rating: 3,
    })
    const handleFeedbackChange = (field, value) => {
        setFeedback({ ...feedback, [field]: value })
    }
    const handleSubmitFeedback = (e) => {
        e.preventDefault()
        console.log("Civic participation feedback submitted:", feedback)
    }
    const [activeTab, setActiveTab] = useState("faqs")
    const [searchTerm, setSearchTerm] = useState("")
    const [participationRequests, setParticipationRequests] = useState([])
    const [newRequest, setNewRequest] = useState({
        name: "",
        email: "",
        county: "",
        topic: "",
    })
    const handleParticipationRequestChange = (field, value) => {
        setNewRequest({ ...newRequest, [field]: value })
    }
    const handleSubmitParticipationRequest = (e) => {
        e.preventDefault()
        setParticipationRequests([...participationRequests, newRequest])
        setNewRequest({
            name: "",
            email: "",
            county: "",
            topic: "",
        })
        console.log("Participation request submitted:", newRequest)
    }
    const faqs = [
        {
            question: "What is public participation in Kenya? 🇰🇪",
            answer: "Public participation is a constitutional right in Kenya that allows citizens to be involved in governance and decision-making processes at both national and county levels. 🗳️",
        },
        {
            question: "How can I participate in county budgeting processes? 💰",
            answer: "You can participate in county budgeting by attending public forums, submitting written proposals, or engaging with your ward representative. Check your county's website or local notice boards for announcements. 📊",
        },
        {
            question: "What is the role of a Member of County Assembly (MCA)? 🏛️",
            answer: "MCAs represent residents of a ward in the county assembly. They make laws, oversee the county executive, and represent the interests of their constituents. 🗣️",
        },
        {
            question: "How can I access information on government projects in my area? 🔍",
            answer: "You can access information through your local chief's office, county website, or by making a formal request under the Access to Information Act. County offices are required to provide public information upon request. 📂",
        },
    ]
    const filteredFaqs = useMemo(() => {
        return faqs.filter((faq) => faq.question.toLowerCase().includes(searchTerm.toLowerCase()));
    }, [searchTerm])
    return (
        <div className="w-full max-w-6xl mx-auto py-12 md:py-16 lg:py-20 px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h2 className="text-2xl font-bold mb-4 animate-bounce">Civic Participation Feedback 🇰🇪</h2>
                    <form onSubmit={handleSubmitFeedback} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="name">Name</Label>
                                <Input
                                    id="name"
                                    value={feedback.name}
                                    onChange={(e) => handleFeedbackChange("name", e.target.value)}
                                    required />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    value={feedback.email}
                                    onChange={(e) => handleFeedbackChange("email", e.target.value)}
                                    required />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="type">Feedback Type</Label>
                            <Select
                                id="type"
                                value={feedback.type}
                                onValueChange={(value) => handleFeedbackChange("type", value)}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select feedback type" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="suggestion">Suggestion 💡</SelectItem>
                                    <SelectItem value="complaint">Complaint 🚫</SelectItem>
                                    <SelectItem value="question">Question ❓</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="description">Feedback Description</Label>
                            <Textarea
                                id="description"
                                value={feedback.description}
                                onChange={(e) => handleFeedbackChange("description", e.target.value)}
                                rows={4}
                                required />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="rating">How would you rate your civic engagement experience?</Label>
                            <Slider
                                id="rating"
                                min={1}
                                max={5}
                                step={1}
                                value={[feedback.rating]}
                                onValueChange={(value) => handleFeedbackChange("rating", value[0])} />
                        </div>
                        <Button type="submit" className="animate-pulse">
                            Submit Feedback 🚀
                        </Button>
                    </form>
                </div>
                <div>
                    <h2 className="text-2xl font-bold mb-4 animate-bounce">Civic Education Center 🏛️</h2>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <Input
                                placeholder="Search civic education topics... 🔍"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)} />
                            <div className="flex gap-2">
                                <Button
                                    variant={activeTab === "faqs" ? "primary" : "outline"}
                                    onClick={() => setActiveTab("faqs")}>
                                    FAQs 📚
                                </Button>
                                <Button
                                    variant={activeTab === "resources" ? "primary" : "outline"}
                                    onClick={() => setActiveTab("resources")}>
                                    Resources 📖
                                </Button>
                                <Button
                                    variant={activeTab === "participate" ? "primary" : "outline"}
                                    onClick={() => setActiveTab("participate")}>
                                    Participate 🤝
                                </Button>
                            </div>
                        </div>
                        {activeTab === "faqs" && (
                            <div className="space-y-4">
                                {filteredFaqs.map((faq, index) => (
                                    <div key={index} className="space-y-2 animate-pulse">
                                        <h3 className="text-lg font-semibold">{faq.question}</h3>
                                        <p>{faq.answer}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                        {activeTab === "resources" && (
                            <div className="space-y-4">
                                <div className="space-y-2 animate-pulse">
                                    <h3 className="text-lg font-semibold">Constitution of Kenya Guide 📜</h3>
                                    <p>Learn about your rights and responsibilities as a Kenyan citizen. 🇰🇪</p>
                                    <Button variant="outline">Read Guide 📚</Button>
                                </div>
                                <div className="space-y-2 animate-pulse">
                                    <h3 className="text-lg font-semibold">County Government Structure 🏛️</h3>
                                    <p>Understand how your county government works and how you can engage with it. 🗳️</p>
                                    <Button variant="outline">Read Guide 📖</Button>
                                </div>
                            </div>
                        )}
                        {activeTab === "participate" && (
                            <div className="space-y-4">
                                <form onSubmit={handleSubmitParticipationRequest} className="space-y-4 animate-pulse">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="name">Name</Label>
                                            <Input
                                                id="name"
                                                value={newRequest.name}
                                                onChange={(e) => handleParticipationRequestChange("name", e.target.value)}
                                                required />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="email">Email</Label>
                                            <Input
                                                id="email"
                                                type="email"
                                                value={newRequest.email}
                                                onChange={(e) => handleParticipationRequestChange("email", e.target.value)}
                                                required />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="county">County</Label>
                                        <Input
                                            id="county"
                                            value={newRequest.county}
                                            onChange={(e) => handleParticipationRequestChange("county", e.target.value)}
                                            required />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="topic">Topic of Interest</Label>
                                        <Textarea
                                            id="topic"
                                            value={newRequest.topic}
                                            onChange={(e) => handleParticipationRequestChange("topic", e.target.value)}
                                            rows={4}
                                            required />
                                    </div>
                                    <Button type="submit" className="animate-pulse">
                                        Submit Participation Request 🚀
                                    </Button>
                                </form>
                                <div className="space-y-4 animate-pulse">
                                    <h3 className="text-lg font-semibold">Recent Participation Requests 📋</h3>
                                    <Table>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead>Topic</TableHead>
                                                <TableHead>County</TableHead>
                                                <TableHead>Date</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {participationRequests.map((request, index) => (
                                                <TableRow key={index}>
                                                    <TableCell>{request.topic}</TableCell>
                                                    <TableCell>{request.county}</TableCell>
                                                    <TableCell>{new Date().toLocaleDateString()}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
