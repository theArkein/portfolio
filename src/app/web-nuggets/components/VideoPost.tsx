"use client";
/* eslint-disable react/display-name */
/* eslint-disable @next/next/no-img-element */
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import React, {
  ComponentPropsWithRef,
  HTMLAttributes,
  forwardRef,
  useState,
} from "react";
import { PocketPost } from "../page";
import { Badge } from "@/components/ui/badge";
import {
  BookmarkCheckIcon,
  LucideBookOpenText,
  PlayCircleIcon,
  StopCircleIcon,
} from "lucide-react";
import Link from "next/link";

type VideoPostProps = ComponentPropsWithRef<"div"> & {
  post: PocketPost;
};

const Embed = ({ videoID }: { videoID: string }) => (
  <iframe
    width="full"
    src={`https://www.youtube.com/embed/${videoID}?si=asomom4mY4ZswB3i`}
    allow="autoplay;"
  />
);

const VideoPost = React.forwardRef<HTMLDivElement, VideoPostProps>(
  ({ className, post, ref, ...props }) => {
    const [showPlayer, setShowPlayer] = useState(false);
    const tags = Object.values(post?.tags ?? {});

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
            <div className="h-8 basis-8 shrink-0 flex items-center justify-center rounded-full bg-background dark:bg-foreground ">
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
        <div className="flex justify-between typo-muted mt-3">
          <span className="flex gap-1 items-center">
            <BookmarkCheckIcon width={12} height={12} />
            {new Date(+post.time_added).toLocaleDateString("en", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </span>
          <span className="flex gap-1 items-center flex-row-reverse cursor-pointer">
            {/* {!showPlayer ? ( */}
            <PlayCircleIcon
              width={16}
              height={16}
              className=" hover:text-foreground"
              onClick={() => setShowPlayer(!showPlayer)}
            />
            {/* ) : (
              <StopCircleIcon
                width={20}
                height={20}
                className=" hover:text-foreground"
                onClick={() => setShowPlayer(false)}
              />
            )} */}
            {/* <span>{post?.time_to_read ?? 5} mins</span> */}
          </span>
        </div>
        <div
          className={cn(
            showPlayer ? "h-40" : "h-0",
            "overflow-hidden transition-all duration-300 w-full bg-black flex items-center justify-center mt-2"
          )}
        >
          {<Embed videoID={post.given_url.split("=")[1]} />}
        </div>
      </Card>
    );
  }
);

export default VideoPost;
