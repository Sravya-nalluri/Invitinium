import { useEffect, useRef } from 'react'

// Adds .is-visible once when the element scrolls into view.
export default function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el || !('IntersectionObserver' in window)) { el?.classList.add('is-visible'); return }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add('is-visible'); io.disconnect() }
    }, { threshold: 0.1 })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return ref
}
