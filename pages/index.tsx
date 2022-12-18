// import ToggleTheme from '@Components';
import { ToggleTheme } from '@components';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>theArkein/portfolio</title>
        <meta name="description" content="Personal Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <h3 className="bg-pink-700 px-4 py-2 text-white dark:bg-sky-700 sm:px-8 sm:py-3">
          Welcome to my portfolio
        </h3>
        <ToggleTheme />
        <ToggleTheme />
      </main>
    </>
  );
}
