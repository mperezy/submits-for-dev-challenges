import { Poppins } from 'next/font/google';
import NextImage from 'next/image';
import cx from 'classnames';
import ArticleItem from 'components/simple-article-listing/article-item';
import data from 'constants/simple-article-listing';
import styles from 'styles/simple-article-listing.module.css';

const PoppinsFont = Poppins({
  subsets: ['latin'],
  weight: ['500', '600'],
});

export default () => (
  <div className={cx(PoppinsFont.className, styles.root)}>
    <h2 className={styles.heading}>We release interesting articles about technology</h2>

    <NextImage
      src='/images/simple-article-listing/Seperator.svg'
      alt='Separator'
      width='190'
      height='10'
    />

    <div className={styles.articles}>
      {data.map((item, index) => (
        <ArticleItem key={index} {...item} />
      ))}
    </div>
  </div>
);
