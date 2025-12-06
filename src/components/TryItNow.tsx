'use client'

import { useState } from 'react'
import { Sparkles, Copy, CheckCircle, Loader } from './Icons'
import Badge from './Badge'

export function TryItNow() {
  const [topic, setTopic] = useState('')
  const [tone, setTone] = useState('professional')
  const [result, setResult] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [isCopied, setIsCopied] = useState(false)

  const exampleResults = {
    professional: [
      "🚀 Transforming ideas into reality, one step at a time. Join us on this incredible journey as we push boundaries and create something extraordinary. #Innovation #Growth #Success",
      "💡 Success isn't just about reaching the destination—it's about the journey, the lessons, and the people who inspire us along the way. What's inspiring you today? #Motivation #Leadership",
      "🌟 Breaking barriers and setting new standards. We're committed to excellence in everything we do. Let's make today count! #Excellence #TeamWork #Achievement"
    ],
    casual: [
      "Hey everyone! 👋 Just wanted to share some exciting news - we're working on something amazing and can't wait to show you! Stay tuned 😊 #Excited #ComingSoon",
      "Coffee in hand ☕️, big dreams in mind 💭 Let's make today awesome! Who's with me? Drop a 🙌 below! #MondayMotivation #GoodVibes",
      "Living my best life and loving every moment! 🌈✨ Remember: you're doing better than you think. Keep going! #PositiveVibes #SelfCare"
    ],
    funny: [
      "Me: I should be productive today 🤔 Also me: *spends 3 hours watching cat videos* 😹 Who else can relate? #Relatable #Procrastination #CatVideos",
      "Plot twist: I'm not lazy, I'm just in energy-saving mode 🔋😴 It's called being environmentally conscious, okay? #MondayMood #Lazy #EcoFriendly",
      "My brain has too many tabs open 🧠💻 Some are frozen and I have no idea where the music is coming from 🎵😵 #Adulting #LifeProblems"
    ],
    inspirational: [
      "✨ Every great achievement starts with the decision to try. Today is your chance to begin something extraordinary. Believe in yourself and take that first step. 🌟 #Inspiration #BelieveInYourself #NewBeginnings",
      "🌅 The only limit to your impact is your imagination and commitment. Dream big, work hard, and never stop believing in what you can achieve. Your future self will thank you. 💪 #DreamBig #Motivation",
      "🦋 Growth happens outside your comfort zone. Embrace the challenges, celebrate the small wins, and keep moving forward. You're stronger than you know. #PersonalGrowth #Resilience #KeepGoing"
    ]
  }

  const generateCaption = () => {
    if (!topic.trim()) return

    setIsGenerating(true)
    setIsCopied(false)

    // Simulate AI generation with a delay
    setTimeout(() => {
      const results = exampleResults[tone as keyof typeof exampleResults]
      const randomResult = results[Math.floor(Math.random() * results.length)]
      
      // Personalize with the topic if provided
      const personalizedResult = topic.trim() 
        ? randomResult.replace(/(?:ideas|something|today)/gi, topic.trim().toLowerCase())
        : randomResult
      
      setResult(personalizedResult)
      setIsGenerating(false)
    }, 1500)
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(result)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      generateCaption()
    }
  }

  return (
    <section aria-label="Try it now" className="py-24 px-4 bg-gradient-to-br from-[#4A4FFF]/5 via-white to-purple-500/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-gradient-to-r from-[#4A4FFF]/10 to-purple-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-l from-indigo-500/10 to-[#4A4FFF]/10 rounded-full blur-3xl animate-float-delayed" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <Badge variant="primary" className="mb-6 inline-flex items-center gap-2 shadow-lg">
            <Sparkles size={14} />
            Try It Free
          </Badge>
          <h2 className="text-4xl md:text-6xl font-extrabold text-[#0E0E11] mb-6 tracking-tight">
            Test Drive Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4A4FFF] to-purple-600">AI Magic</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 font-medium">
            Generate a social media caption in seconds. No signup required.
          </p>
        </div>

        <div className="glass p-8 md:p-10 rounded-3xl shadow-premium">
          <div className="space-y-6">
            {/* Input Section */}
            <div>
              <label htmlFor="topic-input" className="block text-sm font-bold text-[#0E0E11] mb-2">
                What's your post about?
              </label>
              <input
                id="topic-input"
                type="text"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="e.g., launching a new product, morning motivation, weekend plans..."
                className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-[#4A4FFF] focus:outline-none transition-colors text-[#0E0E11] placeholder:text-gray-400"
                disabled={isGenerating}
              />
            </div>

            {/* Tone Selection */}
            <div>
              <label className="block text-sm font-bold text-[#0E0E11] mb-3">
                Choose your tone:
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { value: 'professional', label: '💼 Professional', emoji: '💼' },
                  { value: 'casual', label: '😊 Casual', emoji: '😊' },
                  { value: 'funny', label: '😂 Funny', emoji: '😂' },
                  { value: 'inspirational', label: '✨ Inspirational', emoji: '✨' }
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setTone(option.value)}
                    disabled={isGenerating}
                    className={`px-4 py-3 rounded-xl font-semibold transition-all duration-300 text-sm ${
                      tone === option.value
                        ? 'bg-gradient-to-r from-[#4A4FFF] to-purple-600 text-white shadow-lg'
                        : 'bg-white border-2 border-gray-200 text-gray-700 hover:border-[#4A4FFF] hover:text-[#4A4FFF]'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Generate Button */}
            <button
              onClick={generateCaption}
              disabled={isGenerating || !topic.trim()}
              className="w-full py-4 bg-gradient-to-r from-[#4A4FFF] via-[#5B5FFF] to-[#2E30B0] text-white font-bold rounded-xl shadow-premium-lg hover:shadow-premium hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {isGenerating ? (
                <>
                  <Loader size={20} className="animate-spin" />
                  Generating your caption...
                </>
              ) : (
                <>
                  <Sparkles size={20} />
                  Generate Caption
                </>
              )}
            </button>

            {/* Result Section */}
            {result && (
              <div className="mt-8 p-6 bg-gradient-to-br from-[#4A4FFF]/5 to-purple-500/5 rounded-xl border-2 border-[#4A4FFF]/20 animate-fade-in">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-sm font-bold text-[#4A4FFF]">✨ Your AI-Generated Caption:</span>
                  <button
                    onClick={copyToClipboard}
                    className="flex items-center gap-2 px-3 py-1.5 bg-white border-2 border-[#4A4FFF] text-[#4A4FFF] rounded-lg hover:bg-[#4A4FFF] hover:text-white transition-all duration-300 text-sm font-semibold"
                  >
                    {isCopied ? (
                      <>
                        <CheckCircle size={16} />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy size={16} />
                        Copy
                      </>
                    )}
                  </button>
                </div>
                <p className="text-[#0E0E11] leading-relaxed text-base whitespace-pre-wrap">
                  {result}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* CTA below the tool */}
        {result && (
          <div className="text-center mt-8 animate-fade-in">
            <p className="text-gray-600 mb-4 font-medium">
              Love it? Sign up to access all 8 AI tools and unlimited generations! 🚀
            </p>
            <a
              href="/signup"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#4A4FFF] to-purple-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Start Free - No Credit Card Required
              <Sparkles size={18} />
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
