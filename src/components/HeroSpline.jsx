import Spline from '@splinetool/react-spline'

export default function HeroSpline() {
  return (
    <section className="relative">
      <div className="relative h-[70vh] w-full">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Soft gradient aura overlay - won't block interaction */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/60" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[50vmin] w-[50vmin] rounded-full bg-gradient-to-tr from-purple-500/25 via-blue-500/20 to-orange-400/20 blur-3xl" />
        </div>
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center px-6">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-gray-900">
            Conversational AI Aura
          </h1>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            A modern, minimal, and futuristic orb animation that reacts to your voice.
          </p>
        </div>
      </div>
    </section>
  )
}
