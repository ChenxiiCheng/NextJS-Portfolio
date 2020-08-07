import Card from '../../components/Card/Card';

import styles from './index.module.scss';

const cardData = [
  {
    id: 0,
    url: 'https://github.com/ChenxiiCheng/NextJS-DjangoREST-Blog',
    img: '/images/frontend1.png',
    tags: ['Next.js', 'Django REST', 'Redux'],
    title: '🚀 Full Stack 😱 Blog Website ',
    desc:
      'This is a full stack blog project based on Next.js, Redux, Django REST Framework. If you like it, please give a star!',
  },
  {
    id: 1,
    url: 'https://music.chenxii.xyz',
    img: '/images/tango-music.png',
    tags: ['Next.js', 'TypeScript', 'Sass'],
    title: '🔥 Tango 🤟 Music',
    desc:
      'This is the Tango Music website based on Next.js, a simple demo deploy on Vercel. Currently in the beginning stage.',
  },
  {
    id: 2,
    url: 'https://www.chenxii.xyz',
    img: '/images/nextjs-blog.png',
    tags: ['Next.js', 'Semantic UI', 'TypeScript'],
    title: 'NEW 🔥🔥 Portfolio Website',
    desc:
      'This is my new version portfolio website based on Next.js, Semantic UI, and TypeScript, deploy on Vercel.',
  },
  {
    id: 3,
    url: 'https://insurance.chenxii.xyz',
    img: '/images/home1.png',
    tags: ['React', 'ES6', 'Sass'],
    title: '🏠 🚘  Insurance Official Website',
    desc:
      'This is an insurance official website based on React + React Router + Sass',
  },
  {
    id: 4,
    img: '/images/plat.png',
    url: 'https://github.com/ChenxiiCheng/Insurance-Management-Platform',
    tags: ['React', 'Express', 'PostgreSQL'],
    title: 'Insurance Purchase Platform 🏦',
    desc:
      'This is an insurance purchase platform based on React + Express + PostgreSQL + Ant Design UI + TypeScript + Axios + Sass.',
  },
  {
    id: 5,
    img: '/images/reddit-vue.png',
    url: 'https://reddit.chenxii.xyz',
    tags: ['Vue', 'Element UI', 'Sass'],
    title: 'Reddit 🎀  Forum',
    desc: 'This is a reddit forum based on Vue + Aixos + Element UI + Sass.',
  },
  {
    id: 6,
    img: '/images/user.png',
    url: 'https://github.com/ChenxiiCheng/React-Permissions',
    tags: ['React', 'Redux', 'Ant Design UI'],
    title: '📬 React Redux CMS',
    desc:
      'This is a content management system based on React + Redux + Ant Design UI + Axios',
  },
  {
    id: 7,
    img: '/images/cooking-react.jpeg',
    url: 'https://cooking.chenxii.xyz',
    tags: ['React', 'Ant Design UI', 'Sass'],
    title: 'Recipe 😋 🍔 Website',
    desc:
      'This is a learn cooking and share recipe website based on React + Aixos + Ant Design UI.',
  },
  {
    id: 8,
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
