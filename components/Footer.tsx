import {
  DevToIcon,
  GithubIcon,
  InstagramIcon,
  LichessIcon,
  LinkedinIcon,
} from './icons';

const socialLinks = [
  {
    order: 1,
    name: 'Github',
    link: 'https://github.com/theArkein/theArkein',
    icon: <GithubIcon className="h-4 w-4 text-primary-800 dark:fill-white" />,
  },
  {
    order: 2,
    name: 'Linkedin',
    link: 'https://www.linkedin.com/in/leosarad-in/',
    icon: <LinkedinIcon className="h-4 w-4 text-primary-800 dark:fill-white" />,
  },
  {
    order: 3,
    name: 'Dev.to',
    link: 'https://dev.to/',
    icon: <DevToIcon className="h-4 w-4 text-primary-800 dark:fill-white" />,
  },
  {
    order: 4,
    name: 'Instagram',
    link: 'https://www.instagram.com/the.arkein',
    icon: (
      <InstagramIcon className="h-4 w-4 text-primary-800 dark:fill-white" />
    ),
  },
  {
    order: 5,
    name: 'Lichess',
    link: 'https://lichess.org/@/theArkein',
    icon: <LichessIcon className="h-4 w-4 text-primary-800 dark:fill-white" />,
  },
];

export function Footer() {
  return (
    <div className="flex flex-col gap-2">
      <h6 className="mt-10 text-lg font-medium text-primary-800 dark:text-primary-200">
        Connect me on
      </h6>
      <div className="flex gap-6">
        {socialLinks.sort().map(({ order, link, name, icon }) => (
          <a
            target="_blank"
            key={order}
            href={link}
            tooltip-text={name}
            className="show-tooltip"
            rel="noreferrer"
          >
            {icon}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Footer;
