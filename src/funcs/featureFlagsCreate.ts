/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { LaunchDarklyCore } from "../core.js";
import { encodeFormQuery, encodeJSON, encodeSimple } from "../lib/encodings.js";
import * as M from "../lib/matchers.js";
import { compactMap } from "../lib/primitives.js";
import { safeParse } from "../lib/schemas.js";
import { RequestOptions } from "../lib/sdks.js";
import { extractSecurity, resolveGlobalSecurity } from "../lib/security.js";
import { pathToFunc } from "../lib/url.js";
import * as components from "../models/components/index.js";
import { APIError } from "../models/errors/apierror.js";
import {
  ConnectionError,
  InvalidRequestError,
  RequestAbortedError,
  RequestTimeoutError,
  UnexpectedClientError,
} from "../models/errors/httpclienterrors.js";
import * as errors from "../models/errors/index.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APICall, APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";

/**
 * Create a feature flag
 *
 * @remarks
 * Create a feature flag with the given name, key, and variations.
 *
 * <details>
 * <summary>Click to expand instructions for <strong>creating a migration flag</strong></summary>
 *
 * ### Creating a migration flag
 *
 * When you create a migration flag, the variations are pre-determined based on the number of stages in the migration.
 *
 * To create a migration flag, omit the `variations` and `defaults` information. Instead, provide a `purpose` of `migration`, and `migrationSettings`. If you create a migration flag with six stages, `contextKind` is required. Otherwise, it should be omitted.
 *
 * Here's an example:
 *
 * ```json
 * {
 *   "key": "flag-key-123",
 *   "purpose": "migration",
 *   "migrationSettings": {
 *     "stageCount": 6,
 *     "contextKind": "account"
 *   }
 * }
 * ```
 *
 * To learn more, read [Migration Flags](https://launchdarkly.com/docs/home/flags/migration).
 *
 * </details>
 */
export function featureFlagsCreate(
  client: LaunchDarklyCore,
  request: operations.PostFeatureFlagRequest,
  options?: RequestOptions,
): APIPromise<
  Result<
    components.FeatureFlag,
    | errors.InvalidRequestErrorRep
    | errors.UnauthorizedErrorRep
    | errors.StatusConflictErrorRep
    | errors.RateLimitedErrorRep
    | APIError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >
> {
  return new APIPromise($do(
    client,
    request,
    options,
  ));
}

async function $do(
  client: LaunchDarklyCore,
  request: operations.PostFeatureFlagRequest,
  options?: RequestOptions,
): Promise<
  [
    Result<
      components.FeatureFlag,
      | errors.InvalidRequestErrorRep
      | errors.UnauthorizedErrorRep
      | errors.StatusConflictErrorRep
      | errors.RateLimitedErrorRep
      | APIError
      | SDKValidationError
      | UnexpectedClientError
      | InvalidRequestError
      | RequestAbortedError
      | RequestTimeoutError
      | ConnectionError
    >,
    APICall,
  ]
> {
  const parsed = safeParse(
    request,
    (value) => operations.PostFeatureFlagRequest$outboundSchema.parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return [parsed, { status: "invalid" }];
  }
  const payload = parsed.value;
  const body = encodeJSON("body", payload.FeatureFlagBody, { explode: true });

  const pathParams = {
    projectKey: encodeSimple("projectKey", payload.projectKey, {
      explode: false,
      charEncoding: "percent",
    }),
  };

  const path = pathToFunc("/api/v2/flags/{projectKey}")(pathParams);

  const query = encodeFormQuery({
    "clone": payload.clone,
  });

  const headers = new Headers(compactMap({
    "Content-Type": "application/json",
    Accept: "application/json",
  }));

  const secConfig = await extractSecurity(client._options.apiKey);
  const securityInput = secConfig == null ? {} : { apiKey: secConfig };
  const requestSecurity = resolveGlobalSecurity(securityInput);

  const context = {
    options: client._options,
    baseURL: options?.serverURL ?? client._baseURL ?? "",
    operationID: "postFeatureFlag",
    oAuth2Scopes: [],

    resolvedSecurity: requestSecurity,

    securitySource: client._options.apiKey,
    retryConfig: options?.retries
      || client._options.retryConfig
      || { strategy: "none" },
    retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
  };

  const requestRes = client._createRequest(context, {
    security: requestSecurity,
    method: "POST",
    baseURL: options?.serverURL,
    path: path,
    headers: headers,
    query: query,
    body: body,
    userAgent: client._options.userAgent,
    timeoutMs: options?.timeoutMs || client._options.timeoutMs || -1,
  }, options);
  if (!requestRes.ok) {
    return [requestRes, { status: "invalid" }];
  }
  const req = requestRes.value;

  const doResult = await client._do(req, {
    context,
    errorCodes: ["400", "401", "409", "429", "4XX", "5XX"],
    retryConfig: context.retryConfig,
    retryCodes: context.retryCodes,
  });
  if (!doResult.ok) {
    return [doResult, { status: "request-error", request: req }];
  }
  const response = doResult.value;

  const responseFields = {
    HttpMeta: { Response: response, Request: req },
  };

  const [result] = await M.match<
    components.FeatureFlag,
    | errors.InvalidRequestErrorRep
    | errors.UnauthorizedErrorRep
    | errors.StatusConflictErrorRep
    | errors.RateLimitedErrorRep
    | APIError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    M.json(201, components.FeatureFlag$inboundSchema),
    M.jsonErr(400, errors.InvalidRequestErrorRep$inboundSchema),
    M.jsonErr(401, errors.UnauthorizedErrorRep$inboundSchema),
    M.jsonErr(409, errors.StatusConflictErrorRep$inboundSchema),
    M.jsonErr(429, errors.RateLimitedErrorRep$inboundSchema),
    M.fail("4XX"),
    M.fail("5XX"),
  )(response, { extraFields: responseFields });
  if (!result.ok) {
    return [result, { status: "complete", request: req, response }];
  }

  return [result, { status: "complete", request: req, response }];
}
