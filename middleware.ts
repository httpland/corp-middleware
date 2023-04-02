// Copyright 2023-latest the httpland authors. All rights reserved. MIT license.
// This module is browser compatible.

import { Middleware, withHeader } from "./deps.ts";
import { CrossOriginResourcePolicy, PolicyHeader } from "./constants.ts";

/** Create `Cross-Origin-Resource-Policy` header middleware.
 *
 * Add `Cross-Origin-Resource-Policy` header field to `Response`.
 * ```http
 * Cross-Origin-Resource-Policy: same-origin
 * ```
 *
 * @example
 * ```ts
 * import {
 *   corp,
 *   type Handler,
 * } from "https://deno.land/x/corp_middleware@$VERSION/mod.ts";
 * import { assert } from "https://deno.land/std/testing/asserts.ts";
 *
 * declare const request: Request;
 * declare const handler: Handler;
 *
 * const middleware = corp();
 * const response = await middleware(request, handler);
 *
 * assert(response.headers.has("cross-origin-resource-policy"));
 * ```
 */
export function corp(
  policy: `${CrossOriginResourcePolicy}` = CrossOriginResourcePolicy.SameOrigin,
): Middleware {
  return async (request, next) => {
    const response = await next(request);

    if (response.headers.has(PolicyHeader.CrossOriginResourcePolicy)) {
      return response;
    }

    return withHeader(response, PolicyHeader.CrossOriginResourcePolicy, policy);
  };
}
