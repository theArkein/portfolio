import {
  GithubIcon,
  InstagramIcon,
  LichessIcon,
  LinkedinIcon,
  MediumIcon,
} from './icons';

export function Footer() {
  return (
    <div className="flex flex-col gap-2">
      <h6 className="mt-10 text-lg font-medium text-primary-800 dark:text-primary-200">
        Connect me on
      </h6>
      <div className="flex gap-6">
        <a
          href="https://lichess.org/@/theArkein"
          tooltip-text="Github"
          className="show-tooltip"
        >
          <GithubIcon className="h-4 w-4 text-primary-800 dark:fill-white" />
        </a>
        <a
          href="https://lichess.org/@/theArkein"
          tooltip-text="LinkedIn"
          className="show-tooltip"
        >
          <LinkedinIcon className="h-4 w-4 text-primary-800 dark:fill-white" />
        </a>
        <a
          href="https://lichess.org/@/theArkein"
          tooltip-text="Medium"
          className="show-tooltip"
        >
          <MediumIcon className="h-4 w-4 text-primary-800 dark:fill-white" />
        </a>
        <a
          href="https://lichess.org/@/theArkein"
          tooltip-text="Instagram"
          className="show-tooltip"
        >
          <InstagramIcon className="h-4 w-4 text-primary-800 dark:fill-white" />
        </a>
        <a
          href="https://lichess.org/@/theArkein"
          tooltip-text="Lichess"
          className="show-tooltip"
        >
          <LichessIcon className="h-4 w-4 text-primary-800 dark:fill-white" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
