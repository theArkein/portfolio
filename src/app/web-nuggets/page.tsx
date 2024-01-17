/* eslint-disable react/no-unescaped-entities */
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import usePocket from "@/hooks/usePocket";
import { getPosts, getTagLists } from "@/hooks/usePocket/requests";
import React, { useRef } from "react";
import ArticlePost from "./components/ArticlePost";
import { cn } from "@/lib/utils";
import Posts from "./components/Posts";

type ComputedObject<T> = {
  [key: string]: T;
};

type PocketTag = {
  item_id: string;
  tag: string;
};

type PocketVideo = {
  item_id: string;
  video_id: string;
  src: string;
  width: string;
  height: string;
  length: string;
};

type PocketImage = {
  item_id?: string;
  image_id?: string;
  src?: string;
  width?: string;
  height?: string;
  credit?: string;
  caption?: string;
};

type PocketAuthor = {
  item_id: string;
  author_id: string;
  name: string;
  url: string;
};

export type PocketPost = {
  item_id: string;
  given_url: string;
  given_title: string;
  excerpt: string;
  is_article: "0" | "1";
  has_image: "0" | "1" | "2";
  has_video: "0" | "1" | "2";
  time_added: string;
  word_count: string;
  time_to_read: number;
  image: PocketImage;
  tags: ComputedObject<PocketTag>;
  authors: ComputedObject<PocketAuthor>;
  videos: ComputedObject<PocketVideo>;
  images: ComputedObject<PocketImage>;
  domain_metadata: {
    name: string;
    logo: string;
    greyscale_logo: string;
  };
};

async function WebNuggets() {
  // const { tags } = usePocket();
  const tags: string[] = await getTagLists();
  const postsRes: ComputedObject<PocketPost> = await getPosts();

  console.log(postsRes);

  const posts = Object.values(postsRes);

  return (
    <div className="relative">
      <div className="bg-background pt-8 pb-4 sticky top-[72px] z-50">
        <h1 className="h1">WebNuggets</h1>
        <p className="paragraph typo-muted text-justify mt-4">
          Discover my web wanderings! From insightful articles to handy tools,
          explore a curated collection of bookmarks that caught my eye across
          the digital landscape. Join me in the "WebNuggets Showcase" for a
          glimpse into the gems I've uncovered online.
        </p>
      </div>

      <div className="grid grid-cols-2 auto-rows-max grid-flow-row items-start bg-background pt-4">
        <div className="sticky top-[268px] z-30 pr-7">
          <div className="flex flex-wrap gap-1">
            {tags.map((tag) => (
              <Badge
                className=" text-muted-foreground"
                variant={"outline"}
                key={tag}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
        <Posts posts={posts} />
      </div>
    </div>
  );
}

export default WebNuggets;
