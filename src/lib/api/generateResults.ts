"use server"

import axios from 'axios';
import 'dotenv/config'
interface Result {
  title: string;
  description: string;
}

interface ApiResponse {
  candidates?: Array<{ content: { parts: Array<{ text: string }> } }>;
  error?: { message: string };
}

export const generateResults = async (query: string): Promise<{ results: Result[]; error?: string }> => {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return { results: [], error: 'API key is missing.' };

  try {
    const response = await axios.post<ApiResponse>(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`,
      {
        contents: [{ parts: [{ text: query }] }],
      },
      { headers: { 'Content-Type': 'application/json' } }
    );

    if (response.data.candidates) {
      const generatedContent = response.data.candidates.map((candidate) => ({
        title: 'Generated Content',
        description: candidate.content.parts.map((part) => part.text).join(' '),
      }));
      return { results: generatedContent };
    } else if (response.data.error) {
      return { results: [], error: `API error: ${response.data.error.message}` };
    } else {
      return { results: [], error: 'Unexpected response format from API.' };
    }
  } catch (err) {
    if (axios.isAxiosError(err) && err.response) {
      return { results: [], error: 'An error occurred while fetching data.' };
    }
    return { results: [], error: 'An unexpected error occurred.' };
  }
};
