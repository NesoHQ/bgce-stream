import { create } from 'zustand'

export type UserRole = 'broadcaster' | 'listener' | null

export interface User {
    id: string
    name: string
    role: UserRole
}

interface StreamState {
    currentUser: User | null
    streamStatus: 'idle' | 'live'
    isMicMuted: boolean
    connectedUsers: User[]

    // Actions
    setUserName: (name: string) => void
    setRole: (role: UserRole) => void
    startBroadcast: () => void
    joinBroadcast: () => void
    leaveStream: () => void
    toggleMic: () => void

    // Mock functionality updates
    addMockUser: () => void
}

export const useStreamStore = create<StreamState>((set) => ({
    currentUser: null,
    streamStatus: 'idle',
    isMicMuted: false, // Default unmuted for broadcaster initially? Or muted? Let's say false.
    connectedUsers: [],

    setUserName: (name) => set(() => ({
        currentUser: { id: Date.now().toString(), name, role: null }
    })),

    setRole: (role) => set((state) => ({
        currentUser: state.currentUser ? { ...state.currentUser, role } : null
    })),

    startBroadcast: () => set({
        streamStatus: 'live',
        connectedUsers: [] // Broadcaster starts alone
    }),

    joinBroadcast: () => set(() => {
        // Mock initial list of users
        const mockUsers: User[] = [
            { id: '1', name: 'Alice', role: 'listener' },
            { id: '2', name: 'Bob', role: 'listener' },
        ]
        return {
            streamStatus: 'live',
            connectedUsers: mockUsers
        }
    }),

    leaveStream: () => set({
        streamStatus: 'idle',
        currentUser: null,
        connectedUsers: []
    }),

    toggleMic: () => set((state) => ({ isMicMuted: !state.isMicMuted })),

    addMockUser: () => set((state) => ({
        connectedUsers: [
            ...state.connectedUsers,
            { id: Date.now().toString(), name: `User ${Math.floor(Math.random() * 100)}`, role: 'listener' }
        ]
    }))
}))
