import { setupWorker } from "msw";
import { setupServer } from "msw/node";
import { handlers } from "../handlers";

if (typeof window === undefined) {
  setupWorker(...handlers).start({
    onUnhandledRequest: "bypass",
  });
} else {
  setupServer(...handlers).listen({
    onUnhandledRequest: "bypass",
  });
}
