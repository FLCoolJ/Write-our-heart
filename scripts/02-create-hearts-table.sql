-- Create hearts table for recipient information
CREATE TABLE IF NOT EXISTS hearts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  relationship VARCHAR(100),
  birthday DATE,
  anniversary DATE,
  address TEXT,
  phone VARCHAR(20),
  email VARCHAR(255),
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE hearts ENABLE ROW LEVEL SECURITY;

-- Create policies for hearts
CREATE POLICY "Users can view own hearts" ON hearts
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own hearts" ON hearts
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own hearts" ON hearts
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own hearts" ON hearts
  FOR DELETE USING (auth.uid() = user_id);
