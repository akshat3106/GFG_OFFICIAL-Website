export type Json =
    | string
    | number
    | boolean
    | null
    | { [key: string]: Json | undefined }
    | Json[]

export interface Database {
    public: {
        Tables: {
            users: {
                Row: {
                    id: string
                    email: string
                    role: 'public' | 'member' | 'lead'
                    avatar_url: string | null
                    attended_events: number
                    total_eligible_events: number
                    created_at: string
                }
                Insert: {
                    id: string
                    email: string
                    role?: 'public' | 'member' | 'lead'
                    avatar_url?: string | null
                    attended_events?: number
                    total_eligible_events?: number
                    created_at?: string
                }
                Update: {
                    id?: string
                    email?: string
                    role?: 'public' | 'member' | 'lead'
                    avatar_url?: string | null
                    attended_events?: number
                    total_eligible_events?: number
                    created_at?: string
                }
            }
            events: {
                Row: {
                    id: string
                    title: string
                    date: string
                    visibility: 'public' | 'internal'
                    video_url: string | null
                    description: string | null
                    created_at: string
                }
                Insert: {
                    id?: string
                    title: string
                    date: string
                    visibility: 'public' | 'internal'
                    video_url?: string | null
                    description?: string | null
                    created_at?: string
                }
                Update: {
                    id?: string
                    title?: string
                    date?: string
                    visibility?: 'public' | 'internal'
                    video_url?: string | null
                    description?: string | null
                    created_at?: string
                }
            }
            attendance_logs: {
                Row: {
                    user_id: string
                    event_id: string
                    status: 'present' | 'absent'
                    created_at: string
                }
                Insert: {
                    user_id: string
                    event_id: string
                    status: 'present' | 'absent'
                    created_at?: string
                }
                Update: {
                    user_id?: string
                    event_id?: string
                    status?: 'present' | 'absent'
                    created_at?: string
                }
            }
            broadcasts: {
                Row: {
                    id: string
                    message: string
                    audience: 'public' | 'internal'
                    timestamp: string
                }
                Insert: {
                    id?: string
                    message: string
                    audience: 'public' | 'internal'
                    timestamp?: string
                }
                Update: {
                    id?: string
                    message?: string
                    audience?: 'public' | 'internal'
                    timestamp?: string
                }
            }
        }
    }
}
