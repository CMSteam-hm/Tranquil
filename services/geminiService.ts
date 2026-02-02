
import { GoogleGenAI } from "@google/genai";

export const getGeminiChatResponse = async (history: { role: string; text: string }[], message: string) => {
  // Always use process.env.API_KEY directly as per SDK guidelines.
  if (!process.env.API_KEY) return "AI services are currently offline. Please contact us via the form.";

  try {
    // Create a new GoogleGenAI instance right before making an API call to ensure current credentials.
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    // Prepare contents array from history for multi-turn chat interaction.
    const contents = history.map(h => ({
      role: h.role,
      parts: [{ text: h.text }]
    }));
    
    // Add the current user message to the context.
    contents.push({ role: 'user', parts: [{ text: message }] });

    // Execute generateContent with the appropriate model and system instructions.
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents,
      config: {
        systemInstruction: `You are a helpful, professional, and empathetic clinical assistant for 'Tranquil Mental Health and Wellness', a psychiatry practice. 
        Your goal is to help patients find the right information, book appointments, or explain common psychiatric terms.
        
        BOOKING INSTRUCTIONS:
        When a user mentions scheduling, booking, seeing a doctor, or making an appointment, you MUST provide the specific path link: #/booking.
        Example: "I can certainly help with that! You can schedule your consultation directly through our secure portal here: #/booking"

        CRITICAL: If a user mentions self-harm or immediate crisis, provide the National Suicide Prevention Lifeline (988) immediately and urge them to call 911. 
        Keep your tone supportive but clinical.`,
        temperature: 0.7,
      },
    });

    // Extract text from the response object directly via property access.
    return response.text || "I'm sorry, I couldn't process that request.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I am experiencing some technical difficulties. Please try again later or call our office.";
  }
};
