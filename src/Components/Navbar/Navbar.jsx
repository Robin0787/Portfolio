import { useState } from "react";
import style from "../../Components/ButtonLink.module.css";
import MobileNavigation from "../../Components/MobileNavigation";
import useScroll from "../../Hooks/UseScroll";
import useWindowSize from "../../Hooks/UseWindowSize";
import { cn } from "../../lib/utils";
import Container from "../Container";

const links = [
  {
    label: "About",
    href: "/#about"
  },
  {
    label: "Projects",
    href: "/#projects"
  },
  {
    label: "Contact",
    href: "/#contact"
  }
]

function Navbar({ isInitialBackgroundTransparent = false }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const windowSize = useWindowSize()
  const { scrollY } = useScroll()

  const hasScrolledPastHeroSection = scrollY > windowSize.height - 1
  const isBackgroundShown =
    !isInitialBackgroundTransparent ||
    hasScrolledPastHeroSection ||
    isMobileMenuOpen

  return (
    <header aria-label="Primary" className="fixed top-0 z-40 w-full">
      <div
        className={cn(
          "border-b-0.5 transition-colors duration-500 py-2",
          isBackgroundShown
            ? "border-gray-600 bg-gray-900/90 bg-[#140233] backdrop-blur-md supports-[backdrop-filter]:bg-gray-900/50"
            : "border-transparent bg-transparent"
        )}
      >
        <Container>
          <div className="grid grid-cols-3">
            <div className="flex items-center md:hidden">
              <MobileNavigation.Toggle
                isOpen={isMobileMenuOpen}
                onIsOpenChange={setIsMobileMenuOpen}
              />
            </div>
            <nav
              aria-label="Primary"
              className="hidden items-center gap-x-6 md:flex"
            >
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="relative py-1 text-sm uppercase text-gray-50 after:absolute after:inset-x-0 after:bottom-0 after:h-px after:scale-x-0 after:bg-gradient-to-r after:from-transparent after:via-gray-200 after:to-transparent after:transition-transform hover:after:-scale-x-125 focus-visible:after:-scale-x-125"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="flex items-center justify-center">
              <a href="#" className="text-gray-100 hidden sm:block">Welcome To My Portfolio</a>
            </div>
            <div className="flex items-center justify-end">
            <button
               className={`${style.btn}`}
            >
                Hit me up
            </button>
            </div>
          </div>
        </Container>
      </div>
      <MobileNavigation
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        links={links}
      />
      <MobileNavigation.Overlay
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </header>
  )
}

export default Navbar
