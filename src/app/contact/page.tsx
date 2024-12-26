import Link from 'next/link'
import { Github, Instagram } from 'lucide-react'

export default function Contact() {
  return (
    <main className="h-80 bg-transparent">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <Link 
            href="https://github.com/inRiza" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700 transition duration-300 ease-in-out"
          >
            <Github className="mr-2 h-5 w-5" />
            Code Together Through GitHub!
          </Link>
          <Link 
            href="https://instagram.com/rizainfird" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500 hover:opacity-90 transition duration-300 ease-in-out"
          >
            <Instagram className="mr-2 h-5 w-5" />
            Follow me on Instagram!
          </Link>
        </div>
      </div>
    </main>
  )
}
