// contentlayer.config.ts

import { defineDocumentType, makeSource } from "contentlayer/source-files";
import highlight from "rehype-highlight";
import remarkGfm from "remark-gfm";

import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";

export const Note = defineDocumentType(() => ({
  name: "Note",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "string", required: true },
    author: { type: "string", required: false },
    tags: {
      type: "list",
      of: {
        type: "string",
      },
      required: true,
    },
    readTime: { type: "string", required: true },
    imgSrc: { type: "string", required: false },
    excerpt: { type: "string", required: true },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (note) => `/notes/${note._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: "notes",
  documentTypes: [Note],
  mdx: {
    // remarkPlugins: [],
    rehypePlugins: [
      highlight({
        languages: {
          javascript,
        },
      }),
    ],
  },
});
