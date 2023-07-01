import { AnimatePresence, motion, useAnimate } from "framer-motion";
import { useEffect } from "react";
import useLockBody from "../Hooks/useLockBody";
import { cn } from "../lib/utils";
import Container from "./Container";

function MobileNavigation({ isOpen, onClose, links }) {
  useLockBody(isOpen)

  useEffect(() => {
    function handleEscape(event) {
      if (!event.key || event.key.toLowerCase() !== "escape") return

      onClose()
    }
    window.addEventListener("keydown", handleEscape)

    return () => {
      window.removeEventListener("keydown", handleEscape)
    }
  }, [onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          aria-controls="mobile-navigation-toggle"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1
          }}
          exit={{
            opacity: 0
          }}
          transition={{ duration: 0.5 }}
          className={cn(
            "border-b-0.5 py-4 border-gray-400 bg-gray-900/90 backdrop-blur-md supports-[backdrop-filter]:bg-gray-900/50"
          )}
        >
          <Container>
            <motion.nav
              aria-label="Primary"
              initial={{ y: 10 }}
              animate={{
                y: 0
              }}
              exit={{
                y: 10
              }}
              className="flex flex-col justify-center"
            >
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={() => onClose()}
                  className={cn(
                    "py-0.5 uppercase transition-[letter-spacing,color] text-gray-200",
                    "focus-visible:tracking-wider hover:tracking-wider focus-visible:text-gray-50 hover:text-gray-50 duration-200"
                  )}
                >
                  {link.label}
                </a>
              ))}
            </motion.nav>
          </Container>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function MobileNavigationOverlay({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          aria-hidden
          onClick={onClose}
          className="fixed inset-0 bg-gray-900/40 -z-10 backdrop-blur-sm"
        />
      )}
    </AnimatePresence>
  )
}
MobileNavigation.Overlay = MobileNavigationOverlay

function MobileNavigationToggle({ isOpen, onIsOpenChange }) {
  const [scope, animate] = useAnimate()

  useEffect(() => {
    animate([
      [
        "path[data-toggle-bar-top]",
        {
          y: isOpen
            ? ["0rem", "-0.325rem", "-0.325rem"]
            : ["-0.325rem", "-0.325rem", "0rem"],
          d: isOpen
            ? [
                "M3,17.25C3,16.839 3.339,16.5 3.75,16.5L20.25,16.5C20.661,16.5 21,16.839 21,17.25C21,17.661 20.661,18 20.25,18L3.75,18C3.339,18 3,17.661 3,17.25Z",
                "M3,17.25C3,16.839 3.339,16.5 3.75,16.5L20.25,16.5C20.661,16.5 21,16.839 21,17.25C21,17.661 20.661,18 20.25,18L3.75,18C3.339,18 3,17.661 3,17.25Z",
                "M5.636,10.886C5.927,10.595 6.406,10.595 6.697,10.886L18.364,22.553C18.655,22.844 18.655,23.323 18.364,23.614C18.073,23.905 17.594,23.905 17.303,23.614L5.636,11.947C5.345,11.656 5.345,11.177 5.636,10.886Z"
              ]
            : [
                "M5.636,10.886C5.927,10.595 6.406,10.595 6.697,10.886L18.364,22.553C18.655,22.844 18.655,23.323 18.364,23.614C18.073,23.905 17.594,23.905 17.303,23.614L5.636,11.947C5.345,11.656 5.345,11.177 5.636,10.886Z",
                "M3,17.25C3,16.839 3.339,16.5 3.75,16.5L20.25,16.5C20.661,16.5 21,16.839 21,17.25C21,17.661 20.661,18 20.25,18L3.75,18C3.339,18 3,17.661 3,17.25Z",
                "M3,17.25C3,16.839 3.339,16.5 3.75,16.5L20.25,16.5C20.661,16.5 21,16.839 21,17.25C21,17.661 20.661,18 20.25,18L3.75,18C3.339,18 3,17.661 3,17.25Z"
              ]
        },
        { duration: 0.3 }
      ],
      [
        "path[data-toggle-bar-middle]",
        { opacity: isOpen ? [1, 1, 0] : [0, 0, 1] },
        { at: "<", duration: 0.3 }
      ],
      [
        "path[data-toggle-bar-bottom]",
        {
          y: isOpen
            ? ["0rem", "0.325rem", "0.325rem"]
            : ["0.325rem", "0.325rem", "0rem"],
          d: isOpen
            ? [
                "M3,6.75C3,6.339 3.339,6 3.75,6L20.25,6C20.661,6 21,6.339 21,6.75C21,7.161 20.661,7.5 20.25,7.5L3.75,7.5C3.339,7.5 3,7.161 3,6.75Z",
                "M3,6.75C3,6.339 3.339,6 3.75,6L20.25,6C20.661,6 21,6.339 21,6.75C21,7.161 20.661,7.5 20.25,7.5L3.75,7.5C3.339,7.5 3,7.161 3,6.75Z",
                "M5.636,13.114C5.345,12.823 5.345,12.344 5.636,12.053L17.303,0.386C17.594,0.095 18.073,0.095 18.364,0.386C18.655,0.677 18.655,1.156 18.364,1.447L6.697,13.114C6.406,13.405 5.927,13.405 5.636,13.114Z"
              ]
            : [
                "M5.636,13.114C5.345,12.823 5.345,12.344 5.636,12.053L17.303,0.386C17.594,0.095 18.073,0.095 18.364,0.386C18.655,0.677 18.655,1.156 18.364,1.447L6.697,13.114C6.406,13.405 5.927,13.405 5.636,13.114Z",
                "M3,6.75C3,6.339 3.339,6 3.75,6L20.25,6C20.661,6 21,6.339 21,6.75C21,7.161 20.661,7.5 20.25,7.5L3.75,7.5C3.339,7.5 3,7.161 3,6.75Z",
                "M3,6.75C3,6.339 3.339,6 3.75,6L20.25,6C20.661,6 21,6.339 21,6.75C21,7.161 20.661,7.5 20.25,7.5L3.75,7.5C3.339,7.5 3,7.161 3,6.75Z"
              ]
        },
        { at: "<", duration: 0.3 }
      ]
    ])
  }, [isOpen, animate])

  return (
    <button
      type="button"
      id="mobile-navigation-toggle"
      aria-haspopup="menu"
      aria-expanded={isOpen}
      onClick={() => onIsOpenChange(!isOpen)}
      aria-label="Toggle navigation menu"
      className="text-white"
    >
      <span className="sr-only">Menu</span>
      <motion.svg
        ref={scope}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden
        className="h-7 w-7"
      >
        <motion.path
          fillRule="evenodd"
          d="M3,17.25C3,16.839 3.339,16.5 3.75,16.5L20.25,16.5C20.661,16.5 21,16.839 21,17.25C21,17.661 20.661,18 20.25,18L3.75,18C3.339,18 3,17.661 3,17.25Z"
          clipRule="evenodd"
          data-toggle-bar-top
        />
        <motion.path
          fillRule="evenodd"
          d="M3,12C3,11.589 3.339,11.25 3.75,11.25L20.25,11.25C20.661,11.25 21,11.589 21,12C21,12.411 20.661,12.75 20.25,12.75L3.75,12.75C3.339,12.75 3,12.411 3,12Z"
          clipRule="evenodd"
          data-toggle-bar-middle
        />
        <motion.path
          fillRule="evenodd"
          d="M3,6.75C3,6.339 3.339,6 3.75,6L20.25,6C20.661,6 21,6.339 21,6.75C21,7.161 20.661,7.5 20.25,7.5L3.75,7.5C3.339,7.5 3,7.161 3,6.75Z"
          clipRule="evenodd"
          data-toggle-bar-bottom
        />
      </motion.svg>
    </button>
  )
}
MobileNavigation.Toggle = MobileNavigationToggle

export default MobileNavigation;
