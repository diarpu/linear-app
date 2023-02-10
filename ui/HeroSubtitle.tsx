interface HeroProps {
  children: React.ReactNode
}

export const HeroSubtitle = ({ children }: HeroProps) => {
  return <p className="text-2xl mb-12">{children}</p>
}
