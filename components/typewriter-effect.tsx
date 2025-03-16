"use client"

import { useState, useEffect, useRef } from "react"

interface TypewriterEffectProps {
  words: string[]
  typingSpeed?: number
  deletingSpeed?: number
  delayBetweenWords?: number
}

export function TypewriterEffect({
  words,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenWords = 1500,
}: TypewriterEffectProps) {
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [wordIndex, setWordIndex] = useState(0)
  const [isWaiting, setIsWaiting] = useState(false)

  // Use a ref to track if the component is mounted
  const isMounted = useRef(true)

  useEffect(() => {
    // Set isMounted to false when the component unmounts
    return () => {
      isMounted.current = false
    }
  }, [])

  useEffect(() => {
    const currentWord = words[wordIndex]

    // If waiting, don't do anything
    if (isWaiting) return

    const timeout = setTimeout(
      () => {
        // If component is unmounted, don't update state
        if (!isMounted.current) return

        if (!isDeleting) {
          // Typing
          setDisplayText(currentWord.substring(0, displayText.length + 1))

          // If we've typed the full word
          if (displayText.length === currentWord.length) {
            // Wait before starting to delete
            setIsWaiting(true)
            setTimeout(() => {
              if (isMounted.current) {
                setIsWaiting(false)
                setIsDeleting(true)
              }
            }, delayBetweenWords)
          }
        } else {
          // Deleting
          setDisplayText(currentWord.substring(0, displayText.length - 1))

          // If we've deleted the full word
          if (displayText.length === 0) {
            setIsDeleting(false)
            // Move to the next word
            setWordIndex((prev) => (prev + 1) % words.length)
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed,
    )

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, delayBetweenWords, isWaiting])

  return (
    <span className="inline-block min-h-[1.5em]">
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  )
}

