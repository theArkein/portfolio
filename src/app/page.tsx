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
    path: "https://github.com/theArkein/theArkein",
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
    <div className="relative flex flex-col  h-[calc(80vh-102px)] pt-32">
      <div className="flex-auto flex flex-col items-center">
        <div className="flex gap-6 items-center mx-auto">
          <div className=" h-20 w-20 bg-foreground rounded-full"></div>
          <div>
            <h1 className=" text-5xl font-bold">Sarad Singh</h1>
            <div className=" text-muted-foreground flex gap-3 mt-2">
              <div className="flex gap-2">
                <BriefcaseIcon className=" w-3" /> <h3>Software Engineer</h3>
              </div>
              <div className=" flex gap-2">
                <MapPinIcon className=" w-3" /> <h3>Kathmandu, Nepal</h3>
              </div>
            </div>
          </div>
        </div>
        <div className=" mt-10 w-[512px] mx-auto">
          <h4 className=" font-semibold">About</h4>
          <p className=" typo-muted text-justify">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa,
            eius. Dolores illum neque, modi assumenda inventore dicta a
            expedita, culpa labore soluta quidem ratione at. Totam odit alias
            laboriosam nulla?
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
                    >
                      {social.icon}
                    </Link>
                  )
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-6 mt-36 text-muted-foreground underline underline-offset-4 text-sm ">
        {bottomNavs.map((nav) => (
          <Link
            className="hover:text-foreground"
            key={nav.label}
            href={nav.path}
          >
            {nav.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
