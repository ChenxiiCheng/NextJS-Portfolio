import ReactRotatinText from 'react-rotating-text';

import styles from './index.module.scss';

export default function Home() {
  return (
    <div className={styles.section}>
      <h1>Hi, I'm Chenxi Cheng</h1>
      <div className={styles.content}>
        <span>I'm currently looking for </span>
        <span className={styles.title}>
          <ReactRotatinText items={['Front End', 'Full Stack', 'Web Design']} />{' '}
          Position
        </span>
        <p>
          I graduated from NYU in May this year. I'm interested in{' '}
          <span className={styles.strong}>Front End</span> and{' '}
          <span className={styles.strong}>Full Stack Web</span> development. If
          you have any opportunity please feel free to contact me!
        </p>
      </div>
      <div className={styles.info}>
        <h1>A Little Info About Me</h1>
        <p>
          I come to the US in August 2018 for my master's program at NYU. My
          undergraduate major is communication engineering and my master's major
          is computer engineering.
        </p>
        <p>
          Recently, I completed my master's program journey, I really appreciate
          the friends and professors I met during this long journey. Thanks for
          their encouragement and support.
        </p>
        <br />
        <h1>My Tech Stack</h1>
        <p>
          Currently, my tech stack is focused on web development, including
          React, Next.js, Redux, Node, Express.js, Django, etc...
        </p>
        <p>
          For the database and cloud server, I use MongoDB, PostgreSQL, MySQL,
          Netlify, Alibaba Cloud, Digital Ocean for the most of time.
        </p>
        <p>
          And More, I also planning to learn some new stack like Nest.js,
          GraphQL, SpringBoot, etc...
        </p>
      </div>
    </div>
  );
}
