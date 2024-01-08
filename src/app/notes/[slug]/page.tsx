import { format, parseISO } from "date-fns";
import { allNotes } from "contentlayer/generated";
import { Mdx } from "@/components/mdx";

export const generateStaticParams = async () =>
  allNotes.map((note) => ({ slug: note._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const note = allNotes.find((note) => note._raw.flattenedPath === params.slug);
  if (!note) throw new Error(`Post not found for slug: ${params.slug}`);

  return { title: note.title };
};

const Note = ({ params }: { params: { slug: string } }) => {
  const post = allNotes.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);

  return (
    <article className="">
      <h1 className="h1 mb-4">{post.title}</h1>
      <Mdx code={post.body.code} />
    </article>
  );
};

export default Note;
