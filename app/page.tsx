'use client'

import { useState } from 'react'

import { About } from './_components/about'
import { Hero } from './_components/hero'
import { MobileNav } from './_components/mobile-nav'
import { Nav } from './_components/nav'
import { Projects } from './_components/projects'
import { Services } from './_components/services'
import { Skills } from './_components/skills'
import { Testimonial } from './_components/testimonial'

export default function Home() {
  const [nav, setNav] = useState(false)
  const openNav = () => setNav(true)
  const closeNav = () => setNav(false)

  return (
    <div className="overflow-x-hidden">
      <div>
        <MobileNav nav={nav} closeNav={closeNav} />
        <Nav openNav={openNav} />
        <Hero />
      </div>
      <div className="relative z-[30]">
        <About />
        <Services />
        <Skills />
        <Projects />
        <Testimonial />
      </div>
    </div>
  )
}
