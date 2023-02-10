import { cn } from 'utils/cn'

export default function Container({
  children,
  className
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn('mx-auto max-w-[1200px]', className)}>{children}</div>
  )
}
