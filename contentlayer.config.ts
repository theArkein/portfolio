// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Note = defineDocumentType(() => ({
  name: "Note",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    author: { type: "string", required: true },
    tags: {
      type: "list",
      of: {
        type: "string",
      },
      required: true,
    },
    readTime: { type: "string", required: true },
    imgSrc: { type: "string", required: true },
    excerpt: { type: "string", required: true },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (note) => `/notes/${note._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({ contentDirPath: "notes", documentTypes: [Note] });
