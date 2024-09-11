import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "../../server/index";

const client = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "http://localhost:3000/trpc",
    }),
  ],
});

async function main() {
  client.getAllProblems.query();
  client.updateProblems.mutate({ id: 0, title: "new problem" });
  client.getAllProblems.query();
}

main();
