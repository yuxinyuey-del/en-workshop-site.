import type { CSSProperties, ReactNode } from 'react'
import { useInView } from '../hooks/useInView'

interface FadeSectionProps {
  children: ReactNode
  style?: CSSProperties
  className?: string
  delay?: number
}

export default function FadeSection({ children, style, className, delay = 0 }: FadeSectionProps) {
  const { ref, inView } = useInView()
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(12px)',
        transition: `opacity 0.5s ease-out ${delay}s, transform 0.5s ease-out ${delay}s`,
        ...style,
      }}
    >
      {children}
    </div>
  )
}
