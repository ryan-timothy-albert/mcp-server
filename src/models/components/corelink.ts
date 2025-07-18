/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CoreLink = {
  href: string;
  type: string;
};

/** @internal */
export const CoreLink$inboundSchema: z.ZodType<
  CoreLink,
  z.ZodTypeDef,
  unknown
> = z.object({
  href: z.string(),
  type: z.string(),
});

/** @internal */
export type CoreLink$Outbound = {
  href: string;
  type: string;
};

/** @internal */
export const CoreLink$outboundSchema: z.ZodType<
  CoreLink$Outbound,
  z.ZodTypeDef,
  CoreLink
> = z.object({
  href: z.string(),
  type: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CoreLink$ {
  /** @deprecated use `CoreLink$inboundSchema` instead. */
  export const inboundSchema = CoreLink$inboundSchema;
  /** @deprecated use `CoreLink$outboundSchema` instead. */
  export const outboundSchema = CoreLink$outboundSchema;
  /** @deprecated use `CoreLink$Outbound` instead. */
  export type Outbound = CoreLink$Outbound;
}

export function coreLinkToJSON(coreLink: CoreLink): string {
  return JSON.stringify(CoreLink$outboundSchema.parse(coreLink));
}

export function coreLinkFromJSON(
  jsonString: string,
): SafeParseResult<CoreLink, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CoreLink$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CoreLink' from JSON`,
  );
}
