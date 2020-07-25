import styles from './Card.module.scss';

type DataType = {
  id: number;
  img: string;
  url: string;
  tags: string[];
  title: string;
  desc: string;
};

interface IProps {
  data: DataType;
}

const CardComponent = ({ data }: IProps) => {
  const { id, img, url, tags, title, desc } = data;
  return (
    <div className={styles.cardContainer}>
      <a href={url} target="_blank">
        <div
          className={
            id === 0 ? `${styles.image} ${styles.border}` : styles.image
          }
        >
          <img src={img} alt="insurance web" />
        </div>
        <div className={styles.body}>
          {tags.length &&
            tags.map((tag, index) => (
              <span className={styles.tag} key={index}>
                {tag}
              </span>
            ))}
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.desc}>{desc}</p>
        </div>
      </a>
    </div>
  );
};

export default CardComponent;
