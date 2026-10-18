import { createOpenAI } from "@ai-sdk/openai";
import { customProvider, gateway, type LanguageModel } from "ai";
import { isTestEnvironment } from "../constants";
import { titleModel } from "./models";

export const myProvider = isTestEnvironment
  ? (() => {
      const {
        chatModel,
        titleModel: mockTitleModel,
      } = require("./models.mock");
      return customProvider({
        languageModels: {
          "chat-model": chatModel,
          "title-model": mockTitleModel,
        },
      });
    })()
  : null;

function getCustomOpenAI() {
  const customBaseURL =
    process.env.AI_GATEWAY_BASE_URL || process.env.OPENAI_BASE_URL;
  const customApiKey =
    process.env.AI_GATEWAY_API_KEY || process.env.OPENAI_API_KEY;

  if (!customBaseURL) {
    return null;
  }

  return createOpenAI({
    apiKey: customApiKey,
    baseURL: customBaseURL,
  });
}

export function getLanguageModel(modelId: string): LanguageModel {
  if (isTestEnvironment && myProvider) {
    return myProvider.languageModel(modelId);
  }

  const customOpenAI = getCustomOpenAI();
  if (customOpenAI) {
    return customOpenAI.chat(modelId) as unknown as LanguageModel;
  }

  return gateway.languageModel(modelId);
}

export function getTitleModel(): LanguageModel {
  if (isTestEnvironment && myProvider) {
    return myProvider.languageModel("title-model");
  }

  const customOpenAI = getCustomOpenAI();
  if (customOpenAI) {
    return customOpenAI.chat(titleModel.id) as unknown as LanguageModel;
  }

  return gateway.languageModel(titleModel.id);
}
