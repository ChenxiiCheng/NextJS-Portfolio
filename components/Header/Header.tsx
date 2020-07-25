import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { Icon } from 'semantic-ui-react';

import styles from './Header.module.scss';

export default function Header() {
  const router = useRouter();
  const [hasScrolled, setScrolled] = useState<boolean>(false);
  const [backToHome, setBackToHome] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener('scroll', _handleScroll);

    return () => {
      window.removeEventListener('scroll', _handleScroll);
    };
  }, []);

  useEffect(() => {
    if (router.pathname !== '/') {
      setBackToHome(true);
    } else {
      setBackToHome(false);
    }
  }, [router.pathname]);

  const _handleScroll = (event) => {
    const scrollTop = window.pageYOffset;
    if (scrollTop > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  return (
    <nav
      className={
        hasScrolled ? `${styles.navbar} ${styles.scroll}` : `${styles.navbar}`
      }
    >
      <div>
        <span>
          <Icon name="hand point left outline" className={styles.icon} />
          <a href="https://chenxiicheng.github.io/react-resume" target="_blank">
            {' '}
            <span className="back">Old Version</span>
          </a>
        </span>
        {backToHome ? (
          <span>
            <Icon name="home" className={styles.icon} />
            <Link href="/">
              <a className={styles.back}>Home</a>
            </Link>
          </span>
        ) : null}
      </div>
      <ul>
        <li>
          <Link href="/projects">
            <a className={`${styles.btn} ${styles.pink}`}>Projects</a>
          </Link>
        </li>
        <li>
          <a
            href="https://www.yuque.com/chenxi-35kem"
            target="_blank"
            className={`${styles.btn} ${styles.green}`}
          >
            Notes
          </a>
        </li>
        <li>
          <a
            href="https://github.com/ChenxiiCheng"
            target="_blank"
            className={`${styles.btn} ${styles.blue}`}
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/chenxi-cheng-42a564159/"
            target="_blank"
            className={`${styles.btn} ${styles.yellow}`}
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </nav>
  );
}
