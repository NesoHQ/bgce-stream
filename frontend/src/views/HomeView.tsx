import * as React from "react"
import { Radio, Headphones } from "lucide-react"
import { Button } from "../components/ui/Button"
import { Card } from "../components/ui/Card"
import { JoinModal } from "../components/features/JoinModal"
import { useStreamStore, type UserRole } from "../store/useStreamStore"

export function HomeView() {
    const { setUserName, setRole, startBroadcast, joinBroadcast, addMockUser } = useStreamStore()
    const [modalState, setModalState] = React.useState<{ isOpen: boolean; role: UserRole | null }>({
        isOpen: false,
        role: null
    })

    const handleAction = (role: UserRole) => {
        setModalState({ isOpen: true, role })
    }

    const handleConfirm = (name: string) => {
        if (!modalState.role) return

        setUserName(name)
        setRole(modalState.role)

        if (modalState.role === 'broadcaster') {
            startBroadcast()
        } else {
            joinBroadcast()
            // Simulate other users joining
            setTimeout(() => addMockUser(), 2000)
        }
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 space-y-8 animate-in fade-in zoom-in duration-500">
            <div className="text-center space-y-4">
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                    AudioStream
                </h1>
                <p className="text-slate-400 text-lg max-w-md mx-auto">
                    Broadcast your voice or tune in to live streams instantly. High quality, low latency audio streaming.
                </p>
            </div>

            <Card className="p-8 w-full max-w-md bg-slate-900/50 border-slate-800 backdrop-blur-xl">
                <div className="flex flex-col gap-4">
                    <Button
                        size="lg"
                        className="w-full h-16 text-lg font-semibold bg-blue-600 hover:bg-blue-700 shadow-blue-500/20"
                        onClick={() => handleAction('broadcaster')}
                    >
                        <Radio className="mr-3 h-6 w-6" />
                        Start Broadcast
                    </Button>

                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t border-slate-700" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-slate-900 px-2 text-slate-500">Or</span>
                        </div>
                    </div>

                    <Button
                        size="lg"
                        variant="secondary"
                        className="w-full h-16 text-lg font-semibold bg-slate-800 hover:bg-slate-700"
                        onClick={() => handleAction('listener')}
                    >
                        <Headphones className="mr-3 h-6 w-6" />
                        Join Broadcast
                    </Button>
                </div>
            </Card>

            <JoinModal
                isOpen={modalState.isOpen}
                title={modalState.role === 'broadcaster' ? "Start Streaming" : "Join Stream"}
                onSubmit={handleConfirm}
                onCancel={() => setModalState({ isOpen: false, role: null })}
            />
        </div>
    )
}
