interface HeroProps {
  children: React.ReactNode
}

export const HeroTitle = ({ children }: HeroProps) => {
  return <h1 className="text-7xl my-6">{children}</h1>
}
