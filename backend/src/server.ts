import app from "./app";
import { env } from "./config/env";
import { connectDB } from "./config/db";

// For LOCAL development only
if (process.env.NODE_ENV !== "production") {
  async function start() {
    await connectDB();
    app.listen(env.port, () => {
      console.log(`Server running on ${env.port}`);
    });
  }
  start();
}

// For Vercel
export default app;