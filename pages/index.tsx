import { Footer, Navbar } from '@components';
import { BriefcaseIcon, CodeBracketIcon } from '@heroicons/react/24/outline';
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
      <main className="m-auto flex h-screen max-w-5xl flex-col gap-24 pb-20 pt-10 dark:text-white">
        <Navbar />
        <section className="flex-1">
          <section>
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-1">
                  <h3 className="text-2xl font-semibold">👋 Hey, I am </h3>
                  <h1 className="text-5xl font-semibold tracking-wide">
                    Sarad Singh
                  </h1>
                </div>
                <div>
                  <div className="flex items-center gap-2 font-medium text-primary-500">
                    <BriefcaseIcon className="h-4 w-4" />
                    <span>Full Stack Software Engineer, </span>
                    <span>Kathmandu, Nepal</span>
                  </div>
                  <div className="flex items-center  gap-2 font-medium text-primary-500">
                    <CodeBracketIcon className="h-4 w-4" />
                    <span>Open to work:</span>
                    <a
                      target="_blank"
                      href="mailto:mail@saradsingh.com.np"
                      rel="noreferrer"
                      className=" underline-offset-2 hover:text-primary-300 hover:underline"
                    >
                      mail@saradsingh.com.np
                    </a>
                  </div>
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
          </section>
          <section className="mt-20 max-w-lg text-justify">
            <h5 className="text-lg font-semibold">Ethos</h5>
            <div className="mt-2 flex flex-col gap-1 text-primary-500">
              <p>Realizing ideas into reality with my magical code.</p>
              <p>
                These days, I am castling my Queen, tuning chords for my Uke,
                lifting some weights, watching Bulls & Bears and enjoying my day
                😁.
              </p>
            </div>
          </section>
        </section>
        <Footer />
      </main>
    </>
  );
}
