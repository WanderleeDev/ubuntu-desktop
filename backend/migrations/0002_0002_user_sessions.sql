-- Migration number: 0002 	 2026-04-28T02:53:54.905Z
CREATE TABLE IF NOT EXISTS user_sessions (
  id TEXT PRIMARY KEY,
  jti TEXT NOT NULL UNIQUE,
  user_id TEXT NOT NULL,
  refresh_token TEXT NOT NULL,
  is_revoked BOOLEAN NOT NULL DEFAULT 0,

  expires_at DATETIME NOT NULL,
  created_at DATETIME NOT NULL,

  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);


CREATE INDEX idx_user_sessions_jti ON user_sessions(jti);
CREATE INDEX idx_user_sessions_user_id ON user_sessions(user_id);