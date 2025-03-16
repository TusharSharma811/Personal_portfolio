"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useMobile } from "@/hooks/use-mobile"

export function Header() {
  const isMobile = useMobile()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="text-xl font-bold">
            Tushar Sharma
          </Link>
        </div>
        {isMobile ? (
          <>
            <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
            {isMenuOpen && (
              <div className="absolute top-16 left-0 right-0 bg-background border-b z-50">
                <nav className="container flex flex-col py-4">
                  <a href="#about" className="py-2 hover:text-primary" onClick={toggleMenu}>
                    About
                  </a>
                  <a href="#skills" className="py-2 hover:text-primary" onClick={toggleMenu}>
                    Skills
                  </a>
                  <a href="#projects" className="py-2 hover:text-primary" onClick={toggleMenu}>
                    Projects
                  </a>
                  <a href="#experience" className="py-2 hover:text-primary" onClick={toggleMenu}>
                    Experience
                  </a>
                  <a href="#contact" className="py-2 hover:text-primary" onClick={toggleMenu}>
                    Contact
                  </a>
                </nav>
              </div>
            )}
          </>
        ) : (
          <nav className="flex items-center gap-6">
            <a href="#about" className="text-sm font-medium hover:text-primary">
              About
            </a>
            <a href="#skills" className="text-sm font-medium hover:text-primary">
              Skills
            </a>
            <a href="#projects" className="text-sm font-medium hover:text-primary">
              Projects
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-primary">
              Contact
            </a>
            <Button asChild>
              <a href="Resume (1).pdf" target="_blank">Resume</a>
            </Button>
          </nav>
        )}
      </div>
    </header>
  )
}

