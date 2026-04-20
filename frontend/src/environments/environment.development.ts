export const environment = {
  GEMINI_API: (import.meta as any).env?.NG_GEMINI_API || "",
  KEY_TASKS_STORAGE: (import.meta as any).env?.NG_KEY_TASKS_STORAGE || "",
  CANONICAL_URL: (import.meta as any).env?.NG_CANONICAL_URL || "http://localhost:4200",
  PROMT_TRANSLATOR: (import.meta as any).env?.NG_PROMT_TRANSLATOR || "",
};
