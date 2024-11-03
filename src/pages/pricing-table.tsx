import { Be_Vietnam_Pro } from 'next/font/google';
import cx from 'classnames';
import Features from 'components/pricing-table/features';
import Table from 'components/pricing-table/table';
import styles from 'styles/pricing-table.module.css';

const BeVietmanProFont = Be_Vietnam_Pro({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

export default () => (
  <div className={cx(BeVietmanProFont.className, styles.root)}>
    <div
      className={styles.header}
      style={{
        backgroundImage: 'url("/images/pricing-table/sand-background-image.png")',
      }}
    >
      <h2 className={styles.heading}>Pricing & Plans</h2>
      <span className={styles['sub-heading']}>
        Discover the plan that unlocks the transformative power of digital art and join our vibrant
        community today.
      </span>
    </div>

    <div className={styles['pricing-table']}>
      <Features />
      <Table />
    </div>
  </div>
);
