export interface TeamMember {
    id: string
    name: string
    role: "President" | "Vice President" | "Tech Lead" | "Design Lead" | "Operation Lead" | "PR & Outreach" | "Member" | "System Architect" | "Management Lead" | "Media Lead"
    position: string
    photo: string
    email: string
    department?: string
    specialty: string
    bio: string

    achievements: string[]
    skills: string[]
    joinedDate: string

    social: {
        linkedin?: string
        github?: string
        twitter?: string
        portfolio?: string
    }

    stats: {
        projectsLed: number
        eventsOrganized: number
        contributionScore: number
    }
}
