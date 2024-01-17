import React from "react";
import { PocketPost } from "../page";
import ArticlePost from "./ArticlePost";
import { cn } from "@/lib/utils";
import VideoPost from "./VideoPost";
import Link from "next/link";

const Posts = ({ posts }: { posts: PocketPost[] }) => {
  return (
    <div className="flex flex-col gap-2 pl-7 group">
      {posts.map((post) => (
        <>
          {post.has_video === "2" && (
            <VideoPost
              key={post.item_id}
              post={post}
              className={cn(
                "w-full group-hover:hover:scale-100 group-hover:scale-90 cursor-pointer z-40 transition-all opacity-100 group-hover:opacity-50 group-hover:hover:opacity-100"
              )}
            />
          )}
          {post.is_article === "1" && (
            <ArticlePost
              key={post.item_id}
              post={post}
              className={cn(
                "w-full group-hover:hover:scale-100 group-hover:scale-90 cursor-pointer  z-40 transition-all opacity-100 group-hover:opacity-50 group-hover:hover:opacity-100"
              )}
            />
          )}
        </>
      ))}
    </div>
  );
};

export default Posts;
