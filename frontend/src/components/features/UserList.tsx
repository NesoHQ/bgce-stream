import { User as UserIcon, Radio } from "lucide-react"
import { Card } from "../ui/Card"
import { type User } from "../../store/useStreamStore"

interface UserListProps {
    users: User[]
}

export function UserList({ users }: UserListProps) {
    return (
        <Card className="p-4 w-full max-w-md bg-slate-900/50 border-slate-800/50">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Audience</h3>
                <span className="flex items-center gap-1 text-xs text-slate-500 bg-slate-800 px-2 py-1 rounded-full">
                    <UserIcon className="h-3 w-3" />
                    {users.length}
                </span>
            </div>

            <div className="space-y-2 max-h-48 overflow-y-auto pr-2 custom-scrollbar">
                {users.length === 0 ? (
                    <p className="text-sm text-slate-600 text-center py-4">Waiting for listeners...</p>
                ) : (
                    users.map((user) => (
                        <div key={user.id} className="flex items-center justify-between p-2 rounded-lg bg-slate-800/30">
                            <div className="flex items-center gap-3">
                                <div className="h-8 w-8 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold text-slate-300">
                                    {user.name.charAt(0).toUpperCase()}
                                </div>
                                <span className="text-sm font-medium text-slate-200">{user.name}</span>
                            </div>
                            {user.role === 'broadcaster' && (
                                <span className="text-xs text-red-400 flex items-center gap-1">
                                    <Radio className="h-3 w-3" />
                                    Host
                                </span>
                            )}
                        </div>
                    ))
                )}
            </div>
        </Card>
    )
}
