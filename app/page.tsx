import Container from '@components/Container'
import { HeroSubtitle, HeroTitle } from 'ui'

export default function Home() {
  return (
    <main className="py-[var(--navigation-height)]">
      <Container>
        <div className="text-center">
          <HeroTitle>
            Linear is a better way <br />
            to build products
          </HeroTitle>
          <HeroSubtitle>
            Meet the new standard for modern software development. <br />
            Streamline issues, sprints, and product roadmaps.
          </HeroSubtitle>
          <img src="/images/hero-img.webp" alt="Hero Image" />
        </div>
      </Container>
    </main>
  )
}
