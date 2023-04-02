import { corp } from "./middleware.ts";
import {
  assert,
  CrossOriginResourcePolicy,
  describe,
  equalsResponse,
  it,
  PolicyHeader,
} from "./_dev_deps.ts";

describe("corp", () => {
  it("should return response what includes corp header", async () => {
    const middleware = corp();

    const response = await middleware(
      new Request("test:"),
      () => new Response(),
    );

    assert(
      await equalsResponse(
        response,
        new Response(null, {
          headers: {
            [PolicyHeader.CrossOriginResourcePolicy]:
              CrossOriginResourcePolicy.SameOrigin,
          },
        }),
        true,
      ),
    );
  });

  it("should change corp header", async () => {
    const middleware = corp(CrossOriginResourcePolicy.CrossOrigin);

    const response = await middleware(
      new Request("test:"),
      () => new Response(),
    );

    assert(
      await equalsResponse(
        response,
        new Response(null, {
          headers: {
            [PolicyHeader.CrossOriginResourcePolicy]:
              CrossOriginResourcePolicy.CrossOrigin,
          },
        }),
        true,
      ),
    );
  });

  it("should return same response if the header include corp yet", async () => {
    const initResponse = new Response(null, {
      headers: { [PolicyHeader.CrossOriginResourcePolicy]: "" },
    });
    const middleware = corp();
    const response = await middleware(
      new Request("test:"),
      () => initResponse,
    );
    assert(response === initResponse);
  });
});
