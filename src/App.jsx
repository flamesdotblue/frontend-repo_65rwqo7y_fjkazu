import Header from './components/Header'
import HeroSpline from './components/HeroSpline'
import VoiceAssistant from './components/VoiceAssistant'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-slate-50 text-gray-900">
      <Header />
      <main className="flex-1">
        <HeroSpline />
        <VoiceAssistant />
      </main>
      <Footer />
    </div>
  )
}

export default App
