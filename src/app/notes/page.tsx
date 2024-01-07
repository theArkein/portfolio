import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { notes } from "@/mocks/notes";
import { allNotes } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Notes() {
  const leftNotes: React.JSX.Element[] = [];
  const rightNotes: React.JSX.Element[] = [];

  const notes = allNotes.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  notes.map(
    ({ date, title, author, excerpt, readTime, imgSrc, url }, index) => {
      const tags = ["typescript", "react"];
      const noteElement = (
        <Card className="" key={index}>
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

      index % 2 ? rightNotes.push(noteElement) : leftNotes.push(noteElement);
    }
  );
  return (
    <div className="flex flex-col bg-background">
      <div className="sticky top-[72px] bg-background z-50 pt-8 pb-4">
        <h1 className="h1">Code Chronicles</h1>
        <p className="typo-muted text-justify mt-4">
          Dive into my digital notebook, where I pen down reflections,
          tutorials, and musings from my journey in software engineering. This
          collection of blogs serves as a tapestry of my experiences, each post
          weaving a unique story about challenges conquered, technologies
          explored, and lessons learned.
        </p>
        <div className="text-sm flex gap-2 mt-6">
          <Badge variant="secondary" className="p-2 px-3">
            #typescript
          </Badge>
          <Badge variant="secondary" className="p-2 px-3">
            #react
          </Badge>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 auto-rows-max grid-flow-row items-start">
        <div className="grid gap-4 justify-start">{leftNotes}</div>
        <div className="grid gap-4 justify-start">{rightNotes}</div>
      </div>
    </div>
  );
}

export default Notes;
