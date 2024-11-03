import TierItem from 'components/pricing-table/tier-item';
import data from 'constants/pricing-table';
import styles from './styles.module.css';

export default () => (
  <div className={styles.root}>
    {data.map((tier, index) => (
      <TierItem key={index} {...{ planTier: tier }} />
    ))}
  </div>
);
