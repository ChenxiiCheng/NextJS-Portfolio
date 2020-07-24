import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Made with ❤️ and 🔥</p>

      <p>
        <a href="https://github.com/ChenxiiCheng">Github</a> ·{' '}
        <a href="https://www.linkedin.com/in/chenxi-cheng-42a564159/">
          LinkedIn
        </a>{' '}
        · <a href="https://www.yuque.com/chenxi-35kem">YuQue</a>
      </p>
      <p> &copy; Chenxii</p>
    </footer>
  );
}
