
// Types for Mock Data
export interface MockUser {
    id: string
    email: string
    role: 'member' | 'lead'
}

export interface MockEvent {
    id: string
    title: string
    date: string
    visibility: 'public' | 'internal'
    attendees: number
}

export interface MockBroadcast {
    id: number
    message: string
    audience: 'public' | 'internal'
    timestamp: string
}

export const createMockClient = () => {
    console.warn("⚠️ Using Mock Supabase Client (Missing Credentials)")

    const mockStorage = typeof window !== 'undefined' ? window.localStorage : null;

    return {
        auth: {
            signInWithPassword: async ({ email, password }: any) => {
                console.log("Mock SignIn Code:", email)

                // Admin Login
                if (email === 'ADMIN001' && password === 'adminpass') {
                    // Update mock user returned by getUser
                    mockStorage?.setItem('mock-user-role', 'lead')
                    return { data: { user: { id: 'admin-id', email: 'admin@gfg.com', role: 'lead' } }, error: null }
                }

                // Member Login
                if (email === '24e110a78' && password === 'memberpass') {
                    mockStorage?.setItem('mock-user-role', 'member')
                    return { data: { user: { id: 'member-id', email: 'member@student.gfg', role: 'member' } }, error: null }
                }

                // Default Member for testing if specific codes fail but format is correct
                if (password === 'password') {
                    mockStorage?.setItem('mock-user-role', 'member')
                    return { data: { user: { id: 'generic-id', email: 'generic@student.gfg', role: 'member' } }, error: null }
                }

                return { data: { user: null }, error: { message: "Invalid Member Code or Password" } }
            },
            signUp: async ({ email, password }: any) => {
                return { error: { message: "Registration disabled. Please contact admin." } }
            },
            getUser: async () => {
                const role = mockStorage?.getItem('mock-user-role') || 'member'
                return { data: { user: { id: 'mock-user-id', email: 'user@example.com', role } }, error: null }
            },
            getSession: async () => {
                return { data: { session: { access_token: "mock-token" } }, error: null }
            },
            signOut: async () => {
                mockStorage?.removeItem('mock-user-role')
                return { error: null }
            }
        },
        from: (table: string) => {
            return {
                select: (columns: string = "*") => {
                    return {
                        eq: (col: string, val: any) => {
                            return {
                                order: () => ({ limit: () => ({ data: getMockData(table), error: null }), data: getMockData(table), error: null }),
                                data: getMockData(table),
                                error: null
                            }
                        },
                        order: (col: string, { ascending }: any) => {
                            return {
                                limit: (n: number) => ({ data: getMockData(table).slice(0, n), error: null }),
                                data: getMockData(table),
                                error: null
                            }
                        },
                        in: (col: string, vals: any[]) => {
                            return { count: 'exact', data: getMockData(table), error: null }
                        },
                        data: getMockData(table),
                        error: null
                    }
                },
                insert: async (data: any) => {
                    console.log(`Mock Insert into ${table}:`, data)
                    return { data, error: null }
                },
                upsert: async (data: any) => {
                    console.log(`Mock Upsert into ${table}:`, data)
                    return { data, error: null }
                },
                delete: () => {
                    return {
                        eq: async (col: string, val: any) => {
                            console.log(`Mock Delete from ${table} where ${col}=${val}`)
                            return { error: null }
                        }
                    }
                }
            }
        }
    }
}

function getMockData(table: string): any[] {
    if (table === 'broadcasts') {
        return [
            { id: 1, message: "Mock Public Broadcast 1", audience: "public", timestamp: new Date().toISOString() },
            { id: 2, message: "Mock Internal Broadcast 1", audience: "internal", timestamp: new Date().toISOString() }
        ] as MockBroadcast[]
    }
    if (table === 'events') {
        return [
            { id: "1", title: "Mock Event 1", date: new Date().toISOString(), visibility: 'public', attendees: 10 },
            { id: "2", title: "Mock Event 2", date: new Date().toISOString(), visibility: 'internal', attendees: 5 }
        ] as MockEvent[]
    }
    if (table === 'users') {
        return [
            { id: "u1", email: "alice@student.gfg", role: "member" },
            { id: "u2", email: "bob@student.gfg", role: "lead" }
        ] as MockUser[]
    }
    return []
}

