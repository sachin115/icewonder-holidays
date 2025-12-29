"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { X, Gift, Sparkles } from "lucide-react"

export function SpinWheel() {
  const [isOpen, setIsOpen] = useState(true)
  const [isSpinning, setIsSpinning] = useState(false)
  const [result, setResult] = useState<string | null>(null)
  const [rotation, setRotation] = useState(0)

  const prizes = ["10% OFF", "FREE VISA", "15% OFF", "HOTEL UPGRADE", "20% OFF", "FREE MEAL", "25% OFF", "BETTER LUCK"]

  const handleSpin = () => {
    if (isSpinning) return

    setIsSpinning(true)
    setResult(null)

    const spins = 5
    const randomIndex = Math.floor(Math.random() * prizes.length)
    const degreesPerSegment = 360 / prizes.length
    const finalRotation = rotation + spins * 360 + randomIndex * degreesPerSegment

    setRotation(finalRotation)

    setTimeout(() => {
      setIsSpinning(false)
      setResult(prizes[randomIndex])
    }, 4000)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
      <Card className="max-w-md w-full p-8 relative animate-scale-in">
        <Button variant="ghost" size="icon" className="absolute top-2 right-2" onClick={() => setIsOpen(false)}>
          <X className="h-5 w-5" />
        </Button>

        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Sparkles className="h-6 w-6 text-yellow-500 animate-pulse" />
            <h2 className="text-3xl font-bold">Spin to Win!</h2>
            <Sparkles className="h-6 w-6 text-yellow-500 animate-pulse" />
          </div>
          <p className="text-muted-foreground">Try your luck and win exciting discounts!</p>
        </div>

        {/* Wheel Container */}
        <div className="relative w-full aspect-square mb-6">
          {/* Pointer */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[30px] border-t-red-500 drop-shadow-lg" />
          </div>

          {/* Wheel */}
          <div
            className="relative w-full h-full rounded-full overflow-hidden shadow-2xl border-8 border-yellow-500"
            style={{
              transform: `rotate(${rotation}deg)`,
              transition: isSpinning ? "transform 4s cubic-bezier(0.17, 0.67, 0.12, 0.99)" : "none",
            }}
          >
            {prizes.map((prize, index) => {
              const rotation = (360 / prizes.length) * index
              const skew = 90 - 360 / prizes.length
              return (
                <div
                  key={index}
                  className="absolute top-0 left-1/2 w-1/2 h-1/2 origin-bottom-left"
                  style={{
                    transform: `rotate(${rotation}deg) skewY(${skew}deg)`,
                    backgroundColor: index % 2 === 0 ? "#f59e0b" : "#ef4444",
                  }}
                >
                  <div
                    className="flex items-center justify-center h-full text-white font-bold text-xs"
                    style={{
                      transform: `skewY(${-skew}deg) rotate(${360 / prizes.length / 2}deg)`,
                    }}
                  >
                    {prize}
                  </div>
                </div>
              )
            })}

            {/* Center Circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-full shadow-xl flex items-center justify-center border-4 border-yellow-500">
              <Gift className="h-8 w-8 text-yellow-500" />
            </div>
          </div>
        </div>

        {result && (
          <div className="mb-4 p-4 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-lg border-2 border-yellow-500 animate-bounce">
            <p className="text-center text-xl font-bold">
              You won: <span className="text-primary">{result}</span>
            </p>
          </div>
        )}

        <Button
          onClick={handleSpin}
          disabled={isSpinning}
          className="w-full h-14 text-lg font-bold bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600"
        >
          {isSpinning ? "Spinning..." : result ? "Spin Again!" : "SPIN NOW"}
        </Button>
      </Card>
    </div>
  )
}
