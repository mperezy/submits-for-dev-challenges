import NextImage from 'next/image';
import styles from './styles.module.css';

const getDateFormatted = (date: Date) => {
  const formatter = new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return formatter.format(date);
};

export default ({ title, description, date, imageUrl }: ArticleListItem) => (
  <div className={styles.root}>
    <div className={styles.image}>
      <NextImage fill src={imageUrl} alt={title} />
    </div>

    <div className={styles.content}>
      <h3 className={styles.heading}>
        {title}: {description}
      </h3>

      <span className={styles.date}>{getDateFormatted(date)}</span>
    </div>
  </div>
);
