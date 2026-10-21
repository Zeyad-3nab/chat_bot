export const DEFAULT_CHAT_MODEL = "ddgw/gpt-5.4-mini";

export const titleModel = {
  description: "Fast model for title generation",
  gatewayOrder: ["ddgw"],
  id: "ddgw/gpt-5.4-mini",
  name: "GPT-5.4 Mini",
  provider: "ddgw",
};

export type ModelCapabilities = {
  tools: boolean;
  vision: boolean;
  reasoning: boolean;
};

export type ChatModel = {
  id: string;
  name: string;
  provider: string;
  description: string;
  gatewayOrder?: string[];
  reasoningEffort?: "none" | "minimal" | "low" | "medium" | "high";
  capabilities?: Partial<ModelCapabilities>;
};

export const chatModels: ChatModel[] = [
  // --- Claude Code / Anthropic Models (Verified Working via Omniport) ---
  {
    capabilities: { reasoning: false, tools: true, vision: true },
    description: "Omniport smart router for the best available Sonnet node",
    id: "auto/claude-sonnet",
    name: "Auto Claude Sonnet",
    provider: "anthropic",
  },
  {
    capabilities: { reasoning: true, tools: true, vision: true },
    description: "Omniport smart router for the best available Opus node",
    id: "auto/claude-opus",
    name: "Auto Claude Opus",
    provider: "anthropic",
  },
  {
    capabilities: { reasoning: false, tools: true, vision: true },
    description: "Omniport smart router for the fastest available Haiku node",
    id: "auto/claude-haiku",
    name: "Auto Claude Haiku",
    provider: "anthropic",
  },
  {
    capabilities: { reasoning: true, tools: true, vision: true },
    description: "Latest flagship Claude Opus reasoning model via Claude Code",
    id: "cc/claude-opus-5-5",
    name: "Claude Opus 5.5 (Claude Code)",
    provider: "claude-code",
    reasoningEffort: "medium",
  },
  {
    capabilities: { reasoning: true, tools: true, vision: true },
    description:
      "Claude Opus 5 deep reasoning and complex analysis via Claude Code",
    id: "cc/claude-opus-5",
    name: "Claude Opus 5 (Claude Code)",
    provider: "claude-code",
    reasoningEffort: "medium",
  },
  {
    capabilities: { reasoning: true, tools: true, vision: true },
    description:
      "Claude Sonnet 5.5 high-intelligence hybrid reasoning via Claude Code",
    id: "cc/claude-sonnet-5-5",
    name: "Claude Sonnet 5.5 (Claude Code)",
    provider: "claude-code",
    reasoningEffort: "medium",
  },
  {
    capabilities: { reasoning: true, tools: true, vision: true },
    description:
      "Claude Fable 5.1 fast, efficient model with reasoning via Claude Code",
    id: "cc/claude-fable-5-1",
    name: "Claude Fable 5.1 (Claude Code)",
    provider: "claude-code",
    reasoningEffort: "medium",
  },
  {
    capabilities: { reasoning: true, tools: true, vision: true },
    description:
      "Claude Fable 5 fast, lightweight model with reasoning via Claude Code",
    id: "cc/claude-fable-5",
    name: "Claude Fable 5 (Claude Code)",
    provider: "claude-code",
    reasoningEffort: "medium",
  },
  {
    capabilities: { reasoning: true, tools: true, vision: true },
    description: "Flagship hybrid reasoning and coding model via Claude Code",
    id: "cc/claude-sonnet-5",
    name: "Claude Sonnet 5 (Claude Code)",
    provider: "claude-code",
    reasoningEffort: "medium",
  },
  {
    capabilities: { reasoning: true, tools: true, vision: true },
    description:
      "High-intelligence reasoning and analysis model via Claude Code",
    id: "cc/claude-sonnet-4-6",
    name: "Claude Sonnet 4.6 (Claude Code)",
    provider: "claude-code",
    reasoningEffort: "medium",
  },
  {
    capabilities: { reasoning: true, tools: true, vision: true },
    description:
      "State-of-the-art coding and complex tasks model via Claude Code",
    id: "cc/claude-sonnet-4-5-20250929",
    name: "Claude Sonnet 4.5 (Claude Code)",
    provider: "claude-code",
    reasoningEffort: "medium",
  },
  {
    capabilities: { reasoning: true, tools: true, vision: true },
    description: "Deep reasoning and high-complexity analysis via Claude Code",
    id: "cc/claude-opus-4-8",
    name: "Claude Opus 4.8 (Claude Code)",
    provider: "claude-code",
    reasoningEffort: "medium",
  },
  {
    capabilities: { reasoning: true, tools: true, vision: true },
    description:
      "Claude Opus 4.7 adaptive reasoning and analysis via Claude Code",
    id: "cc/claude-opus-4-7",
    name: "Claude Opus 4.7 (Claude Code)",
    provider: "claude-code",
    reasoningEffort: "medium",
  },
  {
    capabilities: { reasoning: true, tools: true, vision: true },
    description:
      "Claude Opus 4.6 reasoning and complex analysis via Claude Code",
    id: "cc/claude-opus-4-6",
    name: "Claude Opus 4.6 (Claude Code)",
    provider: "claude-code",
    reasoningEffort: "medium",
  },
  {
    capabilities: { reasoning: true, tools: true, vision: true },
    description: "Claude Opus 4.5 reasoning and analysis via Claude Code",
    id: "cc/claude-opus-4-5-20251101",
    name: "Claude Opus 4.5 (Claude Code)",
    provider: "claude-code",
    reasoningEffort: "medium",
  },
  {
    capabilities: { reasoning: false, tools: true, vision: true },
    description:
      "Ultra-fast intelligence model for rapid coding & chat via Claude Code",
    id: "cc/claude-haiku-4-5-20251001",
    name: "Claude Haiku 4.5 (Claude Code)",
    provider: "claude-code",
  },
  {
    capabilities: { reasoning: false, tools: true, vision: true },
    description: "Fast, highly capable model with tool use",
    id: "ddgw/gpt-5.4-mini",
    name: "GPT-5.4 Mini",
    provider: "ddgw",
  },
  {
    capabilities: { reasoning: true, tools: true, vision: true },
    description: "Advanced reasoning model with thinking capabilities",
    id: "ddgw/gpt-5.6-luna",
    name: "GPT-5.6 Luna",
    provider: "ddgw",
    reasoningEffort: "medium",
  },
  {
    capabilities: { reasoning: false, tools: true, vision: true },
    description: "Fast and smart Anthropic model",
    id: "ddgw/claude-haiku-4-5",
    name: "Claude Haiku 4.5",
    provider: "ddgw",
  },
  {
    capabilities: { reasoning: false, tools: true, vision: false },
    description: "Efficient and fast multilingual model",
    id: "ddgw/mistral-small-2603",
    name: "Mistral Small 2603",
    provider: "ddgw",
  },
  {
    capabilities: { reasoning: true, tools: true, vision: false },
    description: "Large 120B open weights model",
    id: "ddgw/tinfoil/gpt-oss-120b",
    name: "GPT OSS 120B",
    provider: "ddgw",
  },
  {
    capabilities: { reasoning: false, tools: true, vision: false },
    description: "Google Gemma 4 31B model",
    id: "ddgw/tinfoil/gemma4-31b",
    name: "Gemma 4 31B",
    provider: "ddgw",
  },
];

export async function getCapabilities(): Promise<
  Record<string, ModelCapabilities>
> {
  const results = await Promise.all(
    chatModels.map(async (model) => {
      try {
        const res = await fetch(
          `https://ai-gateway.vercel.sh/v1/models/${model.id}/endpoints`,
          { next: { revalidate: 86_400 } }
        );
        if (!res.ok) {
          return [
            model.id,
            {
              reasoning: model.capabilities?.reasoning ?? false,
              tools: model.capabilities?.tools ?? true,
              vision: model.capabilities?.vision ?? false,
            },
          ];
        }

        const json = await res.json();
        const endpoints = json.data?.endpoints ?? [];
        const params = new Set(
          endpoints.flatMap(
            (e: { supported_parameters?: string[] }) =>
              e.supported_parameters ?? []
          )
        );
        const inputModalities = new Set(
          json.data?.architecture?.input_modalities ?? []
        );

        return [
          model.id,
          {
            reasoning: model.capabilities?.reasoning ?? params.has("reasoning"),
            tools: model.capabilities?.tools ?? params.has("tools"),
            vision: model.capabilities?.vision ?? inputModalities.has("image"),
          },
        ];
      } catch {
        return [
          model.id,
          {
            reasoning: model.capabilities?.reasoning ?? false,
            tools: model.capabilities?.tools ?? true,
            vision: model.capabilities?.vision ?? false,
          },
        ];
      }
    })
  );

  return Object.fromEntries(results);
}

export const isDemo = process.env.IS_DEMO === "1";

type GatewayModel = {
  id: string;
  name: string;
  type?: string;
  tags?: string[];
};

export type GatewayModelWithCapabilities = ChatModel & {
  capabilities: ModelCapabilities;
};

export async function getAllGatewayModels(): Promise<
  GatewayModelWithCapabilities[]
> {
  try {
    const res = await fetch("https://ai-gateway.vercel.sh/v1/models", {
      next: { revalidate: 86_400 },
    });
    if (!res.ok) {
      return [];
    }

    const json = await res.json();
    return (json.data ?? [])
      .filter((m: GatewayModel) => m.type === "language")
      .map((m: GatewayModel) => ({
        capabilities: {
          reasoning: m.tags?.includes("reasoning") ?? false,
          tools: m.tags?.includes("tool-use") ?? false,
          vision: m.tags?.includes("vision") ?? false,
        },
        description: "",
        id: m.id,
        name: m.name,
        provider: m.id.split("/")[0],
      }));
  } catch {
    return [];
  }
}

export function getActiveModels(): ChatModel[] {
  return chatModels;
}

export const allowedModelIds = new Set(chatModels.map((m) => m.id));

export const modelsByProvider = chatModels.reduce(
  (acc, model) => {
    if (!acc[model.provider]) {
      acc[model.provider] = [];
    }
    acc[model.provider].push(model);
    return acc;
  },
  {} as Record<string, ChatModel[]>
);

export type ModelAvailability = "healthy" | "impacted" | "unknown";

type GatewayEndpoint = {
  provider_name?: string;
  status?: number;
  uptime_last_15m?: number;
  uptime_last_1h?: number;
  latency_last_1h?: {
    p50?: number;
    p95?: number;
  };
};

const PROVIDER_IMPACTED_UPTIME_THRESHOLD = 99;
const PROVIDER_IMPACTED_P50_MS = 10_000;
const PROVIDER_IMPACTED_P95_MS = 30_000;

function isEndpointImpacted(endpoint: GatewayEndpoint) {
  return (
    (endpoint.status !== undefined && endpoint.status !== 0) ||
    (endpoint.uptime_last_15m !== undefined &&
      endpoint.uptime_last_15m < PROVIDER_IMPACTED_UPTIME_THRESHOLD) ||
    (endpoint.uptime_last_1h !== undefined &&
      endpoint.uptime_last_1h < PROVIDER_IMPACTED_UPTIME_THRESHOLD) ||
    (endpoint.latency_last_1h?.p50 !== undefined &&
      endpoint.latency_last_1h.p50 > PROVIDER_IMPACTED_P50_MS) ||
    (endpoint.latency_last_1h?.p95 !== undefined &&
      endpoint.latency_last_1h.p95 > PROVIDER_IMPACTED_P95_MS)
  );
}

export async function getModelAvailability(
  modelId: string
): Promise<ModelAvailability> {
  const model = chatModels.find((item) => item.id === modelId);

  if (!model) {
    return "unknown";
  }

  try {
    const res = await fetch(
      `https://ai-gateway.vercel.sh/v1/models/${model.id}/endpoints`,
      { next: { revalidate: 60 } }
    );
    if (!res.ok) {
      return "unknown";
    }

    const json = await res.json();
    const endpoints = (json.data?.endpoints ?? []) as GatewayEndpoint[];

    if (endpoints.length === 0) {
      return "unknown";
    }

    return endpoints.some(isEndpointImpacted) ? "impacted" : "healthy";
  } catch {
    return "unknown";
  }
}
