import { cva, VariantProps } from 'class-variance-authority'
import Link from 'next/link'
import { cn } from 'utils/cn'

const buttonClasses = cva('rounded-full inline-flex items-center', {
  variants: {
    variant: {
      primary: 'bg-primary-gradient hover:text-shadow hover:shadow-primary',
      secondary: ''
    },
    size: {
      small: 'text-xs px-3 h-7',
      medium: 'text-sm px-4 h-8',
      large: 'text-base px-6 h-12'
    }
  },
  defaultVariants: {
    variant: 'primary',
    size: 'medium'
  }
})

interface LinkProps extends VariantProps<typeof buttonClasses> {
  children: React.ReactNode
  className?: string
  href: string
}

export default function Button({
  className,
  children,
  href,
  variant,
  size
}: LinkProps) {
  return (
    <Link
      className={cn(
        buttonClasses({
          variant,
          size
        }),
        className
      )}
      href={href}
    >
      {children}
    </Link>
  )
}
