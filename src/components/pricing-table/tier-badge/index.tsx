import cx from 'classnames';
import styles from 'components/pricing-table/tier-badge/styles.module.css';

type Props = {
  active: boolean;
  title: Plan['tier'];
};

export default ({ active, title }: Props) => (
  <div className={cx(styles.root, active ? styles.active : '')}>{title}</div>
);
