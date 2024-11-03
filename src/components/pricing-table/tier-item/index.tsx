import cx from 'classnames';
import TierBadge from 'components/pricing-table/tier-badge';
import styles from 'components/pricing-table/tier-item/styles.module.css';

type Props = { planTier: Plan };

export default ({ planTier: { active, ...planTier } }: Props) => (
  <div className={cx(styles.root, active ? styles.active : '')}>
    <div className={styles.header}>
      <TierBadge {...{ active: Boolean(active), title: planTier.tier }} />
      <span className='text-6xl font-semibold'>${planTier.price}</span>
      <span>Per month</span>
    </div>

    <div className={styles.features}>
      {(Object.keys(planTier.features) as FeatureKey[]).map((featureKey, index) => (
        <div
          key={index}
          className={cx(styles['feature-item'], active ? styles['feature-item-active'] : '')}
        >
          {planTier.features[featureKey] === false ? (
            '-'
          ) : planTier.features[featureKey] === true ? (
            <img src={`/images/pricing-table/check${!active ? '-1' : ''}.svg`} alt='Check icon' />
          ) : (
            planTier.features[featureKey]
          )}
        </div>
      ))}
    </div>

    <div className={cx(styles['get-started'], active ? styles['get-started-active'] : '')}>
      Get Started{' '}
      <img src={`/images/pricing-table/down arrow${!active ? '-1' : ''}.svg`} alt='Arrow Icon' />
    </div>
  </div>
);
