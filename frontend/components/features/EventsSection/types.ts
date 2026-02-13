export interface MediaItem {
    type: "photo" | "video"
    url: string
    thumbnail?: string
    caption?: string
}

export interface Testimonial {
    id: string
    name: string
    role: string
    content: string
    avatar?: string
}

export interface Event {
    id: string
    title: string
    description: string
    date: string
    time: string
    location: string
    category: "Workshop" | "Hackathon" | "Seminar" | "Competition" | "Networking" | "Tech Talk" | "Career"
    type: "upcoming"
    image?: string

    registration?: {
        status: "Open" | "Closed" | "Waitlist"
        capacity: number
        registered: number
        deadline: string
        link: string
    }

    tags: string[]
}
