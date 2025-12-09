import { Wifi, WifiOff } from "lucide-react"
import { cn } from "../../lib/utils"

interface StatusIndicatorProps {
    status: 'idle' | 'live'
    className?: string
}

export function StatusIndicator({ status, className }: StatusIndicatorProps) {
    const isLive = status === 'live'

    return (
        <div className={cn("flex items-center gap-2 px-3 py-1.5 rounded-full border bg-slate-950/50 backdrop-blur-sm",
            isLive ? "border-green-500/30 text-green-400" : "border-slate-700 text-slate-500",
            className
        )}>
            <span className={cn("relative flex h-2 w-2 mr-1")}>
                {isLive && (
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                )}
                <span className={cn("relative inline-flex rounded-full h-2 w-2", isLive ? "bg-green-500" : "bg-slate-500")}></span>
            </span>
            <span className="text-xs font-bold uppercase tracking-wider">
                {isLive ? "Live Connection" : "Offline"}
            </span>
            {isLive ? <Wifi className="h-3 w-3 ml-1" /> : <WifiOff className="h-3 w-3 ml-1" />}
        </div>
    )
}
