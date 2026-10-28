import { useEffect, useRef, useState } from "react"
import { asciifyVideo } from "asciify-engine"

type AsciiVideoBgProps = {
  src?: string
  poster?: string
}

export function AsciiVideoBg({
  src = "/sea.mp4",
  poster = "/hero-frame.png",
}: AsciiVideoBgProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const hostRef = useRef<HTMLDivElement>(null)
  const [reducedMotion, setReducedMotion] = useState(false)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)")
    const sync = () => setReducedMotion(media.matches)
    sync()
    media.addEventListener("change", sync)
    return () => media.removeEventListener("change", sync)
  }, [])

  useEffect(() => {
    if (reducedMotion || failed) return

    const canvas = canvasRef.current
    const host = hostRef.current
    if (!canvas || !host) return

    let disposed = false
    let stop: (() => void) | undefined

    const video = document.createElement("video")
    video.src = src
    video.muted = true
    video.defaultMuted = true
    video.loop = true
    video.playsInline = true
    video.setAttribute("playsinline", "")
    video.setAttribute("webkit-playsinline", "")
    video.autoplay = true
    video.preload = "auto"
    video.crossOrigin = "anonymous"

    const ready = asciifyVideo(video, canvas, {
      fitTo: host,
      objectFit: "cover",
      objectPosition: "center",
      fontSize: 7,
      fps: 24,
      maxRenderDimension: 960,
      options: {
        charset: " .:-=+*#%@",
        colorMode: "grayscale",
        normalize: false,
        animationStyle: "none",
        hoverStrength: 0,
      },
    })
      .then((cleanup) => {
        if (disposed) cleanup()
        else stop = cleanup
        void video.play().catch(() => {
          /* autoplay may be blocked; asciify still paints once media is ready */
        })
      })
      .catch(() => {
        if (!disposed) setFailed(true)
      })

    return () => {
      disposed = true
      stop?.()
      video.pause()
      video.removeAttribute("src")
      video.load()
      void ready
    }
  }, [src, reducedMotion, failed])

  const showFallback = reducedMotion || failed

  return (
    <div
      ref={hostRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-black"
    >
      {showFallback ? (
        <img
          src={poster}
          alt=""
          className="h-full w-full object-cover opacity-40 grayscale"
        />
      ) : (
        <canvas
          ref={canvasRef}
          className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 opacity-55"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/85" />
    </div>
  )
}
