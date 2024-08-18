/**
 * v0 by Vercel.
 * @see https://v0.dev/t/t8mfPLZuRBe
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Education() {
  const [activeTab, setActiveTab] = useState("overview")
  return (
      <div className="flex min-h-screen w-full flex-col bg-background">
        <header className="sticky top-0 z-40 flex h-16 items-center gap-4 border-b bg-background px-4 sm:px-6">
          <Link href="#" className="flex items-center gap-2 text-lg font-semibold" prefetch={false}>
            <ActivityIcon className="h-6 w-6" />
            <span>Kenyan Civic Education</span>
          </Link>
          <nav className="ml-auto hidden gap-4 sm:flex">
            <Button variant={activeTab === "overview" ? "secondary" : "ghost"} onClick={() => setActiveTab("overview")}>
              Overview
            </Button>
            <Button variant={activeTab === "modules" ? "secondary" : "ghost"} onClick={() => setActiveTab("modules")}>
              Modules
            </Button>
            <Button variant={activeTab === "videos" ? "secondary" : "ghost"} onClick={() => setActiveTab("videos")}>
              Videos
            </Button>
          </nav>
          <div className="ml-auto flex items-center gap-2">
            <Button variant="outline" size="sm" className="hidden sm:inline-flex">
              <SearchIcon className="h-4 w-4" />
              <span>Search</span>
            </Button>
            <Button variant="outline" size="sm" className="hidden sm:inline-flex">
              <SettingsIcon className="h-4 w-4" />
              <span>Settings</span>
            </Button>
            <Button variant="outline" size="icon" className="sm:hidden">
              <MenuIcon className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </header>
        {activeTab === "overview" && (
            <main className="flex-1 overflow-y-auto p-4 sm:p-6">
              <div className="mx-auto max-w-4xl">
                <Accordion type="single" collapsible>
                  <AccordionItem value="bills">
                    <AccordionTrigger className="text-xl font-medium">Bills</AccordionTrigger>
                    <AccordionContent>
                      <div className="grid gap-4">
                        <Card>
                          <CardHeader>
                            <CardTitle>The Affordable Housing Bill</CardTitle>
                            <CardDescription>
                              This bill aims to increase access to affordable housing for low-income Kenyans.
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="grid gap-2">
                              <div className="flex items-center justify-between">
                                <span className="font-medium">Status:</span>
                                <Badge variant="secondary">Pending</Badge>
                              </div>
                              <div className="flex items-center justify-between">
                                <span className="font-medium">Sponsor:</span>
                                <span>Hon. Jane Doe</span>
                              </div>
                              <div className="flex items-center justify-between">
                                <span className="font-medium">Last Action:</span>
                                <span>Referred to Housing Committee</span>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardHeader>
                            <CardTitle>The Environmental Protection Bill</CardTitle>
                            <CardDescription>
                              This bill aims to strengthen environmental regulations and enforcement in Kenya.
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="grid gap-2">
                              <div className="flex items-center justify-between">
                                <span className="font-medium">Status:</span>
                                <Badge variant="secondary">Pending</Badge>
                              </div>
                              <div className="flex items-center justify-between">
                                <span className="font-medium">Sponsor:</span>
                                <span>Hon. John Doe</span>
                              </div>
                              <div className="flex items-center justify-between">
                                <span className="font-medium">Last Action:</span>
                                <span>Referred to Environment Committee</span>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="committees">
                    <AccordionTrigger className="text-xl font-medium">Committees</AccordionTrigger>
                    <AccordionContent>
                      <div className="grid gap-4">
                        <Card>
                          <CardHeader>
                            <CardTitle>Housing Committee</CardTitle>
                            <CardDescription>
                              This committee is responsible for reviewing and overseeing legislation related to housing and
                              urban development.
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="grid gap-2">
                              <div className="flex items-center justify-between">
                                <span className="font-medium">Chair:</span>
                                <span>Hon. Jane Doe</span>
                              </div>
                              <div className="flex items-center justify-between">
                                <span className="font-medium">Members:</span>
                                <span>10 members</span>
                              </div>
                              <div className="flex items-center justify-between">
                                <span className="font-medium">Last Meeting:</span>
                                <span>2 weeks ago</span>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardHeader>
                            <CardTitle>Environment Committee</CardTitle>
                            <CardDescription>
                              This committee is responsible for reviewing and overseeing legislation related to
                              environmental protection and conservation.
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="grid gap-2">
                              <div className="flex items-center justify-between">
                                <span className="font-medium">Chair:</span>
                                <span>Hon. John Doe</span>
                              </div>
                              <div className="flex items-center justify-between">
                                <span className="font-medium">Members:</span>
                                <span>12 members</span>
                              </div>
                              <div className="flex items-center justify-between">
                                <span className="font-medium">Last Meeting:</span>
                                <span>1 month ago</span>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </main>
        )}
        {activeTab === "modules" && (
            <main className="flex-1 overflow-y-auto p-4 sm:p-6">
              <div className="mx-auto max-w-4xl">
                <Accordion type="single" collapsible>
                  <AccordionItem value="module1">
                    <AccordionTrigger className="text-xl font-medium">
                      Understanding the Legislative Process
                    </AccordionTrigger>
                    <AccordionContent>
                      <Card>
                        <CardHeader>
                          <CardTitle>Understanding the Legislative Process</CardTitle>
                          <CardDescription>
                            This module covers the steps involved in the legislative process, from bill introduction to
                            enactment.
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="grid gap-4">
                            <div>
                              <h3 className="text-lg font-medium">Bill Introduction</h3>
                              <p className="text-sm text-muted-foreground">
                                Learn how a bill is introduced in the National Assembly or Senate.
                              </p>
                              <Button variant="outline" size="sm" className="mt-2">
                                Start Module
                              </Button>
                            </div>
                            <div>
                              <h3 className="text-lg font-medium">Committee Review</h3>
                              <p className="text-sm text-muted-foreground">
                                Understand the role of committees in reviewing and amending bills.
                              </p>
                              <Button variant="outline" size="sm" className="mt-2">
                                Start Module
                              </Button>
                            </div>
                            <div>
                              <h3 className="text-lg font-medium">Floor Debate and Voting</h3>
                              <p className="text-sm text-muted-foreground">
                                Learn about the process of debating and voting on bills in the National Assembly and Senate.
                              </p>
                              <Button variant="outline" size="sm" className="mt-2">
                                Start Module
                              </Button>
                            </div>
                            <div>
                              <h3 className="text-lg font-medium">Presidential Assent</h3>
                              <p className="text-sm text-muted-foreground">
                                Discover the role of the President in the legislative process.
                              </p>
                              <Button variant="outline" size="sm" className="mt-2">
                                Start Module
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="module2">
                    <AccordionTrigger className="text-xl font-medium">Citizen Engagement in Legislation</AccordionTrigger>
                    <AccordionContent>
                      <Card>
                        <CardHeader>
                          <CardTitle>Citizen Engagement in Legislation</CardTitle>
                          <CardDescription>
                            This module explores the various ways citizens can participate in the legislative process.
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="grid gap-4">
                            <div>
                              <h3 className="text-lg font-medium">Public Participation</h3>
                              <p className="text-sm text-muted-foreground">
                                Learn about the opportunities for citizens to provide input on proposed legislation.
                              </p>
                              <Button variant="outline" size="sm" className="mt-2">
                                Start Module
                              </Button>
                            </div>
                            <div>
                              <h3 className="text-lg font-medium">Petitions and Memoranda</h3>
                              <p className="text-sm text-muted-foreground">
                                Understand the process of submitting petitions and memoranda to the National Assembly and
                                Senate.
                              </p>
                              <Button variant="outline" size="sm" className="mt-2">
                                Start Module
                              </Button>
                            </div>
                            <div>
                              <h3 className="text-lg font-medium">Advocacy and Lobbying</h3>
                              <p className="text-sm text-muted-foreground">
                                Explore effective strategies for advocating and lobbying on legislative issues.
                              </p>
                              <Button variant="outline" size="sm" className="mt-2">
                                Start Module
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </main>
        )}
        {activeTab === "videos" && (
            <main className="flex-1 overflow-y-auto">
              <div className="grid gap-4 p-4 sm:p-6">
                <div className="relative h-[80vh] w-full overflow-y-auto rounded-lg bg-muted/50">
                  <div className="absolute inset-0 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    <div className="relative flex flex-col items-start gap-2 rounded-lg bg-background p-4 shadow-sm transition-all hover:scale-105">
                      <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                        <img src="/placeholder.svg" alt="Video Thumbnail" fill className="object-cover" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <PlayIcon className="h-10 w-10 text-primary" />
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="rounded-full bg-[#55efc4] px-2 py-1 text-sm font-medium text-primary-foreground">
                          Civic
                        </div>
                        <div className="rounded-full bg-[#ffeaa7] px-2 py-1 text-sm font-medium text-primary-foreground">
                          Education
                        </div>
                      </div>
                      <h3 className="text-lg font-medium">Understanding the Legislative Process</h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        Learn about the steps involved in the legislative process, from bill introduction to enactment.
                      </p>
                      <div className="mt-auto flex items-center gap-2">
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <UserIcon className="h-4 w-4" />
                          <span>John Doe</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <ClockIcon className="h-4 w-4" />
                          <span>2 days ago</span>
                        </div>
                      </div>
                    </div>
                    <div className="relative flex flex-col items-start gap-2 rounded-lg bg-background p-4 shadow-sm transition-all hover:scale-105">
                      <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                        <img src="/placeholder.svg" alt="Video Thumbnail" fill className="object-cover" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <PlayIcon className="h-10 w-10 text-primary" />
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="rounded-full bg-[#55efc4] px-2 py-1 text-sm font-medium text-primary-foreground">
                          Civic
                        </div>
                        <div className="rounded-full bg-[#ffeaa7] px-2 py-1 text-sm font-medium text-primary-foreground">
                          Education
                        </div>
                      </div>
                      <h3 className="text-lg font-medium">Citizen Engagement in Legislation</h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        Explore the various ways citizens can participate in the legislative process.
                      </p>
                      <div className="mt-" />
                    </div>
                  </div>
                </div>
              </div>
            </main>
        )}
      </div>
  )
}

function ActivityIcon(props) {
  return (
      <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
      >
        <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
      </svg>
  )
}


function ClockIcon(props) {
  return (
      <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
  )
}


function MenuIcon(props) {
  return (
      <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
      >
        <line x1="4" x2="20" y1="12" y2="12" />
        <line x1="4" x2="20" y1="6" y2="6" />
        <line x1="4" x2="20" y1="18" y2="18" />
      </svg>
  )
}


function PlayIcon(props) {
  return (
      <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
      >
        <polygon points="6 3 20 12 6 21 6 3" />
      </svg>
  )
}


function SearchIcon(props) {
  return (
      <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
  )
}


function SettingsIcon(props) {
  return (
      <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
      >
        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
  )
}


function UserIcon(props) {
  return (
      <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
      >
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
  )
}