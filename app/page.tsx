'use client'

import { useState } from 'react'

import { About } from './_components/about'
import { Hero } from './_components/hero'
import { MobileNav } from './_components/mobile-nav'
import { Nav } from './_components/nav'

export default function Home() {
  const [nav, setNav] = useState(false)
  const openNav = () => setNav(true)
  const closeNav = () => setNav(false)

  return (
    <div className="">
      <MobileNav nav={nav} closeNav={closeNav} />
      <Nav openNav={openNav} />

      <Hero />
      <div className="relative z-[30]">
        <About />
      </div>
    </div>
  )
}
