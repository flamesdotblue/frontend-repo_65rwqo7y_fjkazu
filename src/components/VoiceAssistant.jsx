import { useEffect, useRef, useState } from 'react'
import { Mic, MicOff, Volume2 } from 'lucide-react'

export default function VoiceAssistant() {
  const [listening, setListening] = useState(false)
  const [supported, setSupported] = useState(true)
  const [transcript, setTranscript] = useState('')
  const recognitionRef = useRef(null)

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    if (!SpeechRecognition) {
      setSupported(false)
      return
    }
    const recognition = new SpeechRecognition()
    recognition.continuous = true
    recognition.interimResults = true
    recognition.lang = 'en-US'

    recognition.onresult = (event) => {
      let interim = ''
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const r = event.results[i]
        if (r.isFinal) setTranscript(prev => (prev + (prev ? ' ' : '') + r[0].transcript).trim())
        else interim += r[0].transcript
      }
      if (interim) setTranscript(prev => (prev + (prev ? ' ' : '') + interim).trim())
    }

    recognition.onend = () => {
      if (listening) {
        try { recognition.start() } catch (_) {}
      }
    }

    recognitionRef.current = recognition

    return () => {
      try { recognition.stop() } catch (_) {}
    }
  }, [listening])

  const toggleListening = () => {
    if (!supported) return
    const rec = recognitionRef.current
    if (!rec) return

    if (listening) {
      try { rec.stop() } catch (_) {}
      setListening(false)
    } else {
      setTranscript('')
      try { rec.start() } catch (_) {}
      setListening(true)
    }
  }

  return (
    <section id="voice" className="relative py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="rounded-3xl border border-gray-200/80 bg-white/70 backdrop-blur p-8 md:p-10 shadow-[0_10px_40px_-12px_rgba(79,70,229,0.25)]">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">Talk to the Orb</h2>
              <p className="mt-2 text-gray-600 max-w-prose">
                Tap the mic and speak. Your words will appear below in real-time.
              </p>
              {!supported && (
                <p className="mt-3 text-sm text-red-600">Your browser does not support the Web Speech API.</p>
              )}
            </div>

            <button
              onClick={toggleListening}
              className={`relative h-20 w-20 rounded-full grid place-items-center transition focus:outline-none ${listening ? 'bg-gradient-to-tr from-purple-600 via-blue-600 to-orange-500 text-white' : 'bg-gray-900 text-white hover:opacity-90'}`}
              aria-pressed={listening}
              aria-label={listening ? 'Stop listening' : 'Start listening'}
            >
              {/* animated aura ring */}
              <span className={`absolute inset-0 rounded-full ${listening ? 'animate-ping' : ''} bg-gradient-to-tr from-purple-500/40 via-blue-500/40 to-orange-400/40`} />
              <span className="relative z-10">
                {listening ? <Mic className="h-7 w-7" /> : <MicOff className="h-7 w-7" />}
              </span>
            </button>
          </div>

          <div className="mt-8 rounded-2xl border border-gray-200 bg-white/80 p-5">
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <Volume2 className={`h-4 w-4 ${listening ? 'text-purple-600' : ''}`} />
              <span>{listening ? 'Listening…' : 'Idle'}</span>
            </div>
            <p className="mt-3 min-h-[3.5rem] text-gray-800 leading-relaxed select-text break-words">
              {transcript || 'Say something to see live transcription here.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
