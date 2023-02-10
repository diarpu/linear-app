'use client'

import Link from 'next/link'
import Container from '@components/Container'
import Logo from '@components/icons/Logo'
import Button from '@components/Button'
import HamburgerIcon from '@components/HamburgerIcon'
import { useEffect, useState } from 'react'
import { cn } from 'utils/cn'

export default function Header() {
  const [hamburgerMenuIsopen, setHamburgerMenuIsopen] = useState(false)

  useEffect(() => {
    const html = document.querySelector('html')
    html?.classList.toggle('overflow-hidden', hamburgerMenuIsopen)
  }, [hamburgerMenuIsopen])

  useEffect(() => {
    const closeHamburgerNavigation = () => setHamburgerMenuIsopen(false)

    window.addEventListener('orientationchange', closeHamburgerNavigation)
    window.addEventListener('resize', closeHamburgerNavigation)

    return () => {
      window.removeEventListener('orientationchange', closeHamburgerNavigation)
      window.removeEventListener('resize', closeHamburgerNavigation)
    }
  }, [hamburgerMenuIsopen])

  return (
    <header className="fixed top-0 left-0 w-full border-b border-white-a08 backdrop-blur-[12px]">
      <Container className="flex h-[var(--navigation-height)] items-center px-6 md:px-8">
        <Link href="/" className="mr-6">
          <Logo />
        </Link>
        <div
          className={cn(
            'transition-[visibility]',
            hamburgerMenuIsopen ? 'visible' : 'invisible delay-500 md:visible'
          )}
        >
          <nav
            className={cn(
              'fixed left-0 top-[var(--navigation-height)] h-[calc(100vh_-_var(--navigation-height))] w-full bg-background transition-opacity duration-500 md:relative md:top-0 md:block md:h-auto md:w-auto md:translate-x-0 md:bg-transparent md:opacity-100',
              hamburgerMenuIsopen
                ? 'translate-x-0 opacity-100'
                : 'translate-x-[-100vw] opacity-0'
            )}
          >
            <ul
              className={cn(
                'flex h-full flex-col md:flex-row md:items-center md:border-none md:[&_a]:text-sm [&_li]:border-b [&_li]:border-grey-dark',
                'ease-in [&_a]:flex [&_a]:h-[var(--navigation-height)] [&_a]:w-full [&_a]:translate-y-5 [&_a]:items-center [&_a]:font-medium [&_a]:transition-[color,transform] [&_a]:duration-300 md:[&_a]:translate-y-0 [&_li]:ml-6 [&_a:hover]:text-grey',
                hamburgerMenuIsopen && '[&_a]:translate-y-0'
              )}
            >
              <li>
                <Link href="#">Features</Link>
              </li>
              <li>
                <Link href="#">Method</Link>
              </li>
              <li className="md:hidden lg:block">
                <Link href="#">Customers</Link>
              </li>
              <li className="md:hidden lg:block">
                <Link href="#">Changelog</Link>
              </li>
              <li className="md:hidden lg:block">
                <Link href="#">Integrations</Link>
              </li>
              <li>
                <Link href="#">Pricing</Link>
              </li>
              <li>
                <Link href="#">Company</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="ml-auto flex h-full items-center">
          <Link href="#" className="mr-6 text-sm">
            Log in
          </Link>
          <Button href="#">Sign Up</Button>
        </div>
        <div
          className="ml-6 cursor-pointer md:hidden"
          onClick={() => setHamburgerMenuIsopen((open) => !open)}
        >
          <span className="sr-only">Toggle Menu</span>
          <HamburgerIcon />
        </div>
      </Container>
    </header>
  )
}
