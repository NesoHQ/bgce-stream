import { Mic, MicOff } from "lucide-react"
import { Button } from "../ui/Button"
import { cn } from "../../lib/utils"

interface MicControlProps {
    isMuted: boolean
    onToggle: () => void
    disabled?: boolean
}

export function MicControl({ isMuted, onToggle, disabled }: MicControlProps) {
    return (
        <div className="flex flex-col items-center gap-4">
            <div className={cn(
                "relative flex h-24 w-24 items-center justify-center rounded-full transition-all duration-500",
                isMuted ? "bg-slate-800 shadow-none" : "bg-blue-600 shadow-xl shadow-blue-500/50 animate-pulse-slow"
            )}>
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={onToggle}
                    disabled={disabled}
                    className={cn(
                        "h-full w-full rounded-full hover:bg-transparent",
                        isMuted ? "text-slate-400" : "text-white"
                    )}
                >
                    {isMuted ? (
                        <MicOff className="h-10 w-10" />
                    ) : (
                        <Mic className="h-10 w-10" />
                    )}
                </Button>

                {!isMuted && (
                    <span className="absolute -inset-1 rounded-full border-2 border-blue-400/50 animate-ping" />
                )}
            </div>
            <span className={cn(
                "text-sm font-medium tracking-wider uppercase",
                isMuted ? "text-slate-500" : "text-blue-400"
            )}>
                {isMuted ? "Microphone Off" : "On Air"}
            </span>
        </div>
    )
}
