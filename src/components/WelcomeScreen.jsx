import React, { useEffect, useState } from 'react'
import { Mascot } from 'page-mascot'

function WelcomeScreen({ onComplete }) {
  const [tapCount, setTapCount] = useState(0)
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  const pandaPositions = [
    { x: 0, y: 0 },
    { x: 70, y: -20 },
    { x: -55, y: -25 }
  ]

  const messages = [
    'Tap the panda to begin. ✦',
    'Oh, are you ready to go with us?',
    "Let's explore now. ✦"
  ]

  const handlePandaClick = () => {
    if (leaving) return

    const nextCount = tapCount + 1

    if (nextCount >= 3) {
      setTapCount(3)
      setLeaving(true)

      setTimeout(() => {
        onComplete()
      }, 900)

      return
    }

    setTapCount(nextCount)
  }

  const currentPosition =
    pandaPositions[Math.min(tapCount, pandaPositions.length - 1)]

  return (
    <section
      className={`
        fixed inset-0 z-[100]
        flex min-h-dvh flex-col
        overflow-hidden
        bg-[#35231A]
        text-foreground
        transition-all duration-700 ease-in-out
        ${
          leaving
            ? '-translate-y-full opacity-0'
            : 'translate-y-0 opacity-100'
        }
      `}
    >
      {/* Soft warm glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/3
          h-[300px]
          w-[300px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#C89A68]/10
          blur-3xl
        "
      />

      {/* Decorative stars */}
      <div className="pointer-events-none absolute left-[12%] top-[18%] text-[#C89A68]/70">
        ✦
      </div>

      <div className="pointer-events-none absolute right-[15%] top-[28%] text-[#C89A68]/50">
        ✧
      </div>

      <div className="pointer-events-none absolute bottom-[24%] left-[18%] text-[#C89A68]/50">
        ✦
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 text-center">

        {/* Heading */}
        <div className="mb-8">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#C89A68]">
            XN & MA
          </p>

          <h1 className="text-3xl font-medium tracking-tight text-[#F4EEE7] sm:text-4xl">
            Welcome To            
            <br />
            Our Travel Journal
          </h1>

          <p className="mx-auto mt-4 max-w-xs text-sm leading-6 text-[#F4EEE7]/65">
            This is where we share many beautiful memorable moments together.
          </p>
        </div>

        {/* Panda */}
        <div className="relative h-52 w-full max-w-sm">

          <div
            role="button"
            tabIndex={0}
            aria-label="Tap the panda"
            onClick={handlePandaClick}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault()
                handlePandaClick()
              }
            }}
            className="
              absolute
              left-1/2
              top-1/2
              cursor-pointer
              touch-manipulation
              select-none
              rounded-full
              transition-transform
              duration-500
              ease-out
            "
            style={{
              transform: `
                translate3d(
                  calc(-50% + ${currentPosition.x}px),
                  calc(-50% + ${currentPosition.y}px),
                  0
                )
              `,
            }}
          >
            <div className="animate-float">
              <Mascot
                directions="/mascots/panda-directions.webp"
                reactions="/mascots/panda-reactions.webp"
                size={100}
              />
            </div>
          </div>

        </div>

        {/* Message */}
        <div className="mt-5 min-h-[48px] px-4">
          <p
            key={tapCount}
            className="
              animate-fade-in
              text-sm
              leading-6
              text-[#F4EEE7]/50
            "
          >
            {messages[tapCount]}
          </p>
        </div>
      </div>

      <div className="relative z-10 mb-10 pb-7 text-center">
        <p className="text-[10px] uppercase tracking-[0.25em] text-[#F4EEE7]/30">
          ✦ wander · discover · remember ✦
        </p>
      </div>

    </section>
  )
}

export default WelcomeScreen