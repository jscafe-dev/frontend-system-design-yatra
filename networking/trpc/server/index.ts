import express from "express";
import { initTRPC } from "@trpc/server";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import cors from "cors";
// You can use any variable name you like.
// We use t to keep things simple.
const t = initTRPC.create();

let problems = [
  {
    id: 0,
    title: "Polyfill of Array.map",
    description: "Some description",
  },
  {
    id: 1,
    title: "Polyfill of Promise.all()",
    description: "Some description",
  },
];

export const router = t.router;
export const publicProcedure = t.procedure;

const app = express();
app.use(cors());
const port = process.env.PORT || 3000;

interface Problem {
  id: number;
  title: string;
  description: string;
}

const appRouter = router({
  getAllProblems: publicProcedure.query(() => problems),
  updateProblems: publicProcedure
    .input((v) => {
      if (typeof v !== "object")
        throw new Error(`Object expected received ${typeof v}`);
      return v;
    })
    .mutation(async (opts) => {
      const data = opts.input as unknown as Problem;
      problems = problems.map((p) => {
        if (p.id == data.id) {
          return { ...p, ...data };
        }
        return p;
      });
    }),
});

app.use(
  "/trpc",
  createExpressMiddleware({
    router: appRouter,
  })
);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

export type AppRouter = typeof appRouter;
