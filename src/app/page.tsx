/* eslint-disable react/no-unescaped-entities */
import ProgressBar from "@/components/progress-bar";
import { ModeToggle } from "@/components/ui/mode-toggle";
import {
  BriefcaseIcon,
  FolderIcon,
  GamepadIcon,
  GithubIcon,
  LinkedinIcon,
  MapPinIcon,
  PinIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import profilePic from "../../public/profile-picture.webp";

const bottomNavs = [
  // {
  //   label: "Read CV",
  //   path: "/",
  // },
  // {
  //   label: "Work",
  //   path: "/",
  // },
  // {
  //   label: "MemoryArchive",
  //   path: "/",
  // },
];

const socials = [
  {
    icon: <GithubIcon width={16} />,
    path: "https://github.com/theArkein/theArkein",
    enable: true,
  },
  {
    icon: <LinkedinIcon width={16} />,
    path: "https://linkedin.com/in/sarad-singh",
    enable: true,
  },
  {
    icon: <GamepadIcon width={16} />,
    path: "https://github.com/theArkein/theArkein",
    enable: false,
  },
];

export default function Home() {
  return (
    <div className="relative flex flex-col  h-[calc(80vh-102px)] pt-24">
      <div className="flex-auto flex flex-col items-center">
        <div className="flex gap-6 items-center mx-auto">
          <div className="relative h-14 w-14 md:h-24 md:w-24 bg-foreground rounded-full">
            <Image src={profilePic} alt="" />
          </div>
          <div>
            <h1 className="text-2xl md:text-5xl font-bold">Sarad Singh</h1>
            <div className=" text-xs md:text-base text-muted-foreground flex  flex-col md:gap-1 mt-2">
              <div className="flex gap-2">
                <BriefcaseIcon className=" w-3" />{" "}
                <h3 className="">
                  Software Engineer at{" "}
                  <Link
                    href="https://www.kompliant.com"
                    target="_blank"
                    className="underline underline-offset-4 cursor-pointer hover:text-foreground"
                  >
                    Kompliant
                  </Link>
                </h3>
              </div>
              <div className=" flex gap-2">
                <MapPinIcon className=" w-3" /> <h3>Kathmandu, Nepal</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 md:w-[548px] mx-auto">
          {/* <h4 className=" font-semibold">Bio</h4> */}
          <p className="typo-muted text-justify text-wrap">
            Hey there 👋 , I'm theArkein, a web wizard fueled by coffee and
            code. From "Hello, World!" to crafting seamless user experiences, I
            love turning ideas into digital reality. Whether it's frontend
            finesse or backend wizardry, I thrive on challenges and
            collaborative magic. When I'm not weaving codes, catch me devouring
            memes, binge-watching movies and TV shows, or diving headfirst into
            the latest quirky hobby. Feel free to check out my portfolio then
            say{" "}
            <span className="underline underline-offset-4 cursor-pointer hover:text-foreground">
              hello
            </span>{" "}
            to join the chaos.
            {/* <br /> */}
            <span className=""></span>
          </p>
          <ProgressBar />
          <div className="mt-3 flex gap-3 items-center">
            <h3>Profiles:</h3>
            <div className="flex gap-4 text-muted-foreground">
              {socials.map(
                (social, index) =>
                  social.enable && (
                    <Link
                      className="hover:text-foreground"
                      key={index}
                      href={social.path}
                      target="_blank"
                    >
                      {social.icon}
                    </Link>
                  )
              )}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex justify-center gap-6 mt-36 text-muted-foreground underline underline-offset-4 text-sm ">
        {bottomNavs.map((nav) => (
          <Link
            className="hover:text-foreground"
            key={nav.label}
            href={nav.path}
          >
            {nav.label}
          </Link>
        ))}
      </div> */}
    </div>
  );
}
