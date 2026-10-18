import { generateText } from "ai";
import dotenv from "dotenv";

// Load environment variables from .env.local
dotenv.config({ path: ".env.local" });

import { chatModels } from "../lib/ai/models";
import { getLanguageModel } from "../lib/ai/providers";

const apiKey = process.env.AI_GATEWAY_API_KEY;
const baseURL =
  process.env.AI_GATEWAY_BASE_URL || "https://ai-gateway.vercel.sh/v1";

type ModelTestResult =
  | {
      elapsed: number;
      finishReason: string;
      modelId: string;
      modelName: string;
      response: string;
      status: "PASS";
    }
  | {
      elapsed: number;
      error: string;
      modelId: string;
      modelName: string;
      status: "FAIL";
    };

async function testModel(
  modelId: string,
  modelName: string
): Promise<ModelTestResult> {
  const startTime = Date.now();
  try {
    const { finishReason, text } = await generateText({
      model: getLanguageModel(modelId),
      prompt: "Respond with the word 'READY' and nothing else.",
    });

    const elapsed = Date.now() - startTime;
    return {
      elapsed,
      finishReason,
      modelId,
      modelName,
      response: text.trim().replace(/\n/g, " "),
      status: "PASS",
    };
  } catch (error: unknown) {
    const elapsed = Date.now() - startTime;
    const errorMessage = error instanceof Error ? error.message : String(error);
    return {
      elapsed,
      error: errorMessage,
      modelId,
      modelName,
      status: "FAIL",
    };
  }
}

async function main() {
  console.log("=================================================");
  console.log("       Vercel AI Gateway Model Tester            ");
  console.log("=================================================");

  if (!apiKey || apiKey.trim() === "" || apiKey.includes("****")) {
    console.error("\n❌ Error: AI_GATEWAY_API_KEY is not set in .env.local.");
    console.error(
      "Please add a valid key from https://vercel.com/ai-gateway\n"
    );
    process.exit(1);
  }

  const maskedKey =
    apiKey.length > 10
      ? `${apiKey.slice(0, 7)}...${apiKey.slice(-4)}`
      : "(too short)";
  console.log(`Endpoint:      ${baseURL}`);
  console.log(`Using API Key: ${maskedKey}`);

  const args = process.argv.slice(2);
  const targetArg = args.find((arg) => !arg.startsWith("--"));
  const onlyFree = args.includes("--free");

  let modelsToTest = chatModels;

  if (targetArg) {
    modelsToTest = chatModels.filter(
      (m) =>
        m.id.toLowerCase().includes(targetArg.toLowerCase()) ||
        m.name.toLowerCase().includes(targetArg.toLowerCase())
    );
    if (modelsToTest.length === 0) {
      console.log(`\nNo model matched "${targetArg}". Testing as raw ID...`);
      modelsToTest = [
        {
          description: "",
          id: targetArg,
          name: targetArg,
          provider: targetArg.split("/")[0] ?? "unknown",
        },
      ];
    }
  } else if (onlyFree) {
    modelsToTest = chatModels.filter(
      (m) => m.id.includes("free") || m.description.includes("Free")
    );
  }

  console.log(`Testing ${modelsToTest.length} model(s)...\n`);

  const results: ModelTestResult[] = [];

  for (const model of modelsToTest) {
    process.stdout.write(`⏳ Testing ${model.name} (${model.id})... `);
    // oxlint-disable-next-line eslint(no-await-in-loop)
    // biome-ignore lint/performance/noAwaitInLoops: sequential testing is preferred for CLI reporting
    const result = await testModel(model.id, model.name);

    if (result.status === "PASS") {
      console.log(`✅ OK (${result.elapsed}ms)`);
      console.log(`   Reply: "${result.response}"`);
    } else {
      console.log(`❌ FAILED (${result.elapsed}ms)`);
      console.log(`   Error: ${result.error}`);
    }
    results.push(result);
  }

  console.log("\n=================== Summary ===================");
  console.table(
    results.map((r) => ({
      Details: r.status === "PASS" ? r.response : r.error.slice(0, 60),
      Model: r.modelName,
      Status: r.status === "PASS" ? "✅ Passed" : "❌ Failed",
      Time: `${r.elapsed}ms`,
    }))
  );

  const passedCount = results.filter((r) => r.status === "PASS").length;
  console.log(`Result: ${passedCount}/${results.length} passed.`);

  if (
    passedCount === 0 &&
    results.some(
      (r) =>
        r.status === "FAIL" &&
        (r.error.includes("401") || r.error.includes("Unauthenticated"))
    )
  ) {
    console.log("\n💡 Tip: Requests failed with authentication error (401).");
    console.log(
      "   Check that your AI_GATEWAY_API_KEY in .env.local is active and valid at https://vercel.com/ai-gateway\n"
    );
  }
}

main().catch((err) => {
  console.error("Unexpected error:", err);
  process.exit(1);
});
