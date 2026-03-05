"use client";

import { Copy, Loader2, Settings, Sparkles } from "lucide-react";
import { useState } from "react";

interface GenerationOptions {
  model: string;
  maxLength: number;
  temperature: number;
}

const MODELS = [
  { id: "gpt2", name: "GPT-2", description: "General text generation" },
  {
    id: "openai-community/gpt2",
    name: "GPT-2 (HuggingFace)",
    description: "Open source GPT-2",
  },
  {
    id: "facebook/opt-125m",
    name: "OPT-125M",
    description: "Efficient open model",
  },
  {
    id: "EleutherAI/gpt-neo-125M",
    name: "GPT-Neo 125M",
    description: "Open source GPT alternative",
  },
];

export default function OutilPage() {
  const [prompt, setPrompt] = useState("");
  const [generatedText, setGeneratedText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [showSettings, setShowSettings] = useState(false);
  const [copied, setCopied] = useState(false);

  const [options, setOptions] = useState<GenerationOptions>({
    model: "gpt2",
    maxLength: 200,
    temperature: 0.7,
  });

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      setError("Please enter a prompt");
      return;
    }

    setIsLoading(true);
    setError("");
    setGeneratedText("");

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt,
          model: options.model,
          maxLength: options.maxLength,
          temperature: options.temperature,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to generate text");
      }

      setGeneratedText(data.generatedText);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = () => {
    if (generatedText) {
      navigator.clipboard.writeText(generatedText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && e.ctrlKey) {
      handleGenerate();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Outil de Génération AI
            </h1>
          </div>
          <button
            onClick={() => setShowSettings(!showSettings)}
            className={`p-2 rounded-lg transition-colors ${
              showSettings
                ? "bg-purple-500/20 text-purple-400"
                : "hover:bg-white/10"
            }`}
          >
            <Settings className="w-5 h-5" />
          </button>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-8">
        {/* Settings Panel */}
        {showSettings && (
          <div className="mb-8 p-6 bg-black/30 rounded-xl border border-white/10">
            <h2 className="text-lg font-semibold mb-4">Paramètres Avancés</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {/* Model Selection */}
              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Modèle
                </label>
                <select
                  value={options.model}
                  onChange={(e) =>
                    setOptions({ ...options, model: e.target.value })
                  }
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  {MODELS.map((model) => (
                    <option key={model.id} value={model.id}>
                      {model.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Max Length */}
              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Longueur max: {options.maxLength}
                </label>
                <input
                  type="range"
                  min="50"
                  max="500"
                  step="10"
                  value={options.maxLength}
                  onChange={(e) =>
                    setOptions({
                      ...options,
                      maxLength: parseInt(e.target.value),
                    })
                  }
                  className="w-full accent-purple-500"
                />
              </div>

              {/* Temperature */}
              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Créativité: {options.temperature}
                </label>
                <input
                  type="range"
                  min="0.1"
                  max="1.5"
                  step="0.1"
                  value={options.temperature}
                  onChange={(e) =>
                    setOptions({
                      ...options,
                      temperature: parseFloat(e.target.value),
                    })
                  }
                  className="w-full accent-purple-500"
                />
              </div>
            </div>
          </div>
        )}

        {/* Input Section */}
        <div className="mb-6">
          <label className="block text-sm text-gray-400 mb-2">
            Votre prompt
          </label>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Entrez votre prompt ici... (Ctrl+Entrée pour générer)"
            className="w-full h-40 px-4 py-3 bg-white/10 border border-white/20 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder:text-gray-500"
          />
        </div>

        {/* Generate Button */}
        <div className="flex justify-center mb-8">
          <button
            onClick={handleGenerate}
            disabled={isLoading || !prompt.trim()}
            className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed rounded-xl font-semibold transition-all transform hover:scale-105 active:scale-95"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Génération en cours...
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5" />
                Générer du texte
              </>
            )}
          </button>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-xl text-red-300">
            {error}
          </div>
        )}

        {/* Generated Text Output */}
        {generatedText && (
          <div className="relative">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-lg font-semibold">Texte généré</h2>
              <button
                onClick={handleCopy}
                className="flex items-center gap-2 px-3 py-1.5 bg-white/10 hover:bg-white/20 rounded-lg text-sm transition-colors"
              >
                {copied ? (
                  <>
                    <span className="text-green-400">✓ Copié!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    Copier
                  </>
                )}
              </button>
            </div>
            <div className="p-6 bg-black/40 border border-white/10 rounded-xl min-h-[200px] whitespace-pre-wrap leading-relaxed">
              {generatedText}
            </div>
          </div>
        )}

        {/* Tips Section */}
        <div className="mt-12 p-6 bg-white/5 rounded-xl border border-white/10">
          <h3 className="font-semibold mb-3">
            💡 Tips pour de meilleurs résultats
          </h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              • <strong>Soyez précis</strong> dans vos prompts - plus de détails
              = meilleurs résultats
            </li>
            <li>
              • <strong>Expérimentez</strong> avec la température (créativité)
              pour différents styles
            </li>
            <li>
              • <strong>Ajustez la longueur</strong> selon vos besoins
            </li>
            <li>
              • <strong>Utilisez Ctrl+Entrée</strong> pour générer rapidement
            </li>
          </ul>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/20 mt-12">
        <div className="max-w-5xl mx-auto px-6 py-4 text-center text-gray-500 text-sm">
          Propulsé par <span className="text-purple-400">Hugging Face</span> •
          Modèles open source
        </div>
      </footer>
    </div>
  );
}
