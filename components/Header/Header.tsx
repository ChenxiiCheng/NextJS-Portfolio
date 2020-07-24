import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Icon } from 'semantic-ui-react';

import styles from './Header.module.scss';

export default function Header() {
  const [hasScrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', _handleScroll);

    return () => {
      window.removeEventListener('scroll', _handleScroll);
    };
  }, []);

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
      <span>
        <Icon name="hand point left outline" className={styles.icon} />
        <a href="https://www.chenxii.xyz">
          {' '}
          <span className="back">Old Version</span>
        </a>
      </span>
      <ul>
        <li>
          <Link href="/projects">
            <a className={`${styles.btn} ${styles.pink}`}>Projects</a>
          </Link>
        </li>
        <li>
          <a
            href="https://www.yuque.com/chenxi-35kem"
            className={`${styles.btn} ${styles.green}`}
          >
            Notes
          </a>
        </li>
        <li>
          <a
            href="https://github.com/ChenxiiCheng"
            className={`${styles.btn} ${styles.blue}`}
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/chenxi-cheng-42a564159/"
            className={`${styles.btn} ${styles.yellow}`}
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </nav>
  );
}
