import { X } from 'lucide-react'

interface MobileNavProps {
  nav: boolean
  closeNav: () => void
}

export const MobileNav = ({ nav, closeNav }: MobileNavProps) => {
  const navAnimation = nav ? 'translate-x-0' : 'translate-x-[-100%]'

  return (
    <div
      className={`${navAnimation} fixed transform transition-all duration-300 top-0 left-0 right-0
  bottom-0 z-[1000000] bg-[#09101a]`}
    >
      <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center">
        <div className="nav-link-mobile">HOME</div>
        <div className="nav-link-mobile">SERVICES</div>
        <div className="nav-link-mobile">ABOUT</div>
        <div className="nav-link-mobile">PROJECT</div>
        <div className="nav-link-mobile">BLOG</div>
        <div className="nav-link-mobile">CONTACT</div>
      </div>
      <div
        onClick={closeNav}
        className="absolute z-[100000000] cursor-pointer top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-yellow-400"
      >
        <X />
      </div>
    </div>
  )
}
