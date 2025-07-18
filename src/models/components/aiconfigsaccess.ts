/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  AiConfigsAccessAllowedRep,
  AiConfigsAccessAllowedRep$inboundSchema,
  AiConfigsAccessAllowedRep$Outbound,
  AiConfigsAccessAllowedRep$outboundSchema,
} from "./aiconfigsaccessallowedrep.js";
import {
  AiConfigsAccessDenied,
  AiConfigsAccessDenied$inboundSchema,
  AiConfigsAccessDenied$Outbound,
  AiConfigsAccessDenied$outboundSchema,
} from "./aiconfigsaccessdenied.js";

export type AiConfigsAccess = {
  denied: Array<AiConfigsAccessDenied>;
  allowed: Array<AiConfigsAccessAllowedRep>;
};

/** @internal */
export const AiConfigsAccess$inboundSchema: z.ZodType<
  AiConfigsAccess,
  z.ZodTypeDef,
  unknown
> = z.object({
  denied: z.array(AiConfigsAccessDenied$inboundSchema),
  allowed: z.array(AiConfigsAccessAllowedRep$inboundSchema),
});

/** @internal */
export type AiConfigsAccess$Outbound = {
  denied: Array<AiConfigsAccessDenied$Outbound>;
  allowed: Array<AiConfigsAccessAllowedRep$Outbound>;
};

/** @internal */
export const AiConfigsAccess$outboundSchema: z.ZodType<
  AiConfigsAccess$Outbound,
  z.ZodTypeDef,
  AiConfigsAccess
> = z.object({
  denied: z.array(AiConfigsAccessDenied$outboundSchema),
  allowed: z.array(AiConfigsAccessAllowedRep$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AiConfigsAccess$ {
  /** @deprecated use `AiConfigsAccess$inboundSchema` instead. */
  export const inboundSchema = AiConfigsAccess$inboundSchema;
  /** @deprecated use `AiConfigsAccess$outboundSchema` instead. */
  export const outboundSchema = AiConfigsAccess$outboundSchema;
  /** @deprecated use `AiConfigsAccess$Outbound` instead. */
  export type Outbound = AiConfigsAccess$Outbound;
}

export function aiConfigsAccessToJSON(
  aiConfigsAccess: AiConfigsAccess,
): string {
  return JSON.stringify(AiConfigsAccess$outboundSchema.parse(aiConfigsAccess));
}

export function aiConfigsAccessFromJSON(
  jsonString: string,
): SafeParseResult<AiConfigsAccess, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AiConfigsAccess$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AiConfigsAccess' from JSON`,
  );
}
