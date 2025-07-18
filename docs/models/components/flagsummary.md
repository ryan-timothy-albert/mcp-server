# FlagSummary

## Example Usage

```typescript
import { FlagSummary } from "@launchdarkly/mcp-server/models/components";

let value: FlagSummary = {
  variations: {
    "key": {
      rules: 927330,
      nullRules: 389323,
      targets: 584680,
      contextTargets: 912315,
    },
  },
  prerequisites: 420202,
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `variations`                                                                               | Record<string, [components.VariationSummary](../../models/components/variationsummary.md)> | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `prerequisites`                                                                            | *number*                                                                                   | :heavy_check_mark:                                                                         | The number of prerequisites for this flag                                                  |