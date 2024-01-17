/* eslint-disable react/display-name */
/* eslint-disable @next/next/no-img-element */
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import React, {
  ComponentPropsWithRef,
  HTMLAttributes,
  forwardRef,
} from "react";
import { PocketPost } from "../page";
import { Badge } from "@/components/ui/badge";
import { BookmarkCheckIcon, BoxesIcon, LucideBookOpenText } from "lucide-react";
import Link from "next/link";

type ArcticlePostProps = ComponentPropsWithRef<"div"> & {
  post: PocketPost;
};

const ArticlePost = React.forwardRef<HTMLDivElement, ArcticlePostProps>(
  ({ className, post, ref, ...props }) => {
    const tags = Object.values(post?.tags ?? {});
    const authors = Object.values(post?.authors ?? {});

    return (
      <Card className={cn(className, "p-4")} {...props} ref={ref}>
        <div className="flex gap-1 mb-2">
          {tags.map((tag) => (
            <Badge
              variant="outline"
              className="text-[10px] typo-muted font-light"
              key={tag.item_id}
            >
              #{tag.tag}
            </Badge>
          ))}
        </div>
        <div className="flex gap-4 items-center">
          {post.domain_metadata?.logo && (
            <div className=" h-6 basis-6 shrink-0 flex items-center justify-center rounded-full bg-background dark:bg-foreground ">
              <img
                className="w-full object-contain"
                src={post.domain_metadata?.logo}
                alt=""
              />
            </div>
          )}
          <Link href={post.given_url} key={post.item_id} target="_blank">
            <h4 className="typo-small w-full">{post.given_title}</h4>
          </Link>
        </div>
        <p className=" typo-muted text-xs pt-3 line-clamp-3">{post.excerpt}</p>
        <div className="flex justify-between typo-muted mt-3">
          <span className="flex gap-1 items-center">
            <BookmarkCheckIcon width={12} height={12} />
            {new Date(+post.time_added).toLocaleDateString("en", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </span>
          {
            <span className="flex gap-1 items-center flex-row-reverse">
              {post.time_to_read ? (
                <LucideBookOpenText width={12} height={12} />
              ) : (
                <BoxesIcon width={12} height={12} />
              )}
              {post.time_to_read && "5 mins"}
            </span>
          }
        </div>
      </Card>
    );
  }
);

export default ArticlePost;
