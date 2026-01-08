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
            .map((file) => {
              // Remove .md extension and filter out "readme" (case-insensitive)
              let title = file.name.replace(/\.md$/i, "");
              title = title.replace(/^readme$/i, "").trim();
              
              // Only add heading if title is not empty after removing readme
              if (title) {
                return `# ${title}\n\n${file.content}`;
              }
              return file.content;
            })
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
              className="bg-gradient-to-br from-gray-800/95 to-gray-900/95 rounded-xl p-8 md:p-12 border border-gray-700/50 shadow-2xl backdrop-blur-sm"
            >
              <div className="prose prose-invert max-w-none 
                prose-headings:text-white prose-headings:font-bold prose-headings:tracking-tight
                prose-h1:text-4xl prose-h1:font-extrabold prose-h1:mb-6 prose-h1:mt-10 prose-h1:first:mt-0 prose-h1:bg-gradient-to-r prose-h1:from-blue-400 prose-h1:to-purple-400 prose-h1:bg-clip-text prose-h1:text-transparent prose-h1:pb-2 prose-h1:border-b prose-h1:border-gray-700
                prose-h2:text-3xl prose-h2:font-bold prose-h2:mb-4 prose-h2:mt-8 prose-h2:text-blue-300
                prose-h3:text-2xl prose-h3:font-semibold prose-h3:mb-3 prose-h3:mt-6 prose-h3:text-purple-300
                prose-h4:text-xl prose-h4:font-semibold prose-h4:mb-2 prose-h4:mt-4 prose-h4:text-gray-200
                prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-5 prose-p:text-base prose-p:font-normal
                prose-a:text-blue-400 prose-a:no-underline prose-a:font-medium hover:prose-a:text-blue-300 hover:prose-a:underline prose-a:transition-colors
                prose-strong:text-white prose-strong:font-bold
                prose-code:text-blue-400 prose-code:bg-gray-900/80 prose-code:px-2 prose-code:py-1 prose-code:rounded-md prose-code:text-sm prose-code:font-mono prose-code:border prose-code:border-gray-700/50
                prose-pre:bg-gray-900/80 prose-pre:border prose-pre:border-gray-700/50 prose-pre:rounded-xl prose-pre:p-6 prose-pre:overflow-x-auto prose-pre:shadow-inner prose-pre:backdrop-blur-sm
                prose-pre-code:bg-transparent prose-pre-code:border-0 prose-pre-code:p-0
                prose-ul:text-gray-300 prose-ul:mb-5 prose-ul:space-y-2 prose-ul:list-disc prose-ul:pl-6
                prose-ol:text-gray-300 prose-ol:mb-5 prose-ol:space-y-2 prose-ol:list-decimal prose-ol:pl-6
                prose-li:text-gray-300 prose-li:leading-relaxed prose-li:marker:text-blue-400
                prose-blockquote:border-blue-500 prose-blockquote:bg-blue-900/20 prose-blockquote:text-gray-200 prose-blockquote:pl-6 prose-blockquote:pr-4 prose-blockquote:py-2 prose-blockquote:border-l-4 prose-blockquote:rounded-r-lg prose-blockquote:italic prose-blockquote:my-6
                prose-img:rounded-xl prose-img:border prose-img:border-gray-700/50 prose-img:shadow-lg prose-img:my-6 prose-img:mx-auto
                prose-hr:border-gray-700 prose-hr:my-8 prose-hr:opacity-50
                prose-table:w-full prose-table:my-6 prose-table:border-collapse
                prose-th:bg-gray-800 prose-th:text-white prose-th:font-semibold prose-th:p-3 prose-th:border prose-th:border-gray-700
                prose-td:bg-gray-800/50 prose-td:text-gray-300 prose-td:p-3 prose-td:border prose-td:border-gray-700">
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
