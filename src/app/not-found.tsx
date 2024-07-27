import { author, github } from '@/data/siteMetadata';
import Link from 'next/link';
import styles from '@/components/styles.module.css';
import { FaGithub, FaTwitter, FaYoutube } from 'react-icons/fa';
import { siteConfig } from '@/config/site';

export default function NotFound() {
  const { twitter, github, youtube } = siteConfig.links;

  return (
    <div className="w-full h-full">
      <div className="content black _404">
        <div className="">
          <div className="l-grid nf">
            <div
              id="w-node-_8c71e47f-157a-18c6-7712-cf3346389672-318be605"
              className="l-grid__wrap"
            >
              <div className="l-grid__item">
                <div className="text white disc bold">Not Found</div>
              </div>
            </div>
            <div
              id="w-node-_8c71e47f-157a-18c6-7712-cf3346389676-318be605"
              className="l-grid__wrap"
            >
              <div className="l-grid__item">
                <div className="text white disc bold">Not Found</div>
              </div>
            </div>
            <div
              id="w-node-_8c71e47f-157a-18c6-7712-cf334638967a-318be605"
              className="l-grid__wrap"
            >
              <div className="l-grid__item">
                <div className="text white disc bold">Not Found</div>
              </div>
            </div>
            <div className="l-grid__wrap">
              <div className="l-grid__item">
                <div className="text white disc bold">Not Found</div>
              </div>
            </div>
            <div
              id="w-node-_8c71e47f-157a-18c6-7712-cf3346389682-318be605"
              className="l-grid__wrap"
            >
              <div className="l-grid__item">
                <div className="text white disc bold">Not Found</div>
              </div>
            </div>
            <div className="l-grid__wrap">
              <div className="l-grid__item">
                <div className="text white disc bold">Not Found</div>
              </div>
            </div>
          </div>
          <div className="nf-desc  text-[4vw] leading-[3vw]">
            <div className="waypoint nf">
              <div className="nf-disc">You look lost, no qualms.</div>
            </div>

            <div className="waypoint nf">
              <div className="nf-disc">
                click here for{' '}
                <Link
                  href="/"
                  className="link cursor-pointer under  text-[#f8f6f3]"
                >
                  Homepage
                </Link>{' '}
                or to the{' '}
                <Link
                  href="/agenda"
                  className="link cursor-pointer under  text-[#d5d0ca]"
                >
                  Agenda
                </Link>
              </div>
            </div>

            <div className="waypoint nf">
              <div className="nf-disc">
                are you Still Lost? them follow me here{' '}
              </div>
            </div>
            <div className="waypoint nf">
              <div className="nf-disc">
                <div className="block-inline flex gap-2">
                  {twitter && (
                    <a
                      className={styles.twitter}
                      href={`https://twitter.com/${twitter}`}
                      title={`Twitter @${twitter}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaTwitter />
                    </a>
                  )}
                  {github && (
                    <a
                      className={styles.github}
                      href={`https://github.com/${github}`}
                      title={`GitHub @${github}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub />
                    </a>
                  )}
                  {youtube && (
                    <a
                      className={styles.youtube}
                      href={`https://www.youtube.com/${youtube}`}
                      title={`YouTube ${author}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaYoutube />
                    </a>
                  )}{' '}
                </div>
              </div>
            </div>
          </div>
          <div className="nf-box leading-[16vw] md:leading-[9vw] uppercase text-[20vw] md:text-[12vw]  text-[#d5d0ca]">
            <div className="waypoint">
              <h2 className="">Not</h2>
            </div>
            <div className="waypoint">
              <h2 className="">Found</h2>
            </div>
          </div>
          <div className="nf-head__wrap opacity-40 bottom-[4.5vw] md:bottom-[1.75vw]   text-[#d32d08]">
            <div className="waypoint">
              <h1 className="nf-head text-[40vw] md:text-[30vw]">404</h1>
            </div>
          </div>
        </div>
        <div className="dot-grid"></div>
      </div>
    </div>
  );
}
