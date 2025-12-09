import * as React from "react"
import { Card } from "../ui/Card"
import { Input } from "../ui/Input"
import { Button } from "../ui/Button"

interface JoinModalProps {
    isOpen: boolean
    title: string
    onSubmit: (name: string) => void
    onCancel: () => void
}

export function JoinModal({ isOpen, title, onSubmit, onCancel }: JoinModalProps) {
    const [name, setName] = React.useState("")

    if (!isOpen) return null

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (name.trim()) {
            onSubmit(name.trim())
        }
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
            <Card className="w-full max-w-sm p-6 space-y-4 animate-in fade-in zoom-in duration-300 border-slate-700 bg-slate-900">
                <div className="space-y-2 text-center">
                    <h2 className="text-xl font-bold tracking-tight text-white">{title}</h2>
                    <p className="text-sm text-slate-400">Enter your name to continue</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                        placeholder="Username"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="text-center text-lg"
                        autoFocus
                    />
                    <div className="grid grid-cols-2 gap-2">
                        <Button type="button" variant="outline" onClick={onCancel}>
                            Cancel
                        </Button>
                        <Button type="submit" disabled={!name.trim()}>
                            Continue
                        </Button>
                    </div>
                </form>
            </Card>
        </div>
    )
}
