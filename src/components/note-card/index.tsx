import React, { PropsWithChildren } from "react";
import { Card } from "../ui/card";
import { Note } from "contentlayer/generated";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "../ui/badge";

type NoteCardProps = Note & React.HTMLAttributes<HTMLDivElement>;

function NoteCard({
  date,
  title,
  author,
  excerpt,
  readTime,
  imgSrc,
  url,
  tags,
  ...props
}: NoteCardProps) {
  return (
    <Card {...props}>
      {imgSrc && (
        <div className="relative w-full h-40">
          <Image fill className="object-cover" src={imgSrc} alt="" />
        </div>
      )}
      <div className="p-4">
        <div className="flex items-center gap-4">
          <p className=" typo-muted text-xs">{date}</p>
        </div>
        <Link href={url}>
          <h3 className="typo-small mt-1">{title}</h3>
        </Link>

        <p className="typo-muted text-justify mt-2">{excerpt}...</p>
        <div className="mt-3 flex justify-between text-xs text-muted-foreground">
          <div className=" flex gap-1">
            {tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="text-xs text-muted-foreground"
              >
                {tag}
              </Badge>
            ))}
          </div>
          <div>{readTime}</div>
        </div>
      </div>
    </Card>
  );
}

export default NoteCard;
