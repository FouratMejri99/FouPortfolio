import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { prompt, model = "gpt2", maxLength = 200, temperature = 0.7 } = body;

    if (!prompt) {
      return NextResponse.json(
        { error: "Prompt is required" },
        { status: 400 },
      );
    }

    const hfToken = process.env.HUGGING_FACE_API_TOKEN;

    if (!hfToken) {
      return NextResponse.json(
        { error: "Hugging Face API token not configured" },
        { status: 500 },
      );
    }

    // Using Hugging Face Inference API
    const response = await fetch(
      `https://api-inference.huggingface.co/models/${model}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${hfToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          inputs: prompt,
          parameters: {
            max_length: maxLength,
            temperature: temperature,
            return_full_text: false,
          },
        }),
      },
    );

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json(
        { error: errorData.error || "Failed to generate text" },
        { status: response.status },
      );
    }

    const data = await response.json();

    // Handle different response formats
    let generatedText = "";
    if (Array.isArray(data) && data[0]?.generated_text) {
      generatedText = data[0].generated_text;
    } else if (data.generated_text) {
      generatedText = data.generated_text;
    } else {
      generatedText = JSON.stringify(data);
    }

    return NextResponse.json({ generatedText });
  } catch (error) {
    console.error("Text generation error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { message: "Text Generation API - Use POST method with prompt" },
    { status: 200 },
  );
}
