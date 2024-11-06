import { defineConfig } from "drizzle-kit";
export default defineConfig({
  schema: "./src/db/schema.ts",
  out: "./migrations",
  dialect: "sqlite", 
  dbCredentials: {
    url: process.env.DATABASE_URL!,
    // authToken: process.env.TURSO_AUTH_TOKEN,
  },
});

// export default {
//   schema: ".src//db/schema.ts",
//   out: "./migrations",
//   dialect: "sqlite",
//   driver: "turso",
//   dbCredentials: {
//     url: process.env.TURSO_DATABASE_URL!,
//     // authToken: process.env.TURSO_AUTH_TOKEN,
//   },
// } satisfies Config;
