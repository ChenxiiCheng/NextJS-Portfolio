import Card from '../../components/Card/Card';

import styles from './index.module.scss';

const cardData = [
  {
    id: 0,
    url: 'https://www.chenxii.xyz',
    img: '/images/nextjs-blog.png',
    tags: ['Next.js', 'Semantic UI', 'TypeScript'],
    title: 'NEW 🔥🔥 Personal Website',
    desc:
      'This is my new version personal website based on Next.js, semantic UI, and TypeScript, deploy on Vercel.',
  },
  {
    id: 1,
    url: 'https://insurance.chenxii.xyz',
    img: '/images/home1.png',
    tags: ['React', 'ES6', 'Sass'],
    title: '🏠 🚘  Insurance Official Website',
    desc:
      'This is an insurance official website based on React + React Router + Sass',
  },
  {
    id: 2,
    img: '/images/plat.png',
    url: 'http://172.81.242.65:3000',
    tags: ['React', 'Express', 'PostgreSQL'],
    title: 'Insurance Purchase Platform 🏦',
    desc:
      'This is an insurance purchase platform based on React + Express + PostgreSQL + Ant Design UI + TypeScript + Axios + Sass.',
  },
  {
    id: 3,
    img: '/images/reddit-vue.png',
    url: 'https://reddit.chenxii.xyz',
    tags: ['Vue', 'Element UI', 'Sass'],
    title: 'Reddit 🎀  Forum',
    desc: 'This is a reddit forum based on Vue + Aixos + Element UI + Sass.',
  },
  {
    id: 4,
    img: '/images/user.png',
    url: 'https://github.com/ChenxiiCheng/React-Permissions',
    tags: ['React', 'Redux', 'Ant Design UI'],
    title: '📬 React Redux CMS',
    desc:
      'This is a learn content management system based on React + Redux + Ant Design UI + Axios',
  },
  {
    id: 5,
    img: '/images/cooking-react.jpeg',
    url: 'https://cooking.chenxii.xyz',
    tags: ['React', 'Ant Design UI', 'Sass'],
    title: 'Recipe 😋 🍔 Website',
    desc:
      'This is a learn cooking and share recipe website based on React + Aixos + Ant Design UI.',
  },
  {
    id: 6,
    img: '/images/admin-react.png',
    url: 'https://cms.chenxii.xyz',
    tags: ['React', 'Echarts', 'Less'],
    title: '👻 Company CMS',
    desc:
      'This is a learn bicycle content management system based on React + Ant Design UI + Echarts + Axios + Less.',
  },
];

export default function Projects() {
  return (
    <div className={styles.section}>
      <h1>Side Projects</h1>
      <div className={styles.cardsContainer}>
        {cardData.map((card) => (
          <Card data={card} key={card.id} />
        ))}
      </div>
    </div>
  );
}
