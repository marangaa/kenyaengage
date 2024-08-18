import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import Image from "next/image"

export function ModuleOverview() {
  return (
    (<div className="w-full max-w-5xl mx-auto py-12 md:py-20 lg:py-24">
      <div className="space-y-6 md:space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Mastering React: A Comprehensive E-Learning Module
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl">
            Dive deep into the world of React, the popular JavaScript library for building user interfaces. This
            comprehensive e-learning module covers everything from the basics to advanced concepts, equipping you with
            the knowledge and skills to become a proficient React developer.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="bg-muted rounded-lg p-4 md:p-6">
            <h2 className="text-xl font-semibold">Table of Contents</h2>
            <nav className="mt-4 space-y-2">
              <a href="#" className="flex items-center gap-2 text-primary hover:underline">
                <ChevronRightIcon className="h-4 w-4" />
                Introduction to React
              </a>
              <a href="#" className="flex items-center gap-2 text-primary hover:underline">
                <ChevronRightIcon className="h-4 w-4" />
                JSX and Components
              </a>
              <a href="#" className="flex items-center gap-2 text-primary hover:underline">
                <ChevronRightIcon className="h-4 w-4" />
                State and Lifecycle
              </a>
              <a href="#" className="flex items-center gap-2 text-primary hover:underline">
                <ChevronRightIcon className="h-4 w-4" />
                Hooks and Functional Components
              </a>
              <a href="#" className="flex items-center gap-2 text-primary hover:underline">
                <ChevronRightIcon className="h-4 w-4" />
                Routing and Navigation
              </a>
              <a href="#" className="flex items-center gap-2 text-primary hover:underline">
                <ChevronRightIcon className="h-4 w-4" />
                State Management with Redux
              </a>
              <a href="#" className="flex items-center gap-2 text-primary hover:underline">
                <ChevronRightIcon className="h-4 w-4" />
                Testing and Debugging
              </a>
              <a href="#" className="flex items-center gap-2 text-primary hover:underline">
                <ChevronRightIcon className="h-4 w-4" />
                Deployment and Best Practices
              </a>
            </nav>
          </div>
          <div className="col-span-2 space-y-6">
            <div>
              <h2 className="text-2xl font-semibold">Introduction to React</h2>
              <div className="mt-4 space-y-4">
                <p>
                  In this section, learn the fundamentals of React, including its history, key features, and why
                  it has become a popular choice for building user interfaces. covering the basic concepts of
                  components, JSX, and the virtual DOM, setting the stage for the rest of the module.
                </p>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <Image
                      src="/placeholder.svg"
                      alt="React logo"
                      className="rounded-lg object-cover"
                      width={300}
                      height={200}
                      style={{ aspectRatio: "300/200", objectFit: "cover" }} />
                    <div className="mt-2 text-center text-sm text-muted-foreground">React logo</div>
                  </div>
                  <div>
                    <Image
                      src="/placeholder.svg"
                      alt="React development"
                      className="rounded-lg object-cover"
                      width={300}
                      height={200}
                      style={{ aspectRatio: "300/200", objectFit: "cover" }} />
                    <div className="mt-2 text-center text-sm text-muted-foreground">React development</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-semibold">JSX and Components</h2>
              <div className="mt-4 space-y-4">
                <p>
                  In this section, dive into the core building blocks of React: JSX and components. learn
                  how to create and compose reusable components, manage their state, and handle user interactions.
                </p>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <image
                      src="/placeholder.svg"
                      alt="JSX example"
                      className="rounded-lg object-cover"
                      width="300"
                      height="200"
                      style={{ aspectRatio: "300/200", objectFit: "cover" }} />
                    <div className="mt-2 text-center text-sm text-muted-foreground">JSX example</div>
                  </div>
                  <div>
                    <imgage
                      src="/placeholder.svg"
                      alt="React components"
                      className="rounded-lg object-cover"
                      width="300"
                      height="200"
                      style={{ aspectRatio: "300/200", objectFit: "cover" }} />
                    <div className="mt-2 text-center text-sm text-muted-foreground">React components</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-semibold">State and Lifecycle</h2>
              <div className="mt-4 space-y-4">
                <p>
                  In this section, learn how to manage the state of your React components and understand the
                  component lifecycle.  explore techniques for updating the UI in response to user actions and
                  data changes.
                </p>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <image
                      src="/placeholder.svg"
                      alt="React state management"
                      className="rounded-lg object-cover"
                      width="300"
                      height="200"
                      style={{ aspectRatio: "300/200", objectFit: "cover" }} />
                    <div className="mt-2 text-center text-sm text-muted-foreground">React state management</div>
                  </div>
                  <div>
                    <imgage
                      src="/placeholder.svg"
                      alt="React lifecycle methods"
                      className="rounded-lg object-cover"
                      width="300"
                      height="200"
                      style={{ aspectRatio: "300/200", objectFit: "cover" }} />
                    <div className="mt-2 text-center text-sm text-muted-foreground">React lifecycle methods</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Downloadable Resources</h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                <a
                  href="#"
                  className="flex items-center gap-2 rounded-lg bg-muted px-4 py-2 text-primary hover:bg-accent hover:text-accent-foreground">
                  <FileTextIcon className="h-5 w-5" />
                  React Cheatsheet
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 rounded-lg bg-muted px-4 py-2 text-primary hover:bg-accent hover:text-accent-foreground">
                  <FileIcon className="h-5 w-5" />
                  React Best Practices
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 rounded-lg bg-muted px-4 py-2 text-primary hover:bg-accent hover:text-accent-foreground">
                  <FileImageIcon className="h-5 w-5" />
                  React Infographic
                </a>
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Engage with the Community</h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                <Button variant="outline" className="flex items-center gap-2">
                  <MessageSquareIcon className="h-5 w-5" />
                  Leave a Comment
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <Share2Icon className="h-5 w-5" />
                  Share on Twitter
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <Share2Icon className="h-5 w-5" />
                  Share on LinkedIn
                </Button>
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Interactive Quizzes</h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>React Fundamentals Quiz</CardTitle>
                    <CardDescription>Test your understanding of the core React concepts.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="w-full" />
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>React Hooks Challenge</CardTitle>
                    <CardDescription>Explore your knowledge of React Hooks.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="w-full" />
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Navigation</h2>
              <div className="flex justify-between">
                <Button variant="outline">
                  <ChevronLeftIcon className="h-5 w-5" />
                  Previous Section
                </Button>
                <Button variant="outline">
                  Next Section
                  <ChevronRightIcon className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>)
  );
}

function ChevronLeftIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="m15 18-6-6 6-6" />
    </svg>)
  );
}


function ChevronRightIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="m9 18 6-6-6-6" />
    </svg>)
  );
}


function FileIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    </svg>)
  );
}


function FileImageIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <circle cx="10" cy="12" r="2" />
      <path d="m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22" />
    </svg>)
  );
}


function FileTextIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10 9H8" />
      <path d="M16 13H8" />
      <path d="M16 17H8" />
    </svg>)
  );
}


function MessageSquareIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>)
  );
}


function Share2Icon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
      <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
    </svg>)
  );
}
