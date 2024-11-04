import { Outfit } from 'next/font/google';
import cx from 'classnames';
import ComponentItem from 'components/simple-feature/component-item';
import data from 'constants/simple-feature';
import styles from 'styles/simple-feature.module.css';

const OutfilFont = Outfit({
  subsets: ['latin'],
  weight: ['400', '600'],
});

export default () => (
  <div
    className={cx(styles.root, OutfilFont.className)}
    style={{
      backgroundImage: 'url("/images/simple-feature/Background_image.svg")',
    }}
  >
    <div className={styles.header}>
      <h2 className='font-semibold text-[2.5rem] leading-[3rem] text-center text-[#E5E7EB]'>
        Quality feedbacks for your SaaS products
      </h2>
      <span className='text-[#9DA3AE]'>The blocks & components you need</span>
    </div>

    <div className={styles['components-container']}>
      {data.map((component, index) => (
        <ComponentItem key={index} {...component} />
      ))}
    </div>
  </div>
);
