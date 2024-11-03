import NextImage from 'next/image';
import styles from './styles.module.css';

export default ({ name, role, imageUrl, backgroundColor }: TeamMember) => (
  <div
    className={styles.root}
    style={{
      backgroundColor,
    }}
  >
    <NextImage fill className={styles.image} src={imageUrl} alt={`Profile image ${name}`} />
    <NextImage
      width='0'
      height='0'
      className={styles.gradient}
      src='/images/meet-the-team/Gradient.svg'
      alt='Gradient'
    />

    <div className={styles.data}>
      <h5 className={styles.name}>{name}</h5>
      <span>{role}</span>
    </div>
  </div>
);
