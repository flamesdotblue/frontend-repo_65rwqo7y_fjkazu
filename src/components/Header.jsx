import { Sparkles } from 'lucide-react'

export default function Header() {
  return (
    <header className="w-full sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/50 bg-white/70 border-b border-white/40">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-purple-500 via-blue-500 to-orange-400 animate-pulse" />
          <span className="font-semibold tracking-tight text-gray-900">Aura</span>
        </div>
        <div className="hidden sm:flex items-center text-sm text-gray-600 gap-6">
          <span className="inline-flex items-center gap-2"><Sparkles className="h-4 w-4 text-purple-500" />Futuristic</span>
          <span className="hidden md:inline text-gray-400">•</span>
          <span className="hidden md:inline">Minimal</span>
        </div>
        <div className="flex items-center gap-2">
          <a href="#voice" className="px-3 py-1.5 rounded-full bg-gray-900 text-white text-sm hover:opacity-90 transition">Try voice</a>
        </div>
      </div>
    </header>
  )
}
