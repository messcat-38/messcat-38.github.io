import { AsciiVideoBg } from "@/components/ascii-video-bg"
import { SiteHeader } from "@/components/site-header"

export default function App() {
  return (
    <div className="relative min-h-screen text-white">
      <AsciiVideoBg />
      <SiteHeader />

      <main className="relative z-10">
        <section
          id="about"
          className="flex min-h-screen flex-col justify-center px-5 pt-24 md:px-8"
        >
          <div className="mx-auto w-full max-w-6xl animate-rise">
            <h1 className="font-display text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
              messcat
            </h1>
            <p className="mt-5 font-mono text-sm uppercase tracking-[0.22em] text-white/80 sm:text-base">
              Nerd Engineer
            </p>
            <p className="mt-6 max-w-xl font-sans text-base leading-relaxed text-white/70 sm:text-lg">
              Exploring minds, machines, and everything in between.
            </p>
          </div>
        </section>

        <section
          id="product"
          className="flex min-h-screen flex-col justify-center px-5 py-24 md:px-8"
        >
          <div className="mx-auto w-full max-w-6xl animate-rise-delay">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/50">
              Product
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              messmap
            </h2>
            <p className="mt-4 max-w-lg font-sans text-base text-white/70 sm:text-lg">
              日記から生成する思考拡張マインドマップ
            </p>
            <div className="mt-10 max-w-xl">
              <img
                src="/messmap.png"
                alt="messmap — circular cluster mind map"
                className="h-auto w-full max-w-md object-contain"
                width={886}
                height={793}
              />
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="flex min-h-[70vh] flex-col justify-center px-5 pb-28 pt-16 md:px-8"
        >
          <div className="mx-auto w-full max-w-6xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/50">
              Contact
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              GitHub
            </h2>
            <a
              href="https://github.com/messcat-38"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-block font-mono text-sm text-white underline decoration-white/30 underline-offset-4 transition-colors hover:decoration-white sm:text-base"
            >
              github.com/messcat-38
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}
