import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import usePreviousState from "../Hooks/usePreviousState";

const typingSpeed = 0.125
const deleteSpeed = 0.1
const delayBeforeDelete = 1.1

const headingVariants = {
  visible: {
    transition: {
      staggerChildren: typingSpeed
    }
  },
  exit: {
    transition: {
      staggerChildren: deleteSpeed,
      staggerDirection: -1
    }
  }
}

const letterVariants = {
  enter: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0
  },
  exit: {
    opacity: 0,
    y: -30,
    x: 30,
    skew: 10,
    rotateZ: 25,
    scale: 1.5,
    filter: "blur(10px)"
  }
}

function TypingHeadings({ headings }) {
  const [typingMode, setTypingMode] = useState("typing")
  const [headingIndex, setHeadingIndex] = useState(0)
  const previousHeadingIndex = usePreviousState(0, headingIndex)

  const currentHeading = headings[headingIndex]
  const previousHeading = headings[previousHeadingIndex]

  const updateTypingModeTimer = useCallback(() => {
    if (typingMode === "typing") {
      const typeDuration =
        (currentHeading.length * typingSpeed + delayBeforeDelete) * 1000

      return setTimeout(() => {
        const nextHeadingIndex = (headingIndex + 1) % headings.length

        setHeadingIndex(nextHeadingIndex)
        setTypingMode("deleting")
      }, typeDuration)
    }

    const deleteDuration = previousHeading.length * deleteSpeed * 1000

    return setTimeout(() => {
      setTypingMode("typing")
    }, deleteDuration)
  }, [
    currentHeading.length,
    headingIndex,
    headings.length,
    previousHeading.length,
    typingMode
  ])

  useEffect(() => {
    const typingTimer = updateTypingModeTimer()

    return () => clearTimeout(typingTimer)
  }, [typingMode, updateTypingModeTimer])

  return (
    <div className="mb-4 text-4xl font-bold text-neutrals-50 md:text-5xl">
      <h2 className="sr-only">{currentHeading}</h2>
      <AnimatePresence mode="wait">
        <motion.h2
          aria-hidden
          key={currentHeading}
          variants={headingVariants}
          initial="enter"
          animate="visible"
          exit="exit"
        >
          {currentHeading.split("").map((char, index) => (
            <motion.span
              key={`${char}-${index}`}
              className="inline-block whitespace-pre"
              variants={letterVariants}
            >
              {char}
            </motion.span>
          ))}
        </motion.h2>
      </AnimatePresence>
    </div>
  )
}

export default TypingHeadings;
