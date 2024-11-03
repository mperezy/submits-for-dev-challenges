import { Outfit } from 'next/font/google';
import NextImage from 'next/image';
import cx from 'classnames';
import Member from 'components/meet-the-team/member';
import data from 'constants/meet-the-team';
import styles from 'styles/meet-the-team.module.css';

const OutfitFont = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

export default () => (
  <div className={cx(OutfitFont.className, styles.root)}>
    <div className={styles.container}>
      <NextImage
        width='0'
        height='0'
        className={styles['container-decor']}
        src='/images/meet-the-team/Background_decor.svg'
        alt='Background decor'
      />

      <div className={styles.row}>
        <div className='col-span-2'>
          <div className='flex flex-col gap-y-4 p-8'>
            <h4 className='text-[#3662E3]'>Our team</h4>
            <h2 className='font-semibold text-4xl'>Meet the brain</h2>
            <span className='text-[#394150]'>
              We are proud to have them as part of our community and look forward to continuing to
              push the boundaries of what&#39;s possible in the world of digital art.
            </span>
          </div>
        </div>

        {data.slice(0, 2).map((member, index) => (
          <Member key={index} {...member} />
        ))}
      </div>

      <div className={styles.row}>
        <div className='flex items-end p-8'>
          <a className='flex gap-2 items-center text-[#394150]' href='#'>
            See all members{' '}
            <NextImage fill src='/images/meet-the-team/arrow up right.svg' alt='Link icon' />
          </a>
        </div>

        {data.slice(2, data.length).map((member, index) => (
          <Member key={index} {...member} />
        ))}
      </div>
    </div>
  </div>
);
