import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

type EmblaOptionsType = Parameters<typeof useEmblaCarousel>[0]

type CarouselProps = {
  children: React.ReactNode[]
  options?: EmblaOptionsType
  autoplayDelay?: number
  className?: string
  showDots?: boolean
}

export function EmblaCarousel({ 
  children, 
  options = { loop: true },
  autoplayDelay = 4000,
  className = "",
  showDots = true
}: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    options,
    [Autoplay({ delay: autoplayDelay, stopOnInteraction: false })]
  )
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  )

  const onInit = useCallback((emblaApi: any) => {
    setScrollSnaps(emblaApi.scrollSnapList())
  }, [])

  const onSelect = useCallback((emblaApi: any) => {
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onInit(emblaApi)
    onSelect(emblaApi)
    emblaApi.on('reInit', onInit)
    emblaApi.on('select', onSelect)
  }, [emblaApi, onInit, onSelect])

  // Pause autoplay on hover
  useEffect(() => {
    if (!emblaApi) return

    const autoplayPlugin = emblaApi.plugins().autoplay
    if (!autoplayPlugin) return

    const handleMouseEnter = () => autoplayPlugin.stop()
    const handleMouseLeave = () => autoplayPlugin.play()

    const emblaNode = emblaApi.rootNode()
    emblaNode.addEventListener('mouseenter', handleMouseEnter)
    emblaNode.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      emblaNode.removeEventListener('mouseenter', handleMouseEnter)
      emblaNode.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [emblaApi])

  return (
    <div className={className}>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {children.map((child, index) => (
            <div key={index} className="flex-[0_0_100%] md:flex-[0_0_33.333%] min-w-0 pl-4">
              {child}
            </div>
          ))}
        </div>
      </div>

      {showDots && scrollSnaps.length > 1 && (
        <div className="flex justify-center space-x-3 mt-8">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 transform hover:scale-125 ${
                index === selectedIndex
                  ? "bg-emerald-500 w-4"
                  : "bg-gray-300 dark:bg-gray-600 hover:bg-emerald-400 dark:hover:bg-emerald-500"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export function TestimonialsCarousel({ 
  children, 
  autoplayDelay = 4000,
  className = "",
  showDots = true
}: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: autoplayDelay, stopOnInteraction: false })]
  )
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  )

  const onInit = useCallback((emblaApi: any) => {
    setScrollSnaps(emblaApi.scrollSnapList())
  }, [])

  const onSelect = useCallback((emblaApi: any) => {
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onInit(emblaApi)
    onSelect(emblaApi)
    emblaApi.on('reInit', onInit)
    emblaApi.on('select', onSelect)
  }, [emblaApi, onInit, onSelect])

  // Pause autoplay on hover
  useEffect(() => {
    if (!emblaApi) return

    const autoplayPlugin = emblaApi.plugins().autoplay
    if (!autoplayPlugin) return

    const handleMouseEnter = () => autoplayPlugin.stop()
    const handleMouseLeave = () => autoplayPlugin.play()

    const emblaNode = emblaApi.rootNode()
    emblaNode.addEventListener('mouseenter', handleMouseEnter)
    emblaNode.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      emblaNode.removeEventListener('mouseenter', handleMouseEnter)
      emblaNode.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [emblaApi])

  return (
    <div className={className}>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {children.map((child, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0 pl-4">
              {child}
            </div>
          ))}
        </div>
      </div>

      {showDots && scrollSnaps.length > 1 && (
        <div className="flex justify-center space-x-3 mt-8">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 transform hover:scale-125 ${
                index === selectedIndex
                  ? "bg-emerald-500 w-4"
                  : "bg-gray-300 dark:bg-gray-600 hover:bg-emerald-400 dark:hover:bg-emerald-500"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}