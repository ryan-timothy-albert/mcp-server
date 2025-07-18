/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type FlagMigrationSettingsRep = {
  /**
   * The context kind targeted by this migration flag. Only applicable for six-stage migrations.
   */
  contextKind?: string | undefined;
  /**
   * The number of stages for this migration flag
   */
  stageCount?: number | undefined;
};

/** @internal */
export const FlagMigrationSettingsRep$inboundSchema: z.ZodType<
  FlagMigrationSettingsRep,
  z.ZodTypeDef,
  unknown
> = z.object({
  contextKind: z.string().optional(),
  stageCount: z.number().int().optional(),
});

/** @internal */
export type FlagMigrationSettingsRep$Outbound = {
  contextKind?: string | undefined;
  stageCount?: number | undefined;
};

/** @internal */
export const FlagMigrationSettingsRep$outboundSchema: z.ZodType<
  FlagMigrationSettingsRep$Outbound,
  z.ZodTypeDef,
  FlagMigrationSettingsRep
> = z.object({
  contextKind: z.string().optional(),
  stageCount: z.number().int().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FlagMigrationSettingsRep$ {
  /** @deprecated use `FlagMigrationSettingsRep$inboundSchema` instead. */
  export const inboundSchema = FlagMigrationSettingsRep$inboundSchema;
  /** @deprecated use `FlagMigrationSettingsRep$outboundSchema` instead. */
  export const outboundSchema = FlagMigrationSettingsRep$outboundSchema;
  /** @deprecated use `FlagMigrationSettingsRep$Outbound` instead. */
  export type Outbound = FlagMigrationSettingsRep$Outbound;
}

export function flagMigrationSettingsRepToJSON(
  flagMigrationSettingsRep: FlagMigrationSettingsRep,
): string {
  return JSON.stringify(
    FlagMigrationSettingsRep$outboundSchema.parse(flagMigrationSettingsRep),
  );
}

export function flagMigrationSettingsRepFromJSON(
  jsonString: string,
): SafeParseResult<FlagMigrationSettingsRep, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => FlagMigrationSettingsRep$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'FlagMigrationSettingsRep' from JSON`,
  );
}
