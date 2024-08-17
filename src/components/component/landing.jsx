/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/W494s66ytvm
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Arimo } from 'next/font/google'

arimo({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function Landing() {
  return (
    (<div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">Civic Education Platform</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
          <Link
            href="/learn"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}>
            Learn
          </Link>
          <Link
            href="/participate"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}>
            Participate
          </Link>
          <Link
            href="/feedback"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}>
            Feedback
          </Link>
          <Link
            href="/analysis"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}>
            Analysis
          </Link>
          <Button
            variant="outline"
            className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-primary hover:text-primary-foreground transition-colors">
            <UserIcon className="h-4 w-4" />
            <span>Sign In</span>
          </Button>
          <Button
            className="flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
            <UserPlusIcon className="h-4 w-4" />
            <span>Sign Up</span>
          </Button>
        </nav>
      </header>
      <main className="flex-1">
        <section
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-[#f7f7f7] to-[#e6e6e6]">
          <div className="container px-4 md:px-6">
            <div
              className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1
                    className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Empower Your Civic Knowledge 🚀
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Discover your civic rights, engage with your community, and stay informed on important events in
                    Kenya. 🌍
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex flex-col items-start gap-2 animate-bounce">
                    <ScaleIcon className="h-8 w-8 text-primary" />
                    <h3 className="text-lg font-semibold">Civic Rights Awareness 📚</h3>
                    <p className="text-sm text-muted-foreground">
                      Understand your rights and responsibilities as a citizen. 🇰🇪
                    </p>
                  </div>
                  <div className="flex flex-col items-start gap-2 animate-bounce">
                    <UsersIcon className="h-8 w-8 text-primary" />
                    <h3 className="text-lg font-semibold">Community Engagement 👥</h3>
                    <p className="text-sm text-muted-foreground">
                      Connect with your local community and get involved. 🤝
                    </p>
                  </div>
                  <div className="flex flex-col items-start gap-2 animate-bounce">
                    <CalendarIcon className="h-8 w-8 text-primary" />
                    <h3 className="text-lg font-semibold">Civic Event Updates 📅</h3>
                    <p className="text-sm text-muted-foreground">Stay informed on upcoming civic events in Kenya. 🗓️</p>
                  </div>
                  <div className="flex flex-col items-start gap-2 animate-bounce">
                    <BookIcon className="h-8 w-8 text-primary" />
                    <h3 className="text-lg font-semibold">Educational Resources 📚</h3>
                    <p className="text-sm text-muted-foreground">Access a wealth of civic education materials. 🧠</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <img
                  src="/placeholder.svg"
                  width="500"
                  height="500"
                  alt="Hero"
                  className="mx-auto aspect-square overflow-hidden rounded-xl object-cover animate-pulse" />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div
              className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Users Say 👏</h2>
                <p
                  className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hear from real people who have benefited from our civic education platform. 🙌
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <Card className="p-4 bg-muted rounded-lg animate-bounce">
                  <div className="flex items-center gap-4">
                    <div
                      className="rounded-full w-12 h-12 bg-primary flex items-center justify-center text-primary-foreground">
                      JD
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">John Doe 😊</h3>
                      <p className="text-sm text-muted-foreground">Nairobi, Kenya</p>
                    </div>
                  </div>
                  <p className="mt-4 text-muted-foreground">
                    "This platform has been a game-changer for me. I now have a\n much better understanding of my civic
                    rights and how to get\n involved in my community." 💪
                  </p>
                </Card>
                <Card className="p-4 bg-muted rounded-lg animate-bounce">
                  <div className="flex items-center gap-4">
                    <div
                      className="rounded-full w-12 h-12 bg-primary flex items-center justify-center text-primary-foreground">
                      SA
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Sarah Auma 🙌</h3>
                      <p className="text-sm text-muted-foreground">Mombasa, Kenya</p>
                    </div>
                  </div>
                  <p className="mt-4 text-muted-foreground">
                    "I've learned so much about the political process and how\n to make my voice heard. This platform
                    has been invaluable\n for me." 🗳️
                  </p>
                </Card>
                <Card className="p-4 bg-muted rounded-lg animate-bounce">
                  <div className="flex items-center gap-4">
                    <div
                      className="rounded-full w-12 h-12 bg-primary flex items-center justify-center text-primary-foreground">
                      MK
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Michael Kioko 👏</h3>
                      <p className="text-sm text-muted-foreground">Kisumu, Kenya</p>
                    </div>
                  </div>
                  <p className="mt-4 text-muted-foreground">
                    "This platform has helped me stay informed on important\n civic events and issues. I feel much more
                    empowered to\n participate in my community." 🗣️
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <section
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-[#f7f7f7] to-[#e6e6e6]">
          <div className="container px-4 md:px-6">
            <div
              className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Upcoming Civic Events 📅</h2>
                <p
                  className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Stay informed on the latest civic events happening in Kenya. 🇰🇪
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <Card className="p-4 bg-muted rounded-lg animate-bounce">
                  <div className="flex items-center gap-4">
                    <CalendarIcon className="h-8 w-8 text-primary" />
                    <div>
                      <h3 className="text-lg font-semibold">Voter Registration Drive 🗳️</h3>
                      <p className="text-sm text-muted-foreground">June 15, 2023 - July 30, 2023</p>
                    </div>
                  </div>
                  <p className="mt-4 text-muted-foreground">
                    Join us for a voter registration drive in your local community. Make sure your voice is heard in the
                    upcoming elections. 💪
                  </p>
                </Card>
                <Card className="p-4 bg-muted rounded-lg animate-bounce">
                  <div className="flex items-center gap-4">
                    <CalendarIcon className="h-8 w-8 text-primary" />
                    <div>
                      <h3 className="text-lg font-semibold">Town Hall Meeting 🗣️</h3>
                      <p className="text-sm text-muted-foreground">July 20, 2023</p>
                    </div>
                  </div>
                  <p className="mt-4 text-muted-foreground">
                    Attend a town hall meeting with local government officials to discuss important civic issues in your
                    community. 🗳️
                  </p>
                </Card>
                <Card className="p-4 bg-muted rounded-lg animate-bounce">
                  <div className="flex items-center gap-4">
                    <CalendarIcon className="h-8 w-8 text-primary" />
                    <div>
                      <h3 className="text-lg font-semibold">Civic Education Workshop 📚</h3>
                      <p className="text-sm text-muted-foreground">August 5, 2023</p>
                    </div>
                  </div>
                  <p className="mt-4 text-muted-foreground">
                    Join us for a civic education workshop to learn more about your rights and responsibilities as a
                    citizen. 🇰🇪
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer
        className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 Civic Education Platform. All rights reserved. 🌍</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}>
            Terms of Service
          </Link>
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}>
            Privacy
          </Link>
        </nav>
      </footer>
    </div>)
  );
}

function BookIcon(props) {
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
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>)
  );
}


function CalendarIcon(props) {
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
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>)
  );
}


function MountainIcon(props) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>)
  );
}


function ScaleIcon(props) {
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
      <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
      <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
      <path d="M7 21h10" />
      <path d="M12 3v18" />
      <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
    </svg>)
  );
}


function UserIcon(props) {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>)
  );
}


function UserPlusIcon(props) {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <line x1="19" x2="19" y1="8" y2="14" />
      <line x1="22" x2="16" y1="11" y2="11" />
    </svg>)
  );
}


function UsersIcon(props) {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>)
  );
}
