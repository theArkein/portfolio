import { Navbar } from '@components';
import Head from 'next/head';
import Image from 'next/image';
import ProfilePicture from '../public/profile-picture.png';

export default function Home() {
  return (
    <>
      <Head>
        <title>theArkein/portfolio</title>
        <meta name="description" content="Personal Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="m-auto flex h-screen max-w-5xl flex-col justify-between pb-20 pt-32 dark:text-white">
        <section>
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-1">
                <div className="text-2xl font-semibold">👋 Hey, I am </div>
                <h1 className="text-5xl font-semibold tracking-wide">
                  Sarad Singh
                </h1>
              </div>
              <div className=" text-xl font-medium text-primary-400 dark:text-primary-600">
                <span>Software Engineer</span>
                <span>, </span>
                <span>Kathmandu, Nepal</span>
              </div>
            </div>
            <div>
              <Image
                src={ProfilePicture}
                alt="Profile Picture"
                className="h-24 w-24"
              />
            </div>
          </div>
          {/* <h1 className="text-5xl font-semibold">Coming Soon ...</h1> */}
        </section>
        <Navbar />
      </main>
    </>
  );
}
