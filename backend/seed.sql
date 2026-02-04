-- Seed Data for GFG Student Chapter PWA
-- Version: 1.1 (Aligned with Frontend Mock Data)

-- Note: In a real Supabase setup, auth.users is managed by Gotrue. 
-- We are inserting into public tables assuming the corresponding auth users exist.

-- 1. Insert Users (Public Profile)
-- These UUIDs should ideally match the auth.users ids.
INSERT INTO public.users (id, email, role, avatar_url, attended_events, total_eligible_events)
VALUES 
    ('00000000-0000-0000-0000-000000000001', 'admin@gfg.com', 'lead', 'https://api.dicebear.com/9.x/avataaars/svg?seed=admin', 10, 10),
    ('00000000-0000-0000-0000-000000000002', 'member@student.gfg', 'member', 'https://api.dicebear.com/9.x/avataaars/svg?seed=member', 5, 8),
    ('00000000-0000-0000-0000-000000000003', 'user@example.com', 'public', 'https://api.dicebear.com/9.x/avataaars/svg?seed=public', 0, 0)
ON CONFLICT (id) DO UPDATE 
SET 
    email = EXCLUDED.email,
    role = EXCLUDED.role,
    avatar_url = EXCLUDED.avatar_url;

-- 2. Insert Events
INSERT INTO public.events (id, title, date, visibility, video_url, description)
VALUES
    ('a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11', 'Intro to Data Structures', NOW() + INTERVAL '2 days', 'public', NULL, 'Master the fundamentals of Arrays, Linked Lists, and Stacks. Open to all students.'),
    ('a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a12', 'System Design: Scalability', NOW() + INTERVAL '5 days', 'internal', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', 'Exclusive session on Horizontal vs Vertical Scaling and Load Balancers. Members only.'),
    ('a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a13', 'Resume & Internship Workshop', NOW() - INTERVAL '3 days', 'public', 'https://youtu.be/mock-url', 'Learn how to craft an ATS-friendly resume and ace your internship interviews.')
ON CONFLICT (id) DO NOTHING;

-- 3. Insert Attendance Logs
INSERT INTO public.attendance_logs (user_id, event_id, status)
VALUES
    ('00000000-0000-0000-0000-000000000002', 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a13', 'present'),
    ('00000000-0000-0000-0000-000000000002', 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11', 'absent')
ON CONFLICT (user_id, event_id) DO NOTHING;

-- 4. Insert Broadcasts
INSERT INTO public.broadcasts (message, audience)
VALUES
    ('🚀 Registration for the "Code Wars" Hackathon is now open!', 'public'),
    ('📢 Core Team Meeting this Sunday at 10:00 AM. Please review the agenda.', 'internal'),
    ('🎉 Welcome to the new academic session! Let''s build something amazing.', 'public');

