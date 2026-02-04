-- GFG Student Chapter PWA: Initial Schema & RLS Policies

-- 1. TABLES DEFINITION

-- Users Table
CREATE TABLE users (
  id UUID REFERENCES auth.users NOT NULL PRIMARY KEY,
  email TEXT NOT NULL,
  role TEXT CHECK (role IN ('public', 'member', 'lead')) DEFAULT 'public',
  avatar_url TEXT,
  attended_events INTEGER DEFAULT 0,
  total_eligible_events INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Events Table
CREATE TABLE events (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  date TIMESTAMPTZ NOT NULL,
  visibility TEXT CHECK (visibility IN ('public', 'internal')) DEFAULT 'internal',
  video_url TEXT,
  description TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Attendance Logs Table
CREATE TABLE attendance_logs (
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  event_id UUID REFERENCES events(id) ON DELETE CASCADE,
  status TEXT CHECK (status IN ('present', 'absent')) DEFAULT 'absent',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  PRIMARY KEY (user_id, event_id)
);

-- Broadcasts Table
CREATE TABLE broadcasts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  message TEXT NOT NULL,
  audience TEXT CHECK (audience IN ('public', 'internal')) DEFAULT 'internal',
  timestamp TIMESTAMPTZ DEFAULT NOW()
);

-- 2. INDEXES
-- Optimizing common queries
CREATE INDEX idx_users_role ON users(role);
CREATE INDEX idx_events_visibility ON events(visibility);
CREATE INDEX idx_events_date ON events(date DESC);
CREATE INDEX idx_attendance_user ON attendance_logs(user_id);
CREATE INDEX idx_broadcasts_audience ON broadcasts(audience);
CREATE INDEX idx_broadcasts_timestamp ON broadcasts(timestamp DESC);

-- 3. ENABLE RLS
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE events ENABLE ROW LEVEL SECURITY;
ALTER TABLE attendance_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE broadcasts ENABLE ROW LEVEL SECURITY;

-- 4. POLICIES

-- Users Policies
CREATE POLICY "Public profiles are viewable by everyone" ON users
  FOR SELECT USING (true);

CREATE POLICY "Users can update their own profile" ON users
  FOR UPDATE USING (auth.uid() = id);

-- Events Policies
CREATE POLICY "Public events are viewable by everyone" ON events
  FOR SELECT USING (visibility = 'public');

CREATE POLICY "Internal events are viewable by members and leads" ON events
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM users 
      WHERE users.id = auth.uid() 
      AND (role = 'member' OR role = 'lead')
    )
  );

CREATE POLICY "Leads can manage all events" ON events
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM users WHERE users.id = auth.uid() AND role = 'lead'
    )
  );

-- Attendance Logs Policies
CREATE POLICY "Members can view their own stay" ON attendance_logs
  FOR SELECT USING (user_id = auth.uid());

CREATE POLICY "Leads can manage all attendance" ON attendance_logs
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM users WHERE users.id = auth.uid() AND role = 'lead'
    )
  );

-- Broadcasts Policies
CREATE POLICY "Public broadcasts viewable by everyone" ON broadcasts
  FOR SELECT USING (audience = 'public');

CREATE POLICY "Internal broadcasts viewable by members/leads" ON broadcasts
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM users WHERE users.id = auth.uid() AND (role = 'member' OR role = 'lead')
    )
  );

CREATE POLICY "Leads can manage broadcasts" ON broadcasts
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM users WHERE users.id = auth.uid() AND role = 'lead'
    )
  );

