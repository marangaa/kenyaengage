/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/hZkplVwr8Gf
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Cabin } from 'next/font/google'
import { Bricolage_Grotesque } from 'next/font/google'

cabin({
  subsets: ['latin'],
  display: 'swap',
})

bricolage_grotesque({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function VideoFeed() {
  return (
    (<div className="flex flex-col h-screen">
      <header className="bg-background border-b flex items-center h-16 px-4 sm:px-6">
        <Link
          href="#"
          className="flex items-center gap-2 text-lg font-semibold"
          prefetch={false}>
          <TwitterIcon className="w-6 h-6" />
          <span className="sr-only">TikTok</span>
        </Link>
        <nav className="ml-auto flex items-center gap-4">
          <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
            For You
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
            Following
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
            LIVE
          </Link>
          <Button variant="ghost" size="icon" className="rounded-full">
            <PlusIcon className="w-5 h-5" />
            <span className="sr-only">Upload</span>
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Image
              src="/placeholder.svg"
              width={32}
              height={32}
              alt="Avatar"
              className="rounded-full"
              style={{ aspectRatio: "32/32", objectFit: "cover" }} />
            <span className="sr-only">Profile</span>
          </Button>
        </nav>
      </header>
      <main className="flex-1 overflow-y-auto">
        <div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
          <div className="relative group rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg"
              width={320}
              height={480}
              alt="Video Thumbnail"
              className="w-full h-full object-cover"
              style={{ aspectRatio: "320/480", objectFit: "cover" }} />
            <div
              className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Button variant="ghost" size="icon" className="text-white">
                <PlayIcon className="w-8 h-8" />
                <span className="sr-only">Play</span>
              </Button>
            </div>
            <div
              className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4 text-white">
              <div className="font-medium line-clamp-1">Introducing v0: Generative UI</div>
              <div className="text-xs text-muted-foreground line-clamp-1">Vercel</div>
            </div>
          </div>
          <div className="relative group rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg"
              width={320}
              height={480}
              alt="Video Thumbnail"
              className="w-full h-full object-cover"
              style={{ aspectRatio: "320/480", objectFit: "cover" }} />
            <div
              className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Button variant="ghost" size="icon" className="text-white">
                <PlayIcon className="w-8 h-8" />
                <span className="sr-only">Play</span>
              </Button>
            </div>
            <div
              className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4 text-white">
              <div className="font-medium line-clamp-1">Introducing the frontend cloud</div>
              <div className="text-xs text-muted-foreground line-clamp-1">Vercel</div>
            </div>
          </div>
          <div className="relative group rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg"
              width={320}
              height={480}
              alt="Video Thumbnail"
              className="w-full h-full object-cover"
              style={{ aspectRatio: "320/480", objectFit: "cover" }} />
            <div
              className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Button variant="ghost" size="icon" className="text-white">
                <PlayIcon className="w-8 h-8" />
                <span className="sr-only">Play</span>
              </Button>
            </div>
            <div
              className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4 text-white">
              <div className="font-medium line-clamp-1">Using Vercel KV with Svelte</div>
              <div className="text-xs text-muted-foreground line-clamp-1">Lee Robinson</div>
            </div>
          </div>
          <div className="relative group rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg"
              width={320}
              height={480}
              alt="Video Thumbnail"
              className="w-full h-full object-cover"
              style={{ aspectRatio: "320/480", objectFit: "cover" }} />
            <div
              className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Button variant="ghost" size="icon" className="text-white">
                <PlayIcon className="w-8 h-8" />
                <span className="sr-only">Play</span>
              </Button>
            </div>
            <div
              className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4 text-white">
              <div className="font-medium line-clamp-1">Loading UI with Next.js 13</div>
              <div className="text-xs text-muted-foreground line-clamp-1">Delba</div>
            </div>
          </div>
          <div className="relative group rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg"
              width={320}
              height={480}
              alt="Video Thumbnail"
              className="w-full h-full object-cover"
              style={{ aspectRatio: "320/480", objectFit: "cover" }} />
            <div
              className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Button variant="ghost" size="icon" className="text-white">
                <PlayIcon className="w-8 h-8" />
                <span className="sr-only">Play</span>
              </Button>
            </div>
            <div
              className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4 text-white">
              <div className="font-medium line-clamp-1">Introducing v0: Generative UI</div>
              <div className="text-xs text-muted-foreground line-clamp-1">Vercel</div>
            </div>
          </div>
          <div className="relative group rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg"
              width={320}
              height={480}
              alt="Video Thumbnail"
              className="w-full h-full object-cover"
              style={{ aspectRatio: "320/480", objectFit: "cover" }} />
            <div
              className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Button variant="ghost" size="icon" className="text-white">
                <PlayIcon className="w-8 h-8" />
                <span className="sr-only">Play</span>
              </Button>
            </div>
            <div
              className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4 text-white">
              <div className="font-medium line-clamp-1">Introducing the frontend cloud</div>
              <div className="text-xs text-muted-foreground line-clamp-1">Vercel</div>
            </div>
          </div>
          <div className="relative group rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg"
              width={320}
              height={480}
              alt="Video Thumbnail"
              className="w-full h-full object-cover"
              style={{ aspectRatio: "320/480", objectFit: "cover" }} />
            <div
              className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Button variant="ghost" size="icon" className="text-white">
                <PlayIcon className="w-8 h-8" />
                <span className="sr-only">Play</span>
              </Button>
            </div>
            <div
              className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4 text-white">
              <div className="font-medium line-clamp-1">Using Vercel KV with Svelte</div>
              <div className="text-xs text-muted-foreground line-clamp-1">Lee Robinson</div>
            </div>
          </div>
          <div className="relative group rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg"
              width={320}
              height={480}
              alt="Video Thumbnail"
              className="w-full h-full object-cover"
              style={{ aspectRatio: "320/480", objectFit: "cover" }} />
            <div
              className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Button variant="ghost" size="icon" className="text-white">
                <PlayIcon className="w-8 h-8" />
                <span className="sr-only">Play</span>
              </Button>
            </div>
            <div
              className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4 text-white">
              <div className="font-medium line-clamp-1">Loading UI with Next.js 13</div>
              <div className="text-xs text-muted-foreground line-clamp-1">Delba</div>
            </div>
          </div>
        </div>
      </main>
    </div>)
  );
}

function PlayIcon(props) {
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
      <polygon points="6 3 20 12 6 21 6 3" />
    </svg>)
  );
}


function PlusIcon(props) {
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
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>)
  );
}


function TwitterIcon(props) {
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
      <path
        d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>)
  );
}
