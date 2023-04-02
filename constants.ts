// Copyright 2023-latest the httpland authors. All rights reserved. MIT license.
// This module is browser compatible.

/** HTTP policy-related header. */
export const enum PolicyHeader {
  CrossOriginResourcePolicy = "cross-origin-resource-policy",
}

/** `Cross-Origin-Resource-Policy` header directive. */
export enum CrossOriginResourcePolicy {
  /** Only requests from the same origin can read the resource. */
  SameOrigin = "same-origin",
  /** Only requests from the same Site can read the resource. */
  SameSite = "same-site",
  /** Requests from any origin can read the resource. */
  CrossOrigin = "cross-origin",
}
