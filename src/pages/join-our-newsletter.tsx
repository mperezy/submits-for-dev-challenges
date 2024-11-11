import { Poppins } from 'next/font/google';
import NextImage from 'next/image';
import cx from 'classnames';
import styles from 'styles/join-our-newsletter.module.css';

const PoppinsFont = Poppins({
  subsets: ['latin'],
  weight: ['500', '400', '600'],
});

export default () => (
  <div className={cx(styles.root, PoppinsFont.className)}>
    <div className={styles.logo}>
      <NextImage fill src='/images/join-our-newsletter/logo.svg' alt='Logo' />
    </div>

    <h1 className={styles.heading}>Join our newsletter</h1>

    <span className={styles['sub-heading']}>
      Keep up with our latest collections, exclusive deals, and special offers! We introduce a new
      collection every week, so stay tuned to snag the hottest items just for you.
    </span>

    <div className={styles.card}>
      <input className={styles.input} type='email' placeholder='Enter your email address' />

      <button className={styles['subscribe-button']}>Subscribe now</button>

      <small className={styles['help-text']}>
        Your email is 100% confidential and won’t send you any spam.
      </small>
    </div>
  </div>
);
