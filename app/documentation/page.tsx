"use client";
import { motion } from "framer-motion";
import { ExternalLink, Github, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const GITHUB_USERNAME = "FouratMejri99";
const REPO_NAME = "documentation";

interface GitHubFile {
  name: string;
  type: string;
  download_url?: string;
  path: string;
}

interface FileContent {
  name: string;
  path: string;
  content: string;
  type: string;
}

export default function Documentation() {
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDocumentation = async () => {
      try {
        setLoading(true);
        setError(null);

        // First, fetch the repository contents
        const contentsResponse = await fetch(
          `https://api.github.com/repos/${GITHUB_USERNAME}/${REPO_NAME}/contents`
        );

        if (!contentsResponse.ok) {
          throw new Error(`Repository not found or not accessible`);
        }

        const contents = await contentsResponse.json();

        // Filter for markdown files
        const markdownFiles = (contents as GitHubFile[]).filter(
          (file: GitHubFile) =>
            file.type === "file" &&
            (file.name.endsWith(".md") || file.name.endsWith(".MD")) &&
            file.download_url
        );

        if (markdownFiles.length === 0) {
          // If no markdown files, try to get README.md directly
          try {
            const readmeResponse = await fetch(
              `https://api.github.com/repos/${GITHUB_USERNAME}/${REPO_NAME}/readme`
            );
            if (readmeResponse.ok) {
              const readmeData = await readmeResponse.json();
              // GitHub API returns base64 encoded content
              const decodedContent = atob(
                readmeData.content.replace(/\n/g, "")
              );
              setContent(decodedContent);
              setLoading(false);
              return;
            }
          } catch {
            throw new Error("No markdown files found in repository");
          }
        }

        // Fetch content from all markdown files
        const fileContents: FileContent[] = [];
        for (const file of markdownFiles) {
          if (!file.download_url) continue;
          try {
            const fileResponse = await fetch(file.download_url);
            if (fileResponse.ok) {
              const fileContent = await fileResponse.text();
              fileContents.push({
                name: file.name,
                path: file.path,
                content: fileContent,
                type: file.type,
              });
            }
          } catch (err) {
            console.error(`Error fetching ${file.name}:`, err);
          }
        }

        // Sort files: README.md first, then alphabetically
        fileContents.sort((a, b) => {
          if (a.name.toLowerCase() === "readme.md") return -1;
          if (b.name.toLowerCase() === "readme.md") return 1;
          return a.name.localeCompare(b.name);
        });

        if (fileContents.length > 0) {
          // Combine all markdown files into one content string
          const combinedContent = fileContents
            .map(
              (file) =>
                `# ${file.name.replace(/\.md$/i, "")}\n\n${file.content}`
            )
            .join("\n\n---\n\n");

          setContent(combinedContent);
        } else {
          throw new Error("No markdown files found in repository");
        }
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "Failed to load documentation";
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchDocumentation();
  }, []);

  return (
    <main className="font-sans bg-gray-900 min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 pt-24 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="flex items-center justify-between mb-4 flex-wrap gap-4">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                  Documentation
                </h1>
                <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mb-4"></div>
              </div>
              <a
                href={`https://github.com/${GITHUB_USERNAME}/${REPO_NAME}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors"
              >
                <Github className="w-5 h-5" />
                <span className="text-sm">View on GitHub</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {loading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center justify-center py-20"
            >
              <Loader2 className="w-8 h-8 text-blue-500 animate-spin" />
              <span className="ml-3 text-gray-300">
                Loading documentation...
              </span>
            </motion.div>
          )}

          {error && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-red-900/20 border border-red-700 rounded-lg p-6 text-red-300"
            >
              <h3 className="font-bold mb-2">Error loading documentation</h3>
              <p>{error}</p>
              <p className="text-sm mt-4 text-gray-400">
                Make sure the repository{" "}
                <a
                  href={`https://github.com/${GITHUB_USERNAME}/${REPO_NAME}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  {GITHUB_USERNAME}/{REPO_NAME}
                </a>{" "}
                exists and is public.
              </p>
            </motion.div>
          )}

          {!loading && !error && content && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-800 rounded-lg p-8 border border-gray-700 prose prose-invert max-w-none"
            >
              <div className="prose-headings:text-white prose-h1:text-3xl prose-h1:font-bold prose-h1:mb-4 prose-h1:mt-8 prose-h1:first:mt-0 prose-h2:text-2xl prose-h2:font-bold prose-h2:mb-3 prose-h2:mt-6 prose-h3:text-xl prose-h3:font-semibold prose-h3:mb-2 prose-h3:mt-4 prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-4 prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline prose-strong:text-white prose-code:text-blue-400 prose-code:bg-gray-900 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-pre:bg-gray-900 prose-pre:border prose-pre:border-gray-700 prose-pre:rounded-lg prose-pre:p-4 prose-pre:overflow-x-auto prose-ul:text-gray-300 prose-ol:text-gray-300 prose-li:text-gray-300 prose-blockquote:border-blue-500 prose-blockquote:bg-blue-900/10 prose-blockquote:text-gray-300 prose-blockquote:pl-4 prose-blockquote:border-l-4 prose-img:rounded-lg prose-img:border prose-img:border-gray-700 prose-hr:border-gray-700">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {content}
                </ReactMarkdown>
              </div>
            </motion.div>
          )}
        </div>
      </div>
      <Footer />
    </main>
  );
}
