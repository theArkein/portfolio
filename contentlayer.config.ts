// contentlayer.config.ts

import { defineDocumentType, makeSource } from "contentlayer/source-files";
import highlight from "rehype-highlight";
import remarkGfm from "remark-gfm";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";

/** @type {import('rehype-pretty-code').Options} */
const options = {
  themes: { light: "vitesse-light", dark: "vitesse-dark" },
  langs: ["javascript"],
  onVisitLine(node: { children: string | any[] }) {
    // Prevent lines from collapsing in `display: grid` mode, and allow empty
    // lines to be copy/pasted
    if (node.children.length === 0) {
      node.children = [{ type: "text", value: " " }];
    }
  },
  onVisitHighlightedLine(node: { properties: { className: string[] } }) {
    node.properties.className.push("line--highlighted");
  },
  onVisitHighlightedWord(node: { properties: { className: string[] } }) {
    node.properties.className = ["word--highlighted"];
  },
};

import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import rehypeSlug from "rehype-slug";

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
    slug: {
      type: "string",
      resolve: (doc) => `/${doc._raw.flattenedPath}`,
    },
    slugAsParams: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
    },
  },
}));

export default makeSource({
  contentDirPath: "notes",
  documentTypes: [Note],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [rehypePrettyCode, options],
      // [
      //   rehypeAutolinkHeadings,
      //   {
      //     properties: {
      //       className: ["subheading-anchor"],
      //       ariaLabel: "Link to section",
      //     },
      //   },
      // ],
    ],
  },
});
