import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize the Gemini AI client
const genAI = new GoogleGenerativeAI("AIzaSyA2W6xZHF1xo-PaqkoN7ud_qqRmJJnVoFk");

export class GeminiService {
  private model;
  private chat;

  constructor() {
    this.model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash-exp",
      generationConfig: {
        temperature: 1,
        topP: 0.95,
        topK: 40,
        maxOutputTokens: 8192,
      },
    });
    this.chat = this.model.startChat({
      history: [],
    });
  }

  async sendMessage(message: string): Promise<string> {
    try {
      // Sanitize input message
      const sanitizedMessage = this.sanitizeText(message);
      const result = await this.chat.sendMessage(sanitizedMessage);
      const response = await result.response;
      // Sanitize output message
      return this.sanitizeText(response.text());
    } catch (error) {
      console.error('Error sending message to Gemini:', error);
      throw new Error('Failed to get response from AI');
    }
  }

  private sanitizeText(text: string): string {
    // Remove any null characters and other potentially problematic characters
    return text
      .replace(/\u0000/g, '') // Remove null characters
      .replace(/[\uFFF0-\uFFFF]/g, '') // Remove specials
      .trim(); // Remove extra whitespace
  }
}

// Export a singleton instance
export const geminiService = new GeminiService();
