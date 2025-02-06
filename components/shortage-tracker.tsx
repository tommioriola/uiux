import type React from "react"
import { Bell, BellOff } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

function FoilText({ children, isMyProduct }: { children: React.ReactNode; isMyProduct: boolean }) {
  return (
    <span
      className={`
        inline-block font-bold px-2 py-1 rounded
        ${isMyProduct ? "bg-foil-green" : "bg-foil-gold"}
        bg-[length:200%_100%] animate-shine text-slate-900
      `}
    >
      {children}
    </span>
  )
}

export default function ShortageTracker() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 p-6 flex justify-center">
      <div className="w-full max-w-3xl">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="inline-block bg-emerald-400 rounded-full px-8 py-3">
            <span className="text-slate-950 text-lg font-medium">I am [Janssen]</span>
          </div>
          <div className="flex gap-2">
            <Bell className="w-6 h-6 text-amber-400" />
            <BellOff className="w-6 h-6 text-slate-600" />
          </div>
        </div>

        {/* Legend */}
        <div className="mb-8">
          <h3 className="text-amber-400 text-xl mb-4">Legend</h3>
          <div className="grid grid-cols-3 gap-x-4 gap-y-2">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-amber-400" />
              <span>No alternatives</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-fuchsia-400" />
              <span>Different package size</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-cyan-400" />
              <span>Different strength</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-teal-400" />
              <span>Competitor match</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-emerald-400" />
              <span>Exact replacement</span>
            </div>
          </div>
        </div>

        {/* Shortages Section */}
        <div className="mb-8">
          <h2 className="text-amber-400 text-2xl font-bold mb-4">My shortages</h2>
          <Card className="bg-slate-900 border-amber-400/20 p-6">
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <span className="text-white font-medium">PAINAWAY 500 mg, 30 tabs</span>
                <div className="flex items-center gap-2 mt-2 sm:mt-0">
                  <span className="text-amber-400">2025-03-15 – 2025-04-15 (ongoing 20 days)</span>
                  <div className="flex gap-1">
                    <Badge variant="outline" className="bg-fuchsia-400/20 text-fuchsia-400 border-fuchsia-400/20">
                      •
                    </Badge>
                    <Badge variant="outline" className="bg-teal-400/20 text-teal-400 border-teal-400/20">
                      •
                    </Badge>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <span className="text-white font-medium">SLEEPWELL 10 mg, 28 caps</span>
                <div className="flex items-center gap-2 mt-2 sm:mt-0">
                  <span className="text-amber-400">2025-04-01 – 2025-05-01 (incoming 15 days)</span>
                  <Badge variant="outline" className="bg-cyan-400/20 text-cyan-400 border-cyan-400/20">
                    •
                  </Badge>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <span className="text-white font-medium">HEARTGUARD 25 mg, 90 tabs</span>
                <div className="flex items-center gap-2 mt-2 sm:mt-0">
                  <span className="text-amber-400">2025-03-01 – 2025-04-01 (ended 5 days ago)</span>
                  <Badge variant="outline" className="bg-amber-400/20 text-amber-400 border-amber-400/20">
                    •
                  </Badge>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Opportunities Section */}
        <div>
          <h2 className="text-amber-400 text-2xl font-bold mb-4">My opportunities</h2>
          <Card className="bg-slate-900 border-amber-400/20 p-6">
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <span className="text-white font-medium">N02BE01, PAINRELIEF, 500 mg, 30 tabs</span>
                <div className="flex items-center gap-2 mt-2 sm:mt-0">
                  <span className="text-amber-400">2025-04-01 – 2025-05-01 (25 days)</span>
                  <div className="flex gap-1">
                    <Badge variant="outline" className="bg-emerald-400/20 text-emerald-400 border-emerald-400/20">
                      •
                    </Badge>
                    <Badge variant="outline" className="bg-teal-400/20 text-teal-400 border-teal-400/20">
                      •
                    </Badge>
                  </div>
                </div>
              </div>
              <div className="pl-6 space-y-2 border-l-2 border-slate-800">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <span className="text-fuchsia-400 font-medium">PAINAWAY, 500 mg, 30 tabs</span>
                  <FoilText isMyProduct={true}>Available for replacement! [my product]</FoilText>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <span className="text-white font-medium">PAINEASER, 500 mg, 30 tabs</span>
                  <FoilText isMyProduct={false}>Available for replacement! [competitor product]</FoilText>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
} 