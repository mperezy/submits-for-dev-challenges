import styles from './styles.module.css';

export default ({ name, role, imageUrl, backgroundColor }: TeamMember) => (
  <div
    className={styles.root}
    style={{
      backgroundColor,
    }}
  >
    <img className={styles.image} src={imageUrl} alt={`Profile image ${name}`} />
    <img className={styles.gradient} src='/images/meet-the-team/Gradient.svg' alt='Gradient' />

    <div className={styles.data}>
      <h5 className={styles.name}>{name}</h5>
      <span>{role}</span>
    </div>
  </div>
);
