import { features } from 'constants/pricing-table';
import styles from './styles.module.css';

export default () => (
  <div className={styles.root}>
    {(Object.values(features) as string[]).map((feature, index) => (
      <div key={index} className={styles.feature}>
        {feature}
      </div>
    ))}
  </div>
);
