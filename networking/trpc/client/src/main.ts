import type { AppRouter } from "../../server/index";
import { createTRPCClient, httpBatchLink } from "@trpc/client";

const client = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "http://localhost:3000/trpc",
    }),
  ],
});

async function main() {
  client.greeting.query();
  client.getAllProblems.query();
  client.updateProblems.mutate({ id: 0, title: "new problem" });
}

main();
