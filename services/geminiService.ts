
import { GoogleGenAI } from "@google/genai";
import { BIO_CONTEXT } from "../constants";

export class GeminiService {
  /**
   * Generates a chat response using Gemini 3 Flash.
   * Implementation details:
   * - Initializes GoogleGenAI right before the call as per guidelines.
   * - Uses process.env.API_KEY directly.
   * - Accesses response.text property directly (not as a method).
   */
  async chat(message: string, history: { role: 'user' | 'model'; parts: { text: string }[] }[] = []) {
    try {
      // Create a new instance right before making an API call to ensure it uses the most up-to-date API key
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [
          ...history,
          { role: 'user', parts: [{ text: message }] }
        ],
        config: {
          systemInstruction: BIO_CONTEXT,
          temperature: 0.7,
          topP: 0.8,
          topK: 40,
        }
      });

      // Directly return the .text property from GenerateContentResponse
      return response.text || "I'm sorry, I couldn't process that request.";
    } catch (error) {
      console.error("Gemini API Error:", error);
      return "Something went wrong. My neural circuits are a bit fuzzy right now!";
    }
  }
}

export const geminiService = new GeminiService();
